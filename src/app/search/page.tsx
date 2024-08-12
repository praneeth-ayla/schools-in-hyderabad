"use client";

import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import { useSchoolList } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page({ searchParams }: any) {
	const board = searchParams.board;
	const area = searchParams.area;
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

	return (
		<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 ">
			{details.map((school, i) => (
				<SchoolCard
					key={i}
					schoolDetail={school}
				/>
			))}
			{details.map((school, i) => (
				<SchoolCard
					key={i}
					schoolDetail={school}
				/>
			))}
		</div>
	);
}
