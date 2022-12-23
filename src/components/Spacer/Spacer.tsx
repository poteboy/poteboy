import React, { FC } from "react";
import { Box } from "@chakra-ui/react";

export const Spacer: FC<{ size: number; horizontal?: boolean }> = ({
  size,
  horizontal,
}) => {
  const px = `${size * 4}px`;

  return (
    <div
      style={
        horizontal
          ? {
              width: px,
              height: "auto",
              display: "inline-block",
              flexShrink: 0,
            }
          : { width: "auto", height: px, display: "block", flexShrink: 0 }
      }
    />
    // <Box
    //   width={horizontal ? px : "auto"}
    //   height={horizontal ? "auto" : px}
    //   display={horizontal ? "inline-block" : "block"}
    //   flexShrink={0}
    // />
  );
};
