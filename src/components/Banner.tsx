import React from "react";
import Image from "next/image";
import { BannerInfo } from "../Data";

const Banner = () => {
	return (
		<div className="hidden md:flex flex-row  text-white border-t-2 border-b-2 border-brand-accent py-10 justify-between mx-8">
			{BannerInfo.map((img, index) => (
				<Image key={index} alt={img} src={img} width={100} height={100}></Image>
			))}
		</div>
	);
};

export default Banner;
