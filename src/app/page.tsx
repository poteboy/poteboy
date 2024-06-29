import { PersonalCard } from "@/components/personal-card";
import {
  Box,
  css,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@kuma-ui/core";
import type { FC, CSSProperties } from "react";
import OptimizedImage from "next/image";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box>
      <Spacer size={20} />
      <PersonalCard border={false} />
      <Spacer size={20} />
      <HStack justify="space-evenly">
        {images.map((image) => {
          return (
            <Box position="relative" width="40%" height={152} key={image.src}>
              <Image
                src={image.src}
                borderRadius={20}
                height={152}
                objectFit="cover"
                alt={image.alt}
                position="absolute"
                width="100%"
                aria-labelledby={image.location}
                loading="lazy"
                decoding="async"
              />
              <Text
                fontSize={10}
                px={10}
                height={24}
                bottom={10}
                left={10}
                zIndex={2}
                bg="black"
                color="white"
                position="absolute"
                display="flex"
                alignItems="center"
                borderRadius={8}
                boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1)"
                id={image.location}
              >
                {image.location}
              </Text>
            </Box>
          );
        })}
      </HStack>
      <Spacer size={40} />
      <VStack px={["0px", "2rem"]} gap={20}>
        <LinkCard
          siteName="Zenn"
          image="/siteLogo/zenn.svg"
          link="https://zenn.dev/poteboy"
          bg="#f6fdff"
        />
        <LinkCard
          siteName="しずかなインターネット"
          image="/siteLogo/sizume.png"
          link="https://sizu.me/poteboy"
          bg="white"
        />
        <LinkCard
          siteName="Speaker Deck"
          image="/siteLogo/speakerdeck.png"
          link="https://speakerdeck.com/poteboy"
          bg="#f0fff9"
        />
        <LinkCard
          siteName="connpass"
          image="/siteLogo/connpass.png"
          link="https://connpass.com/user/_poteboy_"
          bg="#fcf1f1"
        />
      </VStack>
      <Spacer size={40} />
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NextLink
          className={css`
            text-decoration: underline;
            text-align: center;
            font-size: 14px;
            margin-inline: auto;
            color: black;
          `}
          href="/job"
        >
          お仕事依頼はこちら
        </NextLink>
        <Spacer size={52} />
      </Box>
    </Box>
  );
}

const images = [
  {
    src: "/landscape/palm-tree.webp",
    alt: "Palm Tree found in Hawaii",
    location: "Hawaii",
  },
  {
    src: "/landscape/vibrant-sky.webp",
    alt: "a vibrant sky tinged with shades of pink and purple",
    location: "Kobe",
  },
];

const LinkCard: FC<{
  siteName: string;
  image: string;
  link: string;
  bg?: string;
}> = ({ siteName, image, link, bg = "#f7f9fb" }) => {
  return (
    <Link rel="noreferrer" target="_blank" href={link} textDecoration="none">
      <HStack
        borderRadius={24}
        boxShadow="0 2px 4px rgba(0,0,0,.04)"
        border="1px solid #ebebeb"
        padding="1rem"
        alignItems="center"
        bg="var(--link-card-bg)"
        _hover={{
          bg: "#f7f9fb",
        }}
        style={
          {
            "--link-card-bg": bg,
          } as CSSProperties
        }
      >
        <OptimizedImage
          src={image}
          width={28}
          height={28}
          alt={siteName}
          style={{
            borderRadius: 7,
            marginRight: 16,
          }}
        />
        <HStack width="100%" justifyContent="space-between" alignItems="center">
          <Text as="p" color="black" fontSize={16}>
            {siteName}
          </Text>
          <Text as="p" color="#595f63" fontSize={12}>
            {link}
          </Text>
        </HStack>
      </HStack>
    </Link>
  );
};
