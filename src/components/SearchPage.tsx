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
import CarouselNewsletter from "./CarouselNewsletter";

interface Props {
	name: string;
	area: Place;
	board: SchoolCategory;
}

export default function SearchPage({ name, area, board }: Props) {
	const [events, setEvents] = useState<any[]>([]);
	const [toppers, setToppers] = useState<any[]>([]);
	const [newsletters, setNewsletters] = useState<any[]>([]);
	const { details, isLoading, failed } = useSchoolList({
		area,
		name,
		board,
	});

	const {
		events: fetchedEvents,
		toppers: fetchedToppers,
		newsletters: fetchedNewsletters,
		isLoading: isLoadingEvent,
		failed: failedEvent,
	} = useGetEventsList({ area, name, board });

	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	useEffect(() => {
		if (!isLoadingEvent) {
			setEvents(fetchedEvents || []);
			setToppers(fetchedToppers || []);
			setNewsletters(fetchedNewsletters || []);
		}
	}, [area, isLoadingEvent, fetchedEvents, fetchedToppers]);

	if (isLoading && isLoadingEvent) return <Loading />;
	if (!details) return <Loading />;

	// Dynamic heading based on search criteria
	let heading = "Schools";
	if (name && !area) {
		heading = `Search Results for "${name}"`;
	} else if (area && !name) {
		heading = `Schools in ${area}`;
	} else if (name && area) {
		heading = `Search Results for "${name}" in ${area}`;
	}
	console.log("newsletter", newsletters);
	console.log("events", events);

	return (
		<div className="py-10 w-full min-h-[50rem] bg-blue-950 relative flex flex-col antialiased">
			<div className="px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 text-white relative z-10">
				<div className="m-0">
					<SearchInputs
						initialValues={{ board, where: area, school: name }}
					/>
					{toppers.length > 0 && (
						<div className="py-3">
							<p className="font-bold text-xl italic text-amber-300">
								School Toppers
							</p>
							<div className="m-0 pt-4 px-0">
								<CarouselEvents
									events={toppers}
									type="topper"
								/>
							</div>
						</div>
					)}
					{events.length > 0 && (
						<div className="py-3">
							<p className="font-bold text-xl italic text-amber-300">
								School Events
							</p>
							<div className="m-0 pt-4 px-0">
								<CarouselEvents
									events={events}
									type="events"
								/>
							</div>
						</div>
					)}
					{events.length > 0 && (
						<div className="py-3">
							<p className="font-bold text-xl italic text-amber-300">
								School Newsletters
							</p>
							<div className="m-0 pt-4 px-0">
								<CarouselNewsletter newsletter={newsletters} />
							</div>
						</div>
					)}
				</div>

				{details.length !== 0 ? (
					<div className="pt-10">
						<p className="font-bold text-2xl">{heading}</p>

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
