/**
 * pi 中文对照扩展（pi-zh-cn）
 *
 * pi 的终端界面没有 i18n 层，所有文案在代码里写死为英文，
 * 无法运行时切换语言。本扩展提供人工翻译的对照表：
 * 用 /zh 打开菜单，按分类查看设置项、斜杠命令、快捷键和术语的中文含义。
 *
 * 对照数据来源：pi 1.3.0 官方文档
 *   docs/settings.md、docs/slash-commands.md、docs/keybindings.md
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/** 一条对照项 */
type Row = { en: string; zh: string; extra?: string };
/** 分组标题行 */
type Section = { section: string };
type Item = Row | Section;

function isSection(item: Item): item is Section {
	return "section" in item;
}

/** /settings 菜单项 */
const SETTINGS: Item[] = [
	{ en: "Auto-compact", zh: "上下文过大时自动压缩", extra: "默认 true" },
	{ en: "Show images", zh: "在终端内联显示图片", extra: "默认 true" },
	{ en: "Image width", zh: "内联图片宽度（终端列数）", extra: "默认 60" },
	{ en: "Auto-resize images", zh: "发送前把大图缩到 2000×2000 以内", extra: "默认 true" },
	{ en: "Block images", zh: "禁止把图片发给模型", extra: "默认 false" },
	{
		en: "Steering mode",
		zh: "运行中插话的投递方式：one-at-a-time 逐条投递并等回复；all 一次全投",
		extra: "默认 one-at-a-time",
	},
	{
		en: "Follow-up mode",
		zh: "后续消息的投递方式：one-at-a-time 逐条；all 一次全投",
		extra: "默认 one-at-a-time",
	},
	{
		en: "Transport",
		zh: "与服务商通信的协议：sse / websocket / websocket-cached / auto",
		extra: "默认 auto",
	},
	{
		en: "Session share destination",
		zh: "/share 上传到哪：auto 已登录 Radius 就用 Radius 否则 GitHub Gist",
		extra: "默认 auto",
	},
	{
		en: "HTTP idle timeout",
		zh: "等待 HTTP 头/响应体的空闲上限，本地模型慢就调大，0 关闭",
		extra: "默认 300000ms",
	},
	{
		en: "Cache warming",
		zh: "缓存保鲜：off 关闭；streaming 运行中；idle 空闲时也保",
		extra: "默认 streaming",
	},
	{ en: "Skill commands", zh: "把技能注册成 /skill:名字 命令", extra: "默认 true" },
	{
		en: "Show hardware cursor",
		zh: "用终端真实光标代替 pi 自绘光标（中文输入法定位更准）",
		extra: "默认 false",
	},
	{ en: "Editor padding", zh: "输入框左右内边距（0–3）", extra: "默认 0" },
	{ en: "Output padding", zh: "消息/工具输出/命令输出左右内边距（0–1）", extra: "默认 1" },
	{ en: "Autocomplete max items", zh: "补全下拉最多显示几条（3–20）", extra: "默认 5" },
	{ en: "Clear on shrink", zh: "内容变少时清掉空行（可能闪屏）", extra: "默认 false" },
	{
		en: "Terminal progress",
		zh: "在终端标签栏显示 OSC 9;4 进度条",
		extra: "默认 false",
	},
	{ en: "Hide thinking", zh: "隐藏回复里的思考块", extra: "默认 false" },
	{
		en: "Mermaid diagrams",
		zh: "把 Mermaid 代码块渲染成字符图：off / final / streaming",
		extra: "默认 streaming",
	},
	{
		en: "Cache miss notices",
		zh: "提示缓存未命中带来的花费与恢复诊断",
		extra: "默认 false",
	},
	{ en: "Collapse changelog", zh: "更新后只显示精简版更新日志", extra: "默认 false" },
	{
		en: "Quiet startup",
		zh: "静默启动：true 隐藏启动头和资源清单；header 只保留启动头",
		extra: "默认 false",
	},
	{
		en: "Install telemetry",
		zh: "检测到更新后发一个匿名版本 ping",
		extra: "默认 false",
	},
	{
		en: "Default project trust",
		zh: "没有其他信任决定时的兜底策略：ask 询问 / always 总是 / never 从不",
		extra: "默认 ask",
	},
	{
		en: "Double-escape action",
		zh: "空输入框连按两次 Esc 的动作：tree 会话树 / fork 分叉 / none 无",
		extra: "默认 tree",
	},
	{
		en: "Tree filter mode",
		zh: "/tree 打开时的默认过滤：default / no-tools / user-only / labeled-only / all",
		extra: "默认 default",
	},
	{ en: "Warnings", zh: "逐项开关各类警告", extra: "默认 configure" },
	{
		en: "Default thinking level per model",
		zh: "给单个模型单独设默认思考等级",
		extra: "默认无",
	},
	{
		en: "TUI mode",
		zh: "界面模式：regular 用终端原生回滚；fullscreen 全屏接管",
		extra: "默认 fullscreen",
	},
	{
		en: "Fullscreen exit output",
		zh: "退出全屏时打印完整记录还是只给续接提示",
		extra: "默认 transcript",
	},
	{
		en: "Fullscreen scrollbar",
		zh: "全屏滚动条：auto / always / hidden",
		extra: "默认 auto",
	},
	{ en: "Fullscreen copy on select", zh: "全屏下选中即复制", extra: "默认 true" },
	{ en: "Fullscreen wheel scrolling", zh: "全屏滚轮一次滚几行", extra: "默认 auto" },
	{
		en: "Theme",
		zh: "配色主题：system 跟随终端；也可选 dark / light / 自定义",
		extra: "默认 system",
	},
];

