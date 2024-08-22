"use client";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import DateTimeDisplay from "./TimeConverter";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function EventsSchoolPage({ events }: any) {
	console.log(events);
	return (
		<div className="w-[89vw] md:w-auto">
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}>
				<CarouselContent className="flex gap-5 p-3">
					{events.map((event: any, i: number) => (
						<div key={i}>
							{
								<Link href={`/events?id=${event.id}`}>
									<Card className="h-[400px] p-5 border-purple-950 hover:scale-105 bg-slate-950 bg-opacity-50 text-white flex w-80 lg:w-96 gap-3 flex-col">
										<div className="flex justify-center items-center">
											<img
												className="object-cover h-48 w-full"
												src={event.image}
												alt="event img"
											/>
										</div>
										<div className="flex-grow">
											<CardTitle className="flex flex-col gap-3 pb-3">
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
							}
						</div>
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
