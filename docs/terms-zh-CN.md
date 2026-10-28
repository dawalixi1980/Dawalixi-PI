# pi 术语表

pi 的界面、日志、文档里反复出现的英文词，按中文习惯解释。

## 会话与历史

| 英文 | 中文 |
|---|---|
| Session | 会话：一次连续对话，存成一个 `.jsonl` 文件 |
| Turn | 轮次：你发一条消息到模型停止回复为一轮 |
| Entry | 条目：会话文件里的一条记录（消息、工具结果、摘要等） |
| Branch | 分支：会话树里的一条线 |
| Fork | 分叉：从历史某点另开一条对话线 |
| Clone | 克隆：在当前位置原样复制会话 |
| Compaction | 压缩：上下文快满时把旧内容总结成摘要，省 token |
| Branch summary | 分支总结：离开旧分支时给它写的一段摘要 |
| Transcript | 记录区：屏幕上滚动的对话历史 |
| Resume | 续接：恢复一个已保存的会话继续聊 |

## 交互

| 英文 | 中文 |
|---|---|
| Steering | 干预：模型干活时你插话，立刻改变它的方向 |
| Follow-up | 后续：模型干完后自动接着发的一条消息 |
| Queue | 队列：还没投递的消息排队处 |
| Thinking level | 思考等级：off / minimal / low / medium / high / xhigh / max |
| Thinking block | 思考块：模型回复里那段推理过程 |
| Interrupt | 中断：按 `escape` 停下当前操作 |
| Widget | 部件：输入框周围的常驻自定义内容 |
| Footer | 页脚：输入框下方的状态栏 |
| Overlay | 浮层：盖在对话上的临时面板 |
| Alt screen | 备用屏：全屏模式接管终端显示的那块画布 |

## 扩展体系

| 英文 | 中文 |
|---|---|
| Extension | 扩展：用 TypeScript 写的能力插件，可加命令、工具、UI |
| Skill | 技能：一段给模型看的操作说明，用 `/skill:名字` 触发 |
| Prompt template | 提示模板：预置提示词，用模板名直接调用 |
| Package | 包：打包扩展/技能/模板/主题的 npm 或 git 单位 |
| Theme | 主题：界面配色的 JSON 定义 |
| Renderer | 渲染器：决定某类内容在记录区怎么显示 |
| Hook | 钩子：某个事件发生时自动执行的回调 |
| Trust | 信任：项目是否允许加载 `.pi` 下的资源和包 |

## 模型与计费

| 英文 | 中文 |
|---|---|
| Provider | 服务商：提供模型 API 的来源（含本地 llama.cpp） |
| Model ID | 模型标识：如 `provider/model-id` |
| Scoped models | 范围模型：`ctrl+p` 循环时只在这些模型间轮换 |
| Context | 上下文：模型这次请求能看到的所有内容，有上限 |
| Token | 令牌：模型计费单位，约 0.75 个英文单词 |
| Prompt cache | 提示缓存：服务商侧复用上次的上下文，省时省钱 |
| Cache read / write | 缓存读 / 写：命中缓存的 token 是新算的几分之一价 |
| Cache miss | 缓存未命中：上下文变了导致重新计费 |
| Cache warming | 缓存保鲜：主动续期缓存，避免长时间闲置后失效 |
| Reserve tokens | 预留 token：留给模型回复的那部分窗口 |
| Cost | 花费：按 token 单价算出的金额 |

## 工具与执行

| 英文 | 中文 |
|---|---|
| Tool | 工具：模型可调用的动作，如 `read` / `bash` / `edit` / `write` |
| Tool call | 工具调用：模型发起的一次工具请求 |
| Tool result | 工具结果：工具返回给模型的内容 |
| Bash mode | Bash 模式：把输入框直接当 shell 用 |
| Managed shell | 受管 shell：扩展替你维持的一个持久 shell 会话 |
| Sandbox | 沙箱：限制工具能碰到的文件和命令 |
| Permission gate | 权限闸门：执行前弹确认的拦截层 |

## 平台

| 英文 | 中文 |
|---|---|
| Agent directory | 智能体目录：pi 存放配置、会话、扩展的根目录 |
| Project settings | 项目设置：`.pi/settings.json`，需项目信任后才生效 |
| Global settings | 全局设置：`<agent-dir>/settings.json` |
| Mode | 运行模式：`tui` 交互 / `rpc` 远程控制 / `json` / `print` 一次性输出 |
| Headless | 无界面：不给终端 UI，只输出结果 |
