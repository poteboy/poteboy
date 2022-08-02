import type { NextPage } from 'next';
import { Seo, Header } from '@src/components';
import { VStack } from '@chakra-ui/react';

const Works: NextPage = () => {
  return (
    <VStack>
      <Seo />
      <Header />
    </VStack>
  );
};

export default Works;
