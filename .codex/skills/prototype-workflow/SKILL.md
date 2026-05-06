---
name: prototype-workflow
description: 根据产品草图、截图或文字描述生成本地原型产物，并且只在明确执行 !发布原型 时发布已确认的原型。适用于 !生成原型、!发布原型、产品原型 HTML/PNG 生成、按项目样式规范生成后台页面原型、基于现有原型继续微调，以及基于项目 Profile 的 FTP 原型发布流程。
---

# Prototype Workflow

Use this skill to generate and publish product prototypes from product-side input. Product input may be a sketch, screenshot, or text description. Do not require API details, backend fields, request schemas, or Vue implementation details.

## Commands

- `!生成原型`: Generate local prototype artifacts only. Do not upload or publish.
- `!发布原型`: Publish the current local prototype artifacts. Do not regenerate or modify the prototype before publishing.

## Required Reading

- Read [prototype-workflow.skill.md](prototype-workflow.skill.md) for the full command behavior.
- Read [docs/prototype-workflow.md](docs/prototype-workflow.md) for workflow boundaries and artifact contracts.
- Read the active project profile, such as [profiles/trade-web.md](profiles/trade-web.md), before generating or publishing.
- If the profile defines `styleSpec`, read that style spec before generating the prototype.

## Core Rules

1. Generate files under the profile output pattern, normally `output/prototype/{module}/{pageKey}/`.
2. Generate `prototype.html`, `prototype.png`, `prototype-notes.md`, and `manifest.json`.
3. Use `module` and `pageKey` values containing only letters, digits, hyphens, or underscores.
4. When the user asks to continue adjusting an existing prototype, reuse the current `module/pageKey` directory and update the existing local artifacts instead of silently creating a new directory.
5. Recreate only the page areas the user explicitly provides in the screenshot, sketch, or text. Do not infer hidden tables, dialogs, or business flows unless the user asks for them.
6. Resolve `module/pageKey` in this priority order: explicit user input, existing local manifest for the current prototype, then a sanitized identifier derived from the page title or page intent.
7. Generate `prototype.png` with a deterministic fallback chain. Prefer the in-app browser when available, then browser automation such as Playwright, then any other local browser screenshot method that does not require a dev server.
8. Treat `!发布原型` as an interactive publish flow. If `manifest.publishTarget.remoteDir` or `manifest.publishTarget.htmlFileName` is missing, ask the user for the remote directory name and HTML file name before uploading.
9. Keep local artifact names fixed, such as `prototype.html`, but upload them to the user-provided remote file names, such as `在线商品.html`.
10. Only upload after the user explicitly uses `!发布原型` or clearly asks to publish/upload/create an online link.
11. Never store FTP credentials, tokens, or passwords in the skill, profile, generated files, or repository. Local `.env.local` files may exist for user-owned environments and must not be committed.
12. If publish configuration is missing, keep local artifacts and report the missing environment variables.

## Current Bundle

This directory is self-contained for migration. Current Trade-Web references are bundled under:

- [profiles/trade-web.md](profiles/trade-web.md)
- [specs/trade-web-style-spec.md](specs/trade-web-style-spec.md)
