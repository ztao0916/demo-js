const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");

const PORT = 8443;
const BACKEND_HOST = "127.0.0.1";
const BACKEND_PORT = 8681;
const SIGN_URL = "https://test.epean.cn/lms/product/createAidgeSignForAiVideo";
const SESSION_COOKIE = "SESSION=348c01ab-6dbb-42c0-b046-3fa2411c85fe";
const STATIC_PREFIX = "/lms/static";
const STATIC_ROOT = path.resolve(
  "/Users/epean/Desktop/qiankun/trade_cloud/trade-module/multi_trade/lms/src/main/webapp/static/",
);
const TLS_KEY_PATH = path.join(__dirname, "devcert.key");
const TLS_CERT_PATH = path.join(__dirname, "devcert.crt");

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

function setApiCorsHeaders(req, res) {
  const origin = req.headers.origin || "*";
  const requestHeaders =
    req.headers["access-control-request-headers"] || "Content-Type, X-Requested-With";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", requestHeaders);
  res.setHeader("Access-Control-Max-Age", "600");
  res.setHeader("Vary", "Origin, Access-Control-Request-Headers");
}

function sendJson(req, res, statusCode, payload, extraHeaders = {}) {
  if (new URL(req.url, "https://localhost").pathname === "/api/sign") {
    setApiCorsHeaders(req, res);
  }

  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...extraHeaders,
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function readJsonBody(req) {
  const rawBody = await readBody(req);
  if (rawBody.length === 0) {
    return {};
  }

  try {
    return JSON.parse(rawBody.toString("utf8"));
  } catch (error) {
    const parseError = new Error("Invalid JSON body");
    parseError.cause = error;
    throw parseError;
  }
}

function getStaticPath(pathname) {
  if (!(pathname === STATIC_PREFIX || pathname.startsWith(`${STATIC_PREFIX}/`))) {
    return null;
  }

  let relativePath;
  try {
    relativePath = decodeURIComponent(pathname.slice(STATIC_PREFIX.length));
  } catch (error) {
    return { error: 400, message: "Invalid static path" };
  }

  const normalized = relativePath.replace(/^\/+/, "");
  const resolvedPath = path.resolve(STATIC_ROOT, normalized);
  const allowedRoot = `${STATIC_ROOT}${path.sep}`;

  if (resolvedPath !== STATIC_ROOT && !resolvedPath.startsWith(allowedRoot)) {
    return { error: 403, message: "Forbidden" };
  }

  return { filePath: resolvedPath };
}

function serveStaticFile(req, res, pathname) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(req, res, 405, { error: "Method Not Allowed" }, { Allow: "GET, HEAD" });
    return;
  }

  const resolved = getStaticPath(pathname);
  if (!resolved) {
    sendJson(req, res, 404, { error: "Not Found" });
    return;
  }

  if (resolved.error) {
    sendJson(req, res, resolved.error, { error: resolved.message });
    return;
  }

  fs.stat(resolved.filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      sendJson(req, res, 404, { error: "Not Found" });
      return;
    }

    const ext = path.extname(resolved.filePath).toLowerCase();
    const contentType = CONTENT_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
      "Cache-Control": "no-store",
    });

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    const stream = fs.createReadStream(resolved.filePath);
    stream.on("error", (streamError) => {
      if (!res.headersSent) {
        sendJson(req, res, 500, { error: "Failed to read static file", detail: streamError.message });
      } else {
        res.destroy(streamError);
      }
    });
    stream.pipe(res);
  });
}

function buildForwardedFor(req) {
  const remoteAddress = req.socket.remoteAddress || "";
  const existing = req.headers["x-forwarded-for"];
  return existing ? `${existing}, ${remoteAddress}` : remoteAddress;
}

function buildProxyHeaders(req, { includeUpgrade = false } = {}) {
  const headers = {};

  Object.entries(req.headers).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }

    if (!includeUpgrade && HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      return;
    }

    headers[key] = value;
  });

  headers.host = req.headers.host || `localhost:${PORT}`;
  headers["x-forwarded-for"] = buildForwardedFor(req);
  headers["x-forwarded-host"] = req.headers.host || `localhost:${PORT}`;
  headers["x-forwarded-proto"] = "https";

  return headers;
}

function rewriteLocation(location) {
  if (!location) {
    return location;
  }

  return location
    .replace(/^http:\/\/127\.0\.0\.1:8681\b/i, `https://localhost:${PORT}`)
    .replace(/^http:\/\/localhost:8681\b/i, `https://localhost:${PORT}`)
    .replace(/^http:\/\/127\.0\.0\.1:8443\b/i, `https://localhost:${PORT}`)
    .replace(/^http:\/\/localhost:8443\b/i, `https://localhost:${PORT}`);
}

function writeProxyResponseHeaders(res, upstreamRes) {
  const headers = {};

  Object.entries(upstreamRes.headers).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }

    if (HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      return;
    }

    headers[key] = key.toLowerCase() === "location" ? rewriteLocation(value) : value;
  });

  res.writeHead(upstreamRes.statusCode || 502, headers);
}

function proxyHttpRequest(req, res) {
  const upstreamReq = http.request(
    {
      host: BACKEND_HOST,
      port: BACKEND_PORT,
      method: req.method,
      path: req.url,
      headers: buildProxyHeaders(req),
    },
    (upstreamRes) => {
      writeProxyResponseHeaders(res, upstreamRes);
      upstreamRes.pipe(res);
    },
  );

  upstreamReq.on("error", (error) => {
    sendJson(req, res, 502, {
      error: "Backend proxy failed",
      detail: error.message,
    });
  });

  req.pipe(upstreamReq);
}

