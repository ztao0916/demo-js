# Skill: 通用原型生成与发布工作流

> **Skill ID**: `skill-design-prototype-workflow`  
> **版本**: v1.2.0  
> **最后更新**: 2026-05-06  
> **依赖**: 无

---

## 技能描述

根据产品草图、截图或文字描述生成规范化原型产物，并在用户明确发布时按项目 Profile 定义的发布协议发布当前原型。

本 Skill 是通用工作流 Skill。项目差异通过同目录下的 Profile 表达，不在 Skill 中写死具体项目样式。

---

## 触发条件

AI 应在以下情况下使用此技能：

- 用户使用触发词：`!生成原型`、`!发布原型`
- 用户提到关键词：`原型图`、`草图`、`截图生成原型`、`产品原型`、`发布原型`、`上传原型`、`rp.epean.cn`、`FTP`
- 用户给出产品草图、截图或文字描述，希望生成可预览原型
- 用户要求把当前原型发布到线上并返回链接

---

## 知识资源

### 通用工作流

- [通用原型生成与发布工作流](./docs/prototype-workflow.md)

### 项目 Profile

- [Trade-Web 原型 Profile](./profiles/trade-web.md)

### 当前项目样式规范

- [Trade-Web 产品样式规范](./specs/trade-web-style-spec.md)

---

## 命令语义

### `!生成原型`

职责：

- 根据产品草图、截图或描述生成本地原型。
- 输出 `prototype.html`。
- 使用浏览器截图生成 `prototype.png`。
- 生成 `prototype-notes.md`。
- 生成 `manifest.json`。

限制：

- 不上传。
- 不生成 Vue 业务代码。
- 不处理 API。
- 不要求产品提供后端字段、接口地址或请求结构。
- 默认覆盖当前 `{module}/{pageKey}` 下的本地文件。
- 只还原用户明确给出的页面区域，不补全截图之外的表格、弹窗或业务链路，除非用户明确要求。

### 继续修改现有原型

职责：

- 基于当前本地原型目录继续调整布局、样式、文案或局部区域。
- 复用当前 `module/pageKey` 和已有 `manifest.json`。
- 同步更新 `prototype.html`、`prototype.png`，必要时更新 `prototype-notes.md` 和 `manifest.json`。

限制：

- 不静默创建新的原型目录。
- 不重命名已有 `module/pageKey`，除非用户明确要求。
- 不顺手改动用户未提到的其它区域。

### `!发布原型`

职责：

- 读取当前本地原型目录。
- 读取 `manifest.json`。
- 如果 `manifest.publishTarget` 缺少远程目录名或 HTML 文件名，先提醒产品补充发布归档信息。
- 使用产品提供的远程目录名和 HTML 文件名拼接远程路径和公开 URL。
- 按 Profile 中的发布协议发布当前文件。
- 返回 HTML、PNG、Notes 的完整线上访问链接。
- 将完整线上访问链接写入 `manifest.publicUrls`。

限制：

- 不重新生成原型。
- 不修改 `prototype.html`。
- 不把远程 HTML 文件名固定为 `prototype.html`。
- 不在仓库中保存 FTP 账号密码。
- 首版只定义 FTP 发布步骤，实际 FTP 脚本或工具调用后续实现。

---

## 执行规则

1. 执行前先读取当前 bundle 的项目 Profile，例如 `./profiles/trade-web.md`。
2. 如果 Profile 中存在 `styleSpec`，生成原型时必须读取该规范文档并按规范执行。
3. 如果 Profile 不存在，生成原型时使用默认后台原型结构，发布时提示缺少 Profile。
4. `module` 和 `pageKey` 只允许英文、数字、横线、下划线。
5. `module/pageKey` 的确定优先级为：用户明确指定 > 当前原型目录下已有 `manifest.json` > 根据页面名称或页面意图生成标识。
6. 如果当前需求是继续修改已有原型，应复用当前目录并覆盖更新本地产物，不新建平行目录。
7. 基于截图或局部草图生成时，只还原用户明确提供的区域，不推断未展示区域。
8. 执行 `!发布原型` 时，如果缺少 `publishTarget.remoteDir` 或 `publishTarget.htmlFileName`，必须先向产品询问，不直接发布。
9. 除非用户明确执行 `!发布原型` 或说“发布/上传/生成线上链接”，否则只生成本地文件。
10. 发布配置缺失时，保留本地产物并提示缺少哪些环境变量。
11. 发布成功后必须展示完整公网链接，并回写 `manifest.publicUrls`。
12. 拼接公网链接时，如果目录名或文件名包含中文，应对 URL 路径片段进行 URL 编码。

