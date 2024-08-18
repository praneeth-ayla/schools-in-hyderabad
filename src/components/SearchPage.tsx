"use client";
import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import SearchInputs from "@/components/SearchInputs";
import { useSchoolList } from "@/lib/hooks";
import { Place, SchoolCategory } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";

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

	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading) return <Loading />;
	if (!details) return <Loading />;
	console.log(details);

	return (
		<div className="py-10 w-full h-[50rem] bg-blue-950 relative flex flex-col antialiased">
			<div className="pt-10 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 text-white relative z-10">
				<SearchInputs
					initialValues={{ board, where: area, school: name }}
				/>
				{details.length !== 0 ? (
					<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 ">
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
			<BackgroundBeams />
		</div>
	);
}
