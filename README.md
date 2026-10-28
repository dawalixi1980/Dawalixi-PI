# pi-zh-cn · pi 中文对照包

把 pi 的英文界面讲成中文：**设置项、斜杠命令、快捷键、术语**四张对照表，全部可以在 pi 里用 `/zh` 直接查。

## 先说清楚一件事

**pi 本身没有多语言支持。** 界面文案是写死在代码里的英文，`dist` 里搜不到任何语言包，`/settings` 也无法切换中文。这个包不会（也不能）把界面变中文，它做的是：

- 在 pi 里提供 `/zh` 命令，弹出可滚动的中文对照表
- 附带 Markdown 文档，方便离线查、也方便搜索

## 安装

从 GitHub 装（推荐）：

```bash
pi install git:github.com/dawalixi1980/Dawalixi-PI
```

从本地目录装：

```bash
pi install ./Dawalixi-PI
```

装完重启 pi，或运行 `/reload`。

卸载：

```bash
pi remove git:github.com/dawalixi1980/Dawalixi-PI
```

## 用法

| 命令 | 作用 |
|---|---|
| `/zh` | 打开中文对照菜单，先选分类 |
| `/zh settings` | 设置项对照（`/settings` 里的每一项） |
| `/zh commands` | 斜杠命令对照 |
| `/zh keys` | 快捷键对照（Windows 键位已标注） |
| `/zh terms` | 术语表 |
| `/zh all` | 一次性列出全部对照 |

启动时页脚会显示 `中文对照: /zh` 作为提示。不想要就设置环境变量 `PI_ZH_CN_HINT=0`。

## 文档

| 文件 | 内容 |
|---|---|
| [`docs/settings-zh-CN.md`](docs/settings-zh-CN.md) | 全部设置项 + 对应 `settings.json` 键名 |
| [`docs/slash-commands-zh-CN.md`](docs/slash-commands-zh-CN.md) | 内置斜杠命令 |
| [`docs/keybindings-zh-CN.md`](docs/keybindings-zh-CN.md) | 快捷键与动作 ID |
| [`docs/terms-zh-CN.md`](docs/terms-zh-CN.md) | 术语表 |

## 对照数据来源

pi 1.3.0 官方文档：

- `docs/settings.md`
- `docs/slash-commands.md`
- `docs/keybindings.md`
- `docs/themes.md`

pi 升级后若新增设置项或命令，需要手动同步这里的数据。

## 兼容性

- pi 1.3.0 起可用
- Windows / macOS / Linux 均可；快捷键表按 Windows 习惯标注，其他平台差异在同一条里注明
- 纯查询功能，不执行业务命令，不改你的设置

## 许可

MIT
