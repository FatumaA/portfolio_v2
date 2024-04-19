import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* state <= 660 ? <Navbar /> : <MobileNav /> */}
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
