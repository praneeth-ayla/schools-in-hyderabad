import { Card, CardDescription, CardTitle } from "./ui/card";

export default function PhotoCard({
	event,
}: {
	event: {
		title: string;
		description: string;
		image: string;
		id: string;
	};
}) {
	return (
		<div>
			<Card className="flex p-2 gap-2 bg-blue-200">
				<div className="flex items-center w-40 h-32">
					<img
						src={
							event.image ||
							"https://utfs.io/f/a32a0397-1b5c-42a9-af5c-d24e7e7b71da-tpk6wk.com_wallpaper.jpg"
						}
						alt={`${event.title} img`}
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
