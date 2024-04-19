/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from "next/image";

const Page = () => {
	return (
		<div className="card text-center top-styles mx-8 sm:mx-14">
			{/* <a href="/"> */}
			<Image src="/images/sent.png" alt="screenshot" width={180} height={120} />
			<h3 className="my-4 font-extrabold">Form submission received</h3>
			<p className="mt-2 mb-4">
				Thank you for your submission. I will get back to you shortly
			</p>
			<Link href="/" passHref>
				<span className="text-yellow-400 hover:scale-50">Go Home</span>
			</Link>
			{/* </a> */}
		</div>
	);
};

export default Page;
