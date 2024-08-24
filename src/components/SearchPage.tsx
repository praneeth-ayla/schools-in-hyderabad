"use client";

import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import SearchInputs from "@/components/SearchInputs";
import { useGetEventsList, useSchoolList } from "@/lib/hooks";
import { Place, SchoolCategory } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import CarouselEvents from "./CarouselEvents";

interface Props {
	name: string;
	area: Place;
	board: SchoolCategory;
}

export default function SearchPage({ name, area, board }: Props) {
	const [events, setEvents] = useState<any[]>([]);
	const { details, isLoading, failed } = useSchoolList({
		area,
		name,
		board,
	});

	const {
		events: fetchedEvents,
		isLoading: isLoadingEvent,
		failed: failedEvent,
	} = useGetEventsList({ area });

	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	useEffect(() => {
		if (!isLoadingEvent) {
			// Update events when area changes or fetching is complete
			setEvents(fetchedEvents);
		}
	}, [area, isLoadingEvent, fetchedEvents]);

	if (isLoading && isLoadingEvent) return <Loading />;
	if (!details) return <Loading />;

	return (
		<div className="py-10 w-full min-h-[50rem] bg-blue-950 relative flex flex-col antialiased">
			<div className="pt-10 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 text-white relative z-10">
				<div className="m-0">
					<SearchInputs
						initialValues={{ board, where: area, school: name }}
					/>

					{events.length > 0 ? (
						<div className="py-8">
							<p className="font-bold text-2xl">
								{!area ? (
									"Noteworthy Highlights"
								) : (
									<>
										Noteworthy Highlights in{" "}
										<span className="text-purple-600">
											{area.replace(/_/g, " ")}
										</span>
									</>
								)}
							</p>
							<div className="m-0 pt-4 px-0">
								<CarouselEvents events={events} />
							</div>
						</div>
					) : (
						area && (
							<div className="font-semibold text-2xl py-8">
								No events
							</div>
						)
					)}
				</div>
				{details.length !== 0 ? (
					<div className="pt-10">
						<p className="font-bold text-2xl">
							Schools in {area.replace(/_/g, " ")}
						</p>

						<SchoolCard
							type="school"
							schoolDetails={details}
						/>
					</div>
				) : (
					<div className="flex justify-center items-center pt-10 text-3xl text-muted-foreground">
						No Results Found
					</div>
				)}
			</div>
			<BackgroundBeams />
		</div>
	);
}
