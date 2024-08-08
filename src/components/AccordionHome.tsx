import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function AccordionHome() {
	return (
		<div className="md:flex flex-col justify-center items-center ">
			<div className="md:text-center ">
				<h1 className="text-lg sm:text-2xl font-bold pb-3 sm:pb-5">
					Why Choose SchoolsInHyderabad.co.in?
				</h1>
				<p className="text-sm md:text-lg text-muted-foreground">
					Our portal simplifies the process of finding the best
					schools in Hyderabad by offering comprehensive details,
					including:
				</p>
			</div>
			<div className="text-sm md:text-lg md:w-3/4 lg:w-2/3">
				<Accordion
					type="single"
					collapsible
					className="w-full ">
					<AccordionItem value="item-1">
						<AccordionTrigger>Extensive Listings</AccordionTrigger>
						<AccordionContent className="text-xs md:text-sm text-muted-foreground">
							Detailed school profiles with photos, videos, and
							reviews.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Comparison Tools</AccordionTrigger>
						<AccordionContent className="text-xs md:text-sm text-muted-foreground">
							Easily compare schools based on curriculum,
							facilities, and location.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Updates</AccordionTrigger>
						<AccordionContent className="text-xs md:text-sm text-muted-foreground">
							Stay informed about the latest education sector news
							in Hyderabad.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							Personalized Assistance
						</AccordionTrigger>
						<AccordionContent className="text-xs md:text-sm text-muted-foreground">
							Get guidance and support in choosing the right
							school.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="pt-4 text-left text-xs sm:text-sm md:text-lg text-muted-foreground ">
				Explore{" "}
				<a
					className="text-blue-400 hover:text-blue-500"
					href="https://SchoolsInHyderabad.co.in">
					SchoolsInHyderabad.co.in
				</a>{" "}
				today and make the best choice for your child&apos;s future.
			</div>
		</div>
	);
}
