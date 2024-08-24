"use client";
import { useEffect } from "react";
import { useGetTopper } from "../lib/hooks";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { Card, CardDescription, CardTitle } from "./ui/card";
import DateTimeDisplay from "./TimeConverter";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

export default function TopperPage({ id }: { id: string }) {
	const { event, failed, isLoading } = useGetTopper(id);
	const router = useRouter();
	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading) return <Loading />;
	if (!event) return <Loading />;
	console.log(event);

	return (
		<div className="text-white bg-blue-300">
			{event.description !== null && (
				<Card className="bg-blue-200">
					<div className="flex justify-center items-center flex-col px-60 py-10">
						{event.school && (
							<div className="text-5xl font-bold flex gap-3 justify-center items-center">
								<Avatar className=" border border-blue-300 flex justify-center items-center">
									<AvatarImage
										src={event.school.logo}
										alt={`${event.school.name} logo`}
									/>
									<AvatarFallback>
										{event.school.name
											.charAt(0)
											.toUpperCase()}
									</AvatarFallback>
								</Avatar>

								{event.school.name}
							</div>
						)}
						<div className="flex justify-center items-center pb-10">
							<Dialog>
								<DialogTrigger>
									<img
										className="h-[500px] w-auto"
										src={event.image}
										alt="event image"
									/>
								</DialogTrigger>
								<DialogContent>
									<div className="h-auto lg:h-[40rem] w-auto">
										<img
											src={event.image}
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogContent>
							</Dialog>
						</div>
						<div className="gap-6 grid">
							<CardTitle className="text-center text-wrap text-3xl font-bold">
								<div>{event.title}</div>
							</CardTitle>
							<CardDescription className="text-black ">
								<div className="flex gap-2">
									<div className="font-semibold">
										Published Date:
									</div>
									<div className="">
										{DateTimeDisplay(event.date).slice(
											0,
											17
										)}
									</div>
								</div>
								<pre className="text-lg pt-4 text-wrap font-sans">
									{event.description}
								</pre>
							</CardDescription>
						</div>
					</div>
				</Card>
			)}
		</div>
	);
}