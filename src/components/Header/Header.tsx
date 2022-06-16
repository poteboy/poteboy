import React, { FC, memo } from 'react';
import { HStack, Container, Flex, Button, Text, Image, VStack } from '@chakra-ui/react';
import { colors, sp, MAX_MOBILE_WIDTH } from '@src/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { paths } from '@src/constants';
import Title from '@src/public/title/main-title.png';
import { Category } from '@src/entities';
import { useRouter } from 'next/router';

type Props = {}

export const Header: FC<Props> = memo(() => {
  return (
    <Flex as='header' w='100%'>
      <ContentBar maxW={'1200px'} py='12px'>
        <HStack  mx='auto' py='4px'>
          <Link {...paths.index}>
          <Text variant='heading2' color='#242d4a' cursor='pointer'>🏠 HOME</Text>
          </Link>
        </HStack>
      </ContentBar>
      </Flex>
  );
});

const ContentBar = styled<any>(Container)`
  backdrop-filter: saturate(50%) blur(8px);
  ${sp`
    max-width: ${MAX_MOBILE_WIDTH * 0.8}px;
  `}
`;
