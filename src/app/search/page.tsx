"use client";

import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import SearchInputs from "@/components/SearchInputs";
import { useSchoolList } from "@/lib/hooks";
import { Place } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page({ searchParams }: any) {
	const board = searchParams.board;
	const area: Place = searchParams.area;
	const name = searchParams.name;

	const { details, isLoading, failed } = useSchoolList({
		board,
		area,
		name,
	});

	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading) return <Loading />;
	if (!details) return <Loading />;
	console.log(details);

	return (
		<div>
			<div className="pt-10 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20">
				<SearchInputs
					initialValues={{ board, where: area, school: name }}
				/>
				{details.length !== 0 ? (
					<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
						{details.map((school, i) => (
							<SchoolCard
								key={i}
								schoolDetail={school}
							/>
						))}
					</div>
				) : (
					<div className="flex justify-center items-center pt-10 text-3xl text-muted-foreground">
						No Results Found
					</div>
				)}
			</div>
		</div>
	);
}
