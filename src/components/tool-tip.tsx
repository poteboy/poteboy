"use client";
import { Box, Text, css } from "@kuma-ui/core";
import React, { useEffect } from "react";

export const TootTip = ({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = React.useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };
    const handleMouseLeave = () => {
      setShowTooltip(false);
    };

    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box ref={boxRef} position="relative">
      {showTooltip && (
        <Text
          px={14}
          height={30}
          fontSize={14}
          top="-4px"
          left={"100%"}
          zIndex={2}
          bg="black"
          color="white"
          position="absolute"
          display="flex"
          alignItems="center"
          borderRadius={8}
          boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1)"
          className={css`
            animation: slideIn 0.2s ease-in-out;
            animation-fill-mode: forwards;
            @keyframes slideIn {
              0% {
                opacity: 0;
                transform: translateX(0px);
              }
              100% {
                opacity: 1;
                transform: translateX(10px);
              }
            }
          `}
        >
          {caption}
        </Text>
      )}

      {children}
    </Box>
  );
};
