import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "../components/SessionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Schools In Hyderabad",
	description: "Connecting Parents to School of Choice",
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
					<div className="flex flex-col min-h-screen">
						<Navbar />
						<div className=" bg-parallax bg-cover bg-fixed">
							<main className="flex-grow">{children}</main>
						</div>
						<Footer />
					</div>
					<Toaster />
				</SessionProvider>
			</body>
		</html>
	);
}
