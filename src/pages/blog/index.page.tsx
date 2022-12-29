import type { NextPage, GetStaticProps } from "next";
import { getAllPosts, Post, postSchema } from "./utils";
import { useMemo } from "react";
import {
  Box,
  Container,
  Spacer,
  Text,
  Divider,
  HStack,
  Card,
  VStack,
} from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header } from "@src/components";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Box bg={colors.baseBg} minH="100vh">
      <Header />
      <Spacer h={4} />
      <Container>
        <Text variant="heading" as="h1">
          Blog
        </Text>
        <Spacer h={4} />
        {posts.map((p, index) => {
          return (
            <Link key={p.slug} href="/">
              {index === 0 && <Divider />}
              <Box as="article" padding="1rem">
                <HStack spacing={4}>
                  <Card padding={3} bg={colors.baseBgLight}>
                    <Text
                      as="span"
                      role="presentation"
                      fontSize="32px"
                      lineHeight="32px"
                    >
                      {p.data.icon}
                    </Text>
                  </Card>
                  <VStack align="start">
                    <Text as="h2" variant="label">
                      {p.data.title}
                    </Text>
                    <Text
                      as="time"
                      variant="caption"
                      color={colors.baseTextLight}
                    >
                      {p.data.date}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <Divider />
            </Link>
          );
        })}
      </Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const post = getAllPosts();

  return {
    props: {
      posts: post.map((p) => p),
    },
  };
};

export default Blog;
