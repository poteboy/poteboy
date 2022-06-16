import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, memo, useCallback, useRef } from 'react';
import { VStack, Text, Box, Avatar, Button } from '@chakra-ui/react';
import { colors, BreakPoint, media } from '@src/styles';
import { Header, Spacer, BlogCard, Footer, Seo } from '@src/components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { client as microClient, paths } from '@src/constants';
import { MicroList, Blog, Category } from '@src/entities';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';

type Props = {
  blogs: MicroList<Blog>;
  categories: MicroList<Category>;
};

const Root: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();

  const selectBlogCard = useCallback(
    async (id: string) => {
      const path = paths.blogPost({ blogUid: id });
      // debugger;
      await router.push(path.href, path.as);
    },
    [router],
  );

  return <RootScreen onClickBlogCard={selectBlogCard} {...props} />;
};

type ScreenProps = {
  onClickBlogCard: (id: string) => void;
} & Props;

const RootScreen: FC<ScreenProps> = memo((props) => {
  const { blogs, onClickBlogCard, categories } = props;

  return (
    <>
      <Seo />
      <Header />
      {/* <Gradient /> */}
      <VStack
        bg={colors.White}
        minH='calc(100vh - 0px)'
        alignContent='center'
        maxW={`${BreakPoint}px`}
        mx='auto'
      >
        <Spacer size={64} />
        <Avatar
          src={require('@src/public/icons/poteboy.png')}
          width='150px'
          height='150px'
          bg={colors.White}
          borderColor={colors.Disabled}
          borderWidth='1px'
        />
        <Spacer size={24} />
        <VStack>
          <Title variant='heading0'>Hi 👋, I'm Poteboy</Title>
          <Caption variant='heading0' fontSize='1.4rem'>
            Front End Developer / UI Designer
          </Caption>

          <Button>Hello</Button>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});

const Title = styled(Text)`
  ${media`
    font-size: 1.4rem;
  `}
`;
const Caption = styled(Text)`
  ${media`
    font-size: 1rem;
  `}
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
  });
  const categories: MicroList<Category> = await microClient.get({
    endpoint: 'categories',
  });

  return {
    props: {
      blogs,
      categories,
    },
    revalidate: 10,
  };
};

export default Root;

const Gradient: FC = memo(() => {
  return (
    <Box
      width='100%'
      position='fixed'
      top={0}
      left={0}
      height='400px'
      background='linear-gradient(180deg,rgba(24,158,255, .1) 0%,rgba(196,196,196,0) 100%)'
      zIndex={1}
    ></Box>
  );
});
