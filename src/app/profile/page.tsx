import {
  Box,
  HStack,
  Heading,
  Image as KImage,
  Spacer,
  Text,
  VStack,
  css,
} from "@kuma-ui/core";
import Image, { type StaticImageData } from "next/image";
import type React from "react";
import Me from "./identification.jpg";
import Company from "./company.png";

export default function Profile() {
  return (
    <Box>
      <Spacer size={40} />
      <Box position="relative" width={120} height={120}>
        <Image
          src={Me}
          alt="personal picture of poteboy"
          objectFit="cover"
          fill
          className={css`
            border-radius: 50%;
          `}
        />
      </Box>
      <VStack mt={10} gap={8}>
        <Heading fontSize={24} fontWeight={500}>
          poteboy
        </Heading>
        <VStack as="dl" gap={8} ml={8}>
          <HStack gap={8}>
            <Text as="dt" fontWeight="bold">
              Job:
            </Text>
            <Text as="dd" color="#555">
              Entrepreneur / Indie Hacker 🫰
            </Text>
          </HStack>
          <HStack gap={8}>
            <Text as="dt" fontWeight="bold">
              Location:
            </Text>
            <Text as="dd" color="#555">
              Tokyo, Japan 🗼
            </Text>
          </HStack>
          <HStack gap={8}>
            <Text as="dt" fontWeight="bold">
              Vibes:
            </Text>
            <Text as="dd" color="#555">
              🍣🐻‍❄️🪐🥊🔫🏔️
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Spacer size={28} />
      <Section title="Man Cave">
        <HStack gap={[20]} flexWrap="wrap">
          <Card
            name="POTE LAND, Inc."
            logo={Company}
            color="white"
            bonus="Founder / CEO"
          />
        </HStack>
      </Section>
      <Spacer size={28} />
      <Section title="Open Source Projects">
        <HStack gap={[20]} flexWrap="wrap">
          {openSourceProjects.map((pl) => (
            <Card key={pl.name} {...pl} />
          ))}
        </HStack>
      </Section>
      <Spacer size={28} />
      <Section title="Programming Lanugages">
        <HStack gap="20px">
          <HStack gap={[20]} flexWrap="wrap">
            {programmingLanguages.map((pl) => (
              <Card key={pl.name} {...pl} />
            ))}
          </HStack>
        </HStack>
      </Section>
      <Spacer size={28} />
      <Section title="Speaking">
        <Box
          borderRadius={24}
          boxShadow="0 2px 4px rgba(0,0,0,.04)"
          border="1px solid #ebebeb"
          padding={["1rem", "1.5rem"]}
          alignItems="center"
          width={[140, 178]}
          height={[140, 178]}
          bg="#fdf6f6"
        >
          <Image
            width={40}
            height={40}
            src="/jsconf.png"
            className={css`
              border-radius: 10px;
            `}
            alt="jsconf logo"
          />
          <VStack>
            <Text mt="0.75rem" fontSize=".875rem">
              JSConf JP
            </Text>
            <Text
              fontSize="12px"
              lineHeight="16px"
              color="rgba(0,0,0,.6)"
              mt="0.25rem"
            >
              2023
            </Text>
          </VStack>
        </Box>
      </Section>
      <Spacer size={100} />
    </Box>
  );
}

type List = {
  name: string;
  logo: string | StaticImageData;
  color: string;
  bonus?: string;
};

const programmingLanguages: List[] = [
  {
    name: "JavaScript",
    logo: "/programming-languages/JavaScript.webp",
    color: "#fffcea",
  },
  {
    name: "TypeScript",
    logo: "/programming-languages/Typescript.webp",
    color: "#f3f9ff",
  },
  {
    name: "Rust",
    logo: "/programming-languages/Rust.webp",
    color: "#fbf2eb",
  },
];

const openSourceProjects: List[] = [
  {
    name: "Kuma UI",
    logo: "/kuma.png",
    color: "#fbfdff",
    bonus: "Creator",
  },
  {
    name: "Million.js",
    logo: "/million.svg",
    color: "#f6f6fd",
    bonus: "Maintainer",
  },
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box as="section">
      <Heading
        as="h2"
        fontSize="1.125rem"
        lineHeight="1.75rem"
        fontWeight={500}
        py="1rem"
        px=".5rem"
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
};

function Card(props: List) {
  return (
    <Box
      borderRadius={24}
      boxShadow="0 2px 4px rgba(0,0,0,.04)"
      border="1px solid #ebebeb"
      padding={["1rem", "1.5rem"]}
      alignItems="center"
      width={[140, 178]}
      height={[140, 178]}
      bg={props.color}
    >
      <VStack justify="space-between" height="100%">
        <Box>
          <Image
            width={40}
            height={40}
            src={props.logo}
            className={css`
              border-radius: 10px;
            `}
            alt={props.name}
          />
          <Text mt="0.75rem" fontSize=".875rem">
            {props.name}
          </Text>
          <Text
            fontSize="12px"
            lineHeight="16px"
            color="rgba(0,0,0,.6)"
            mt="0.25rem"
          >
            {props.bonus}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
