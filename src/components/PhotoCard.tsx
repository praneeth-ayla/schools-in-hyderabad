import { Card, CardDescription, CardTitle } from "./ui/card";

export default function PhotoCard({
	title,
	description,
	img,
}: {
	title: string;
	description: string;
	img: string;
}) {
	return (
		<div>
			<Card className="flex p-2 gap-2 bg-blue-200 hover:scale-105">
				<div className="flex items-center w-40 h-32">
					<img
						src={img}
						alt="Example Image"
						className="object-cover w-full h-full rounded-md"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<CardTitle className="text-base md:text-lg">
						{title}
					</CardTitle>
					<CardDescription className="text-black text-xs md:text-base">
						{description.length > 130 ? (
							<>{description.slice(0, 130)} ...</>
						) : (
							<>{description.slice(0, 130)} </>
						)}
					</CardDescription>
				</div>
			</Card>
		</div>
	);
}
