import React, { FC, memo } from 'react';
import Markdown from 'markdown-to-jsx';
import { Heading, List, ListItem, Icon, ListIcon, Text, Image as _Image } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
import { sp } from '@src/styles';
import { CodeBlock } from '../CodeBlock/CodeBlock';

export const MarkdownContent: FC<{ content: string }> = memo(({ content }) => {
  console.log(content);

  return (
    <Markdown
      options={{
        wrapper: 'article',
        overrides: {
          h1: H2,
          h2: H2,
          ul: UL,
          li: Li,
          p: P,
          img: Img,
          pre: CodeBlock,
        },
      }}
    >
      {content}
    </Markdown>
  );
});

const H2: FC = ({ children }) => {
  return (
    <Heading
      as='h2'
      pb='0.2em'
      mb='1.1rem'
      mt='1.3em'
      fontSize='1.4em'
      position='relative'
      borderBottom='1px solid #5c93bb2b'
    >
      {children}
    </Heading>
  );
};

const UL: FC = ({ children }) => {
  return <List m='4px 4px 0 4px'>{children}</List>;
};

const Li: FC = ({ children }) => {
  const Circle = useCallback((props) => {
    return (
      <Icon viewBox='0 0 200 200' color='#ec1c82' boxSize='3'>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
    );
  }, []);
  return (
    <ListItem my='0.2em'>
      <ListIcon as={Circle} />
      <Text as='span' ml='8px' fontFamily='system-ui'>
        {children}
      </Text>
    </ListItem>
  );
};

const P: FC = ({ children }) => {
  return (
    <Text
      lineHeight='1.9'
      fontSize={{ base: '18px', md: '20px' }}
      fontFamily='system-ui'
      mt='1.5em'
    >
      {children}
    </Text>
  );
};

const Img: FC<{ src: string }> = (props) => {
  const src = props.src;
  return <Image src={src} width='400px' alignSelf='center' m='1.2rem auto' />;
};

const Image = styled(_Image)`
  ${sp`
      width: 100%
    `}
`;
