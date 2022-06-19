import React, { FC, memo } from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { Header, Spacer, MarkdownContent, Footer, Seo } from '@src/components';
import { Heading, HStack, VStack, Text, Image } from '@chakra-ui/react';
import { colors, sp, tab, MIN_DESKTOP_WIDTH } from '@src/styles';
import { Post } from '@src/entities';
import { formatDateEN, getAllSlugs, getPostBySlug } from '@src/utils';
import { EditIcon } from './EditIcon';
import { formatDateJa } from '@src/utils';
import styled from 'styled-components';
import Head from 'next/head';

type Props = {
  post: string;
};

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = memo(({ post }) => {
  const json: Post = JSON.parse(post);

  return (
    <>
      <Seo
        title={json.data.title}
        imgHeight={315}
        imgWidth={600}
        description={json.content.slice(0, 120)}
      />
      <VStack bg={colors.BackGround} minH='100vh'>
        <Header topic='blog' />
        <Spacer size={32} />
        <VStack maxW='1120px'>
          <BlogContainer
            bg={colors.White}
            p='0px 64px 60px'
            w={'80%'}
            boxShadow='0 2px 4px #4385bb12'
            borderRadius='12px'
          >
            <Heading as='h1' variant='title' pt='40px'>
              {json.data.title}
            </Heading>
            <HStack alignSelf='flex-end' alignItems='center'>
              <EditIcon />
              <Text fontSize='14px' color={colors.Fonts.Sub}>
                {formatDateEN(new Date(json.data.date))}
              </Text>
            </HStack>
            {/* <Image src={blog.eyecatch.url} width={{ base: '100%', md: '80%' }} /> */}
            <MarkdownContent content={json.content} />
          </BlogContainer>
          <Spacer size={64} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});

export const getStaticPaths: GetStaticPaths = async (context) => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => {
    return {
      params: { id: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;
  const post = JSON.stringify(getPostBySlug(id));
  return {
    props: {
      post,
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
