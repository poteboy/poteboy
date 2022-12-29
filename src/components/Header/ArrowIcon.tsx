import { FC } from "react";
import { SVGProps, svgDefaultProps } from "@src/styles";

export const ArrowIcon: FC<SVGProps> = ({ height, width, style, color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="22"
      height="22"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        color,
        ...(style as any),
      }}
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity="0.87"></path>
      <path d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
    </svg>
  );
};

ArrowIcon.defaultProps = svgDefaultProps;
