import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, memo, useCallback, useRef } from 'react';
import { VStack, Text, Box, Avatar, Button, HStack, Flex } from '@chakra-ui/react';
import { colors, BreakPoint, media } from '@src/styles';
import { Header, Spacer, BlogCard, Footer, Seo } from '@src/components';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Root: NextPage = (props) => {
  const router = useRouter();
  return <RootScreen {...props} />;
};

const onNavigateTwitter = () => window.open('https://twitter.com/_poteboy_', '_blank');
const onNavigateGitHub = () => window.open('https://github.com/poteboy', '_blank');

const RootScreen: FC = memo((props) => {
  return (
    <VStack bg={colors.BackGround}>
      <Seo />
      <Header />
      {/* <Gradient /> */}
      <VStack minH='calc(100vh - 0px)' alignContent='center' maxW={`${BreakPoint}px`} mx='auto'>
        <Spacer size={64} />
        <Avatar
          src={require('@src/public/icons/poteboy.png')}
          width='150px'
          height='150px'
          bg={colors.White}
          borderColor={colors.Disabled}
          borderWidth='1px'
          boxShadow='0 50px 100px -20px rgb(50 50 93 / 25%), 0 10px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);'
        />
        <Spacer size={24} />
        <VStack>
          <Title variant='heading0'>Hi 👋, I'm Poteboy</Title>
          <Caption variant='heading0' fontSize='1.4rem'>
            Design Engineer / Front End Developer
          </Caption>
          <Spacer size={12} />
          <IconStack gap='6px'>
            <Button
              as='a'
              onClick={onNavigateGitHub}
              cursor='pointer'
              leftIcon={<FaGithub size={24} />}
            >
              GitHub
            </Button>
            <Button
              as='a'
              onClick={onNavigateTwitter}
              cursor='pointer'
              variant='fluid'
              leftIcon={<FaTwitter size={24} />}
            >
              Twitter
            </Button>
          </IconStack>
        </VStack>
      </VStack>
      <Footer />
    </VStack>
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

const IconStack = styled(Flex)`
  ${media`
    flex-direction: column;
    gap: 10px;
  `}
`;

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