async function handleSign(req, res) {
  try {
    const body = await readJsonBody(req);
    const userId = typeof body.userId === "string" ? body.userId.trim() : "";

    if (!userId) {
      sendJson(req, res, 400, { error: "Missing userId" });
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);

    const upstreamRes = await fetch(SIGN_URL, {
      method: "POST",
      headers: {
        Cookie: SESSION_COOKIE,
      },
      body: formData,
    });

    const responseText = await upstreamRes.text();
    let data;

    try {
      data = JSON.parse(responseText);
    } catch (error) {
      sendJson(req, res, 502, {
        error: "Sign API returned non-JSON",
        status: upstreamRes.status,
        body: responseText,
      });
      return;
    }

    if (!upstreamRes.ok) {
      sendJson(req, res, 502, {
        error: "Sign API request failed",
        status: upstreamRes.status,
        data,
      });
      return;
    }

    if (data.code !== "0000" || !data.data) {
      sendJson(req, res, 502, {
        error: "Sign API business response failed",
        data,
      });
      return;
    }

    sendJson(req, res, 200, data.data);
  } catch (error) {
    const statusCode = error.message === "Invalid JSON body" ? 400 : 500;
    sendJson(req, res, statusCode, {
      error: statusCode === 400 ? "Invalid JSON body" : "Local gateway failed",
      detail: error.message,
    });
  }
}

function writeUpgradeHeaders(clientSocket, upstreamRes) {
  const statusCode = upstreamRes.statusCode || 101;
  const statusMessage = upstreamRes.statusMessage || "Switching Protocols";
  let response = `HTTP/1.1 ${statusCode} ${statusMessage}\r\n`;

  Object.entries(upstreamRes.headers).forEach(([key, value]) => {
    if (value === undefined || HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        response += `${key}: ${item}\r\n`;
      });
      return;
    }

    response += `${key}: ${value}\r\n`;
  });

  response += "Connection: Upgrade\r\n";
  if (upstreamRes.headers.upgrade) {
    response += `Upgrade: ${upstreamRes.headers.upgrade}\r\n`;
  }
  response += "\r\n";
  clientSocket.write(response);
}

function handleUpgrade(req, socket, head) {
  const pathname = new URL(req.url, `https://${req.headers.host || "localhost"}`).pathname;
  if (pathname === "/api/sign" || pathname === STATIC_PREFIX || pathname.startsWith(`${STATIC_PREFIX}/`)) {
    socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
    socket.destroy();
    return;
  }

  const upstreamReq = http.request({
    host: BACKEND_HOST,
    port: BACKEND_PORT,
    method: req.method,
    path: req.url,
    headers: buildProxyHeaders(req, { includeUpgrade: true }),
  });

  upstreamReq.on("upgrade", (upstreamRes, upstreamSocket, upstreamHead) => {
    writeUpgradeHeaders(socket, upstreamRes);

    if (head.length > 0) {
      upstreamSocket.write(head);
    }
    if (upstreamHead.length > 0) {
      socket.write(upstreamHead);
    }

    upstreamSocket.pipe(socket);
    socket.pipe(upstreamSocket);
  });

  upstreamReq.on("response", (upstreamRes) => {
    const responseText =
      `HTTP/1.1 ${upstreamRes.statusCode || 502} ${upstreamRes.statusMessage || "Bad Gateway"}\r\n` +
      "Connection: close\r\n\r\n";
    socket.write(responseText);
    socket.destroy();
    upstreamRes.resume();
  });

  upstreamReq.on("error", () => {
    socket.write("HTTP/1.1 502 Bad Gateway\r\nConnection: close\r\n\r\n");
    socket.destroy();
  });

  upstreamReq.end();
}

function requestHandler(req, res) {
  const requestUrl = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const { pathname } = requestUrl;

  if (pathname === "/api/sign") {
    if (req.method === "OPTIONS") {
      setApiCorsHeaders(req, res);
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method === "POST") {
      handleSign(req, res);
      return;
    }

    sendJson(req, res, 405, { error: "Method Not Allowed" }, { Allow: "POST, OPTIONS" });
    return;
  }

  if (pathname === STATIC_PREFIX || pathname.startsWith(`${STATIC_PREFIX}/`)) {
    serveStaticFile(req, res, pathname);
    return;
  }

  proxyHttpRequest(req, res);
}

if (!fs.existsSync(TLS_KEY_PATH) || !fs.existsSync(TLS_CERT_PATH)) {
  throw new Error(`Missing TLS certificate files. Expected ${TLS_KEY_PATH} and ${TLS_CERT_PATH}`);
}

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(TLS_KEY_PATH),
    cert: fs.readFileSync(TLS_CERT_PATH),
  },
  requestHandler,
);

httpsServer.on("upgrade", handleUpgrade);

httpsServer.listen(PORT, "127.0.0.1", () => {
  console.log(`Local HTTPS gateway is running at https://localhost:${PORT}`);
  console.log(`Proxy target: http://${BACKEND_HOST}:${BACKEND_PORT}`);
  console.log(`Static alias: ${STATIC_PREFIX} -> ${STATIC_ROOT}`);
});
