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
    env: {
      MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
          config.resolve.fallback.fs = false
      }
      return config
  }
  }),
);
