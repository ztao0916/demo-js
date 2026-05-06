# 通用原型生成与发布工作流

> 用于把产品草图、截图或文字描述转换为可预览、可发布的原型产物。
>
> 最后更新: 2026-04-30

---

## 1. 目标

本工作流定义一套可复制到其他项目的原型生成与发布流程。它不绑定 Trade-Web 代码实现，只通过项目 Profile 读取当前项目的 UI 基准、样式规范、输出目录和发布方式。

首版只定义两个命令：

| 命令 | 职责 |
| --- | --- |
| `!生成原型` | 根据产品草图、截图或描述生成本地原型产物，不上传 |
| `!发布原型` | 交互式确认远程目录和 HTML 文件名后，发布当前本地原型产物，不重新生成原型 |

对于“继续把某一行调窄一点”“保持这个样式但改间距”这类请求，应视为对当前本地原型的继续修改，而不是一次新的原型生成任务。

---

## 2. 角色边界

产品侧只需要提供原型信息：

- 页面名称
- 页面类型
- 草图、截图或文字描述
- 查询条件
- 操作按钮
- 表格列
- 行内操作
- 弹窗内容
- 状态展示
- 必要交互说明

产品侧不需要提供：

- API 地址
- 请求方式
- 后端字段名
- 接口入参
- 接口返回结构
- Vue / Router / Store / 权限编码

---

## 3. 项目 Profile

每个项目应在本 bundle 的 `profiles/` 目录中提供项目 Profile。工作流从 Profile 中读取：

- 项目名称
- UI 设计基准
- 项目样式规范文档
- 本地输出目录
- 默认产物文件
- 发布方式
- 发布路径拼接规则
- 发布所需环境变量名称

如果当前项目没有 Profile，生成原型时使用默认后台原型结构；发布原型时不执行上传，只提示缺少 Profile。

---

## 4. `!生成原型`

### 输入

支持以下输入形式：

- 产品草图
- 页面截图
- 手写结构说明
- 旧页面截图和改造说明
- 文字需求描述

### 输出

默认输出到：

```text
{outputDir}/{module}/{pageKey}/
```

默认产物：

```text
prototype.html
prototype.png
prototype-notes.md
manifest.json
```

### 行为规则

- 默认覆盖当前 `{module}/{pageKey}` 下的本地文件。
- 如果当前需求是继续修改已有原型，应复用当前目录和已有 `manifest.json`，不要静默创建新目录。
- 只生成本地原型，不上传。
- 不生成 Vue 业务代码。
- 不处理 API。
- 不要求产品补充后端字段或接口信息。
- 必须按当前项目 Profile 和样式规范生成。
- 只还原用户明确给出的页面区域，不补全截图之外的表格、弹窗或业务链路，除非用户明确要求。
- 如果产品描述缺少 `module` 或 `pageKey`，按以下优先级确定：
  1. 用户明确指定的 `module/pageKey`
  2. 当前原型目录或最近一次原型的 `manifest.json`
  3. 根据页面名称或页面意图生成英文、数字、横线、下划线组成的标识

---

## 5. `!发布原型`

### 输入

发布命令默认读取：

```text
{outputDir}/{module}/{pageKey}/manifest.json
```

如果用户没有提供 `module` 和 `pageKey`，应优先使用最近一次生成原型的 manifest。

### 输出

发布成功后返回：

```text
产品指定 HTML 文件名对应的线上链接
同名 PNG 线上链接
prototype-notes.md 线上链接（如果存在）
```

### 行为规则

- 只上传当前本地产物。
- 不重新生成原型。
- 不修改 `prototype.html`。
- 不把远程 HTML 文件名固定为 `prototype.html`。
- 如果 `manifest.publishTarget` 缺少远程目录名或 HTML 文件名，先提醒产品补充发布归档信息。
- 产品补充远程目录名和 HTML 文件名后，写入 `manifest.publishTarget` 再发布。
- 发布前检查默认产物是否存在。
- 发布配置缺失时，保留本地产物并提示缺少哪些环境变量。
- 首版只定义 FTP 发布协议，实际 FTP 脚本或工具调用后续实现。

---

## 6. 本地文件规范

### `prototype.html`

用于浏览器预览的原型页面。

要求：

- 可直接通过浏览器打开。
- 样式内联或相对路径可用。
- 不依赖项目开发服务器。
- 不包含真实业务接口调用。

### `prototype.png`

由 `prototype.html` 截图生成。

要求：

- 用于产品快速预览和评审。
- 截图应覆盖完整首屏或关键交互状态。
- 截图必须来自当前本地 `prototype.html`。
- 最终文件名固定为 `prototype.png`。

截图回退顺序：

1. 优先使用 in-app browser 打开本地 `prototype.html` 并截图。
2. 如果 in-app browser 不可用，使用浏览器自动化工具，例如 Playwright。
3. 如果自动化工具不可用，使用任意本地浏览器截图方案，只要不依赖项目开发服务器且能稳定产出 PNG。

### `prototype-notes.md`

记录产品与前端可读的结构说明。

建议包含：

