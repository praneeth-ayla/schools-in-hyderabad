import AccordionHome from "./AccordionHome";

export default function HomeDetails() {
	return (
		<div className="pt-10 mx-4 lg:mx-28 sm:p-10  sm:text-left">
			<div className="grid md:grid-cols-2 gap-8 sm:gap-10 pb-10">
				<div>
					<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
						Heritage of Hyderabad
					</h1>
					<p className="text-sm">
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
					<p className="text-sm">
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
			<AccordionHome />
			<div className="py-4 sm:py-10 sm:mx-10 md:mx-20 lg:mx-32 text-center border-y-4 mt-10 ">
				<p className="italic font-bold">
					&quot;Swadese pujyate raja, Vidvan sarvatra pujyate&quot;
				</p>
				<p className="text-sm text-muted-foreground font-semibold pt-4">
					A scholarly person is revered everywhere in the world,
					whereas a king is respected only in his own country.
				</p>
			</div>
		</div>
	);
}
