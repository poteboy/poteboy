import React, { FC, ReactNode, memo } from "react";
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
import { Text, TextProps, Heading } from "@chakra-ui/react";

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
          a: A,
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
    <Heading as={`h${num}`} size={size}>
      {props.children}
    </Heading>
  );
};

const A = styled("a")`
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 0.1em;
  color: var(--base-text-link);
`;

const T = (props: any) => (
  <Text lineHeight="36px" {...props}>
    {props.children}
  </Text>
);
