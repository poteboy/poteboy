import { TootTip } from "@/components/tool-tip";
import { Box, HStack, VStack, css, k } from "@kuma-ui/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import "./global.css";
import { IconDisplay, IconNotebook, IconUser } from "./icons";
import { MenuButton } from "./menu-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "poteboy",
	description: "Dreaming on Open Source 🤞",
	metadataBase: new URL("https://poteboy.pages.dev/"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<k.body className={inter.className}>
				<HStack minHeight="100vh" width="100%" position="relative">
					<SideBar />
					<k.main mx="auto" px={["1.5rem", "2.5rem"]} width="849px">
						{children}
					</k.main>
				</HStack>
				<MenuButton />
			</k.body>
		</html>
	);
}

const SideBar = () => {
	return (
		<Box
			as="aside"
			width="60px"
			boxShadow="1px 0 0 0 rgba(0,0,0,.08)"
			height="100vh"
			position="sticky"
			alignItems="center"
			top={0}
			flexDir="column"
			display={["none", "flex"]}
		>
			<VStack
				as="ul"
				className={css`row-gap: 28px; margin: auto 0; list-style-type: none; padding: 0px;`}
			>
				<k.li p={2}>
					<Link href="/">
						<TootTip caption="Home">
							<IconDisplay height={24} width={24} color="#555" title="Home" />
						</TootTip>
					</Link>
				</k.li>
				<k.li p={2}>
					<Link href="/profile">
						<TootTip caption="Profile">
							<IconUser height={24} width={24} color="#555" title="Profile" />
						</TootTip>
					</Link>
				</k.li>
				<k.li p={2}>
					<Link href="/posts">
						<TootTip caption="Blog">
							<IconNotebook height={24} width={24} color="#555" title="Blog" />
						</TootTip>
					</Link>
				</k.li>
			</VStack>
		</Box>
	);
};
