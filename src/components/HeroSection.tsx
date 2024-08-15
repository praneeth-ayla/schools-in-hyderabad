import Image from "next/image";
import Video from 'next-video';

import { TextGenerateEffect } from "./ui/text-generate-effect";
import SearchInputs from "./SearchInputs";

export default function HeroSection() {
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "600px",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "black",
			}}>
			<Video
				src="/video.mp4"
				autoPlay
				muted
        		loop
        		playsInline
        		controls={false}
				
				
				style={{ objectPosition: "cover",
					position:"absolute",
					top:"0",
					right:"0",
					left:"0",
					bottom:"0",
					
				 }}
				 className="object-cover"
			/>
			{/* Dark Overlay */}
			<div className="text-white z-10 flex justify-center items-center flex-col">
				<Image
					src="/logo.png"
					alt="logo"
					width={150}
					height={150}
				/>
				<div className="flex justify-center items-center flex-col gap-8">
					<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<TextGenerateEffect
							className="z-10 text-white"
							words="Explore Schools in Your Area"
						/>
					</span>
					<SearchInputs />
				</div>
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 1,
				}}></div>
		</div>
	);
}