- 页面类型
- 页面结构
- 查询区字段
- 工具栏按钮
- 表格列
- 行内操作
- 弹窗结构
- 交互说明
- 未确认问题

### `manifest.json`

记录原型元信息和发布信息。

建议结构：

```json
{
  "module": "config",
  "pageKey": "store-config",
  "title": "店铺配置原型",
  "status": "draft",
  "localDir": "output/prototype/config/store-config",
  "remoteDir": "/Joom原型/",
  "files": [
    "prototype.html",
    "prototype.png",
    "prototype-notes.md",
    "manifest.json"
  ],
  "publishTarget": {
    "remoteDir": "Joom原型",
    "htmlFileName": "在线商品.html",
    "pngFileName": "在线商品.png",
    "notesFileName": "在线商品说明.md",
    "manifestFileName": "manifest.json"
  },
  "publicUrls": {
    "html": "https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.html",
    "png": "https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.png"
  },
  "updatedAt": "2026-04-30T10:00:00+08:00",
  "publishedAt": null
}
```

发布成功后：

- `status` 更新为 `published`
- `publishedAt` 更新为发布时间
- `publicUrls` 使用实际发布链接
- `publishTarget` 保留产品指定的远程目录和文件名

---

## 7. 发布协议

首版发布方式为 FTP 协议定义，不实现上传脚本。

发布根路径由 Profile 拼接：

```text
remotePattern: "{remoteRoot}/{remoteDir}/"
publicPattern: "{publicBaseUrl}/{remoteDir}/{fileName}"
```

`remoteDir` 和 `fileName` 来自 `manifest.publishTarget`。本地文件名保持 `prototype.html`、`prototype.png` 等固定名称，远程文件名使用产品输入。

发布前交互：

1. 用户执行 `!发布原型`。
2. 工作流读取当前或最近一次本地 `manifest.json`。
3. 如果缺少 `publishTarget.remoteDir` 或 `publishTarget.htmlFileName`，暂停发布并提示产品补充：

```text
发布前需要确认远程归档信息：

请提供：
- 目录名：用于线上归档，例如 Joom原型
- HTML 文件名：用于产品回看，例如 在线商品.html

你可以这样回复：
目录名：Joom原型
HTML文件名：在线商品.html
```

4. 产品补充后，校验名称、补全默认派生文件名，写入 `manifest.publishTarget`。
5. 继续 FTP 上传。

FTP 发布步骤：

1. 读取 Profile 发布配置。
2. 读取发布所需环境变量。
3. 读取本地 manifest。
4. 连接 FTP。
5. 进入远程根目录。
6. 逐级创建 `publishTarget.remoteDir` 目录。
7. 上传本地 `prototype.html` 为远程 `publishTarget.htmlFileName`。
8. 上传本地 `prototype.png` 为远程 `publishTarget.pngFileName`。
9. 上传本地 `prototype-notes.md` 为远程 `publishTarget.notesFileName`。
10. 上传 `manifest.json` 为远程 `publishTarget.manifestFileName`。
11. 返回公开访问链接。

文件名派生规则：

- `htmlFileName` 没有 `.html` 后缀时自动补全。
- `pngFileName` 默认使用 HTML 基名加 `.png`。
- `notesFileName` 默认使用 HTML 基名加 `说明.md`。
- `manifestFileName` 默认使用 `manifest.json`。

---

## 8. 命名规则

`module` 和 `pageKey` 应只使用：

```text
a-z
A-Z
0-9
-
_
```

不建议使用中文目录名、空格或特殊符号。

示例：

```text
config/store-config
shopee/presale-config
warehouse/package-type-setting
```

优先级：

1. 用户明确指定
2. 继续修改现有原型时复用当前目录和 `manifest.json`
3. 根据页面名称或页面意图自动生成

发布目标命名规则：

- `remoteDir` 和远程文件名允许中文，便于产品回看。
- `remoteDir` 表示单级归档目录，不应包含 `/` 或 `\`。
- `htmlFileName` 表示单个 HTML 文件名，不应包含 `/` 或 `\`。
- 禁止字符：`\ / : * ? " < > |`
- HTML 文件名缺少 `.html` 后缀时自动补全。

---

## 9. 失败处理

生成失败：

- 不删除已有原型文件。
- 说明失败原因。
- 保留可用的上一次本地产物。

发布失败：

- 不删除本地产物。
- 不标记为 `published`。
- 提示缺少的环境变量或上传失败原因。
- 允许用户修复配置后重新执行 `!发布原型`。

发布目标缺失：

- 不连接 FTP。
- 不修改远程文件。
- 提醒产品提供目录名和 HTML 文件名。

继续修改失败：

- 不删除已有原型文件。
- 说明失败原因。
- 保留最后一次可用的 `prototype.html` 和 `prototype.png`。

---

## 10. 设计原则

- 生成与发布分离。
- 默认本地生成，明确发布才上传。
- 产品不需要理解 API 或前端工程细节。
- 项目差异通过 Profile 表达。
- 通用 Skill 不写死具体项目样式。
- 账号、密码、Token 不写入仓库。
