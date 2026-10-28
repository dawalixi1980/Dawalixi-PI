# pi 快捷键中文对照（Windows 版）

`/hotkeys` 查看当前会话实际生效的键位。想改键位，写 `<agent-dir>/keybindings.json`，然后 `/reload`。

## 编辑器光标

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `↑` / `↓` | 上下移动光标，到顶/底时翻提示历史 | `tui.editor.cursorUp` / `cursorDown` |
| `←`、`ctrl+b` | 左移一字符 | `tui.editor.cursorLeft` |
| `→`、`ctrl+f` | 右移一字符 | `tui.editor.cursorRight` |
| `alt+←`、`ctrl+←`、`alt+b` | 左移一个词 | `tui.editor.cursorWordLeft` |
| `alt+→`、`ctrl+→`、`alt+f` | 右移一个词 | `tui.editor.cursorWordRight` |
| `home`、`ctrl+a` | 跳到行首 | `tui.editor.cursorLineStart` |
| `end`、`ctrl+e` | 跳到行尾 | `tui.editor.cursorLineEnd` |
| `pageUp` / `pageDown` | 按页滚动 | `tui.editor.pageUp` / `pageDown` |

## 文本编辑

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `backspace` | 删除前一个字符 | `tui.editor.deleteCharBackward` |
| `delete`、`ctrl+d` | 删除后一个字符 | `tui.editor.deleteCharForward` |
| `ctrl+w`、`alt+backspace` | 删除前一个词 | `tui.editor.deleteWordBackward` |
| `alt+d`、`alt+delete` | 删除后一个词 | `tui.editor.deleteWordForward` |
| `ctrl+u` | 删除到行首 | `tui.editor.deleteToLineStart` |
| `ctrl+k` | 删除到行尾 | `tui.editor.deleteToLineEnd` |
| `ctrl+y` | 粘贴最近删除的文本 | `tui.editor.yank` |
| `alt+y` | 循环更早的删除内容 | `tui.editor.yankPop` |
| `ctrl+z`（Linux/macOS 为 `ctrl+-`，WSL 为 `alt+z`） | 撤销 | `tui.editor.undo` |

## 输入与选择

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `enter` | 提交 | `tui.input.submit` |
| `shift+enter`、`ctrl+j` | 换行（Windows Terminal 需额外配置，见下） | `tui.input.newLine` |
| `tab` | 跳格或接受补全 | `tui.input.tab` |
| `ctrl+c` | 复制选中内容 | `tui.input.copy` |
| `↑` / `↓` / `pageUp` / `pageDown` | 列表内移动与翻页 | `tui.select.*` |
| `enter` | 确认选择 | `tui.select.confirm` |
| `escape`、`ctrl+c` | 取消选择 | `tui.select.cancel` |

## 全屏模式

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `pageUp` / `pageDown` | 记录区翻页 | `tui.altScreen.pageUp` / `pageDown` |
| `ctrl+shift+↑`（Windows 也可 `ctrl+↑`） | 跳到上一条标记消息 | `tui.altScreen.previousPrompt` |
| `ctrl+shift+↓`（Windows 也可 `ctrl+↓`） | 跳到下一条标记消息 | `tui.altScreen.nextPrompt` |
| `ctrl+shift+f`（Windows 也可 `ctrl+f`） | 搜索记录区 | `tui.altScreen.search` |
| `enter`、`ctrl+g` | 下一个匹配 | `tui.altScreen.searchNext` |
| `shift+enter`、`ctrl+shift+g` | 上一个匹配 | `tui.altScreen.searchPrevious` |
| `ctrl+home` / `ctrl+end` | 跳到开头 / 跟随最新 | `tui.altScreen.top` / `bottom` |

## 应用级

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `escape` | 中断 / 取消当前操作 | `app.interrupt` |
| `ctrl+c` | 清空输入框，再按一次退出 | `app.clear` |
| `ctrl+d` | 输入框为空时退出 | `app.exit` |
| `ctrl+z` | 挂起到后台（Windows 无默认键） | `app.suspend` |
| `ctrl+g` | 用外部编辑器打开（Windows 为记事本） | `app.editor.external` |
| `ctrl+v`（Windows 为 `alt+v`） | 从剪贴板粘贴图片/文件/文本 | `app.clipboard.pasteImage` |

## 会话

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `ctrl+p` | 切换路径显示 | `app.session.togglePath` |
| `ctrl+s` | 切换排序方式 | `app.session.toggleSort` |
| `ctrl+n` | 只显示已命名会话 | `app.session.toggleNamedFilter` |
| `ctrl+r` | 重命名会话 | `app.session.rename` |
| `ctrl+d` | 删除会话 | `app.session.delete` |
| `ctrl+backspace` | 搜索框为空时删除会话 | `app.session.deleteNoninvasive` |

## 模型与思考

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `ctrl+l` | 打开模型选择器 | `app.model.select` |
| `ctrl+p` | 下一个模型 | `app.model.cycleForward` |
| `shift+ctrl+p`（Windows 为 `alt+p`） | 上一个模型 | `app.model.cycleBackward` |
| `ctrl+s` | 保存为默认模型/范围配置 | `app.models.save` |
| `shift+tab` | 循环切换思考等级 | `app.thinking.cycle` |
| `ctrl+s` | 保存当前思考等级 | `app.thinking.save` |
| `ctrl+t` | 折叠或展开思考块 | `app.thinking.toggle` |

## 显示与消息队列

| 按键 | 中文说明 | 动作 ID |
|---|---|---|
| `ctrl+o` | 折叠或展开工具输出 | `app.tools.expand` |
| `ctrl+x` | 复制消息（`/tree` 中复制条目；全屏中复制选区；否则复制最后一条回复） | `app.message.copy` |
| `alt+enter`（Windows 为 `ctrl+q`） | 排入后续队列 | `app.message.followUp` |
| `alt+up`（Windows 为 `alt+q`） | 把排队消息取回输入框 | `app.message.dequeue` |

## Windows Terminal 的键位冲突

Windows Terminal 会拦截或改写部分带修饰键的组合，需要在它自己的 `settings.json` 里绑定转发：

```json
{
  "actions": [
    { "command": { "action": "sendInput", "input": "\u001b[13;2u" }, "id": "User.sendInput.8882FD6D" }
  ],
  "keybindings": [{ "id": "User.sendInput.8882FD6D", "keys": "shift+enter" }]
}
```

这段就是让 `shift+enter` 原样送到 pi，从而插入换行而不是提交。
