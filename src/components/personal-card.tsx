import { inlineStyle } from "@/lib/inlineStyle";
import { Box, HStack, VStack, css, k } from "@kuma-ui/core";
import Image from "next/image";
import type { FC } from "react";

export const PersonalCard: FC<{ border: boolean }> = ({ border }) => {
  return (
    <HStack
      as="section"
      alignItems="center"
      gap={16}
      borderRadius={24}
      border="var(--border-on, 1px solid #f0f2f5)"
      padding="1rem"
      style={inlineStyle({
        "--border-on": border ? "initial" : "none",
      })}
    >
      <Box minWidth={44} minHeight={44} position="relative">
        <Image
          src="/me.webp"
          alt="personal picture of poteboy"
          objectFit="contain"
          fill
          className={css`
            border-radius: 99px;
          `}
        />
      </Box>
      <VStack>
        <k.h2 fontSize={18} fontWeight={500}>
          Poteboy
        </k.h2>
        <k.p color="#595f63" fontSize={14}>
          浪漫駆動プログラマ & 起業家 🐻‍❄️⚡️
        </k.p>
        <HStack as="nav" mt={8} gap={8}>
          {socialLinks.map((link) => {
            return (
              <k.a
                key={link.name}
                href={link.href}
                display="flex"
                alignItems="center"
                height={24}
                fontSize={12}
                px={10}
                borderRadius={12}
                bgColor="#f6f6f6"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                color="#555"
                textDecoration="none"
                rel="noreferrer"
                target="_blank"
              >
                {link.name}
              </k.a>
            );
          })}
        </HStack>
      </VStack>
    </HStack>
  );
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/poteboy",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_poteboy_",
  },
];
