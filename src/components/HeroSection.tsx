import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SearchInputs from "./SearchInputs";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
	return (
		<div className="py-10 w-full bg-blue-950 relative flex flex-col items-center justify-center antialiased">
			<div className="text-white max-w-2xl mx-auto p-4">
				<div className="flex justify-center items-center flex-col gap-8 z-10">
					<Image
						alt="logo"
						src={"/logo.png"}
						width={80}
						height={80}></Image>
					<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<p className="text-center font-semibold text-sm sm:text-base">
							Connecting Parents to schools of choice
						</p>
						<TextGenerateEffect
							className="z-10"
							words="Explore Schools in Hyderabad"
						/>
					</span>
					<div className="z-10">
						<SearchInputs />
					</div>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
