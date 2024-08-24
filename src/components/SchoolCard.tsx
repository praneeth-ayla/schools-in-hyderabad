import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
	SchoolCategory,
	SchoolCategoryNames,
	SchoolPartialData,
} from "@/lib/types";
import Link from "next/link";
import StarRating from "./StarRating";

export default function SchoolCard({
	schoolDetails,
	type,
}: {
	schoolDetails: SchoolPartialData[];
	type: "merchant" | "school";
}) {
	function getFullName(category: SchoolCategory): string {
		return SchoolCategoryNames[category] || "Unknown Category";
	}
	return (
		<div className="mt-4 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
			{schoolDetails.map((schoolDetail, i) => (
				<Link
					href={`/${type}?id=${schoolDetail.id}`}
					key={i}
					className="grid">
					<Card className="border-purple-950 hover:shadow-2xl hover:scale-105 bg-slate-950 bg-opacity-50 p-4 flex flex-col h-full">
						<div className="object-cover flex justify-center items-center">
							<img
								className="rounded-t-lg h-32 w-auto object-cover"
								src={schoolDetail.logo}
								alt={schoolDetail.name + " logo"}
							/>
						</div>
						<CardTitle className="mb-2 text-lg font-bold text-wrap text-center text-white">
							{schoolDetail.name}
						</CardTitle>
						<CardDescription className="flex-grow">
							{/* <div className="flex gap-1 pt-4">
								<StarRating rating={schoolDetail.rating} />
								{schoolDetail.rating}
							</div> */}
							<div className="text-xs">
								{schoolDetail.aboutUs.length > 200 ? (
									<>
										{schoolDetail.aboutUs.slice(0, 200)} ...
									</>
								) : (
									<>{schoolDetail.aboutUs.slice(0, 200)} </>
								)}
							</div>
						</CardDescription>
						<div className="mt-4 pb-2 p-0 text-muted-foreground text-xs">
							<p>
								{schoolDetail.category &&
									getFullName(schoolDetail.category)}
							</p>
							<div>
								{schoolDetail.area && (
									<div className="flex gap-1 items-center">
										<svg
											className="h-3"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<title>map-marker</title>
											<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
										</svg>
										<span>
											{schoolDetail.area.replace(
												/_/g,
												" "
											)}
										</span>
									</div>
								)}
							</div>
						</div>
					</Card>
				</Link>
			))}
		</div>
	);
}
