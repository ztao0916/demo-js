# Prototype Workflow Bundle

> 通用原型生成与发布工作流，可复制到其他项目的 `memory-bank/` 中使用。

---

## 目录结构

```text
prototype-workflow/
├── README.md
├── SKILL.md
├── prototype-workflow.skill.md
├── docs/
│   └── prototype-workflow.md
├── specs/
│   └── trade-web-style-spec.md
└── profiles/
    └── trade-web.md
```

## 文件说明

| 文件 | 说明 |
| --- | --- |
| `SKILL.md` | 正式 Codex Skill 入口，便于后续复制到 `$CODEX_HOME/skills` 后被识别 |
| `prototype-workflow.skill.md` | 通用 Skill，定义 `!生成原型` 和 `!发布原型` |
| `docs/prototype-workflow.md` | 通用工作流说明 |
| `profiles/trade-web.md` | 当前项目 Profile，定义 UI 基准、输出目录和发布方式 |
| `specs/trade-web-style-spec.md` | Trade-Web 产品样式规范副本 |

## 迁移方式

复制整个目录到目标项目：

```text
复制到目标项目的 memory-bank 目录下，并保持目录名为 prototype-workflow
```

然后在目标项目的 `memory-bank/registry/skills-index.json` 中注册：

```json
{
  "id": "skill-design-prototype-workflow",
  "name": "通用原型生成与发布工作流",
  "category": "design",
  "description": "根据产品草图、截图或描述生成本地原型，并按项目 Profile 定义发布协议",
  "keywords": ["原型图", "草图", "截图生成原型", "产品原型", "发布原型", "上传原型", "FTP"],
  "file": "prototype-workflow/prototype-workflow.skill.md",
  "dependencies": [],
  "triggers": ["!生成原型", "!发布原型"],
  "priority": 9
}
```

## 项目适配

迁移到其他项目时，只需要替换或新增 `profiles/{project}.md`：

- `prototype.projectName`
- `prototype.uiBaseline`
- `prototype.styleSpec`
- `prototype.outputDir`
- `publish.mode`
- `paths.localPattern`
- `paths.remotePattern`
- `paths.publicPattern`

账号、密码、Token 不写入 Profile 或仓库。
