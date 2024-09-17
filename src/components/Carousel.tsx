"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CarouselDialog from "@/components/CarouselDialog";

export function CarouselSpacing({
	images,
}: {
	images: { url: string; alt: string; id?: string; schoolId: string }[];
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
											height: "100%",
										}}>
										<img
											className="w-full h-full object-cover rounded-lg"
											src={e.url}
											alt={`${e.alt} image`}
											style={{
												width: "100%", // Ensure the width is 100%
												height: "100%", // Ensure the height is 100%
												objectFit: "cover",
												objectPosition: "center",
											}}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</DialogTrigger>
				<DialogContent className="bg-opacity-60  text-white bg-blue-200 p-4 m-1 md:p-10 flex justify-center">
					<CarouselDialog height="h-auto lg:h-[40rem] w-auto">
						{images.map((s, index) => (
							<img
								key={index}
								src={s.url}
								alt={`${s.alt} image`}
								className="w-full h-full object-cover"
							/>
						))}
					</CarouselDialog>
				</DialogContent>
			</Dialog>
		</div>
	);
}
