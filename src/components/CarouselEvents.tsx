"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { AvatarImage } from "@radix-ui/react-avatar";
import DateTimeDisplay from "./TimeConverter";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselEvents({
	events,
	type,
}: {
	events: any;
	type: "topper" | "events";
}) {
	return (
		<div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="w-full">
				<CarouselContent className="-ml-2 md:-ml-4">
					{events.map((event: any, i: number) => (
						<CarouselItem
							key={i}
							className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<div className="h-full">
								<Link
									href={`/${type}?id=${event.id}`}
									className="block h-full">
									<Card className="h-full p-5 border-purple-950 hover:scale-105 bg-slate-950 bg-opacity-50 text-white flex flex-col">
										<div className="flex gap-3 items-center mb-3">
											{event.school && (
												<>
													<Avatar className="border border-gray-600 flex justify-center items-center">
														<AvatarImage
															src={
																event.school
																	.logo
															}
															alt={`${event.school.name} logo`}
														/>
														<AvatarFallback>
															{event.school.name
																.charAt(0)
																.toUpperCase()}
														</AvatarFallback>
													</Avatar>
													<div className="text-xs md:text-base">
														{event.school.name}
													</div>
												</>
											)}
										</div>
										<div className="flex justify-center items-center flex-grow">
											<img
												className="object-cover h-44 w-full"
												src={event.image}
												alt="event img"
											/>
										</div>
										<div className="mt-auto">
											<CardTitle className="flex flex-col gap-3 pb-3 pt-1">
												<p className="text-sm font-normal">
													{DateTimeDisplay(
														event.date
													).slice(0, 17)}
												</p>
												<span>{event.title}</span>
											</CardTitle>
											<CardDescription></CardDescription>
										</div>
									</Card>
								</Link>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="flex gap-3 pt-3 justify-center pr-14 text-black">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	);
}
