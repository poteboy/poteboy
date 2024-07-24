import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { Box, css, Heading, HStack, Spacer, Text, VStack } from "@kuma-ui/core";
import type { MDXComponents } from "mdx/types";
import { Code } from "bright";
import type { ReactNode } from "react";
import { PersonalCard } from "@/components/personal-card";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Remark } from "@/components/remark";
import Image, { type ImageProps } from "next/image";
import { ShareCardFooter } from "./share-card-footer";
import { Category, isCategory, pickCategoryColor } from "@/lib/category";

const Mermaid = dynamic(() => import("@/components/mermaid"), {
  ssr: false,
  loading: () => <div />,
});

export async function generateStaticParams() {
  return allPosts
    .filter((p) => p.published)
    .map((post) => ({
      slug: post._raw.flattenedPath,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const post = allPosts.find((p) => p._raw.flattenedPath === slug);

  if (!post) {
    throw new Error("Post not found");
  }

  const origin = "https://poteboy.dev";

  return {
    title: `${post.title} | poteboy`,
    description: post.title + post.emoji,
    openGraph: {
      images: [
        {
          url: `${origin}/posts/${slug}/opengraph-image.png`,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts
    .filter((p) => p.published)
    .find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  const formattedDate = new Date(post.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const category: Category = isCategory(post.category)
    ? post.category
    : "diary";

  return (
    <Box
      className={css`
        div > pre {
          border-radius: 16px;
        }
      `}
      id="post-content"
    >
      <Spacer size={80} />
      <Text
        as="div"
        textAlign="center"
        fontSize="2.2em"
        role="img"
        marginBottom={10}
        aria-labelledby="post-title"
      >
        {post.emoji}
      </Text>
      <Heading fontSize={["1.6em", "1.9em"]} fontWeight={500} id="post-title">
        {post.title}
      </Heading>
      <Spacer size={12} />
      <HStack gap={16} alignItems="center">
        <Text
          color="rgba(0,0,0,.6)"
          fontSize="1em"
          as="time"
          dateTime={post.date}
        >
          {formattedDate}
        </Text>
        <Text
          as="span"
          aria-label="category"
          fontSize="12px"
          paddingX={6}
          paddingY={2}
          borderRadius={8}
          style={{
            backgroundColor: pickCategoryColor(category),
            color: "white",
          }}
        >
          {category}
        </Text>
      </HStack>
      <Spacer size={56} />
      <article className="mdx-post-content">
        <MDXContent components={mdxComponents} />
        <Spacer size={32} />
        <ShareCardFooter
          url={`https://poteboy.dev/posts/${params.slug}`}
          title={encodeURIComponent(`${post.title} | poteboy`)}
        />
        <Spacer size={16} />
      </article>
      <Spacer size={40} />
      <PersonalCard border />
      <Spacer size={100} />
    </Box>
  );
}

const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <Heading
      color="black"
      className={css`
        font-size: 1.5em;
        font-weight: 600;
        margin-top: 2em;
        margin-bottom: 1em;
        border-bottom: 1px solid #d6e3ed;
        padding-bottom: 0.3em;
        @media screen and (max-width: 576px) {
          font-size: 1.3em;
        }
      `}
    >
      <a
        className={css`
          text-decoration: none;
          color: inherit;
        `}
        href={`#${encodeURIComponent(children as string)}`}
      >
        {children}
      </a>
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading
      color="black"
      className={css`
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 1em;
        margin-bottom: 1em;
        @media screen and (max-width: 576px) {
          font-size: 1em;
        }
      `}
    >
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text
      className={css`
        font-size: 17px;
        line-height: 32px;
        margin-bottom: 1.5em;
        font-weight: 400;
      `}
    >
      {children}
    </Text>
  ),
  code: ({ children }) => (
    <Text
      as="code"
      className={css`
        padding: 0.3em 0.5em;
        background: #215aa012;
        font-size: 0.85em;
        border-radius: 4px;
        vertical-align: 0.08em;
      `}
    >
      {children}
    </Text>
  ),
  a: ({ children, href }) => (
    <Text
      as="a"
      href={href}
      color="#489bff"
      textDecoration="none"
      fontWeight="500"
      _hover={{
        textDecoration: "underline",
      }}
    >
      {children}
    </Text>
  ),
  blockquote: ({ children }) => (
    <Text
      as="blockquote"
      className={css`
        font-size: 1.2em;
        padding: 8px 16px;
        margin-block: 24px;
        color: rgb(0 0 0 / 60%);
        position: relative;
        &::before {
          background-color: #dfe0e0;
          border-radius: 4px;
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 4px;
        }
        > p {
          margin: 0 !important;
        }
      `}
    >
      {children}
    </Text>
  ),
  pre: ({ children }) => {
    const c = children as {
      props: {
        children: ReactNode;
        className: string;
      };
    };
    const language = c.props.className.replace("language-", "");

    if (language === "mermaid") {
      const src = c.props.children?.toString().trimEnd() || "";
      return <Mermaid src={src} key={src} />;
    }

    if (language === "remark") {
      const children = c.props.children?.toString().trimEnd() || "";
      return <Remark>{children}</Remark>;
    }

    return (
      <Code lang={language}>{c.props.children?.toString().trimEnd()}</Code>
    );
  },
  ol: ({ children }) => (
    <VStack
      as="ol"
      gap={4}
      className={css`
        font-size: 17px;
        line-height: 32px;
        margin-bottom: 1.5em;
        font-weight: 400;
        margin-inline: 12px;
        margin-bottom: 1.5em;
      `}
    >
      {children}
    </VStack>
  ),
  img: async (props) => {
    return (
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 600, height: "auto", margin: "1.5rem auto" }}
        {...(props as ImageProps)}
      />
    );
  },
};
