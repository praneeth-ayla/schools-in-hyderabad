import AccordionHome from "./AccordionHome";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "./ui/background-beams";
export default function HomeDetails() {
	const words = [
		{
			text: "Swadese",
		},
		{
			text: "Pujyate",
		},
		{
			text: "Raja",
		},
		{
			text: "Vidvan Sarvatra",
		},
		{
			text: "Pujyate.",
			className: "text-purple-500 dark:text-blue-500",
		},
	];
	return (
		<div className="py-10 md:py-20 w-full flex flex-col items-center justify-center antialiased">
			<div className="text-white p-4 z-20">
				<div className="pt-10 mx-4 lg:mx-14 xl:mx-28 sm:p-10 sm:pt-0 sm:text-left z-20">
					<div className="grid md:grid-cols-2 gap-8 sm:gap-10 bg-gradient-to-r">
						<div className="bg-purple-950 bg-opacity-70 p-4 md:p-10 rounded-lg shadow-lg">
							<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
								Heritage of Hyderabad
							</h1>
							<p className="text-base md:text-lg text-muted-foreground">
								Hyderabad, the “City of Pearls,” blends
								modernity with its rich cultural heritage. With
								landmarks like Birla Mandir and Golconda Fort,
								the city&apos;s historical depth inspires
								students to embrace their cultural roots while
								looking towards the future. This unique
								environment makes Hyderabad an ideal place to
								raise and educate children.
							</p>
						</div>
						<div className="bg-purple-950 bg-opacity-70 p-4 sm:p-10 rounded-lg shadow-lg">
							<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
								Education in Hyderabad
							</h1>
							<p className="text-base md:text-lg text-muted-foreground">
								Hyderabad is home to some of India&apos;s top
								educational institutions. The city offers a
								range of schools from state and central boards
								to international institutions. Schools here
								provide cutting-edge facilities, expert
								educators, and a curriculum that balances
								academics with extracurricular activities,
								ensuring holistic development and preparing
								students to become globally-ready individuals.
							</p>
						</div>
					</div>
					<div className="py-10 sm:mx-10 my-16 text-center border-y-4">
						<TypewriterEffectSmooth
							words={words}
							className="text-white lg:flex justify-center items-center italic font-bold text-xl sm:text-xl md:text-2xl lg:text-5xl hidden"
						/>
						<p className="italic font-bold text-xl sm:text-xl md:text-2xl lg:hidden lg:text-5xl">
							&quot;Swadese pujyate raja, Vidvan sarvatra{" "}
							<span className="text-purple-500">pujyate</span>
							&quot;
						</p>
						<p className="text-xs sm:text-lg text-muted-foreground pt-4">
							A king is regarded within his nation, whereas a
							Scholar is revered throughout.
						</p>
					</div>
					<div className="relative z-10">
						<AccordionHome />
					</div>
				</div>
			</div>
		</div>
	);
}
