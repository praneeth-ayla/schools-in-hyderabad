"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSpacing({ images }: { images: string[] }) {
	console.log(images);
	return (
		<Carousel
			className="rounded-lg"
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
	);
}
