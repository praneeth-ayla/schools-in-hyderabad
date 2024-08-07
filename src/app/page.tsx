import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
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
				<Image
					src="/hero.webp"
					alt="Home Img"
					layout="fill"
					objectFit="cover"
					style={{ objectPosition: "center" }}
				/>
				{/* Dark Overlay */}
				<div className="text-white z-10 flex justify-center items-center flex-col">
					<Image
						src="/logo.png"
						alt="logo"
						width={300}
						height={300}
					/>
					<form
						action=""
						className="flex flex-col gap-8">
						<span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
							Explore Schools in Your Area
						</span>
						<div className="flex flex-col gap-6 md:flex-row">
							<div className="grid w-fullitems-center gap-1.5">
								<Label htmlFor="schools">What</Label>
								<Input
									className="text-black"
									type="schools"
									id="schools"
									placeholder="Ex: Schools"
								/>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="where">Where</Label>
								<Input
									className="text-black"
									type="where"
									id="where"
									placeholder="where"
								/>
							</div>
						</div>
					</form>
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
		</>
	);
}
