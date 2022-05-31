import { Heading, VStack, Text, Box } from '@chakra-ui/react';
import { Footer, Header, ContentContainer } from '@src/components';
import { useCategory } from '@src/hooks';
import { colors, tab, sp, pc } from '@src/styles';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

export const LegalContainer: React.FC = React.memo(({ children }) => {
  return (
    <>
      <DefaultContainer maxW="880px" m="0 auto" p="0 40px">
        <Box as="article" boxSizing="inherit" display="block">
          <ContentBox borderRadius="16px" bg={colors.White} p="30px 60px 40px">
            {children}
          </ContentBox>
        </Box>
      </DefaultContainer>
    </>
  );
});

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
      padding: 30px 20px;
    `}
`;
