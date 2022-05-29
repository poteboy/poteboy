import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, memo } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header } from '@src/components';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client as microClient } from '@src/constants';
import { BlogList } from '@src/entities';

type Props = {
  blogList: BlogList;
};

const Root: NextPage<Props> = props => {
  return <RootScreen {...props} />;
};

type ScreenProps = {} & Props;

const RootScreen: FC<ScreenProps> = memo(() => {
  return (
    <>
      <Header />
      <VStack bg={colors.BackGround} height="100vh" justifyContent="center">
        <Text>hello</Text>
        <Button>hello</Button>
      </VStack>
    </>
  );
});

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogList: BlogList = await microClient.get({ endpoint: 'blogs' });

  return {
    props: {
      blogList,
    },
  };
};

export default Root;
