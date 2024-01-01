"use client";
import { inlineStyle } from "@/lib/inlineStyle";
import { Box, css, k } from "@kuma-ui/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconDisplay, IconNotebook, IconUser } from "./icons";

/**
 * スマホ用のメニューボタン。左下配置
 */
export const MenuButton = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsOpen(false);
	}, [pathname, setIsOpen]);

	useEffect(() => {
		/**
		 * Menuコンポーネントの外側をクリックしたらメニューを閉じる
		 */
		const handleClick = (e: MouseEvent): void => {
			if (!menuRef.current) return;
			if (!isOpen) return;
			if (menuRef.current.contains(e.target as Node)) return;
			setIsOpen(false);
		};
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, [isOpen]);

	return (
		<Box
			display={["inline-flex", "none"]}
			position="fixed"
			left="1rem"
			bottom="2.25rem"
			zIndex={6}
			ref={menuRef}
			style={inlineStyle({
				"--button-height": "56px",
			})}
		>
			{isOpen && (
				<Box
					as="nav"
					className={css`
                    position: absolute;
                    width: 238px;
                    border-radius: 1rem;
                    animation: slideUp .25s ease both;;
                    bottom: calc(var(--button-height) + 1rem);
                    background: white;
                    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 0 1px rgba(0,0,0,.09),0 3px 6px -2px rgba(0,0,0,.06);
                    padding: 1rem;
                    @keyframes slideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}
				>
					<k.ul listStyleType="none" padding="0px">
						{links.map((link) => (
							<k.li key={link.href} p="0.5rem">
								<Link
									href={link.href}
									className={css`
                                    text-decoration: none;
                                    color: inherit;
                                    display: flex;
                                    flex-direction: row;
                                `}
									onClick={() => {
										if (pathname === link.href) setIsOpen(false);
									}}
								>
									{link.icon}
									<k.span
										className={css`
                                    margin-left: 1rem;
                                    `}
									>
										{link.name}
									</k.span>
								</Link>
							</k.li>
						))}
					</k.ul>
				</Box>
			)}
			<Box
				height="var(--button-height)"
				backdropFilter="blur(4px)"
				boxShadow="0 0 #0000, 0 0 #0000, 0 0 0 1px rgba(0,0,0,.09),0 3px 6px -2px rgba(0,0,0,.06);"
				borderRadius="99px"
				bg="hsla(0,0%,100%,.8)"
				transition="transform 150ms ease"
				className={css`
                &:active {
                    transform: scale(0.9);
                }
            `}
				style={{
					background: isOpen ? "white" : "hsla(0,0%,100%,.8)",
				}}
			>
				<Box height="100%" aspectRatio="1/1">
					<k.button
						background="transparent"
						border="none"
						placeItems="center"
						height="100%"
						width="100%"
						borderRadius="99px"
						aria-label="Menu Button"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 512 512"
							aria-hidden="true"
							width="26"
							className={css`margin: auto;`}
						>
							<path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" />
						</svg>
					</k.button>
				</Box>
			</Box>
		</Box>
	);
};

const links = [
	{
		name: "Home",
		href: "/",
		icon: <IconDisplay height={24} width={24} color="#555" title="Home" />,
	},
	{
		name: "Profile",
		href: "/profile",
		icon: <IconUser height={24} width={24} color="#555" title="Profile" />,
	},
	{
		name: "Blog",
		href: "/posts",
		icon: <IconNotebook height={24} width={24} color="#555" title="Blog" />,
	},
];
