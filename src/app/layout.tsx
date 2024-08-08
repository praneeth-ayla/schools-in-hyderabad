import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "../components/SessionProvider";

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
				<SessionProvider>{children} </SessionProvider>
			</body>
		</html>
	);
}
