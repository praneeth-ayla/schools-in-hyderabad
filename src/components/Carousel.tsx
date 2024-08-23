"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel as ReactCarousel } from "flowbite-react";

export function CarouselSpacing({
	images,
}: {
	images: { url: string; id?: string; schoolId: string }[];
}) {
	console.log(images);
	return (
		<div>
			<Dialog>
				<DialogTrigger className="border-black">
					<Carousel
						className="rounded-lg border-black"
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}>
						<CarouselContent className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[500px] rounded-lg">
							{images.map((e: any, i) => (
								<CarouselItem
									key={i}
									className="w-full h-full rounded-lg">
									<div
										className="flex justify-center items-center rounded-lg"
										style={{
											overflow: "hidden",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
											height: "100%", // Set height to 100%
										}}>
										<img
											className="w-full h-full object-cover rounded-lg"
											src={e.url}
											alt={`image ${i + 1}`}
											style={{
												objectPosition: "center",
											}}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</DialogTrigger>
				<DialogContent className="bg-opacity-60  text-white bg-blue-200 p-4 m-1 md:p-10 flex justify-center ">
					<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
						<ReactCarousel slideInterval={5000}>
							{images.map((img: any, i: number) => (
								<img
									key={i}
									src={img.url}
								/>
							))}
							<img
								src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
								alt="..."
							/>
						</ReactCarousel>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
