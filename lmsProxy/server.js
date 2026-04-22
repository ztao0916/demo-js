const http = require("http");
const https = require("https");

const PORT = Number(process.env.PORT || 8788);
const TARGET_HOST = "test.epean.cn";
const SESSION_COOKIE =
  process.env.SESSION_COOKIE ||
  "JSESSIONID=982981684A9C1F9F5EAF0C0205571A1F;SESSION=348c01ab-6dbb-42c0-b046-3fa2411c85fe";
const ROUTES = {
  "/api/platBase/aiBusinessConfig/list": {
    method: "POST",
    targetPath: "/api/platBase/aiBusinessConfig/list",
  },
  "/api/aiBusinessConfig/batchUpdateSystemPromptByIds": {
    method: "PUT",
    targetPath: "/api/aiBusinessConfig/batchUpdateSystemPromptByIds",
  },
};
const ALLOWED_METHODS = `${Array.from(
  new Set(Object.values(ROUTES).map((route) => route.method).concat("OPTIONS")),
).join(", ")}`;

function setCorsHeaders(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", ALLOWED_METHODS);
  res.setHeader("Access-Control-Allow-Headers", "*");
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, data) {
  setCorsHeaders(res.req, res);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && requestUrl.pathname === "/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  const route = ROUTES[requestUrl.pathname];

  if (!route) {
    sendJson(res, 404, {
      message: "Not Found",
      availablePaths: Object.keys(ROUTES),
    });
    return;
  }

  if (req.method !== route.method) {
    sendJson(res, 405, {
      message: `Only ${route.method} is supported for this proxy.`,
    });
    return;
  }

  try {
    const body = await collectBody(req);
    const upstreamHeaders = {
      Cookie: SESSION_COOKIE,
      Accept: req.headers.accept || "*/*",
      "Content-Type": req.headers["content-type"] || "application/json",
      "Content-Length": body.length,
    };

    const upstreamReq = https.request(
      {
        hostname: TARGET_HOST,
        path: `${route.targetPath}${requestUrl.search}`,
        method: route.method,
        headers: upstreamHeaders,
        rejectUnauthorized: false,
      },
      (upstreamRes) => {
        const responseChunks = [];

        upstreamRes.on("data", (chunk) => responseChunks.push(chunk));
        upstreamRes.on("end", () => {
          const responseBody = Buffer.concat(responseChunks);
          let contentType =
            upstreamRes.headers["content-type"] ||
            "application/json; charset=utf-8";

          if (
            typeof contentType === "string" &&
            contentType.startsWith("application/json") &&
            !contentType.toLowerCase().includes("charset=")
          ) {
            contentType = `${contentType}; charset=utf-8`;
          }

          setCorsHeaders(req, res);
          res.writeHead(upstreamRes.statusCode || 502, {
            "Content-Type": contentType,
          });
          res.end(responseBody);
        });
      },
    );

    upstreamReq.on("error", (error) => {
      sendJson(res, 502, {
        message: "Upstream request failed",
        error: error.message,
      });
    });

    if (body.length > 0) {
      upstreamReq.write(body);
    }

    upstreamReq.end();
  } catch (error) {
    sendJson(res, 500, {
      message: "Proxy server failed",
      error: error.message,
    });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Proxy server is listening on http://127.0.0.1:${PORT}`);
  Object.entries(ROUTES).forEach(([localPath, route]) => {
    console.log(
      `Forwarding ${route.method} ${localPath} -> https://${TARGET_HOST}${route.targetPath}`,
    );
  });
});
