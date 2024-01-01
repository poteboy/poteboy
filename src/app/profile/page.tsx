import {
	Box,
	HStack,
	Heading,
	Image as KImage,
	Spacer,
	Text,
	VStack,
	css,
} from "@kuma-ui/core";
import Image from "next/image";
import React from "react";

export default function Profile() {
	return (
		<Box>
			<Spacer size={40} />
			<Box position="relative" width={120} height={120}>
				<Image
					src="/me2.webp"
					alt="personal picture of poteboy"
					objectFit="contain"
					fill
					className={css`border-radius: 50%;`}
				/>
			</Box>
			<VStack mt={10} gap={8}>
				<Heading fontSize={24} fontWeight={500}>
					poteboy
				</Heading>
				<Text color="#555">Indie Hacker ・ 🇯🇵 ・ He/Him</Text>
			</VStack>
			<Spacer size={28} />
			<Section title="Open Source Projects">
				<HStack gap={[20]} flexWrap="wrap">
					{openSourceProjects.map((pl) => (
						<Box
							borderRadius={24}
							boxShadow="0 2px 4px rgba(0,0,0,.04)"
							border="1px solid #ebebeb"
							padding={["1rem", "1.5rem"]}
							alignItems="center"
							width={[140, 178]}
							height={[140, 178]}
							key={pl.name}
						>
							<VStack justify="space-between" height="100%">
								<Box>
									<Image
										width={40}
										height={40}
										src={pl.logo}
										className={css`border-radius: 10px;`}
										alt={pl.name}
									/>
									<Text mt="0.75rem" fontSize=".875rem">
										{pl.name}
									</Text>
									<Text
										fontSize="12px"
										lineHeight="16px"
										color="rgba(0,0,0,.6)"
										mt="0.25rem"
									>
										{pl.role}
									</Text>
								</Box>
							</VStack>
						</Box>
					))}
					<Box
						borderRadius={24}
						boxShadow="0 2px 4px rgba(0,0,0,.04)"
						border="1px solid #ebebeb"
						alignItems="center"
						flex={1}
						width={[140, 178]}
						height={[140, 178]}
						minWidth={[140, 178]}
						position="relative"
					>
						<KImage
							src="/landscape/traffic-light.jpg"
							objectFit="cover"
							alt="traffic light"
							width="100%"
							height="100%"
							borderRadius={24}
							aria-labelledby="traffic-light"
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
							id="traffic-light"
						>
							California
						</Text>
					</Box>
				</HStack>
			</Section>
			<Spacer size={28} />
			<Section title="Programming Lanugages">
				<HStack gap="20px">
					<Box
						width={["44%", "33%"]}
						position="relative"
						aria-labelledby="namiki"
					>
						<Image
							alt="namiki street"
							objectFit="cover"
							fill
							src="/landscape/namiki.webp"
							className={css`border-radius: 24px;`}
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
							id="namiki"
						>
							Tokyo
						</Text>
					</Box>
					<VStack gap={[20]} flexWrap="wrap" flex={1}>
						{programmingLanguages.map((pl) => (
							<Box
								borderRadius={24}
								boxShadow="0 2px 4px rgba(0,0,0,.04)"
								border="1px solid #ebebeb"
								padding={["1rem", "1.5rem"]}
								alignItems="center"
								width="100%"
								height={[128]}
								style={{ backgroundColor: pl.color }}
								key={pl.name}
							>
								<VStack justify="space-between" height="100%">
									<Box>
										<Image
											width={40}
											height={40}
											src={pl.logo}
											className={css`border-radius: 10px;`}
											alt={pl.name}
											loading="lazy"
										/>
										<Text mt="0.75rem" fontSize=".875rem">
											{pl.name}
										</Text>
									</Box>
								</VStack>
							</Box>
						))}
					</VStack>
				</HStack>
			</Section>
			<Spacer size={28} />
			<Section title="Experience">
				<VStack gap={20}>
					{experiences.map((exp) => (
						<Box
							borderRadius={24}
							boxShadow="0 2px 4px rgba(0,0,0,.04)"
							border="1px solid #ebebeb"
							padding={["1rem", "1.5rem"]}
							alignItems="center"
							width="100%"
							height={[128]}
							key={exp.name}
						>
							<HStack gap="1.5rem" height="100%" alignItems="center">
								<Image
									width={40}
									height={40}
									src={exp.logo}
									className={css`border-radius: 10px;`}
									alt={exp.name}
								/>
								<VStack>
									<Text fontSize=".875rem">{exp.name}</Text>

									<Text
										fontSize="12px"
										lineHeight="16px"
										color="rgba(0,0,0,.6)"
										mt="0.25rem"
									>
										{exp.role}, {exp.start} - {exp.end}
									</Text>
								</VStack>
							</HStack>
						</Box>
					))}
				</VStack>
			</Section>
			<Spacer size={28} />
			<Section title="Speaking">
				<Box
					borderRadius={24}
					boxShadow="0 2px 4px rgba(0,0,0,.04)"
					border="1px solid #ebebeb"
					padding={["1rem", "1.5rem"]}
					alignItems="center"
					width={[140, 178]}
					height={[140, 178]}
					bg="#fdf6f6"
				>
					<Image
						width={40}
						height={40}
						src="/jsconf.png"
						className={css`border-radius: 10px;`}
						alt="jsconf logo"
					/>
					<VStack>
						<Text mt="0.75rem" fontSize=".875rem">
							JSConf JP
						</Text>
						<Text
							fontSize="12px"
							lineHeight="16px"
							color="rgba(0,0,0,.6)"
							mt="0.25rem"
						>
							2023
						</Text>
					</VStack>
				</Box>
			</Section>
			<Spacer size={100} />
		</Box>
	);
}

const programmingLanguages = [
	{
		name: "JavaScript",
		logo: "/programming-languages/JavaScript.webp",
		color: "#fffcea",
		yearsOfExperience: 6,
	},
	{
		name: "TypeScript",
		logo: "/programming-languages/Typescript.webp",
		color: "#f3f9ff",
		yearsOfExperience: 5,
	},
	{
		name: "Rust",
		logo: "/programming-languages/Rust.webp",
		color: "#fbf2eb",
		yearsOfExperience: 1,
	},
];

const openSourceProjects = [
	{
		name: "Kuma UI",
		logo: "/kuma.png",
		color: "#fbfdff",
		role: "Creator",
	},
	{
		name: "Million.js",
		logo: "/million.svg",
		color: "#f6f6fd",
		role: "Maintainer",
	},
];

const experiences = [
	{
		name: "THECOO, Inc.",
		logo: "/company/thecoo.jpeg",
		start: "2022",
		end: "Present",
		role: "Frontend Tech Lead",
	},
	{
		name: "MICIN, Inc.",
		logo: "/company/micin.webp",
		start: "2020",
		end: "2022",
		role: "Full Stack Developer",
	},
];

const Section = ({
	title,
	children,
}: { title: string; children: React.ReactNode }) => {
	return (
		<Box as="section">
			<Heading
				as="h2"
				fontSize="1.125rem"
				lineHeight="1.75rem"
				fontWeight={500}
				py="1rem"
				px=".5rem"
			>
				{title}
			</Heading>
			{children}
		</Box>
	);
};
