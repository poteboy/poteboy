import { PersonalCard } from "@/components/personal-card";
import { Box, HStack, Image, Link, Spacer, Text, VStack } from "@kuma-ui/core";
import type { FC } from "react";

export default function Home() {
	return (
		<Box>
			<Spacer size={20} />
			<PersonalCard border={false} />
			<Spacer size={20} />
			<HStack justify="space-evenly">
				{images.map((image) => {
					return (
						<Box position="relative" width="40%" height={152} key={image.src}>
							<Image
								src={image.src}
								borderRadius={20}
								height={152}
								objectFit="cover"
								alt={image.alt}
								position="absolute"
								width="100%"
								aria-labelledby={image.location}
							/>
							<Text
								fontSize={10}
								px={10}
								height={24}
								bottom={10}
								left={10}
								zIndex={2}
								bg="black"
								color="white"
								position="absolute"
								display="flex"
								alignItems="center"
								borderRadius={8}
								boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1)"
								id={image.location}
							>
								{image.location}
							</Text>
						</Box>
					);
				})}
			</HStack>
			<Spacer size={40} />
			<VStack px={["0px", "2rem"]} gap={20}>
				<ProjectCard
					title="Kuma UI"
					description="🐻‍❄️ A Headless, Utility-First, and Zero-Runtime UI Component Library ✨"
					image="/kuma.png"
					role="Author"
					link="https://www.kuma-ui.com/"
				/>
				<ProjectCard
					title="Million.js"
					description="The Virtual DOM Replacement for React."
					image="/million.svg"
					role="Core Contributor"
					link="https://million.dev/"
				/>
			</VStack>
		</Box>
	);
}

const images = [
	{
		src: "/palm-tree.jpg",
		alt: "Palm Tree found in Hawaii",
		location: "Hawaii",
	},
	{
		src: "/vibrant-sky.jpg",
		alt: "a vibrant sky tinged with shades of pink and purple",
		location: "Kobe",
	},
];

const ProjectCard: FC<{
	title: string;
	description: string;
	image: string;
	link: string;
	role: "Author" | "Core Contributor";
}> = ({ title, description, image, link, role }) => {
	return (
		<Link target="_blank" rel="noopener" href={link} textDecoration="none">
			<HStack
				borderRadius={24}
				boxShadow="0 2px 4px rgba(0,0,0,.04)"
				border="1px solid #ebebeb"
				padding="1rem"
				alignItems="center"
				_hover={{
					bg: "#f7f9fb",
				}}
			>
				<Image
					src={image}
					width={40}
					height={40}
					borderRadius={16}
					alt={title}
					mr={16}
				/>
				<VStack as="dl" gap={8} alignItems="flex-start">
					<HStack>
						<Text as="dt" color="black">
							{title}
						</Text>
						<Text
							display="flex"
							alignItems="center"
							height={24}
							fontSize={12}
							px={10}
							borderRadius={12}
							bgColor="#f6f6f6"
							whiteSpace="nowrap"
							textOverflow="ellipsis"
							color="#555"
							textDecoration="none"
							ml={8}
						>
							{role}
						</Text>
					</HStack>
					<Text as="dd" color="#595f63" fontSize={14}>
						{description}
					</Text>
				</VStack>
			</HStack>
		</Link>
	);
};
