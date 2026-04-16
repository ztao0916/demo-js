# Aidge 视频编辑器联调问题记录

更新日期：2026-04-16

## 当前结论

- 当前联调链路已经调通成功。
- 已验证可以完成以下流程：
  - 商户侧后端接口返回 `appKey / signStr / timestamp / userId`
  - 商户侧前端拼接 iframe 链接并成功打开编辑器
  - `sourceUrl` 能默认带入视频
  - 宿主页能够处理 `generateConfirm`
  - 选择完整参数后，可以成功创建任务并返回任务结果

## 已确认成功的关键条件

- 宿主页使用 HTTPS 打开页面，否则会被 iframe 的 `frame-ancestors` 策略拦截。
- 创建任务前必须选择完整参数，尤其是“翻译语音”模式下必须选择 `AI配音`。
- 只有当请求体中真实带上 `voiceID` 时，任务创建才会成功。

## 1. 时好时坏的问题

现象：
- 相同流程有时成功，有时失败。
- 失败后重新操作一遍，可能恢复正常。

分析结果：
- 该问题主要与以下两类因素有关：
  1. 签名与时间戳是短时效参数，存在会话/验签时效问题。
  2. 表单状态不一定真正落到最终请求里，尤其是 AI 配音。

已确认的具体表现：
- 仅仅“打开了 AI 配音弹窗”不等于请求里真的带上了配音参数。
- 如果最终请求中没有 `voiceID`，下游接口会报参数绑定错误。
- 选择完 AI 配音并确认后，请求里会出现类似：

```json
"voiceID": 70
```

建议：
- 每次打开编辑器前重新获取签名，不复用旧 iframe 链接。
- 创建任务时检查 `generateConfirm` 事件中的 payload，确认是否包含 `voiceID`。
- 宿主页保留事件日志，便于区分“看起来选了”与“请求里真正带上了”。

## 2. 处理到最后返回 401，没有处理成功的问题

现象：
- 前面流程正常，但在后续接口调用阶段返回 `401` 或 `notLogin`。

分析结果：
- 该问题更像是 Aidge 侧的验签/会话时效问题，不是前端按钮点击失败。
- 商户侧后端可以控制“什么时候生成签名”，但不能控制 Aidge 的验签有效时长。
- 文档中明确要求 `timeStamp` 必须与签名时传入的值一致，且不能超前或滞后。

建议：
- 宿主页必须监听 iframe 的 `notLogin` 事件。
- 收到 `notLogin` 后，立即重新调用后端签名接口，生成新的 `ak / sign / userId / timeStamp`。
- 用新参数重新加载 iframe，再让用户继续操作。

## 3. 已定位的任务创建失败根因

失败时抓到的请求体：

```json
{
  "mode": "translate_audio_only",
  "videoData": "...",
  "sourceLanguage": "zh",
  "targetLanguage": "en",
  "fixedSpeechSpeed": false,
  "useEditor": true,
  "captions": "embed"
}
```

问题：
- 缺少 `voiceID`

失败结果：
- 下游 `invoke` 返回 `BindException`
- 编辑器会抛出 `taskCreateFailed`

成功时抓到的请求体：

```json
{
  "mode": "translate_audio_only",
  "videoData": "...",
  "sourceLanguage": "zh",
  "targetLanguage": "en",
  "fixedSpeechSpeed": false,
  "useEditor": true,
  "captions": "embed",
  "voiceID": 70
}
```

成功结果：
- 下游 `invoke` 返回 `success`
- `createTask` 成功
- 任务进入轮询状态并返回结果

## 4. 对当前问题的归因

- 不是基础接入错误，接入方向是正确的。
- 不是 `sourceUrl` 问题，视频默认带入已经验证正常。
- 当前问题主要归因于：
  - Aidge 侧验签/会话时效
  - 任务创建参数完整性，尤其是 `voiceID`
  - 宿主页对失败事件的提示还不够明确

## 后续建议

- 在宿主页里补充对 `taskCreateFailed` 的专门处理，直接展示失败原因。
- 保留 `generateConfirm` 的 payload 日志，重点观察：
  - `voiceID`
  - `sourceLanguage`
  - `targetLanguage`
  - `mode`
- 如用于正式接入，建议继续做稳定性验证：
  - 连续多次创建任务
  - 停留一段时间后再创建
  - 不同视频、不同语言、不同配音组合测试
