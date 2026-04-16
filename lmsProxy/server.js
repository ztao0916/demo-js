const http = require("http");
const https = require("https");

const PORT = Number(process.env.PORT || 8788);
const LOCAL_PATH = "/api/platBase/aiBusinessConfig/list";
const TARGET_HOST = "test.epean.cn";
const TARGET_PATH = "/api/platBase/aiBusinessConfig/list";
const SESSION_COOKIE =
  process.env.SESSION_COOKIE || "SESSION=348c01ab-6dbb-42c0-b046-3fa2411c85fe";

function setCorsHeaders(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
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
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
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

  if (requestUrl.pathname !== LOCAL_PATH) {
    sendJson(res, 404, {
      message: "Not Found",
      availablePath: LOCAL_PATH,
    });
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, {
      message: "Only POST is supported for this proxy.",
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
        path: `${TARGET_PATH}${requestUrl.search}`,
        method: "POST",
        headers: upstreamHeaders,
        rejectUnauthorized: false,
      },
      (upstreamRes) => {
        const responseChunks = [];

        upstreamRes.on("data", (chunk) => responseChunks.push(chunk));
        upstreamRes.on("end", () => {
          const responseBody = Buffer.concat(responseChunks);
          let contentType =
            upstreamRes.headers["content-type"] || "application/json; charset=utf-8";

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
      }
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
  console.log(`Forwarding POST ${LOCAL_PATH} -> https://${TARGET_HOST}${TARGET_PATH}`);
});