/** 内置斜杠命令 */
const COMMANDS: Item[] = [
	{ section: "模型与设置" },
	{ en: "/settings", zh: "打开设置菜单" },
	{ en: "/model [provider/model]", zh: "选择模型" },
	{ en: "/thinking [level]", zh: "设置思考等级" },
	{ en: "/scoped-models", zh: "配置交互式循环切换的模型范围" },
	{ en: "/login [provider]", zh: "添加服务商登录/密钥" },
	{ en: "/logout", zh: "移除服务商登录" },
	{ en: "/llama", zh: "管理 llama.cpp 路由上的本地模型" },
	{ section: "会话与上下文" },
	{ en: "/new", zh: "开始新会话" },
	{ en: "/resume", zh: "切换到另一个已保存的会话" },
	{ en: "/name [name]", zh: "设置会话显示名；省略则显示当前名" },
	{ en: "/session", zh: "查看当前会话信息与统计" },
	{ en: "/tree", zh: "打开会话树导航" },
	{ en: "/fork", zh: "从某条历史用户消息处分叉出新会话" },
	{ en: "/clone", zh: "在当前位置复制当前会话" },
	{ en: "/compact [instructions]", zh: "压缩当前上下文，可附加自定义指令" },
	{ en: "/import <path>", zh: "导入并续接一个 JSONL 会话" },
	{ section: "导出与分享" },
	{ en: "/copy", zh: "复制最后一条助手消息" },
	{ en: "/export [path]", zh: "把会话导出为 HTML 或 JSONL" },
	{ en: "/share", zh: "上传会话并返回查看链接" },
	{ en: "/bug [description]", zh: "生成一份给 pi 开发者的私有问题报告" },
	{ section: "运行时与项目" },
	{ en: "/trust", zh: "保存项目信任决定，供后续 pi 进程使用" },
	{ en: "/reload", zh: "重新加载键位、扩展、技能、模板、主题和上下文文件" },
	{ en: "/hotkeys", zh: "查看当前生效的快捷键" },
	{ en: "/changelog", zh: "查看更新日志" },
	{ en: "/quit", zh: "退出 pi" },
];

