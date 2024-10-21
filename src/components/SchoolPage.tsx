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
import { BackgroundBeams } from "./ui/background-beams";
import PhotoCard from "./PhotoCard";
import EventsSchoolPage from "./EventsSchoolPage";
import { extractNameAndArea, getIdFromSlug } from "@/utils/slugGenerator";

export default function SchoolPage({
	school,
}: {
	school: {
		name: string;
		area: string;
	};
}) {
	const { isLoading, details, failed } = useSchoolDetails(school);
	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);
	if (isLoading) return <Loading />;
	if (!details) return <Loading />;

	console.log("School Id:", details.id);
	return (
		<div className="py-10 w-full bg-blue-200 flex flex-col items-center justify-center antialiased">
			<div>
				<div className="sm:px-5 md:px-10 lg:px-20 xl:px-44">
					<p className="text-center pb-4 px-2 font-bold text-4xl md:text-6xl">
						{details.name}
					</p>
					<div className="flex flex-col-reverse lg:flex-row gap-3 pb-10">
						<Card className="px-6 mt-10 lg:mt-0 row-start-2 shadow-2xl pb-10 bg-blue-300 bg-opacity-50 border">
							<div className="flex justify-center items-center  relative rounded-lg z-10 pt-2">
								<img
									className="rounded-md lg:w-[300px]"
									alt={`${details.name} logo image`}
									src={details.logo}
								/>
							</div>
							<div className="animate-pulse text-center text-xl font-bold text-amber-700 text-wrap">
								Admissions are open now
							</div>
							<pre className="font-sans grid gap-6">
								{details.contact && (
									<div className="py-6">
										<p className="text-2xl font-bold">
											Contact Info
										</p>
										<div className="flex flex-col gap-3 ">
											<div className="flex gap-2 flex-col">
												<p className="border-b  border-gray-400 font-semibold">
													Location
												</p>
												<p>
													{details.contact.location}
												</p>
											</div>

											<div className="flex gap-2 flex-col">
												<p className="border-b  border-gray-400 font-semibold">
													Email
												</p>
												<p>
													<p>
														{details.contact.email}
													</p>
												</p>
											</div>
											<div className="flex gap-2 flex-col">
												<p className="border-b  border-gray-400 font-semibold">
													Number
												</p>
												<p>
													<p>
														{details.contact.number}
													</p>
												</p>
											</div>
											<div className="flex gap-2 flex-col">
												<p className="border-b  border-gray-400 font-semibold">
													Website
												</p>
												<p>
													<p>
														{
															details.contact
																.website
														}
													</p>
												</p>
											</div>
										</div>
									</div>
								)}
								<div>
									<div className="text-2xl font-bold">
										Social Profile
									</div>
									<div className="flex gap-2 flex-wrap">
										<a
											href={
												details.contact?.facebook || "#"
											}
											target="_blank"
											rel="noopener noreferrer">
											<svg
												className="h-10 w-10"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<title>facebook</title>
												<path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
											</svg>
										</a>
										<a
											href={
												details.contact?.instagram ||
												"#"
											}
											target="_blank"
											rel="noopener noreferrer">
											<svg
												className="h-10 w-10"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<title>instagram</title>
												<path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
											</svg>
										</a>
										<a
											href={
												details.contact?.twitter || "#"
											}
											target="_blank"
											rel="noopener noreferrer">
											<svg
												className="h-10 w-10"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<title>twitter</title>
												<path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
											</svg>
										</a>
										<a
											href={
												details.contact?.youtube || "#"
											}
											target="_blank"
											rel="noopener noreferrer">
											<svg
												className="h-10 w-10"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<title>youtube</title>
												<path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
											</svg>
										</a>
										<a
											href={
												details.contact?.linkedin || "#"
											}
											target="_blank"
											rel="noopener noreferrer">
											<svg
												className="h-10 w-10"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<title>linkedin</title>
												<path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
											</svg>
										</a>
									</div>
								</div>
								<div>
									<div className="text-2xl font-bold">
										Map
									</div>
									<div className="flex justify-center items-center">
										<div
											dangerouslySetInnerHTML={{
												__html: details.locationMap,
											}}
										/>
									</div>
								</div>
								<div>
									{details.contact?.opening && (
										<>
											<div className="text-2xl font-bold">
												Timings
											</div>
											<pre className="font-sans">
												{details.contact.opening}
											</pre>
										</>
									)}
								</div>
							</pre>
						</Card>

						<Card className=" py-2 lg:col-span-full shadow-2xl bg-blue-300 bg-opacity-50 border">
							<div className="flex justify-center items-center  relative rounded-lg z-10">
								<CarouselSpacing images={details.images} />
							</div>
							<div className="px-4 md:px-10 pt-3 flex flex-col gap-6 md:gap-10">
								<div className="pt-11">
									<p className="text-2xl pb-3 font-bold">
										About
									</p>
									<div className="">
										<pre className="text-wrap font-sans">
											{details.aboutUs}
										</pre>
									</div>
								</div>
								{details.facilities &&
									details.facilities?.length > 0 && (
										<div>
											<p className="text-2xl pb-3 font-bold">
												Facilities
											</p>
											<div className="gap-3 flex flex-wrap">
												{/* <TextGenerateEffect
													className="head font-bold flex flex-wrap"
													words={details.facilities
														.map(
															// @ts-ignore
															(faci) => faci.name
														)
														.join(" ")}
												/> */}
												{details.facilities.map(
													(facility, i) => (
														<Badge
															key={i}
															className="bg-amber-500 font-bold text-lg p-2 text-black px-4">
															{/* @ts-ignore */}
															{facility.name}
														</Badge>
													)
												)}
											</div>
										</div>
									)}

								{details.toppers &&
									details.toppers.length > 0 && (
										<div>
											<p className="text-2xl pb-3 font-bold">
												Our Toppers
											</p>
											<pre className=" font-sans text-wrap">
												<div className="grid gap-3">
													<EventsSchoolPage
														schoolName={
															details.name
														}
														desBoo={true}
														events={details.toppers}
													/>
												</div>
											</pre>
										</div>
									)}

								{details.awards &&
									details.awards.length > 0 && (
										<div>
											<p className="text-2xl pb-3 font-bold">
												Awards
											</p>
											<pre className=" font-sans text-wrap">
												<div className="grid gap-3">
													{details.awards.map(
														(
															award: any,
															i: number
														) => (
															<PhotoCard
																schoolName={
																	details.name
																}
																key={i}
																event={award}
															/>
														)
													)}
												</div>
											</pre>
										</div>
									)}

								{details.videos &&
									details.videos?.length > 0 && (
										<div>
											<p className="text-2xl pb-3 font-bold">
												Videos
											</p>

											<CarouselYoutube
												videos={details.videos}
											/>
										</div>
									)}

								<div className="px-0 m-0">
									{details?.events &&
										details.events.length > 0 &&
										details.events.some(
											(event) => event.title.trim() !== ""
										) && (
											<>
												<p className="text-2xl pb-3 font-bold">
													Events
												</p>
												<div>
													<EventsSchoolPage
														schoolName={
															details.name
														}
														desBoo={false}
														events={details.events}
													/>
												</div>
											</>
										)}
								</div>
								{details.showReviews && (
									<div>
										<p className="text-2xl font-bold">
											Reviews
										</p>
										<div className="py-3 grid gap-1">
											<p className=" font-light">
												Average Rating
											</p>
											<div className="font-light ">
												{details.rating} / 5
											</div>
											<StarRating
												rating={details.rating}
											/>
										</div>

										<div className=" pt-4 border-y border-gray-600">
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
																			<div className=" md:text-base">
																				{
																					name
																				}
																			</div>
																		</div>
																		<div className=" md:">
																			{DateTimeDisplay(
																				date
																			).slice(
																				0,
																				17
																			)}
																		</div>
																	</CardTitle>
																	<StarRating
																		rating={
																			rating
																		}
																	/>
																	<CardDescription className="py-3  text-black">
																		{
																			message
																		}
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
										<ReviewForm
											schoolId={Number(details.id)}
										/>
									</div>
								)}
							</div>
						</Card>
					</div>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
