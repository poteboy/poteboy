const path = require("path");
const { mergeConfig } = require("vite");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chakra-ui/storybook-addon",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    emotionAlias: false,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          preserveSymlinks: true,
          "@src": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};
