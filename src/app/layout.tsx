import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "../components/SessionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Schools In Hyderabad",
	description: "Find the best schools in Hyderabad",
	icons: {
		icon: ["/favicon.ico"],
		apple: ["/apple-touch-icon.png?v=4"],
		shortcut: ["/apple-touch-icon"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
					<Navbar />
					{children}
					<Footer />
				</SessionProvider>
			</body>
		</html>
	);
}