---

## 本地输出规范

默认目录由 Profile 决定：

```text
{outputDir}/{module}/{pageKey}/
```

默认文件：

```text
prototype.html
prototype.png
prototype-notes.md
manifest.json
```

`manifest.json` 至少记录：

- `module`
- `pageKey`
- `title`
- `status`
- `localDir`
- `remoteDir`
- `files`
- `publicUrls`
- `publishTarget`
- `updatedAt`
- `publishedAt`

如果是继续修改现有原型，`localDir` 应保持不变，`updatedAt` 应更新为本次修改时间。

`publishTarget` 用于记录产品指定的远程归档位置。本地文件名保持固定，远程文件名由产品输入决定。

示例：

```json
{
  "publishTarget": {
    "remoteDir": "Joom原型",
    "htmlFileName": "在线商品.html",
    "pngFileName": "在线商品.png",
    "notesFileName": "在线商品说明.md",
    "manifestFileName": "manifest.json"
  }
}
```

如果产品只提供不带 `.html` 的 HTML 文件名，应自动补全 `.html`。`pngFileName` 默认使用 HTML 文件名去掉 `.html` 后加 `.png`，`notesFileName` 默认使用同名加 `说明.md`。

发布成功后，`publicUrls` 至少应写入：

```json
{
  "publicUrls": {
    "html": "https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.html",
    "png": "https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.png",
    "notes": "https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81%E8%AF%B4%E6%98%8E.md"
  }
}
```

公网链接必须使用 URL 编码后的目录名和文件名。FTP 远程目录和文件名仍使用产品输入的原始名称。

## 截图策略

生成 `prototype.png` 时按以下顺序回退：

1. 优先使用 in-app browser 打开本地 `prototype.html` 并截图。
2. 如果 in-app browser 不可用，使用浏览器自动化工具，例如 Playwright。
3. 如果自动化工具不可用，使用任意本地浏览器截图方案，只要不依赖项目开发服务器且能稳定产出 PNG。

无论使用哪种方式，都必须保证：

- 截图来源是当前本地 `prototype.html`
- 截图覆盖首屏或当前用户要求确认的关键区域
- 最终文件名仍为 `prototype.png`

---

## FTP 发布协议

首版 Skill 只定义发布协议，不实现 FTP 上传脚本。

发布时读取 Profile 中的环境变量名：

```text
FTP_HOST
FTP_PORT
FTP_USER
FTP_PASSWORD
FTP_SECURE
FTP_REMOTE_ROOT
RP_PUBLIC_BASE_URL
```

发布前交互：

1. 用户执行 `!发布原型`。
2. 读取当前或最近一次本地 `manifest.json`。
3. 如果 `manifest.publishTarget.remoteDir` 或 `manifest.publishTarget.htmlFileName` 缺失，暂停发布并提醒产品输入：

```text
发布前需要确认远程归档信息：

请提供：
- 目录名：用于线上归档，例如 Joom原型
- HTML 文件名：用于产品回看，例如 在线商品.html

你可以这样回复：
目录名：Joom原型
HTML文件名：在线商品.html
```

4. 产品补充后，校验并写入 `manifest.publishTarget`，再继续发布。

发布步骤：

1. 读取本地 `manifest.json`。
2. 检查默认文件是否存在。
3. 检查发布所需环境变量是否存在。
4. 连接 FTP。
5. 进入 `FTP_REMOTE_ROOT`。
6. 逐级创建 `publishTarget.remoteDir` 目录。
7. 上传本地 `prototype.html` 为远程 `publishTarget.htmlFileName`。
8. 上传本地 `prototype.png` 为远程 `publishTarget.pngFileName`。
9. 上传本地 `prototype-notes.md` 为远程 `publishTarget.notesFileName`。
10. 上传 `manifest.json` 为远程 `publishTarget.manifestFileName`。
11. 拼接 HTML、PNG、Notes 的完整公网链接，路径片段使用 URL 编码。
12. 将完整链接写入 `manifest.publicUrls.html`、`manifest.publicUrls.png`、`manifest.publicUrls.notes`。
13. 返回 HTML、PNG、Notes 的完整公网链接。

如果 FTP 配置缺失，应输出缺失项，不删除或修改本地产物。

---

## 回答格式

### 生成原型时

