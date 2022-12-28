import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
} from "next/document";
import React from "react";
import DefaultImg from "@src/public/ogp.png";

// 何故かこれがあると動かないから一旦.page拡張子を外している
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta http-equiv="Expires" content="86400" />
          {/* OGP */}
          <meta property="og:locale" content="ja_JP" />
          <meta
            property="og:site_name"
            content={require("@src/public/ogp.png")}
          />
          <meta property="og:url" content="https://poteboy.com/" />
          <meta property="og:image" content={DefaultImg} />
          <meta property="og:title" content="poteboy" />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require("@src/public/favicons/apple-touch-icon.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require("@src/public/favicons/favicon-32x32.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require("@src/public/favicons/favicon-16x16.png")}
          />
          <link
            rel="mask-icon"
            href={require("@src/public/favicons/safari-pinned-tab.svg")}
            color="#000000"
          />
          <link
            rel="shortcut icon"
            href={require("@src/public/favicons/favicon.ico")}
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
