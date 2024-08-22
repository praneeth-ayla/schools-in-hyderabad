"use client";
import Link from "next/link";
import { Menu, Search, UserIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { getSession, signIn, signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface UserDetails {
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

export default function Navbar() {
	const [userDetails, setUserDetails] = useState<UserDetails>();

	useEffect(() => {
		const getDetails = async () => {
			const session = await getSession();
			setUserDetails(session?.user);
		};
		getDetails();
	}, []);
	const pathname = usePathname();

	function isActive(href: string) {
		return pathname === href ? "border-b-4" : "";
	}

	return (
		<div className="flex w-full flex-col relative z-30">
			<header className="sticky bg-purple-950 bg-opacity-80 text-primary-foreground top-0 flex h-16 items-center gap-4  px-4 md:px-6">
				<Sheet>
					<SheetTrigger asChild>
						<Button
							size="icon"
							className="shrink-0 md:hidden bg-blue-primary">
							<Menu className="h-5 w-5" />
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<nav className="grid gap-6 font-medium text--foreground">
							<Link
								href="/"
								className="text-sm font-semibold">
								<div>
									<Image
										src={"/logo.png"}
										alt="logo"
										width={100}
										height={100}
									/>
									<span className="font-extrabold text-xl">
										Schools In Hyderabad
									</span>
								</div>
								<span className="sr-only">
									Schools In Hyderabad
								</span>
							</Link>
							<Link
								href="/"
								className={`transition-colors hover:text-blue-400 ${isActive(
									"/"
								)}`}>
								Home
							</Link>
							<Link
								href="/about-us"
								className={`transition-colors hover:text-blue-400 ${isActive(
									"/about-us"
								)}`}>
								About Us
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-10">
					<nav className="hidden flex-col gap-6 text-sm font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
						<div className="pr-10">
							<Link
								href="/"
								className="flex items-center gap-2 font-semibold">
								<div className="flex justify-center items-center">
									<Image
										src={"/logo.png"}
										alt="logo"
										width={70}
										height={70}
									/>
									<span className="text-xl font-extrabold text-primary-foreground">
										Schools In Hyderabad
									</span>
								</div>
								<span className="sr-only">
									Schools In Hyderabad
								</span>
							</Link>
						</div>
						<Link
							href="/"
							className={`transition-colors text-sm hover:text-blue-400 ${isActive(
								"/"
							)}`}>
							Home
						</Link>
						<Link
							href="/about-us"
							className={`transition-colors text-sm hover:text-blue-400 ${isActive(
								"/about-us"
							)}`}>
							About Us
						</Link>
						<Link
							href="/contact"
							className={`transition-colors text-sm hover:text-blue-400 ${isActive(
								"/contact"
							)}`}>
							Contact
						</Link>
					</nav>
					<div className="ml-auto"></div>
					{userDetails ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="secondary"
									size="icon"
									className="rounded-full">
									<Avatar>
										<AvatarImage
											src={
												userDetails?.image ?? undefined
											}
										/>
										<AvatarFallback>
											{userDetails?.name?.charAt(0) ??
												undefined}
										</AvatarFallback>
									</Avatar>

									<span className="sr-only">
										Toggle user menu
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem
									onClick={() => signOut()}
									className="hover:cursor-pointer">
									Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="secondary"
									size="icon"
									className="rounded-full">
									<Avatar className="flex items-center justify-center">
										<UserIcon></UserIcon>
									</Avatar>

									<span className="sr-only">
										Toggle user menu
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel
									onClick={() => {
										signIn("google");
									}}
									className="hover:bg-gray-100 hover:cursor-pointer">
									Login
								</DropdownMenuLabel>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</header>
		</div>
	);
}
