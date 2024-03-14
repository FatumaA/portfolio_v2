import Link from "next/link";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import Button from "./Button";
import { AboutInfo, ButtonInfo } from "../Data";

const About = () => {
	return (
		<div id="about" className="top-styles">
			<h5 className="tagline">{AboutInfo.tagLine}</h5>
			<h1 className="headline">{AboutInfo.headLine}</h1>
			<p className="text-center leading-7">{AboutInfo.subHeadLine}</p>
			<p className="text-center leading-7 mt-4">
				Sounds interesting? Get in touch via the form below and let&apos;s talk.
				<span className="text-center leading-7 mt-1">
					{" "}
					You can also find me at:{" "}
				</span>
				<span className="flex flex-row justify-center mt-1">
					<a
						href="https://twitter.com/XquisiteDreamer"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillTwitterSquare />
					</a>
					<a
						href="https://www.linkedin.com/in/fatuma-abdullahi-6b804948/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin />
					</a>
				</span>
			</p>

			<Link href="/#contacts">
				<Button btnText={ButtonInfo.about} />
			</Link>
		</div>
	);
};

export default About;
