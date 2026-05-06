# 原型工作流项目 Profile

> 当前项目: Trade-Web
>
> 最后更新: 2026-04-30

---

## 1. 配置

```yaml
prototype:
  projectName: Trade-Web
  uiBaseline: Element Plus 后台组件体系
  styleSpec: ../specs/trade-web-style-spec.md
  outputDir: output/prototype
  defaultFiles:
    - prototype.html
    - prototype.png
    - prototype-notes.md
    - manifest.json

publish:
  mode: ftp
  remoteRootEnv: FTP_REMOTE_ROOT
  publicBaseUrlEnv: RP_PUBLIC_BASE_URL
  ftp:
    hostEnv: FTP_HOST
    portEnv: FTP_PORT
    userEnv: FTP_USER
    passwordEnv: FTP_PASSWORD
    secureEnv: FTP_SECURE

paths:
  localPattern: "{outputDir}/{module}/{pageKey}/"
  remotePattern: "{remoteRoot}/{remoteDir}/"
  publicPattern: "{publicBaseUrl}/{remoteDir}/{fileName}"
```

---

## 2. Trade-Web 原型基准

Trade-Web 原型以 Element Plus 后台组件体系为基础，并结合当前项目产品样式规范生成。

规范来源：

- `../specs/trade-web-style-spec.md`

核心页面结构：

- 查询区: `.search_card_new`
- 工具栏: `.tools_btn`
- 列表区: `.card_position.list_card` / `.list_card`
- 弹窗: `.el-dialog`
- 下拉菜单: `.el-dropdown-menu__item`
- 组合输入控件: `.form_left` / `.form_middle` / `.form_right`

核心尺寸：

- 全局圆角: `2px`
- 查询区控件: `32px`
- 工具栏按钮: `32px / 12px / 2px`
- 表格行内按钮: `24px / 12px / 2px`
- 弹窗表单控件: `32px`
- 弹窗按钮: `24px / 12px / 2px`
- 列表区 Tab: `40px`
- 基础字号: `13px`
- 小按钮字号: `12px`

---

## 3. 本地输出规则

默认输出目录：

```text
output/prototype/{module}/{pageKey}/
```

示例：

```text
output/prototype/config/store-config/
```

默认文件：

```text
prototype.html
prototype.png
prototype-notes.md
manifest.json
```

`!生成原型` 默认覆盖当前目录中的原型文件。

---

## 4. 发布规则

首版发布方式为 FTP。

发布所需环境变量：

```text
FTP_HOST
FTP_PORT
FTP_USER
FTP_PASSWORD
FTP_SECURE
FTP_REMOTE_ROOT
RP_PUBLIC_BASE_URL
```

说明：

- `FTP_SECURE` 可选，未配置时按普通 FTP 处理。
- `FTP_REMOTE_ROOT` 是 FTP 远程根目录。
- `RP_PUBLIC_BASE_URL` 是线上可访问根地址。
- 不在 Profile、Skill 或仓库中保存账号、密码、Token。

远程目录：

```text
{FTP_REMOTE_ROOT}/{remoteDir}/
```

公开访问：

```text
{RP_PUBLIC_BASE_URL}/{remoteDir}/{htmlFileName}
{RP_PUBLIC_BASE_URL}/{remoteDir}/{pngFileName}
```

示例：

```text
https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.html
https://rp.epean.cn/Joom%E5%8E%9F%E5%9E%8B/%E5%9C%A8%E7%BA%BF%E5%95%86%E5%93%81.png
```

发布目标由 `manifest.publishTarget` 记录。如果缺少 `remoteDir` 或 `htmlFileName`，执行 `!发布原型` 时应先提醒产品输入目录名和 HTML 文件名。

---

## 5. 使用边界

产品侧只负责原型草图、截图或描述，不需要提供 API、接口字段、后端结构或 Vue 实现细节。

当前 Profile 只定义原型生成与发布协议，不包含 FTP 上传脚本实现。
