import React, { FC, ReactNode, memo, useEffect, useState } from "react";
import MarkdownJSX from "markdown-to-jsx";
import styled from "@emotion/styled";
import {
  BackgroundProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from "@chakra-ui/styled-system";
import {
  Text,
  TextProps,
  Heading,
  Spacer,
  Card,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { colors } from "@src/styles";

type StyledSystemProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  FlexboxProps &
  GridProps &
  BackgroundProps;

const Article = styled(MarkdownJSX)<StyledSystemProps>``;

export const Markdown: FC<{ content: string }> = ({ content }) => {
  return (
    <Article
      options={{
        wrapper: "article",
        overrides: {
          h1: H(2),
          h2: H(3),
          h3: H(4),
          p: T,
          a: Preview,
          img: (props) => {
            return (
              <></>
              // <img
              //   src={require(`../../public/blog/ogp.png`)}
              //   alt=""
              //   width="50px"
              //   height="50px"
              // />
            );
          },
        },
      }}
    >
      {content}
    </Article>
  );
};

const H = (num: 2 | 3 | 4) => (props: TextProps) => {
  const size = num === 2 ? "xl" : num === 3 ? "lg" : num === 4 ? "md" : "md";
  return (
    <>
      <Spacer h="1em" />
      <Heading as={`h${num}`} size={size}>
        {props.children}
      </Heading>
    </>
  );
};

const A = styled("a")`
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 0.1em;
  color: var(--base-text-link);
`;

const T = (props: any) => (
  <Text lineHeight="36px" {...props} margin="1rem 0">
    {props.children}
  </Text>
);

const Preview: FC<{ children: string[]; href: string; alt: string }> = ({
  children,
  ...args
}) => {
  const [meta, setMeta] = useState<{ title: string; url: string }>({
    title: "",
    url: "",
  });
  useEffect(() => {
    fetch(args.href)
      .then((res) => res.text())
      .then((text) => {
        const el = new DOMParser().parseFromString(text, "text/html");
        return Array.from(el.head.children).map((v) => {
          const prop = v.getAttribute("property");
          if (!prop) return;
          return {
            prop: prop.replace("og:", ""),
            content: v.getAttribute("content"),
          };
        });
      })
      .then((list) => {
        return list.filter((v) => v);
      })
      .then((result) => {
        setMeta({
          title: result.filter((v) => v?.prop === "title")[0]?.content ?? "",
          url: result.filter((v) => v?.prop === "url")[0]?.content ?? "",
        });
      });
  }, []);

  if (args.href !== children[0]) return <A href={args.href}>{children}</A>;
  return (
    <Card
      flexDir="row"
      as="a"
      borderRadius={12}
      bg="#FFF"
      cursor="pointer"
      href={args.href}
    >
      <VStack as="span" padding={4} spacing={2} justify="center" align="start">
        <Text as="span" color={"#000"} variant="label">
          {meta.title}
        </Text>
        <Text color={colors.baseTextLight} as="span">
          {meta.url}
        </Text>
      </VStack>
      <Box
        height="120px"
        maxWidth="230px"
        as="span"
        marginLeft="auto"
        borderRadius={12}
      >
        <Image
          src={
            "https://res.cloudinary.com/code-kitchen/image/upload/w_400,h_400,c_fill,b_rgb:000/v1640267201/emojis/black/InLove.png"
          }
          alt={args.alt}
          width="100%"
          height="100%"
          objectFit="cover"
          borderTopRightRadius={12}
          borderBottomRightRadius={12}
        />
      </Box>
    </Card>
  );
};
