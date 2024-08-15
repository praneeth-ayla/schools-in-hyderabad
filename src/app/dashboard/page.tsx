"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function InputDemo() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const { toast } = useToast();
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
				<p>You're not Authorized!</p>
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
