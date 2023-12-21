import type { CSSProperties } from "react";

export const inlineStyle = (style: CSSProperties | Record<string, string>) =>
	style as CSSProperties;
