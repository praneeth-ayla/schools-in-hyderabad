import Image from "next/image";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import SearchInputs from "./SearchInputs";

export default function HeroSection() {
	return (
		<div
			className="h-[40rem] bg-slate-200"
			style={{
				position: "relative",
				width: "100%",
				// height: "600px",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Image
				src="/white-gradient.png"
				alt="Home Img"
				layout="fill"
				objectFit="cover"
				style={{ objectPosition: "center" }}
			/>

			{/* Dark Overlay */}
			<div className="z-10 flex justify-center items-center flex-col">
				<div className="flex justify-center items-center flex-col gap-8">
					<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<p className="text-center font-semibold text-base">
							Connecting Parents to schools of choice
						</p>
						<TextGenerateEffect
							className="z-10"
							words="Explore Schools in Hyderabad"
						/>
					</span>
					<SearchInputs />
				</div>
			</div>
			{/* <div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 1,
				}}></div> */}
		</div>
	);
}
