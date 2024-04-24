"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/types";

export interface IProj {
	projectImgUrl: string;
	projImgSrc: string;
	projImgAlt: string;
	projStack: string;
	projDesc: string;
	projTextLink: string;
	projCodeUrl: string;
}

type CardInfo = IProj | IBlog;

// interface CardProps {
// 	isInDialog?: boolean;
// }

function Card({
	cardInfo,
	isInDialog,
}: {
	cardInfo: CardInfo;
	isInDialog?: boolean;
}) {
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
					className="card flex flex-col mb-6 justify-between"
					href={`https://blog.hijabicoder.dev/${cardInfo.slug}`}
					target="_blank"
				>
					{!isInDialog ? (
						<div className="h-48">
							<Image
								src={isInDialog ? "" : cardInfo!.coverImage?.url}
								alt="screenshot"
								width="200"
								height="200"
								className="h-full w-full object-cover rounded-md"
							/>
						</div>
					) : null}

					<h2 className="text-2xl my-4 text-gray-200 font-extrabold">
						{cardInfo!.title}
					</h2>
					<p className="mt-2 mb-4 overflow-auto">
						{cardInfo!.brief?.substring(0, 120) + "..."}
					</p>
					<span className="text-yellow-400 font-semibold hover:scale-110 self-end">
						Read More
					</span>
				</Link>
			)}
		</>
	);
}

export default Card;
