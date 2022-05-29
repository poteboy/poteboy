const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withImages = require("next-images");

module.exports = withImages(
  withBundleAnalyzer({
    pageExtensions: ["page.tsx"],
    images: {
      disableStaticImages: true,
    },
    eslint: {
      dirs: ["*/*", "src/*"],
    },
  })
);
