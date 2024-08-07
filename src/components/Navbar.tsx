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
		<div className="flex  w-full flex-col text-primary-foreground">
			<header className="sticky bg-blue-primary text-primary-foreground top-0 flex h-16 items-center gap-4  px-4 md:px-6">
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
					<SheetContent
						side="left"
						className="bg">
						<nav className="grid gap-6 text-lg font-medium text--foreground">
							<Link
								href="/"
								className="flex items-center gap-2 text-lg font-semibold">
								<div className="flex justify-center items-center">
									<Image
										src={"/logo.png"}
										alt="logo"
										width={100}
										height={100}
									/>
									<span className="text-xl font-extrabold ">
										Schools In Hyderabad
									</span>
								</div>
								<span className="sr-only">
									Schools In Hyderabad
								</span>
							</Link>
							<Link
								href="/"
								className={`transition-colors   text hover:text- ${isActive(
									"/"
								)}`}>
								Home
							</Link>
							<Link
								href="/test"
								className={`transition-colors hover:text-foreground ${isActive(
									"/test"
								)}`}>
								test
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-10">
					<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
						<div className="pr-10">
							<Link
								href="/"
								className="flex items-center gap-2 text-lg font-semibold md:text-base">
								<div className="flex justify-center items-center">
									<Image
										src={"/logo.png"}
										alt="logo"
										width={100}
										height={100}
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
							className={`transition-colors hover:text-foreground ${isActive(
								"/"
							)}`}>
							Home
						</Link>
						<Link
							href="/test"
							className={`transition-colors hover:text-foreground ${isActive(
								"/test"
							)}`}>
							test
						</Link>
					</nav>
					<div className="ml-auto "></div>
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
								<DropdownMenuLabel>
									My Account
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => signOut()}>
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
										signIn();
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
