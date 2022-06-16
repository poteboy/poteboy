import React, { FC, memo } from 'react';
import { HStack, Container, Flex, Button, Text, Image, VStack, css } from '@chakra-ui/react';
import { colors, sp, MAX_MOBILE_WIDTH } from '@src/styles';
import Link from 'next/link';
import styled, { CSSProperties } from 'styled-components';
import { paths } from '@src/constants';
import Title from '@src/public/title/main-title.png';
import { Category } from '@src/entities';
import { useRouter } from 'next/router';
import { useWindowSize } from '@src/hooks';

type Props = {
  topic?: 'blog' | 'about';
};

const SLECTED_STYLE: CSSProperties = {
  color: colors.Fonts.Default,
  boxShadow: `0 2px 0 ${colors.Primary.Main}`,
};
const DEFAULT_STYLE: CSSProperties = { color: colors.Fonts.Sub };
export const Header: FC<Props> = memo(({ topic }) => {
  const { width } = useWindowSize();

  return (
    <Flex as='header' w='100%' bg='hsla(0,0%,100%,0.6)'>
      <ContentBar maxW={'83ch'} py='12px'>
        <HStack mx='auto' py='4px' justifyContent='space-between'>
          <Link {...paths.index}>
            <Text
              fontSize={width && width < MAX_MOBILE_WIDTH ? '26' : '22px'}
              fontWeight={700}
              color='#242d4a'
              cursor='pointer'
            >
              🏠 {width && width < MAX_MOBILE_WIDTH ? '' : 'HOME'}
            </Text>
          </Link>
          <HStack as='nav' gap='20px'>
            <Link {...paths.blog}>
              <a>
                <Text
                  as='li'
                  listStyleType='none'
                  variant='button1'
                  cursor='pointer'
                  style={topic === 'blog' ? SLECTED_STYLE : DEFAULT_STYLE}
                  _hover={{
                    color: `${colors.Fonts.Default} !important`,
                  }}
                >
                  {width && width < MAX_MOBILE_WIDTH ? '' : '⭐️'} BLOG
                </Text>
              </a>
            </Link>
            <Link {...paths.index}>
              <a>
                <Text
                  as='li'
                  listStyleType='none'
                  variant='button1'
                  cursor='pointer'
                  style={topic === 'about' ? SLECTED_STYLE : DEFAULT_STYLE}
                  _hover={{
                    color: `${colors.Fonts.Default} !important`,
                  }}
                >
                  {width && width < MAX_MOBILE_WIDTH ? '' : '👻'} ABOUT
                </Text>
              </a>
            </Link>
          </HStack>
        </HStack>
      </ContentBar>
    </Flex>
  );
});

const ContentBar = styled<any>(Container)`
  ${sp`
    max-width: ${MAX_MOBILE_WIDTH}px;
  `}
`;

const Topic = styled(Text)`
  ${sp`
    font-size: 
  `}
`;
