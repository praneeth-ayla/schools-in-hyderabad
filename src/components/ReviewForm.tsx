"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import SelectStarRating from "./SelectStarRating";
import { useState } from "react";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import Loading from "./Loading";

export default function ReviewForm({ schoolId }: { schoolId: number }) {
	const { data: session } = useSession();
	const [rating, setRating] = useState(0);
	const [message, setMessage] = useState<string>();
	const disable = !!session?.user;
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);
		try {
			if (rating !== 0 && message !== "") {
				const res = await axios.post("/api/review", {
					message,
					rating,
					schoolId: Number(schoolId),
					name: session?.user?.name,
				});
				console.log(res);

				toast({
					title: "Thank you!",
					description: "Your review has been successfully submitted.",
					duration: 2000,
				});

				setTimeout(() => {
					window.location.reload();
				}, 2000);
				setLoading(false);
			} else {
				toast({
					title: "Incomplete submission!",
					description: "Please provide both a rating and a message.",
				});
				setLoading(false);
			}
		} catch (error: any) {
			console.error("Error submitting review:", error.message);
			toast({
				title: "Submission failed!",
				description: "An error occurred. Please try again later.",
				duration: 2000,
			});
			setLoading(false);
		}
	}

	return (
		<div className="my-3">
			<form className="grid gap-2">
				<p className="text-sm font-light ">Submit your review</p>
				<SelectStarRating
					rating={rating}
					setRating={setRating}
				/>
				<Textarea
					disabled={!disable}
					value={message}
					placeholder={
						disable
							? `Write your review here`
							: "Please Login to write a review!"
					}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="text-sm"></Textarea>
				{loading ? (
					<Button
						disabled={loading}
						className="w-1/3 sm:w-1/5">
						<Loading />
					</Button>
				) : (
					<Button
						onClick={handleSubmit}
						disabled={!disable}
						className="w-1/3 sm:w-1/5">
						Submit
					</Button>
				)}
			</form>
		</div>
	);
}
