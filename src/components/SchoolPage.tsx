"use client";
import { CarouselSpacing } from "@/components/Carousel";
import { CarouselYoutube } from "@/components/CarouselYoutube";
import ReviewForm from "@/components/ReviewForm";
import StarRating from "@/components/StarRating";
import { Avatar } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useSchoolDetails } from "../lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import DateTimeDisplay from "@/components/TimeConverter";
import { Badge } from "./ui/badge";

export default function SchoolPage({ schoolId }: { schoolId: string }) {
	const { isLoading, details, failed } = useSchoolDetails(schoolId);
	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);
	if (isLoading) return <Loading />;
	if (!details) return <Loading />;

	return (
		<div className="sm:px-5 md:px-10 lg:px-20 xl:px-36 pt-4 lg:pt-8">
			<p className="text-center pb-4 px-2 font-bold text-muted-foreground text-lg md:text-xl">
				{details.name}
			</p>
			<div className="flex flex-col-reverse lg:flex-row">
				<div className="mt-10 lg:mt-0 px-5 row-start-2">
					<div className="flex justify-center items-center">
						<div className="h-auto  w-[300px] lg:w-[200px]">
							<img
								alt="school logo"
								src={details.logo}
							/>
						</div>
					</div>
					<div className="grid gap-6">
						{details.contact && (
							<div className="pt-6">
								<p className="text-lg">Contact Info</p>
								<div className="flex text-muted-foreground flex-col gap-3 text-sm">
									<div className="flex items-center gap-2">
										<svg
											className="h-6"
											fill="currentColor"
											xmlns="http://www.w2.org/2000/svg"
											viewBox="-1 0 24 24">
											<title>map-marker</title>
											<path d="M11,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
										</svg>
										<p>{details.contact.location}</p>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="h-6"
											fill="currentColor"
											xmlns="http://www.w2.org/2000/svg"
											viewBox="-1 0 24 24">
											<title>phone</title>
											<path d="M5.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
										</svg>
										<p>{details.contact.number}</p>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="h-6"
											fill="currentColor"
											xmlns="http://www.w2.org/2000/svg"
											viewBox="-1 0 24 24">
											<title>email</title>
											<path d="M19,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
										</svg>
										<p>{details.contact.email}</p>
									</div>
								</div>
							</div>
						)}
						{/* <div>Social Profile</div> */}
						<div>
							<div>Map</div>
							<div
								className="flex justify-center items-center"
								dangerouslySetInnerHTML={{
									__html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.186001334633!2d78.51320453048395!3d17.546328898711444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85189e5f7155%3A0xc67337b740849d21!2sKENDRIYA%20VIDYALAYA%20HAKIMPET!5e0!3m2!1sen!2sin!4v1723791916229!5m2!1sen!2sin" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
								}}></div>
						</div>
					</div>
				</div>
				<div className="lg:col-start-4 lg:col-span-full">
					<CarouselSpacing images={details.images} />
					<div className="px-3 pt-3 flex flex-col gap-6 md:gap-10">
						<div className="pt-11">
							<p className="text-lg md:text-xl">About</p>
							<div className="text-muted-foreground text-sm">
								{details.aboutUs}
							</div>
						</div>

						{details.videos && (
							<div>
								<CarouselYoutube videos={details.videos} />
							</div>
						)}

						{details.facilities && (
							<div>
								<p className="text-lg md:text-xl">Facilities</p>
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
										<p className="text-lg md:text-xl pb-3">
											Events
										</p>
										<div className="grid gap-3">
											{details.events.map((event, i) => (
												<div
													key={i}
													className="text-">
													<p className="text-sm">
														{event.title}
													</p>
													<p className="text-xs text-muted-foreground">
														{event.description}
													</p>
												</div>
											))}
										</div>
									</>
								)}
						</div>

						{details.toppers !== "" && (
							<div>
								<p className="text-lg md:text-xl">Toppers</p>
								<div className="text-muted-foreground text-sm">
									{details.toppers}
								</div>
							</div>
						)}
						<div>
							<p className="text-lg md:text-xl">Reviews</p>
							<div className="py-3 grid gap-1">
								<p className="text-sm font-light">
									Average Rating
								</p>
								<div className="font-light text-sm">
									{details.rating} / 5
								</div>
								<StarRating rating={details.rating} />
							</div>

							<div className="text-muted-foreground text-sm pt-4 border-y">
								<div className="flex flex-col gap-3 pl-4">
									{details.reviews.map(
										(
											{ message, name, date, rating },
											i
										) => (
											<div
												className="p-2"
												key={i}>
												<CardTitle className="font-normal text-base flex justify-between items-center">
													<div className="flex gap-3 items-center">
														<Avatar className="border flex justify-center items-center">
															<div>
																{name
																	.charAt(0)
																	.toUpperCase()}
															</div>
														</Avatar>
														<div className="text-xs md:text-base">
															{name}
														</div>
													</div>
													<div className="text-muted-foreground text-xs md:text-sm">
														{DateTimeDisplay(
															date
														).slice(-1, 17)}
													</div>
												</CardTitle>
												<StarRating rating={rating} />
												<CardDescription className="py-3 text-xs">
													{message}
												</CardDescription>
											</div>
										)
									)}
								</div>
							</div>
							<ReviewForm schoolId={Number(schoolId)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
