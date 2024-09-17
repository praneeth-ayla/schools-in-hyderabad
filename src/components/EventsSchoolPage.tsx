"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import DateTimeDisplay from "./TimeConverter";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function EventsSchoolPage({
	events,
	desBoo,
}: {
	events: any;
	desBoo: boolean;
}) {
	return (
		<div className="w-[89vw] md:w-[80vw] lg:w-[50vw]">
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="w-full">
				<CarouselContent className="-ml-2 md:-ml-4">
					{desBoo ? (
						<>
							{events.map((event: any, i: number) => (
								<CarouselItem
									key={i}
									className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
									<div className="h-full">
										<Link
											href={`/topper?id=${event.id}`}
											className="block h-full">
											<Card className="h-full p-5 border-purple-950 hover:scale-105 bg-slate-950 bg-opacity-50 text-white flex flex-col">
												<div className="flex justify-center items-center flex-grow">
													<img
														className="object-cover h-44 w-full"
														src={event.image}
														alt={`${event.school.name} ${event.title} image`}
													/>
												</div>
												<div className="mt-auto">
													<CardTitle className="flex flex-col gap-3 pb-3 pt-1">
														{/* <p className="text-sm font-normal">
															{DateTimeDisplay(
																event.date
															).slice(0, 17)}
														</p> */}
														<span>
															{event.title}
														</span>
													</CardTitle>
													<CardDescription>
														{desBoo && (
															<>
																{event
																	.description
																	.length >
																130 ? (
																	<>
																		{event.description.slice(
																			0,
																			130
																		)}{" "}
																		...
																	</>
																) : (
																	<>
																		{event.description.slice(
																			0,
																			130
																		)}{" "}
																	</>
																)}
															</>
														)}
													</CardDescription>
												</div>
											</Card>
										</Link>
									</div>
								</CarouselItem>
							))}
						</>
					) : (
						<>
							{events.map((event: any, i: number) => (
								<CarouselItem
									key={i}
									className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
									<div className="h-full">
										<Link
											href={`/events?id=${event.id}`}
											className="block h-full">
											<Card className="h-full p-5 border-purple-950 hover:scale-105 bg-slate-950 bg-opacity-50 text-white flex flex-col">
												<div className="flex justify-center items-center flex-grow">
													<img
														className="object-cover h-44 w-full"
														src={event.image}
														alt={`${event.school.name} ${event.title} image`}
													/>
												</div>
												<div className="mt-auto">
													<CardTitle className="flex flex-col gap-3 pb-3 pt-1">
														{/* <p className="text-sm font-normal">
															{DateTimeDisplay(
																event.date
															).slice(0, 17)}
														</p> */}
														<span>
															{event.title}
														</span>
													</CardTitle>
													<CardDescription></CardDescription>
												</div>
											</Card>
										</Link>
									</div>
								</CarouselItem>
							))}
						</>
					)}
				</CarouselContent>
				<div className="flex gap-3 pt-3 justify-center pr-14 text-black">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	);
}
