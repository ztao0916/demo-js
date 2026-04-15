const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8787);
const SIGN_URL = "https://test.epean.cn/lms/product/createAidgeSignForAiVideo";
const INDEX_PATH = path.join(__dirname, "index.html");

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function sendHtml(res) {
  fs.readFile(INDEX_PATH, "utf8", (error, html) => {
    if (error) {
      sendJson(res, 500, { error: "读取页面失败", detail: error.message });
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    });
    res.end(html);
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

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
    sendHtml(res);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/sign") {
    handleSign(req, res);
    return;
  }

  sendJson(res, 404, { error: "Not Found" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Aidge local proxy is running at http://127.0.0.1:${PORT}`);
});
