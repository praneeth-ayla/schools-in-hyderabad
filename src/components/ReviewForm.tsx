"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function ReviewForm() {
	const { data: session } = useSession();
	const disable = !!session?.user;
	return (
		<div className="my-3">
			<form className="grid gap-2">
				<p className="text-sm font-light ">Submit your review</p>
				<Textarea
					disabled={!disable}
					placeholder={
						disable
							? `Write your review here`
							: "Please Login to write a review!"
					}
					className="text-sm"></Textarea>
				<Button
					disabled={!disable}
					className="w-1/3 sm:w-1/5">
					Submit
				</Button>
			</form>
		</div>
	);
}
