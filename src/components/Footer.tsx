import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="text-brand-lighter text-center font-bold  mx-24 top-0 sticky pt-4 pb-4">
			<h3>
				Delicately crafted by:{" "}
				<span>
					<Link
						href="https://twitter.com/XquisiteDreamer"
						target="_blank"
						rel="noreferrer"
					>
						Fatuma A - HijabiCoder
					</Link>
				</span>
			</h3>
			<h2>
				Using{" "}
				<span>
					<Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
						NextJs
					</Link>
				</span>
			</h2>
			<h2>
				Hosted on{" "}
				<span>
					<Link
						href="https://www.netlify.com/"
						target="_blank"
						rel="noreferrer"
					>
						Netlify
					</Link>
				</span>
			</h2>
		</div>
	);
};

export default Footer;
