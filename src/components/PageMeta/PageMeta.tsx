import Head from "next/head";
import { FC, useEffect, useMemo } from "react";
import OGPImage from "@src/public/ogp.png";

type PageMetaProps = {
  title?: string;
  description?: string;
};

export const PageMeta: FC<PageMetaProps> = (props) => {
  const domain = useMemo(() => {
    if (typeof document === "undefined") return "c";
    else return document.domain ?? "https://www.poteboy.com";
  }, []);

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        property="og:image"
        content={`https://www.poteboy.com${OGPImage}`}
      />
      <meta
        property="twitter:image"
        content={`https://www.poteboy.com${OGPImage}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

PageMeta.defaultProps = {
  title: "Poteboy",
  description: "poteboyのサイト",
};
