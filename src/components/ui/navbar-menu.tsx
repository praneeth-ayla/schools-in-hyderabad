"use client";
import React, { useEffect, useState } from "react";
import { getSession, signIn, signOut } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { UserIcon } from "lucide-react";

interface UserDetails {
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const [userDetails, setUserDetails] = useState<UserDetails>();

	useEffect(() => {
		const getDetails = async () => {
			const session = await getSession();
			setUserDetails(session?.user);
		};
		getDetails();
	}, []);
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			let direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.01) {
				setVisible(false);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -10,
				}}
				animate={{
					y: visible ? 0 : -10,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.1,
				}}
				className={cn(
					"flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
					className
				)}>
				{navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${idx}`}
						href={navItem.link}
						className={cn(
							"relative text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500"
						)}>
						<span className="block sm:hidden">{navItem.icon}</span>
						<span className="hidden sm:block text-sm">
							{navItem.name}
						</span>
					</Link>
				))}
				{userDetails ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="secondary"
								size="icon"
								className="rounded-full h-7 w-7">
								<Avatar className="h-7 w-7">
									<AvatarImage
										src={userDetails?.image ?? undefined}
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
						<DropdownMenuContent
							align="end"
							className={`mt-3 ${!visible && "hidden"}`}>
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
								className="rounded-full h-7 w-7">
								<Avatar className="flex items-center justify-center">
									<UserIcon></UserIcon>
								</Avatar>

								<span className="sr-only">
									Toggle user menu
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className={`mt-3 ${!visible && "hidden"}`}>
							<DropdownMenuLabel
								onClick={() => {
									signIn("google");
								}}
								className="hover:cursor-pointer ">
								Login
							</DropdownMenuLabel>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</motion.div>
		</AnimatePresence>
	);
};