/** 键位（Windows 差异已标注） */
const KEYS: Item[] = [
	{ section: "编辑器光标" },
	{ en: "up / down", zh: "上下移动光标，到顶/底时翻历史", extra: "cursorUp / cursorDown" },
	{ en: "left、ctrl+b", zh: "左移一字符" },
	{ en: "right、ctrl+f", zh: "右移一字符" },
	{ en: "alt+left、ctrl+left、alt+b", zh: "左移一个词" },
	{ en: "alt+right、ctrl+right、alt+f", zh: "右移一个词" },
	{ en: "home、ctrl+a", zh: "跳到行首" },
	{ en: "end、ctrl+e", zh: "跳到行尾" },
	{ en: "pageUp / pageDown", zh: "按页上下滚动" },
	{ section: "文本编辑" },
	{ en: "backspace", zh: "删除前一个字符" },
	{ en: "delete、ctrl+d", zh: "删除后一个字符" },
	{ en: "ctrl+w、alt+backspace", zh: "删除前一个词" },
	{ en: "alt+d、alt+delete", zh: "删除后一个词" },
	{ en: "ctrl+u", zh: "删除到行首" },
	{ en: "ctrl+k", zh: "删除到行尾" },
	{ en: "ctrl+y", zh: "粘贴最近删除的文本" },
	{ en: "alt+y", zh: "在 ctrl+y 之后循环更早的删除内容" },
	{ en: "ctrl+-（Windows 为 ctrl+z；WSL 为 alt+z）", zh: "撤销上一次编辑" },
	{ section: "输入与选择" },
	{ en: "enter", zh: "提交输入" },
	{ en: "shift+enter、ctrl+j", zh: "插入换行" },
	{ en: "tab", zh: "跳格或接受补全" },
	{ en: "ctrl+c", zh: "复制选中内容" },
	{ en: "↑ / ↓", zh: "列表内上下移动选择" },
	{ en: "enter", zh: "确认选择" },
	{ en: "escape、ctrl+c", zh: "取消选择" },
	{ section: "全屏模式" },
	{ en: "pageUp / pageDown", zh: "记录区上下翻页" },
	{ en: "ctrl+shift+up（Windows 也可 ctrl+up）", zh: "跳到上一条标记消息" },
	{ en: "ctrl+shift+down（Windows 也可 ctrl+down）", zh: "跳到下一条标记消息" },
	{ en: "ctrl+shift+f（Windows 也可 ctrl+f）", zh: "搜索记录区文本" },
	{ en: "enter、ctrl+g", zh: "搜索时跳到下一个匹配" },
	{ en: "shift+enter、ctrl+shift+g", zh: "搜索时跳到上一个匹配" },
	{ en: "ctrl+home / ctrl+end", zh: "跳到记录区开头 / 跟随最新输出" },
	{ section: "应用级" },
	{ en: "escape", zh: "中断 / 取消当前操作（app.interrupt）" },
	{ en: "ctrl+c", zh: "先清空输入框，再按一次退出" },
	{ en: "ctrl+d", zh: "输入框为空时退出" },
	{ en: "ctrl+z", zh: "挂起到后台（Windows 无默认键）" },
	{ en: "ctrl+g", zh: "用外部编辑器打开（Windows 为记事本）" },
	{ en: "ctrl+v（Windows 为 alt+v）", zh: "粘贴剪贴板图片/文件/文本" },
	{ section: "会话" },
	{ en: "ctrl+p", zh: "切换路径显示（会话选择器内）" },
	{ en: "ctrl+s", zh: "切换排序方式" },
	{ en: "ctrl+n", zh: "只显示已命名会话" },
	{ en: "ctrl+r", zh: "重命名会话" },
	{ en: "ctrl+d", zh: "删除会话" },
	{ en: "ctrl+backspace", zh: "搜索框为空时删除会话" },
	{ section: "模型与思考" },
	{ en: "ctrl+l", zh: "打开模型选择器" },
	{ en: "ctrl+p", zh: "切换到下一个模型" },
	{ en: "shift+ctrl+p（Windows 为 alt+p）", zh: "切换到上一个模型" },
	{ en: "ctrl+s", zh: "把当前模型/范围配置保存为默认" },
	{ en: "shift+tab", zh: "循环切换思考等级" },
	{ en: "ctrl+t", zh: "折叠或展开思考块" },
	{ section: "显示与消息队列" },
	{ en: "ctrl+o", zh: "折叠或展开工具输出" },
	{ en: "ctrl+x", zh: "复制消息（/tree 中复制条目，全屏中复制选区，否则复制最后一条回复）" },
	{ en: "alt+enter（Windows 为 ctrl+q）", zh: "把消息排入后续队列" },
	{ en: "alt+up（Windows 为 alt+q）", zh: "把排队中的消息取回输入框" },
	{ section: "会话树导航" },
	{ en: "ctrl+left、alt+left", zh: "折叠当前分支段，或跳到上一段开头" },
	{ en: "ctrl+right、alt+right", zh: "展开当前分支段，或跳到下一段开头" },
	{ en: "shift+l", zh: "编辑所选节点标签" },
	{ en: "shift+t", zh: "切换标签时间戳显示" },
	{ en: "ctrl+d / ctrl+t / ctrl+u / ctrl+l / ctrl+a", zh: "过滤：默认 / 隐藏工具 / 只看用户 / 只看标签 / 全部" },
];

