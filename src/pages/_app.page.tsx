import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ケンコウイチバン</title>
        <meta
          name="description"
          content="ケンコウイチバンは日々の暮らしをより健康に過ごすためのお役立ち情報を発信する総合メディアです。"
        />
        {/* OGP */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="ケンコウイチバン" />
        {/* <meta property="og:url" content="https://poteboy.com/" /> */}
        <meta property="og:title" content="ケンコウイチバン" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
