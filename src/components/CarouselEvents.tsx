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

export default function CarouselEvents({ events }: any) {
	return (
		<div>
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
									<Card className="h-[440px] p-5 border-purple-950 hover:scale-105 bg-slate-950 bg-opacity-50 text-white flex w-80 lg:w-96 gap-3 flex-col">
										<div className="flex-grow">
											<div className="flex gap-3 items-center">
												<Avatar className="border border-gray-600 flex justify-center items-center">
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
												<div className="text-xs md:text-base">
													{event.school.name}
												</div>
											</div>
										</div>
										<div className="flex justify-center items-center">
											<img
												className="object-cover h-44 w-full"
												src={
													event.img ||
													"https://utfs.io/f/a32a0397-1b5c-42a9-af5c-d24e7e7b71da-tpk6wk.com_wallpaper.jpg"
												}
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
