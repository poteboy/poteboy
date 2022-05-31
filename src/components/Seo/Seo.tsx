import React, { FC, memo } from 'react';
import Head from 'next/head';
import DefaultImg from '@src/public/title/main-title.png';

const defaultTitle = 'ケンコウイチバン';
const defaultDescription =
  'ケンコウイチバンは日々の暮らしをより健康に過ごすためのお役立ち情報を発信する総合メディアです。';

type SeoProps = {
  title?: string;
  description?: string;
  img?: any;
  imgWidth?: number;
  imgHeight?: number;
};

export const Seo: FC<SeoProps> = memo(
  ({
    title: _title,
    description: _desciption,
    img: _img,
    imgWidth,
    imgHeight,
  }) => {
    const title = _title ? `${_title} - ${defaultTitle}` : defaultTitle;
    const description = _desciption ?? defaultDescription;
    const img = _img ?? DefaultImg;
    const width = imgWidth ?? 1280;
    const height = imgHeight ?? 640;

    return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        {/* OGP */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content={title} />
        {/* <meta property="og:url" content="https://poteboy.com/" /> */}
        <meta property="og:title" content={title} />
        <meta property="og:image" content={img} />
        <meta property="og:image:width" content={String(width)} />
        <meta property="og:image:height" content={String(height)} />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={require('@src/public/favicons/apple-touch-icon.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={require('@src/public/favicons/favicon-32x32.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require('@src/public/favicons/favicon-16x16.png')}
        />
        {/* <link
          rel="manifest"
          href={require('@src/public/favicons/site.webmanifest')}
        /> */}
        <link
          rel="mask-icon"
          href={require('@src/public/favicons/safari-pinned-tab.svg')}
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href={require('@src/public/favicons/favicon.ico')}
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    );
  },
);
