"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface IProj {
	projectImgUrl: string;
	projImgSrc: string;
	projImgAlt: string;
	projStack: string;
	projDesc: string;
	projTextLink: string;
	projCodeUrl: string;
}

export interface IBlog {
	title: string;
	brief: string;
	slug: string;
	subtitle: string;
	coverImage: {
		url: string;
	};
}

type CardInfo = IProj | IBlog;

function Card({ cardInfo }: { cardInfo: CardInfo }) {
	const isProj = "projDesc" in cardInfo;
	return (
		<>
			{isProj ? (
				<div
					className="card rounded-sm"
					onClick={() => window.open(cardInfo.projectImgUrl, "_blank")}
				>
					<Image
						className="rounded-sm"
						src={cardInfo.projImgSrc}
						alt="screenshot"
						width={200}
						height={80}
					/>
					<h3 className="my-4 text-gray-200 font-extrabold">
						{cardInfo.projStack}
					</h3>
					<p className="mt-2 mb-4"> {cardInfo.projDesc} </p>
					<a
						href={cardInfo.projCodeUrl}
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 font-semibold hover:scale-50"
					>
						{cardInfo.projTextLink}
					</a>
				</div>
			) : (
				<Link
					className="card flex flex-col justify-between"
					href={`/${cardInfo.slug}`}
				>
					<div className="h-48">
						<Image
							src={cardInfo!.coverImage.url}
							alt="screenshot"
							width="200"
							height="200"
							className="h-full w-full object-cover rounded-md"
						/>
					</div>
					<h2 className="text-2xl my-4 text-gray-200 font-extrabold">
						{cardInfo!.title}
					</h2>
					<p className="mt-2 mb-4 overflow-auto">
						{cardInfo!.brief.substring(0, 120) + "..."}
					</p>
					<a
						href={"https://blog.hijabicoder.dev/" + cardInfo!.slug}
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 font-semibold hover:scale-110 self-end"
					>
						Read More
					</a>
				</Link>
			)}
		</>
	);
}

export default Card;
