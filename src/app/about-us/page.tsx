import BreadCrumbLink from "@/components/BreadCrumbLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function test() {
	return (
		<div>
			<Navbar />
			<div
				className="h-[150px] sm:h-[300px]"
				style={{
					position: "relative",
					width: "100%",
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
				<div className="text-white text-center flex justify-center items-center sm:gap-4 flex-col z-10 relative ">
					<div className="flex justify-center items-center flex-col">
						<Image
							src="/logo.png"
							alt="logo"
							width={80}
							height={80}
						/>
						<span className="text-2xl font-semibold">About Us</span>
					</div>
					<BreadCrumbLink text="About us" />
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
					}}
				/>
			</div>
			<div className="pt-10 mx-4 lg:mx-28 sm:p-10  sm:text-left ">
				<div className="flex flex-col gap-6">
					<div className="">
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Welcome to Edu Infonence
						</h1>
						<p className="text-sm md:text-lg text-muted-foreground">
							At Edu Infonence, we are dedicated to providing
							comprehensive and high-quality information about
							schools in Hyderabad. Through our website,
							schoolsinhyderabad.co.in, we aim to make the process
							of finding the right school for your child as
							seamless and informed as possible.
						</p>
					</div>
					<span className="border" />
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Our Mission
						</h1>
						<p className="text-sm md:text-lg text-muted-foreground">
							Our mission is to empower parents with reliable and
							detailed resource for school information, enhancing
							their decision-making process with high-quality
							images and up-to-date data.
						</p>
					</div>
					<span className="border" />
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Our Story
						</h1>
						<p className="text-sm md:text-lg text-muted-foreground">
							Edu Infonence was born from our own frustrations as
							parents searching for the best schools. We realized
							that finding quality visuals and accurate data was a
							challenge, which inspired us to create a platform
							that bridges this gap.
						</p>
					</div>
					<span className="border" />
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Why Choose Us?
						</h1>
						<div className="text-sm md:text-lg text-muted-foreground">
							<li>
								<b>High-Quality Images: </b> Our advanced camera
								ensures every school is showcased beautifully.
								Comprehensive
							</li>
							<li>
								<b>Information: </b> We cover all aspects of
								schools, from facilities to reviews.
							</li>
							<li>
								<b>User-Friendly Interface: </b>Our website is
								designed for ease of use, making your search
								effortless.
							</li>
						</div>
					</div>
					<span className="border" />
					<span className="text-sm md:text-lg text-muted-foreground">
						<b className="text-black">Please Note:</b> As we strive
						to provide detailed information school by school, it may
						take us a few months to fully populate our database. We
						appreciate your patience as we work diligently to ensure
						every school profile is accurate and up-to-date.
					</span>
					<span className="border" />
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Join Our Launch Promotion!
						</h1>
						<p className="text-sm md:text-lg text-muted-foreground">
							To celebrate our launch, we are offering an
							exclusive promotion! Stay tuned for special offers
							and updates that will help you get the most out of
							our platform. Follow us on @schoolsinhyderabad to be
							the first to know.
						</p>
					</div>
					<span className="border" />
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Get in Touch
						</h1>
						<p className="text-sm md:text-lg text-muted-foreground">
							We love hearing from our users. Whether you have a
							question, feedback, or just want to say hello, feel
							free to contact us at
							support@schoolsinhyderabad.co.in or follow us on
							@schoolsinhyderabad.
						</p>
					</div>
				</div>
				<div className="py-8 sm:py-24 sm:mx-10 my-16 sm:my-20 text-center border-y-4">
					<p className="italic font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
						&quot;The journey begins at school, where you gain
						wisdom and knowledge to help the less fortunate and grow
						wiser by leveling up, besides taking care of ourselves,
						so that you might become the most resourceful person in
						the country. &quot;
					</p>
					<p className="text-xs  sm:text-md md:text-lg text-muted-foreground pt-4 text-right">
						Y.Bhaskara Phani Kumar - Founder
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
