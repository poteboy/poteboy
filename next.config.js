const { withKumaUI } = require("@kuma-ui/next-plugin");
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	images: { unoptimized: true },
};

module.exports = withKumaUI(withContentlayer(nextConfig));
