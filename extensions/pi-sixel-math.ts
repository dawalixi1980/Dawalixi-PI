/**
 * 数学公式渲染桥接扩展
 *
 * 在 pi 的 TUI 里把 $$…$$ / \[…\] 渲染成 SIXEL 图片公式，行内 $…$ 走 pi 内置
 * 的 Unicode 排版。数学排版能力（MathJax → SVG → 光栅 → SIXEL）由第三方包
 * pi-sixel-math 提供，本文件只做转发，不复制其源码：
 *
 *   - 作者：GuChongAn
 *   - 仓库：https://github.com/GuChongAn/pi-sixel-math
 *   - 许可证：MIT
 *
 * 依赖在 package.json 的 dependencies 中声明，pi 安装本包时会一并安装。
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import piSixelMath from "pi-sixel-math";

export default function piSixelMathBridge(pi: ExtensionAPI): void {
	piSixelMath(pi);
}
