const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8787);
const SIGN_URL = "https://test.epean.cn/lms/product/createAidgeSignForAiVideo";
const ROOT_DIR = path.resolve(__dirname, "..");
const DEFAULT_INDEX = path.join(__dirname, "index.html");
const TLS_KEY_PATH = path.join(__dirname, "devcert.key");
const TLS_CERT_PATH = path.join(__dirname, "devcert.crt");

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendJson(res, 500, { error: "读取文件失败", detail: error.message });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": CONTENT_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(content);
  });
}

function resolveStaticPath(pathname) {
  if (pathname === "/" || pathname === "/index.html") {
    return DEFAULT_INDEX;
  }

  const relativePath = pathname.replace(/^\/+/, "");
  const resolvedPath = path.resolve(ROOT_DIR, relativePath);
  if (!resolvedPath.startsWith(ROOT_DIR)) {
    return null;
  }

  return resolvedPath;
}

function serveStatic(req, res, pathname) {
  const resolvedPath = resolveStaticPath(pathname);
  if (!resolvedPath) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  fs.stat(resolvedPath, (error, stats) => {
    if (error) {
      sendJson(res, 404, { error: "Not Found" });
      return;
    }

    if (stats.isDirectory()) {
      const indexFile = path.join(resolvedPath, "index.html");
      fs.stat(indexFile, (indexError, indexStats) => {
        if (indexError || !indexStats.isFile()) {
          sendJson(res, 404, { error: "Not Found" });
          return;
        }
        sendFile(res, indexFile);
      });
      return;
    }

    sendFile(res, resolvedPath);
  });
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function handleSign(req, res) {
  try {
    const { cookie, userId } = await readJsonBody(req);

    if (!cookie) {
      sendJson(res, 400, { error: "缺少 cookie" });
      return;
    }

    if (!userId) {
      sendJson(res, 400, { error: "缺少 userId" });
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);

    const response = await fetch(SIGN_URL, {
      method: "POST",
      headers: {
        Cookie: cookie,
      },
      body: formData,
    });

    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (error) {
      sendJson(res, 502, {
        error: "签名接口返回了非 JSON",
        status: response.status,
        body: text,
      });
      return;
    }

    if (!response.ok) {
      sendJson(res, 502, {
        error: "签名接口请求失败",
        status: response.status,
        data,
      });
      return;
    }

    if (data.code !== "0000" || !data.data) {
      sendJson(res, 502, {
        error: "签名接口返回业务失败",
        data,
      });
      return;
    }

    sendJson(res, 200, data.data);
  } catch (error) {
    sendJson(res, 500, {
      error: "本地代理异常",
      detail: error.message,
    });
  }
}

const requestHandler = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/api/sign") {
    handleSign(req, res);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res, url.pathname);
    return;
  }

  sendJson(res, 404, { error: "Not Found" });
};

if (!fs.existsSync(TLS_KEY_PATH) || !fs.existsSync(TLS_CERT_PATH)) {
  throw new Error(`Missing TLS certificate files. Expected ${TLS_KEY_PATH} and ${TLS_CERT_PATH}`);
}

const tlsOptions = {
  key: fs.readFileSync(TLS_KEY_PATH),
  cert: fs.readFileSync(TLS_CERT_PATH),
};

const httpsServer = https.createServer(tlsOptions, requestHandler);

httpsServer.listen(PORT, "127.0.0.1", () => {
  console.log(`Aidge local proxy is running at https://localhost:${PORT}`);
});
