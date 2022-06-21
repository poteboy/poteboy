import React, { FC, memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock: FC<{
  children: {
    props: {
      children: any;
    };
  };
  className: string;
}> = ({ children }) => {
  return (
    <SyntaxHighlighter
      style={tomorrow}
      language={'tsx'}
      children={String(children.props.children).replace(/\n$/, '')}
    />
  );
};
