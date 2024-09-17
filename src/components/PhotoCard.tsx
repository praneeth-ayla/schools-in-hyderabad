import { Card, CardDescription, CardTitle } from "./ui/card";

export default function PhotoCard({
	event,
}: {
	event: {
		title: string;
		description: string;
		image: string;
		id?: string;
	};
}) {
	return (
		<div>
			<Card className="flex p-2 gap-2 bg-blue-200">
				<div className="flex items-center w-40 h-32">
					<img
						src={event.image}
						alt={`${event.title} image`}
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
		</div>
	);
}
