import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, memo, useCallback } from 'react';
import { VStack, Text, Image, HStack } from '@chakra-ui/react';
import { colors, MIN_DESKTOP_WIDTH } from '@src/styles';
import { Header, Spacer, BlogCard, Footer } from '@src/components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { client as microClient, paths } from '@src/constants';
import { MicroList, Blog, Category } from '@src/entities';
import { useRouter } from 'next/router';

type Props = {
  blogs: MicroList<Blog>;
  categories: MicroList<Category>;
};

const Root: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  const router = useRouter();

  const selectBlogCard = useCallback(
    async (id: string) => {
      const path = paths.blog({ blogUid: id });
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

const RootScreen: FC<ScreenProps> = memo(props => {
  const { blogs, onClickBlogCard, categories } = props;

  return (
    <>
      <Header categories={categories.contents} />
      <VStack bg={colors.BackGround} minH="100vh" alignContent="center">
        <Spacer size={32} />
        <HStack
          maxW={`${650}px`}
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {blogs.contents.map(content => {
            return (
              <BlogCard
                blog={content}
                onClickBlogCard={onClickBlogCard}
                position="relative"
                key={content.id}
              />
            );
          })}
        </HStack>
      </VStack>
      <Footer />
    </>
  );
});

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
