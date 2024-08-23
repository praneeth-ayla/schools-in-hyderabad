"use client";
import Loading from "@/components/Loading";
import SchoolCard from "@/components/SchoolCard";
import SearchInputs from "@/components/SearchInputs";
import { useGetEventsList, useMerchantList, useSchoolList } from "@/lib/hooks";
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

export default function MerchantsPage() {
	const { details, isLoading, failed } = useMerchantList();
	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading) return <Loading />;
	if (!details) return <Loading />;

	return (
		<div className="py-10 w-full min-h-[50rem] bg-blue-950 relative flex flex-col antialiased">
			<div className="pt-10 px-8 xl:grid-cols-4 sm:px-20 md:px-10 lg:px-20 text-white relative z-10">
				{details.length !== 0 ? (
					<div className="pt-10">
						<SchoolCard
							type="merchant"
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
