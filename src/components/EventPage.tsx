"use client";
import { useEffect } from "react";
import { useGetEvent } from "../lib/hooks";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { Card, CardDescription, CardTitle } from "./ui/card";
import DateTimeDisplay from "./TimeConverter";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function EventPage({ id }: { id: string }) {
	const { event, failed, isLoading } = useGetEvent(id);
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
						<div className="text-5xl font-bold flex gap-3 justify-center items-center">
							<Avatar className=" border border-blue-300 flex justify-center items-center">
								<AvatarImage
									src={event.school.logo}
									alt={`${event.school.name} logo`}
								/>
								<AvatarFallback>
									{event.school.name.charAt(0).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							{event.school.name}
						</div>
						<div className="flex justify-center items-center pb-10">
							<img
								className="h-[500px] w-auto"
								src={
									event.image ||
									"https://utfs.io/f/ab0c4b02-4d70-4608-b627-312b4cefea66-nm33wo.jpeg"
								}
								alt="event image"
							/>
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
