// @ts-check

const { withKumaUI } = require("@kuma-ui/next-plugin");
const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

const withMDX = require("@next/mdx")({
  options: {
    rehypePlugins: [
      [
        // @ts-ignore
        import("rehype-pretty-code"),
      ],
    ],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(
  withKumaUI(withContentlayer(withMDX(nextConfig))),
);