/** 术语表 */
const TERMS: Item[] = [
	{ en: "Session", zh: "会话：一次连续对话，存成一个 jsonl 文件" },
	{ en: "Turn", zh: "轮次：你发一条消息到模型停止回复为一轮" },
	{ en: "Entry", zh: "条目：会话文件里的一条记录（消息、工具结果、摘要等）" },
	{ en: "Branch / Fork", zh: "分支 / 分叉：从历史某点另开一条对话线" },
	{ en: "Compaction", zh: "压缩：上下文快满时把旧内容总结成摘要，省 token" },
	{ en: "Steering", zh: "干预：模型干活时你插话，立刻改变它的方向" },
	{ en: "Follow-up", zh: "后续：模型干完后自动接着发的一条消息" },
	{ en: "Thinking level", zh: "思考等级：off/minimal/low/medium/high/xhigh/max，越高越慢越贵" },
	{ en: "Tool", zh: "工具：模型可调用的动作，如 read / bash / edit / write" },
	{ en: "Extension", zh: "扩展：用 TypeScript 写的能力插件，可加命令、工具、UI" },
	{ en: "Skill", zh: "技能：一段给模型看的操作说明，用 /skill:名字 触发" },
	{ en: "Prompt template", zh: "提示模板：预置的一段提示词，用模板名直接调用" },
	{ en: "Package", zh: "包：打包扩展/技能/模板/主题的 npm 或 git 单位" },
	{ en: "Theme", zh: "主题：界面配色的 JSON 定义" },
	{ en: "Provider", zh: "服务商：提供模型 API 的来源（含本地 llama.cpp）" },
	{ en: "Scoped models", zh: "范围模型：Ctrl+P 循环切换时只在这些模型之间轮换" },
	{ en: "Cache read / write", zh: "缓存读/写：命中服务商提示缓存的 token，便宜很多" },
	{ en: "Cache miss", zh: "缓存未命中：上下文变了导致重新计费" },
	{ en: "Context", zh: "上下文：模型这次请求能看到的所有内容，有上限" },
	{ en: "Token", zh: "令牌：模型计费单位，约等于 0.75 个英文单词" },
	{ en: "Trust", zh: "信任：项目是否允许加载 .pi 下的资源和包" },
	{ en: "Transcript", zh: "记录区：屏幕上滚动的对话历史" },
	{ en: "Footer", zh: "页脚：输入框下方那条状态栏" },
	{ en: "Status", zh: "状态：扩展在页脚显示的常驻信息" },
	{ en: "Widget", zh: "部件：输入框周围的常驻自定义内容" },
	{ en: "Overlay", zh: "浮层：盖在对话上的临时面板" },
	{ en: "Alt screen", zh: "备用屏：全屏模式接管终端显示的那块画布" },
];

const MENUS: Array<{ key: string; label: string; items: Item[] }> = [
	{ key: "settings", label: "设置项 Settings", items: SETTINGS },
	{ key: "commands", label: "斜杠命令 Commands", items: COMMANDS },
	{ key: "keys", label: "快捷键 Keybindings", items: KEYS },
	{ key: "terms", label: "术语表 Terms", items: TERMS },
];

/** 把对照项渲染为一行可读文本 */
function formatRow(row: Row): string {
	const extra = row.extra ? `  [${row.extra}]` : "";
	return `${row.en}  —  ${row.zh}${extra}`;
}

function formatSection(section: Section): string {
	return `── ${section.section} ──`;
}

export default function piZhCnExtension(pi: ExtensionAPI) {
	pi.registerCommand("zh", {
		description: "中文对照：设置项 / 斜杠命令 / 快捷键 / 术语",
		getArgumentCompletions: (prefix) => {
			const names = [...MENUS.map((menu) => menu.key), "all"];
			const matched = names.filter((name) => name.startsWith(prefix));
			return matched.length > 0 ? matched.map((value) => ({ value, label: value })) : null;
		},
			handler: async (args, ctx) => {
			if (!ctx.hasUI) return;

			const requested = args.trim().toLowerCase();

			// /zh all：一次性列出全部分类
			if (requested === "all") {
				const lines: string[] = [];
				for (const candidate of MENUS) {
					lines.push(formatSection({ section: candidate.label }));
					for (const item of candidate.items) {
						lines.push(isSection(item) ? formatSection(item) : formatRow(item));
					}
					lines.push("");
				}
				await ctx.ui.select("全部对照 /zh all", lines);
				return;
			}

			// /zh settings|commands|keys|terms：直接打开某个分类
			let menu = MENUS.find((candidate) => candidate.key === requested);

			// 无参数：先选分类
			if (!menu) {
				const listed = MENUS.map((candidate) => `${candidate.label} · ${candidate.items.length} 条`);
				const picked = await ctx.ui.select("中文对照表（pi 界面无 i18n，这里是人工翻译）", listed);
				if (!picked) return;
				menu = MENUS.find((candidate) => picked.startsWith(candidate.label));
				if (!menu) return;
			}

			const lines = menu.items.map((item) => (isSection(item) ? formatSection(item) : formatRow(item)));
			await ctx.ui.select(`${menu.label}（共 ${menu.items.length} 条）`, lines);
		},
	});

	// 启动时在页脚给一句中文提示，方便发现这个命令；PI_ZH_CN_HINT=0 可关闭
	pi.on("session_start", async (_event, ctx) => {
		if (ctx.mode !== "tui") return;
		if (process.env.PI_ZH_CN_HINT === "0") return;
		ctx.ui.setStatus("zh-cn", ctx.ui.theme.fg("dim", "中文对照: /zh"));
	});
}
