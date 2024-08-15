import AccordionHome from "./AccordionHome";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function HomeDetails() {
	const words = [
		{
		  text: '"Swadese pujyate raja,',
		},
		{
		  text: "Vidvan ",
		},
		{
		  text: "sarvatra ",
		},
		{
		  text: 'pujyate."',
		  className: "text-blue-500 dark:text-blue-500 flex-wrap",
		},
		
	  ];
	return (
		<div className="pt-10 mx-4 lg:mx-14 xl:mx-28 sm:p-10  sm:text-left">
			<div className="grid md:grid-cols-2 gap-8 sm:gap-10">
				<div>
					<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
						Heritage of Hyderabad
					</h1>
					<p className="text-sm md:text-lg text-muted-foreground">
						Hyderabad, the “City of Pearls,” blends modernity with
						its rich cultural heritage. With landmarks like Birla
						Mandir and Golconda Fort, the city&apos;s historical
						depth inspires students to embrace their cultural roots
						while looking towards the future. This unique
						environment makes Hyderabad an ideal place to raise and
						educate children.
					</p>
				</div>
				<div>
					<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
						Education in Hyderabad
					</h1>
					<p className="text-sm md:text-lg text-muted-foreground">
						Hyderabad is home to some of India&apos;s top
						educational institutions. The city offers a range of
						schools from state and central boards to international
						institutions. Schools here provide cutting-edge
						facilities, expert educators, and a curriculum that
						balances academics with extracurricular activities,
						ensuring holistic development and preparing students to
						become globally-ready individuals.
					</p>
				</div>
			</div>
			
			<div className="py-8 sm:py-24 sm: my-16 sm:my-20 text-center border-y-4">
			<div className="italic font-bold text-xs sm:text-xl md:text-2xl lg:text-5xl">
				<TypewriterEffectSmooth words={words} />

			</div>
				{/* <Cover className="italic font-bold text-xl sm:text-xl md:text-2xl lg:text-5xl">&quot;Swadese pujyate raja, Vidvan sarvatra pujyate&quot;</Cover> */}
				<p className="text-sm sm:text-lg text-muted-foreground pt-4">
					A scholarly person is revered everywhere in the world,
					whereas a king is respected only in his own country.
				</p>
			</div>
			<AccordionHome />
		</div>
	);
}
