import React, { FC, memo } from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Header, Spacer, MarkdownContent, Footer, Seo } from '@src/components';
import { Heading, HStack, VStack, Text, Image } from '@chakra-ui/react';
import { colors, sp, tab, MIN_DESKTOP_WIDTH } from '@src/styles';
import { MicroList, Category, Blog } from '@src/entities';
import { client as microClient, paths } from '@src/constants';
import { EditIcon } from './EditIcon';
import { formatDateJa } from '@src/utils';
import styled from 'styled-components';
import Head from 'next/head';

type Props = {
  blog: Blog;
  categories: MicroList<Category>;
};

const BlogPost: NextPage<Props> = memo(({ categories, blog }) => {
  // const { width } = useWindowSize()

  return (
    <>
      <Seo
        title={blog.title}
        img={blog.eyecatch.url}
        imgHeight={315}
        imgWidth={600}
        description={blog.content.slice(0, 120)}
      />
      <Header categories={categories.contents} />
      <VStack bg={colors.BackGround} minH="100vh">
        <Spacer size={32} />
        <VStack maxW="1120px">
          <BlogContainer
            bg={colors.White}
            p="0px 64px 60px"
            w="calc(100% - 330px)"
            boxShadow="0 2px 4px #4385bb12"
            borderRadius="12px"
          >
            <Heading as="h1" variant="title" pt="40px">
              {blog.title}
            </Heading>
            <HStack alignSelf="flex-end" alignItems="center">
              <EditIcon />
              <Text fontSize="14px" color={colors.Fonts.Sub}>
                {formatDateJa(new Date(blog.createdAt))}
              </Text>
            </HStack>
            <Image
              src={blog.eyecatch.url}
              width={{ base: '100%', md: '80%' }}
            />
            <MarkdownContent content={blog.content} />
          </BlogContainer>
          <Spacer size={64} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});

export const getStaticPaths: GetStaticPaths = async context => {
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
  });

  const paths = blogs.contents.map(blog => {
    return {
      params: { id: blog.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const uid = context.params?.uid as string | undefined;
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
    contentId: uid,
  });
  const categories: MicroList<Category> = await microClient.get({
    endpoint: 'categories',
  });

  return {
    props: {
      blog: blogs.contents[0],
      categories,
    },
    revalidate: 10,
  };
};

export default BlogPost;

const BlogContainer = styled(VStack)`
  ${tab`
    width: 90%;
    padding: 0px 30px 30px
  `}
  ${sp`
    width: auto;
    padding: 0px 30px 30px;
  `}
`;
