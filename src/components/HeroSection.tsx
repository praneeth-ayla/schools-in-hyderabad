import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SearchInputs from "./SearchInputs";

export default function HeroSection() {
	return (
		<div className="bg-parallax bg-cover bg-fixed flex justify-center pt-20 sm:pt-24 px-2">
			{/* Dark Overlay */}
			<div className="flex justify-center items-center flex-col text-white">
				<Image
					alt="logo"
					src={"/logo.png"}
					height={90}
					width={90}
				/>
				<div className="flex justify-center items-center flex-col gap-8">
					<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<p className="text-center font-semibold text-base">
							Connecting Parents to School of Choice
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
