const { withKumaUI } = require("@kuma-ui/next-plugin");
const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: false,
});

const nextConfig = {
	runtime: "edge",
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	distDir: "out",
};

module.exports = withBundleAnalyzer(withKumaUI(withContentlayer(nextConfig)));
