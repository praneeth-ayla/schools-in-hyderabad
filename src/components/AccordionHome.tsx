import React from "react";

export default function AccordionHome() {
	return (
		<div className="md:flex flex-col justify-center items-center">
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
			<div className="text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
				<div className="bg-purple-950 p-4 rounded-sm bg-opacity-70">
					<p className="font-semibold text-lg pb-2">
						Extensive Listings
					</p>
					<p className="text-muted-foreground">
						Detailed school profiles with photos, videos, and
						reviews.
					</p>
				</div>
				<div className="bg-purple-950 p-4 rounded-sm bg-opacity-70">
					<p className="font-semibold text-lg pb-2">
						Comparison Tools
					</p>
					<p className="text-muted-foreground">
						Easily compare schools based on curriculum, facilities,
						and location.
					</p>
				</div>
				<div className="bg-purple-950 p-4 rounded-sm bg-opacity-70">
					<p className="font-semibold text-lg pb-2">Updates</p>
					<p className="text-muted-foreground">
						Stay informed about the schools and education sector
						news in Hyderabad.
					</p>
				</div>
				<div className="bg-purple-950 p-4 rounded-sm bg-opacity-70">
					<p className="font-semibold text-lg pb-2">
						Personalized Assistance
					</p>
					<p className="text-muted-foreground">
						Get guidance and support in choosing the right school.
					</p>
				</div>
			</div>
			<div className="text-left text-sm md:text-lg text-muted-foreground pb-4 sm:pb-0 pt-10">
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
