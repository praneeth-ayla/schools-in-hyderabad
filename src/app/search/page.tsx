"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useSchoolList } from "@/lib/hooks";
import Link from "next/link";

export default function page({ searchParams }: any) {
	const board = searchParams.board;
	const area = searchParams.area;
	const name = searchParams.name;

	const { details, isLoading, failed } = useSchoolList({
		board,
		area,
		name,
	});

	console.log(details);
	return (
		<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 px-2  sm:px-4 md:px-10 lg:px-40 xl:px-60">
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
						<img
							className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
							src="https://flowbite.com/docs/images/blog/image-1.jpg"
							alt=""
						/>
					</CardTitle>
					<CardDescription>
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								CMR School
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology
								acquisitions of 2021 so far, in reverse
								chronological order.
							</p>
							<div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Read more
								<svg
									className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</div>
						</div>
					</CardDescription>
				</Card>
			</Link>
		</div>
	);
}
