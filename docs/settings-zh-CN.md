# pi 设置项中文对照

对应 pi 1.3.0 的 `/settings` 菜单。界面是英文写死的，这里给中文含义和对应的 `settings.json` 键名。

> 设置文件位置：`<agent-dir>/settings.json`，默认 `~/.pi/agent/settings.json`。本机因设置了 `PI_CODING_AGENT_DIR`，实际是 `I:\pi agent\settings.json`。

## 模型与思考

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `defaultProvider` | string | 自动 | 启动时用的服务商 |
| `defaultModel` | string | 自动 | 启动时用的模型 ID |
| `defaultThinkingLevel` | `off \| minimal \| low \| medium \| high \| xhigh \| max` | `medium` | 启动时的思考等级 |
| `modelThinkingLevels` | object | 无 | 按 `provider/modelId` 单独指定思考等级 |
| `thinkingBudgets` | object | 内置 | `minimal` / `low` / `medium` / `high` 的 token 预算 |
| `enabledModels` | string[] | 全部模型 | 启动选模型和循环切换的范围 |
| `hideThinkingBlock` | boolean | `false` | 隐藏回复中的思考块 |
| `showCacheMissNotices` | boolean | `false` | 显示缓存未命中的花费与恢复提示 |
| `cacheWarming` | `off \| streaming \| idle` | `streaming` | 缓存保鲜策略（仅全局生效） |

## 交互

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `steeringMode` | `all \| one-at-a-time` | `one-at-a-time` | 运行中插话的投递方式 |
| `followUpMode` | `all \| one-at-a-time` | `one-at-a-time` | 后续消息的投递方式 |
| `externalEditor` | string | `$VISUAL` → `$EDITOR` → 平台默认 | 外部编辑器命令（Windows 为记事本） |
| `doubleEscapeAction` | `tree \| fork \| none` | `tree` | 空输入框连按两次 Esc 的动作 |
| `treeFilterMode` | `default \| no-tools \| user-only \| labeled-only \| all` | `default` | `/tree` 打开时的默认过滤 |
| `defaultProjectTrust` | `ask \| always \| never` | `ask` | 项目信任兜底策略（仅全局设置可写） |

## 工具

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `defaultTools` | string[] | `read` `bash` `edit` `write` | 启动启用的工具。`+name` 追加，`-name` 移除，空数组关掉全部内置工具 |
| `codemode.mode` | `on \| only` | `on` | `codemode` 工具如何呈现工具清单 |
| `codemode.inlineBudget` | number | `3000` | `codemode` 描述里可用的工具声明 token 预算 |

内置工具：`read` `bash` `powershell` `edit` `write` `grep` `find` `ls`，另有 `codemode`、`tool_search`。

## 会话与上下文

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `sessionDir` | string | agent 会话目录 | 会话存放目录 |
| `sessionShareDestination` | `auto \| gist \| radius` | `auto` | `/share` 上传目标 |
| `compaction.enabled` | boolean | `true` | 是否自动压缩 |
| `compaction.reserveTokens` | number | `16384` | 给模型回复预留的 token |
| `compaction.keepRecentTokens` | number | `20000` | 不总结、原样保留的最近 token |
| `compaction.modelOverrides` | object | 无 | 按模型覆盖压缩参数 |
| `branchSummary.reserveTokens` | number | `16384` | 总结分支历史时预留的 token |
| `branchSummary.skipPrompt` | boolean | `false` | 跳过分支总结提示，直接不给总结 |

