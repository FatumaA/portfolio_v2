"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoX } from "react-icons/go";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<>
			{/* Main navigation bar + logo */}
			<div className="hidden md:block sticky top-10 z-10">
				<div className="text-brand-lighter h-4 font-bold flex justify-between items-center mx-24 my-8">
					<div className="hidden md:block">
						<Link href="/" passHref>
							<Image
								alt="Logo"
								src="/images/logo.png"
								width={52}
								height={52}
								className="cursor-pointer"
							></Image>
						</Link>
					</div>

					<div className="space-x-4 hidden md:block">
						<Link href="/#home" className="hover:text-brand-accent">
							HOME
						</Link>
						<Link href="/#about" className="hover:text-brand-accent">
							ABOUT
						</Link>
						<Link href="/#projects" className="hover:text-brand-accent">
							PROJECTS
						</Link>
						<Link href={"/blog"} className="hover:text-brand-accent">
							BLOG
						</Link>
						<Link
							href="https://www.youtube.com/c/HijabiCoder/videos"
							target="_blank"
							rel="noreferrer"
							className="hover:text-brand-accent"
						>
							VIDEOS
						</Link>
						<Link href="/#contacts" className="hover:text-brand-accent">
							CONTACTS
						</Link>
					</div>
				</div>
			</div>

			{/* Mobile navigation bar + logo */}

			<div className="top-0 h-4 sticky z-10 active:bg-bgColor-cardDark p-4 md:hidden">
				<div className="text-brand-lighter lg:hidden font-bold flex justify-between items-center mx-5 sticky z-10">
					<Link href="/" passHref>
						<Image
							alt="Logo"
							src="/images/logo.png"
							width={35}
							height={35}
							className="cursor-pointer"
						></Image>
					</Link>
					<FaBars
						style={{ display: click ? "none" : "block" }}
						onClick={handleClick}
					/>
					<GoX
						style={{ display: click ? "block" : "none" }}
						onClick={handleClick}
					/>
				</div>

				<div
					style={{ display: click ? "block" : "none" }}
					className="space-x-4 lg:hidden bg-bgColor-cardDark text-brand-lighter font-bold mx-4 md:mx-16 pt-4 pb-4 z-10"
				>
					<div className="z-10">
						<Link
							href="#home"
							onClick={handleClick}
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							HOME
						</Link>
						<Link
							href="/#about"
							onClick={handleClick}
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							ABOUT
						</Link>
						<Link
							href="/#projects"
							onClick={handleClick}
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							PROJECTS
						</Link>
						<Link
							href="/blog"
							target="_blank"
							rel="noreferrer"
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							BLOG
						</Link>
						<Link
							href="https://www.youtube.com/channel/UC2GdvJFxCkQEJCcDZTp-Dmg/videos"
							target="_blank"
							rel="noreferrer"
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							VIDEOS
						</Link>
						<Link
							href="/#contacts"
							onClick={handleClick}
							className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark"
						>
							CONTACTS
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
