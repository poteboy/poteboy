import { k } from "@kuma-ui/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "poteboy.com",
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
			<k.body
				className={inter.className}
				minHeight="100vh"
				width="100%"
				mx="auto"
				px={["1.5rem", "2.5rem"]}
				maxWidth="849px"
			>
				{children}
			</k.body>
		</html>
	);
}
