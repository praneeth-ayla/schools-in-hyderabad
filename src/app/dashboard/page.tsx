"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function InputDemo() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState<"edit" | "create">("edit");

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (
		status === "authenticated" &&
		session?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL
	) {
		setTimeout(() => {
			router.push("/");
		}, 2000);
		return (
			<div className="flex flex-col justify-center items-center h-screen">
				<p>You&apos;re not Authorized!</p>
				<p className="text-sm text-muted-foreground">
					Redirecting back to Home
				</p>
			</div>
		);
	}

	if (status === "loading") {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading session...
			</div>
		);
	}

	if (status === "authenticated") {
		return (
			<div>
				<Button
					onClick={() => {
						setPage("create");
						router.push("/dashboard/create");
					}}>
					Create
				</Button>
				<Button
					onClick={() => {
						setPage("edit");
					}}>
					Edit
				</Button>
			</div>
		);
	} else {
		return (
			<div className="flex justify-center items-center h-screen">
				Please sign in
			</div>
		);
	}
}
