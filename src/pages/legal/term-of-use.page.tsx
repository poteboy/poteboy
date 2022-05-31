import { Heading, VStack, Text, Box } from '@chakra-ui/react';
import { Footer, Header, ContentContainer, Spacer } from '@src/components';
import { useCategory } from '@src/hooks';
import { colors, tab, sp, pc } from '@src/styles';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const TermOfUse: NextPage = () => {
  const { categories } = useCategory();

  return (
    <>
      <Header categories={categories} />
      <VStack bg={colors.BackGround} minH="80vh" alignItems="center">
        <Spacer size={32} />
        <ContentContainer>
          <Heading as="h1" variant="title" textAlign="center">
            利用規約
          </Heading>
          <Text>TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST</Text>
        </ContentContainer>
      </VStack>
      <Footer />
    </>
  );
};

export default TermOfUse;

const DefaultContainer = styled(Box)`
  ${sp`
      padding: 0px;
      max-width: 100%;
    `}
  ${tab`
      padding: 0 25px;
      max-width: 100%;
    `} /* ${pc`
    max-width: 100%;
  `} */
`;

const ContentBox = styled(Box)`
  ${sp`
      padding: 0 20px;
    `}
`;
