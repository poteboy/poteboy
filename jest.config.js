const nextJest = require("next/jest");

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
  },
};

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})(customJestConfig);

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
module.exports = async () => {
  const jestConfig = await createJestConfig();
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    "^@src/(.*)$": "<rootDir>/src/$1",
  };

  return { ...jestConfig, moduleNameMapper };
};
