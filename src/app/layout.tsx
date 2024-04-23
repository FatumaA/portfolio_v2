import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Nunito } from "next/font/google";
const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Hijabi Coder",
	description: "Portfolio version 2",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* state <= 660 ? <Navbar /> : <MobileNav /> */}
			<body className={nunito.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
