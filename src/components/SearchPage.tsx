"use client";
import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import SearchInputs from "@/components/SearchInputs";
import { useGetEventsList, useSchoolList } from "@/lib/hooks";
import { Place, SchoolCategory } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import CarouselEvents from "./CarouselEvents";

interface Props {
	name: string;
	area: Place;
	board: SchoolCategory;
}

export default function SearchPage({ name, area, board }: Props) {
	const { details, isLoading, failed } = useSchoolList({
		board,
		area,
		name,
	});
	useEffect(() => {}, [area]);
	const {
		events,
		isLoading: isLoadingEvent,
		failed: failedEvent,
	} = useGetEventsList(area);

	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading && isLoadingEvent) return <Loading />;
	if (!details) return <Loading />;

	return (
		<div className="py-10 w-full min-h-[50rem] bg-blue-950 relative flex flex-col antialiased">
			<div className="pt-10 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 text-white relative z-10">
				<div className="m-0">
					<SearchInputs
						initialValues={{ board, where: area, school: name }}
					/>

					{events === null ? (
						<div>No events</div>
					) : (
						<div className="py-8">
							<p className="font-bold text-2xl">
								{!area ? "Events" : `Events in ${area}`}
							</p>
							<div className="m-0 pt-4 px-0">
								<CarouselEvents events={events} />
							</div>
						</div>
					)}
				</div>
				{details.length !== 0 ? (
					<div className="pt-10">
						<p className="font-bold text-2xl">Schools in {area}</p>
						<div className="mt-4 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
							{details.map((school, i) => (
								<SchoolCard
									key={i}
									schoolDetail={school}
								/>
							))}
						</div>
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
