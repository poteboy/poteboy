import { VStack, HStack } from '@chakra-ui/react';
import { Header, Spacer, BlogCard, Footer } from '@src/components';
import { colors } from '@src/styles';
import type { NextPage, GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import React, { FC, memo, useCallback } from 'react';
import { client as microClient, paths } from '@src/constants';
import { MicroList, Blog, Category } from '@src/entities';
import { useRouter } from 'next/router';
import { useCategory } from '@src/hooks';

type Props = {
  blogs: MicroList<Blog>;
};

const CategoryDetail: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { categories } = useCategory();
  const { blogs } = props;
  const router = useRouter();

  const onClickBlogCard = (id: string) => {
    const path = paths.blog({ blogUid: id });
    router.push(path.href, path.as);
  };
  const categoryId = router.asPath.substring(
    router.asPath.lastIndexOf('/') + 1,
    router.asPath.length,
  );

  return (
    <>
      <Header categories={categories} selectedId={categoryId} />
      <VStack bg={colors.BackGround} height='100vh'>
        <Spacer size={32} />
        <HStack
          maxW={`${650}px`}
          flexWrap='wrap'
          justifyContent='space-between'
          alignItems='flex-start'
        >
          {blogs.contents.map((blog) => {
            return <BlogCard blog={blog} onClickBlogCard={onClickBlogCard} key={blog.id} />;
          })}
        </HStack>
      </VStack>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const categories: MicroList<Category> = await microClient.get({
    endpoint: 'categories',
  });

  const paths = categories.contents.map((content) => {
    return {
      params: {
        id: content.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string | undefined;
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
    queries: { filters: `category[equals]${id}` },
  });
  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
};

export default CategoryDetail;
