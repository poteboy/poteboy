const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  // 参考：https://zenn.dev/catnose99/scraps/661d77118aa2af
});
const withImages = require("next-images");

module.exports = withImages(
  withBundleAnalyzer({
    // distDir: "build",
    trailingSlash: true,
    pageExtensions: ["page.tsx"],
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
      };
    },
    images: {
      disableStaticImages: true,
    },
    eslint: {
      dirs: ["*/*", "src/*"],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      // config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
      return config;
    },
  })
);
