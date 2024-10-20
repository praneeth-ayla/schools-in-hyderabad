import Link from "next/link";
import { Card, CardDescription, CardTitle } from "./ui/card";
import generateSlug from "@/utils/slugGenerator";

export default function PhotoCard({
	event,
	schoolName,
}: {
	event: {
		title: string;
		description: string;
		image: string;
		id?: string;
	};
	schoolName: string;
}) {
	return (
		<Link
			href={`/award/${generateSlug(schoolName)}-${generateSlug(
				event.title
			)}-${event.id}`}>
			<Card className="flex p-2 gap-2 bg-blue-200">
				<div className="flex items-center w-40 h-32">
					<img
						src={event.image}
						alt={`${schoolName} ${event.title} image`}
						className="object-cover w-full h-full rounded-md"
					/>
				</div>
				<div className="flex flex-col">
					<CardTitle className="text-base md:text-lg">
						{event.title}
					</CardTitle>
					<CardDescription className="text-black text-xs md:text-base">
						{event.description.length > 130 ? (
							<>{event.description.slice(0, 130)} ...</>
						) : (
							<>{event.description.slice(0, 130)} </>
						)}
					</CardDescription>
				</div>
			</Card>
		</Link>
	);
}
