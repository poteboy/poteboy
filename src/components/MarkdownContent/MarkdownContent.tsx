import React, { FC, memo } from 'react';
import Markdown from 'markdown-to-jsx';
import { Heading } from '@chakra-ui/react';

export const MarkdownContent: FC<{ content: string }> = memo(({ content }) => {
  return (
    <Markdown
      options={{
        wrapper: 'article',
        overrides: {
          h2: H2,
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
      pb="0.2em"
      mb="1.1rem"
      fontSize="1.7em"
      position="relative"
      borderBottom="1px solid #5c93bb2b"
    >
      {children}
    </Heading>
  );
};
