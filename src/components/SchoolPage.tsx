"use client";
import { CarouselSpacing } from "@/components/Carousel";
import { CarouselYoutube } from "@/components/CarouselYoutube";
import ReviewForm from "@/components/ReviewForm";
import StarRating from "@/components/StarRating";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useSchoolDetails } from "../lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import DateTimeDisplay from "@/components/TimeConverter";
import { Badge } from "./ui/badge";
import Editor from "./Editor";
import { BackgroundBeams } from "./ui/background-beams";

export default function SchoolPage({ schoolId }: { schoolId: string }) {
	const { isLoading, details, failed } = useSchoolDetails(schoolId);
	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);
	if (isLoading) return <Loading />;
	if (!details) return <Loading />;

	console.log(details.videos?.length);

	return (
		<div className="py-10 w-full bg-blue-200 flex flex-col items-center justify-center antialiased">
			<div>
				<div className="sm:px-5 md:px-10 lg:px-20 xl:px-44 pt-4 lg:pt-8">
					<p className="text-center pb-4 px-2 font-bold text-lg md:text-4xl">
						{details.name}
					</p>
					<div className="flex flex-col-reverse lg:flex-row gap-3 pb-10">
						<Card className="px-6 mt-10 lg:mt-0 row-start-2 shadow-2xl pb-10 bg-blue-300 bg-opacity-50 border">
							<div className="flex justify-center items-center pt-10 h-auto  w-[300px] lg:w-[300px]">
								<img
									className="rounded-md"
									alt="school logo"
									src={details.logo}
								/>
							</div>
							<div className="grid gap-6">
								{details.contact && (
									<div className="py-6">
										<p className="text-lg font-bold">
											Contact Info
										</p>
										<div className="flex flex-col gap-3 text-sm">
											<div className="flex gap-2 flex-col">
												<p className="border-b text-xs border-gray-400 font-semibold">
													Location
												</p>
												<p>
													{details.contact.location}
												</p>
											</div>

											<div className="flex gap-2 flex-col">
												<p className="border-b text-xs border-gray-400 font-semibold">
													Email
												</p>
												<p>
													<p>
														{details.contact.email}
													</p>
												</p>
											</div>
											<div className="flex gap-2 flex-col">
												<p className="border-b text-xs border-gray-400 font-semibold">
													Number
												</p>
												<p>
													<p>
														{details.contact.number}
													</p>
												</p>
											</div>
										</div>
									</div>
								)}
								{/* <div>Social Profile</div> */}
							</div>
						</Card>

						<Card className="lg:col-start-4 py-10 lg:col-span-full shadow-2xl bg-blue-300 bg-opacity-50 border">
							<div className="md:px-4 relative rounded-lg z-10">
								<CarouselSpacing images={details.images} />
							</div>
							<div className="px-4 md:px-10 pt-3 flex flex-col gap-6 md:gap-10">
								<div className="pt-11">
									<p className="text-lg md:text-xl pb-3 font-bold">
										About
									</p>
									<div className="text- text-sm">
										{details.aboutUs}
										{/* <Editor
											blockTextHandler={() => {}}
											editable={false}
											initialContent={details.aboutUs}
										/> */}
									</div>
								</div>
								{details.videos &&
									details.videos?.length > 0 && (
										<CarouselYoutube
											videos={details.videos}
										/>
									)}

								{details.facilities &&
									details.facilities?.length > 0 && (
										<div>
											<p className="text-lg md:text-xl pb-3 font-bold">
												Facilities
											</p>
											<div className="text-sm flex gap-1 flex-wrap">
												{details.facilities.map(
													(facility, index) => (
														<Badge
															key={index}
															className="text-xs">
															{/* Didn't want to change the types so :)*/}
															{/* @ts-ignore */}
															{facility.name}
														</Badge>
													)
												)}
											</div>
										</div>
									)}

								<div>
									{details?.events &&
										details.events.length > 0 &&
										details.events.some(
											(event) => event.title.trim() !== ""
										) && (
											<>
												<p className="text-lg md:text-xl pb-3 font-bold">
													Events
												</p>
												<div className="grid gap-3">
													{details.events.map(
														(event, i) => (
															<div
																key={i}
																className="text-">
																<p className="text-sm">
																	{
																		event.title
																	}
																</p>
																<p className="text-xs">
																	{
																		event.description
																	}
																</p>
															</div>
														)
													)}
												</div>
											</>
										)}
								</div>

								{details.toppers !== "" && (
									<div>
										<p className="text-lg md:text-xl pb-3">
											Toppers
										</p>
										<div className="text-sm">
											{details.toppers}
										</div>
									</div>
								)}
								<div>
									<p className="text-lg md:text-xl font-bold">
										Reviews
									</p>
									<div className="py-3 grid gap-1">
										<p className="text-sm font-light">
											Average Rating
										</p>
										<div className="font-light text-sm">
											{details.rating} / 5
										</div>
										<StarRating rating={details.rating} />
									</div>

									<div className="text-sm pt-4 border-y border-gray-600">
										<div className="flex flex-col gap-3 pl-4">
											{details.reviews.length > 0 ? (
												<div>
													{details.reviews.map(
														(
															{
																message,
																name,
																date,
																rating,
															},
															i
														) => (
															<div
																className="p-2"
																key={i}>
																<CardTitle className="font-normal text-base flex justify-between items-center">
																	<div className="flex gap-3 items-center">
																		<Avatar className="border border-gray-600 flex justify-center items-center">
																			<div>
																				{name
																					.charAt(
																						0
																					)
																					.toUpperCase()}
																			</div>
																		</Avatar>
																		<div className="text-xs md:text-base">
																			{
																				name
																			}
																		</div>
																	</div>
																	<div className="text-xs md:text-sm">
																		{DateTimeDisplay(
																			date
																		).slice(
																			-1,
																			17
																		)}
																	</div>
																</CardTitle>
																<StarRating
																	rating={
																		rating
																	}
																/>
																<CardDescription className="py-3 text-xs text-black">
																	{message}
																</CardDescription>
															</div>
														)
													)}
												</div>
											) : (
												<div className="pb-3">
													No reviews
												</div>
											)}
										</div>
									</div>
									<ReviewForm schoolId={Number(schoolId)} />
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
