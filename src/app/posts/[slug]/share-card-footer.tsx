import { Box, HStack, Text, css } from "@kuma-ui/core";
import Link from "next/link";
import { memo } from "react";

/**
 * Semantics: footer
 */
export const ShareCardFooter = memo(
  ({ url, title }: { url: string; title: string }) => {
    return (
      <HStack as="footer" justify="center" gap="2rem">
        <a
          href={`https://twitter.com/share?url=${url}&text=${title}`}
          className={css`
            text-decoration: none;
          `}
        >
          <HStack color="#5c666a" alignItems="center" gap="0.2rem">
            <IconShare size={24} />
            <Text fontSize={17}>Xでシェアする</Text>
          </HStack>
        </a>
      </HStack>
    );
  }
);

/**
 * {@link https://reactsvgicons.com/systemuicons?q=home}
 */
function _IconHome({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 21 21" fill="currentColor" height={size} width={size}>
      <title>home</title>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 10.5l9-9 9 9" />
        <path d="M3.5 8.5v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </g>
    </svg>
  );
}

/**
 * {@link https://reactsvgicons.com/systemuicons?q=share}
 */
function IconShare({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 21 21" fill="currentColor" height={size} width={size}>
      <title>share</title>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 7.5l-3.978-4-4.022 4M10.522 3.521V15.5M7.5 10.5h-2a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2v-4a2 2 0 00-2-2h-2" />
      </g>
    </svg>
  );
}
