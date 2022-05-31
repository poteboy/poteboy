import React, { FC, memo } from 'react';
import { Spacer } from '../Spacer/Spacer';
import { VStack, StackProps } from '@chakra-ui/react';
import { colors, tab, sp, MAX_MOBILE_WIDTH } from '@src/styles';
import styled from 'styled-components';

export const ContentContainer: FC<StackProps> = memo(
  ({ children, ...style }) => {
    return (
      <VStack bg={colors.BackGround} minH="100vh" pb={8}>
        <Spacer size={32} />
        <VStack w="100%" maxW="1120px">
          <BlogContainer
            bg={colors.White}
            p="0px 64px 60px"
            w="calc(100% - 330px)"
            boxShadow="0 2px 4px #4385bb12"
            borderRadius="12px"
            {...style}
          >
            {children}
          </BlogContainer>
        </VStack>
      </VStack>
    );
  },
);

const BlogContainer = styled(VStack)`
  ${tab`
    width: 100%;
    padding: 0px 30px 30px
  `}
  ${sp`
    width: auto;
    padding: 0px 30px 30px;
  `}
`;
