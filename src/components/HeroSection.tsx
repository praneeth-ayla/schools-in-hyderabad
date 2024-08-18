import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SearchInputs from "./SearchInputs";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
	return (
		<div className="bg-parallax bg-cover bg-fixed h-screen flex justify-center pt-12 sm:pt-0 px-2">
			{/* Dark Overlay */}
			<div className="z-10 flex justify-center items-center flex-col text-white">
				<Image
					alt="logo"
					src={"/logo.png"}
					height={90}
					width={90}
				/>
				<div className="flex justify-center items-center flex-col gap-8">
					<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<p className="text-center font-semibold text-base">
							Connecting Parents to school
						</p>
						<TextGenerateEffect
							className="z-10"
							words="Explore Schools in Hyderabad"
						/>
					</span>
					<SearchInputs />
				</div>
			</div>
		</div>
	);
}
