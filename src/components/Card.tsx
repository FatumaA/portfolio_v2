import React from "react";
import Image from "next/image";

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
	coverImage: string;
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
				<div
					className="card"
					onClick={() =>
						window.open(
							"https://blog.hijabicoder.dev/" + cardInfo!.slug,
							"_blank"
						)
					}
				>
					<Image
						src={cardInfo!.coverImage}
						alt="screenshot"
						width="200"
						height="80"
					/>
					<h3 className="my-4 text-gray-200 font-extrabold">
						{" "}
						{cardInfo!.title}{" "}
					</h3>
					<p className="mt-2 mb-4"> {cardInfo!.brief} </p>
					<a
						href={"https://blog.hijabicoder.dev/" + cardInfo!.slug}
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 font-semibold hover:scale-50"
					>
						Read More
					</a>
				</div>
			)}
		</>
	);
}

export default Card;
