import { withKumaUI } from "@kuma-ui/next-plugin";
import withMDX from "@next/mdx";

const nextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	images: { unoptimized: true },
};

export default withMDX()(withKumaUI(nextConfig));
