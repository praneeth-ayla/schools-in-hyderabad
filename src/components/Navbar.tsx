"use client";

import { FloatingNav } from "../components/ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function NavBar() {
	const navItems = [
		{
			name: "Home",
			link: "/",
			icon: <IconHome className="h-4 w-4 " />,
		},
		{
			name: "About",
			link: "/about-us",
			icon: <IconUser className="h-4 w-4 " />,
		},
		{
			name: "Contact",
			link: "/contact",
			icon: <IconMessage className="h-4 w-4" />,
		},
	];
	return (
		<div className="relative  w-full">
			<FloatingNav
				className="bg-slate-800"
				navItems={navItems}
			/>
		</div>
	);
}
