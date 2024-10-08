import Image from "next/image";
import BreadCrumbLink from "./BreadCrumbLink";

export default function HeroStart({ text }: { text: string }) {
	return (
		<div
			className="h-[150px] sm:h-[300px] bg-gradient-to-r from-purple-900 to-purple-950"
			style={{
				position: "relative",
				width: "100%",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// backgroundColor: "white",
			}}>
			<Image
				src="/herobg.png"
				alt="Home Img"
				layout="fill"
				objectFit="cover"
				style={{ objectPosition: "center" }}
			/>
			{/* Dark Overlay */}
			<div className="text-center flex justify-center items-center sm:gap-4 flex-col z-10 relative ">
				<div className="flex justify-center items-center flex-col">
					<Image
						src="/logo.png"
						alt="logo"
						width={80}
						height={80}
					/>
					<span className="text-2xl font-semibold text-white">
						{text}
					</span>
				</div>
				<BreadCrumbLink text={text} />
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					// backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 1,
				}}
			/>
		</div>
	);
}
