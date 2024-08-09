"use client";
import { Button } from "@/components/ui/button";
import {
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ContactForm() {
	const { toast } = useToast();
	const { data: session } = useSession();
	const [data, setData] = useState({
		name: "",
		email: "",
	});

	const disable = !!session?.user;
	const name = session?.user?.name || "";
	const email = session?.user?.email || "";

	async function onSubmit(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append(
			"access_key",
			process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY || ""
		);
		if (!disable) {
			formData.append("name", data.name);
			formData.append("email", data.email);
		} else {
			formData.append("name", name);
			formData.append("email", email);
		}

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();

			if (data.success) {
				toast({ title: "Message Sent" });
				event.target.reset();
			} else {
				console.log("Error", data);
				toast({ title: "Something went wrong!" });
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast({ title: "Network error. Please try again later." });
		}
	}

	return (
		<form
			className="w-full lg:w-2/3"
			onSubmit={onSubmit}>
			<CardHeader className="px-0">
				<CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">
					Contact us
				</CardTitle>
			</CardHeader>
			<div className="border-b-2 mb-3 sm:mb-6" />
			<CardContent className="px-0">
				<div className="grid w-full items-center gap-4">
					{disable ? (
						<>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									required
									name="name"
									id="name"
									value={name}
									onChange={(e) =>
										setData({
											...data,
											name: e.target.value,
										})
									}
									disabled={disable}
									placeholder="John"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									name="email"
									type="email"
									required
									value={email}
									onChange={(e) =>
										setData({
											...data,
											email: e.target.value,
										})
									}
									disabled={disable}
									id="email"
									placeholder="john@mail.com"
								/>
							</div>
						</>
					) : (
						<>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									required
									name="name"
									id="name"
									onChange={(e) =>
										setData({
											...data,
											name: e.target.value,
										})
									}
									disabled={disable}
									placeholder="John"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									name="email"
									type="email"
									required
									onChange={(e) =>
										setData({
											...data,
											email: e.target.value,
										})
									}
									disabled={disable}
									id="email"
									placeholder="john@mail.com"
								/>
							</div>
						</>
					)}{" "}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="message">Message</Label>
						<Textarea
							required
							name="message"
							id="message"
							placeholder="Write your message here"
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter className="px-0">
				<Button type="submit">Send</Button>
			</CardFooter>
		</form>
	);
}
