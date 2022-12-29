import { CSSProperties } from "react";
export type SVGProps = {
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
};

export const svgDefaultProps: SVGProps = {
  color: "currentColor",
  width: 22,
  height: 22,
};
