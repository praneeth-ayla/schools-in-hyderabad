import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "../components/SessionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-7VM3P88BDL"></Script>{" "}
				<Script id="google-analytics">{`
 						window.dataLayer = window.dataLayer || []; 
						function gtag(){dataLayer.push(arguments);} 
						gtag('js', new Date());
						gtag('config', 'G-7VM3P88BDL');
				`}</Script>
			</head>
			<body className={inter.className + " bg-purple-950"}>
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