## 终端与显示

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `theme` | string | `system` | 主题名；`system` 跟随终端配色 |
| `quietStartup` | boolean \| `header` | `false` | 静默启动；`header` 只保留启动头 |
| `tuiMode` | `regular \| fullscreen` | `fullscreen` | 界面模式 |
| `fullscreenExitOutput` | `transcript \| resume-hint` | `transcript` | 退出全屏时打印什么 |
| `fullscreenScrollbar` | `auto \| always \| hidden` | `auto` | 全屏滚动条 |
| `fullscreenCopyOnSelect` | boolean | `true` | 全屏下选中即复制 |
| `fullscreenWheelScrollLines` | `auto` \| number | `auto` | 全屏滚轮一次滚几行（1–100） |
| `editorPaddingX` | number | `0` | 输入框左右内边距（0–3） |
| `outputPad` | `0 \| 1` | `1` | 消息/工具输出左右内边距 |
| `autocompleteMaxVisible` | number | `5` | 补全下拉条数（3–20） |
| `showHardwareCursor` | boolean | `false` | 用终端真实光标 |
| `terminal.showImages` | boolean | `true` | 内联显示图片 |
| `terminal.imageWidthCells` | number | `60` | 内联图片首选宽度（列） |
| `terminal.clearOnShrink` | boolean | `false` | 内容变少时清空行 |
| `terminal.showTerminalProgress` | boolean | `false` | 标签栏显示 OSC 9;4 进度 |
| `terminal.hyperlinks` | boolean \| `auto` | `auto` | 覆盖 OSC 8 超链接探测 |
| `terminal.images` | `kitty \| iterm2 \| auto \| false` | `auto` | 覆盖内联图片协议探测 |
| `terminal.trueColor` | boolean \| `auto` | `auto` | 覆盖真彩色探测 |
| `images.autoResize` | boolean | `true` | 发送前缩到 2000×2000 以内 |
| `images.blockImages` | boolean | `false` | 禁止发送图片 |
| `markdown.codeBlockIndent` | string | `"  "` | 代码块缩进前缀 |
| `markdown.mermaid` | `off \| final \| streaming` | `streaming` | Mermaid 渲染时机 |

## 网络与重试

| 设置项 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `transport` | `auto \| sse \| websocket \| websocket-cached` | `auto` | 首选传输协议 |
| `httpProxy` | string | 无 | HTTP 代理（仅全局设置可写） |
| `httpIdleTimeoutMs` | number | `300000` | HTTP 空闲超时，`0` 关闭 |
| `websocketConnectTimeoutMs` | number | `15000` | WebSocket 连接超时，`0` 关闭 |
| `retry.enabled` | boolean | `true` | 自动重试瞬时失败 |
| `retry.maxRetries` | number | `3` | 最大重试次数 |
| `retry.baseDelayMs` | number | `2000` | 指数退避的初始延迟 |

## `/settings` 菜单里的短名称

菜单上显示的是简化后的名字，对应关系如下：

| 菜单显示 | 中文 | 对应设置 |
|---|---|---|
| Auto-compact | 自动压缩 | `compaction.enabled` |
| Steering mode | 插话投递方式 | `steeringMode` |
| Follow-up mode | 后续消息投递方式 | `followUpMode` |
| Transport | 传输协议 | `transport` |
| Session share destination | 分享目标 | `sessionShareDestination` |
| HTTP idle timeout | HTTP 空闲超时 | `httpIdleTimeoutMs` |
| Cache warming | 缓存保鲜 | `cacheWarming` |
| Hide thinking | 隐藏思考块 | `hideThinkingBlock` |
| Mermaid diagrams | Mermaid 图 | `markdown.mermaid` |
| Cache miss notices | 缓存未命中提示 | `showCacheMissNotices` |
| Collapse changelog | 折叠更新日志 | — |
| Quiet startup | 静默启动 | `quietStartup` |
| Install telemetry | 安装遥测 | — |
| Default project trust | 默认项目信任 | `defaultProjectTrust` |
| Double-escape action | 双击 Esc 动作 | `doubleEscapeAction` |
| Tree filter mode | 会话树过滤 | `treeFilterMode` |
| Default thinking level per model | 每模型思考等级 | `modelThinkingLevels` |
| TUI mode | 界面模式 | `tuiMode` |
| Fullscreen exit output | 全屏退出输出 | `fullscreenExitOutput` |
| Fullscreen scrollbar | 全屏滚动条 | `fullscreenScrollbar` |
| Fullscreen copy on select | 全屏选中即复制 | `fullscreenCopyOnSelect` |
| Fullscreen wheel scrolling | 全屏滚轮行数 | `fullscreenWheelScrollLines` |
| Theme | 主题 | `theme` |
