import Head from "next/head";
import { FC } from "react";

type PageMetaProps = {
  title?: string;
  description?: string;
};

export const PageMeta: FC<PageMetaProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
};

PageMeta.defaultProps = {
  title: "Poteboy",
  description: "poteboyの実験場兼お気持ち表明ブログ",
};