```text
原型已生成：
- HTML: output/prototype/{module}/{pageKey}/prototype.html
- PNG: output/prototype/{module}/{pageKey}/prototype.png
- Notes: output/prototype/{module}/{pageKey}/prototype-notes.md
- Manifest: output/prototype/{module}/{pageKey}/manifest.json

说明：
- 本次仅生成本地原型，未上传。
- 如需发布，请执行 !发布原型。
```

### 发布原型时

```text
原型已发布：
- HTML: {publicBaseUrl}/{remoteDir}/{htmlFileName}
- PNG: {publicBaseUrl}/{remoteDir}/{pngFileName}
- Notes: {publicBaseUrl}/{remoteDir}/{notesFileName}

远程目录：
{remoteRoot}/{remoteDir}/
```

注意：回答中展示的 URL 应使用已 URL 编码的完整公网链接。例如：

```text
原型已发布：
- HTML: https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.html
- PNG: https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.png
- Notes: https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81%E8%AF%B4%E6%98%8E.md

远程目录：
/Joom原型/
```

### 发布目标缺失时

```text
发布前需要确认远程归档信息：

请提供：
- 目录名：用于线上归档，例如 Joom原型
- HTML 文件名：用于产品回看，例如 在线商品.html

你可以这样回复：
目录名：Joom原型
HTML文件名：在线商品.html
```

### 发布配置缺失时

```text
无法发布原型，缺少以下配置：
- FTP_HOST
- FTP_USER
- FTP_PASSWORD

本地原型已保留：
output/prototype/{module}/{pageKey}/
```

---

## 检查清单

使用 `!生成原型` 后检查：

- [ ] 是否读取了当前项目 Profile
- [ ] 是否按项目样式规范生成
- [ ] 是否只还原了用户明确给出的区域
- [ ] 是否按优先级确定了 `module/pageKey`
- [ ] 是否生成 `prototype.html`
- [ ] 是否生成 `prototype.png`
- [ ] 是否生成 `prototype-notes.md`
- [ ] 是否生成 `manifest.json`
- [ ] 是否没有处理 API 或后端字段
- [ ] 是否没有上传

继续修改现有原型后检查：

- [ ] 是否复用了当前 `module/pageKey` 目录
- [ ] 是否只修改了用户要求调整的区域
- [ ] 是否更新了 `prototype.html`
- [ ] 是否重新生成了 `prototype.png`

使用 `!发布原型` 后检查：

- [ ] 是否读取了 manifest
- [ ] 是否没有重新生成原型
- [ ] 是否在缺少发布目标时提醒产品输入目录名和 HTML 文件名
- [ ] 是否把产品输入写入 `manifest.publishTarget`
- [ ] 是否检查了发布配置
- [ ] 是否按 Profile 拼接远程路径和公开链接
- [ ] 是否将本地 `prototype.html` 映射为产品指定的远程 HTML 文件名
- [ ] 是否展示 HTML、PNG、Notes 的完整公网链接
- [ ] 是否将完整公网链接写入 `manifest.publicUrls`
- [ ] 是否对公网链接中的中文目录名和文件名做了 URL 编码
- [ ] 是否在失败时保留本地产物

---

## 示例对话

### 示例 1: 生成原型

用户：

```text
!生成原型
这是一个店铺配置列表页，上面有平台、店铺、负责人、状态、创建时间查询；中间有新增、批量启用、导出；下面是表格，操作有编辑、停用、日志。
```

AI 响应：

```text
根据当前项目 prototype-profile，生成 Trade-Web 风格后台原型。
本次只生成本地 prototype.html / prototype.png / prototype-notes.md / manifest.json，不上传。
```

### 示例 2: 发布原型

用户：

```text
!发布原型
```

AI 响应：

```text
发布前需要确认远程归档信息：

请提供：
- 目录名：用于线上归档，例如 Joom原型
- HTML 文件名：用于产品回看，例如 在线商品.html
```

用户：

```text
目录名：Joom原型
HTML文件名：在线商品.html
```

AI 响应：

```text
已记录发布目标，读取当前 manifest，按 FTP 发布协议上传当前原型。
```

---

## 版本历史

- v1.2.0 (2026-05-06): 将 `!发布原型` 改为交互式发布目标确认流程，支持产品指定远程目录和 HTML 文件名
- v1.1.0 (2026-04-30): 补充原型迭代规则、截图回退链、局部还原边界和命名优先级
- v1.0.0 (2026-04-30): 初始版本，定义通用原型生成与 FTP 发布工作流
