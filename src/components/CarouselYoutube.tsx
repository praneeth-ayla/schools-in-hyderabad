"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselYoutube({
	videos,
}: {
	videos: {
		src: string;
		title: string;
	}[];
}) {
	// Youtube normal link to embeded link
	function convertYouTubeLinkToEmbed(url: string): string {
		url;
		const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);

		if (videoIdMatch && videoIdMatch[1]) {
			const videoId = videoIdMatch[1];
			return `https://www.youtube.com/embed/${videoId}`;
		}

		return "";
	}
	return (
		<div>
			<Carousel>
				<CarouselContent className="w-full h-[150px] sm:h-[250px] md:h-[250px] lg:h-[400px]">
					{videos.map(
						({ src, title }: { src: any; title: string }, i) => (
							<>
								{
									<CarouselItem key={i}>
										<iframe
											className="w-11/12 h-full"
											src={convertYouTubeLinkToEmbed(src)}
											title={title}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											referrerPolicy="strict-origin-when-cross-origin"
											allowFullScreen></iframe>
									</CarouselItem>
								}
							</>
						)
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
