const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  // 参考：https://zenn.dev/catnose99/scraps/661d77118aa2af
});
const withImages = require("next-images");

module.exports = withImages(
  withBundleAnalyzer({
    // distDir: "build",
    trailingSlash: true,
    // pageExtensions: ["page.tsx"],
    headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
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
