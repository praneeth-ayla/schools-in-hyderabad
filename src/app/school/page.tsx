"use client";
import { CarouselSpacing } from "@/components/Carousel";
import { CarouselYoutube } from "@/components/CarouselYoutube";
import ReviewForm from "@/components/ReviewForm";
import StarRating from "@/components/StarRating";
import { Avatar } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useSchoolDetails } from "../../lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page({ searchParams }: any) {
	const schoolId = searchParams.id;
	const { isLoading, details, failed } = useSchoolDetails(schoolId);
	const router = useRouter();

	useEffect(() => {
		if (failed) router.back();
	}, [failed]);

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-auto text-blue-300"
					viewBox="0 0 24 24">
					<g stroke="currentColor">
						<circle
							cx="12"
							cy="12"
							r="9.5"
							fill="none"
							stroke-linecap="round"
							stroke-width="3">
							<animate
								attributeName="stroke-dasharray"
								calcMode="spline"
								dur="1.5s"
								keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
								keyTimes="0;0.475;0.95;1"
								repeatCount="indefinite"
								values="0 150;42 150;42 150;42 150"
							/>
							<animate
								attributeName="stroke-dashoffset"
								calcMode="spline"
								dur="1.5s"
								keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
								keyTimes="0;0.475;0.95;1"
								repeatCount="indefinite"
								values="0;-16;-59;-59"
							/>
						</circle>
						<animateTransform
							attributeName="transform"
							dur="2s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</g>
				</svg>
			</div>
		);
	if (!details)
		return (
			<div className="flex justify-center items-center h-screen">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-auto text-blue-300"
					viewBox="0 0 24 24">
					<g stroke="currentColor">
						<circle
							cx="12"
							cy="12"
							r="9.5"
							fill="none"
							stroke-linecap="round"
							stroke-width="3">
							<animate
								attributeName="stroke-dasharray"
								calcMode="spline"
								dur="1.5s"
								keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
								keyTimes="0;0.475;0.95;1"
								repeatCount="indefinite"
								values="0 150;42 150;42 150;42 150"
							/>
							<animate
								attributeName="stroke-dashoffset"
								calcMode="spline"
								dur="1.5s"
								keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
								keyTimes="0;0.475;0.95;1"
								repeatCount="indefinite"
								values="0;-16;-59;-59"
							/>
						</circle>
						<animateTransform
							attributeName="transform"
							dur="2s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</g>
				</svg>
			</div>
		);

	return (
		<div className="sm:px-4 md:px-10 lg:px-20 xl:px-52 pt-4 lg:pt-8">
			<p className="text-center pb-3 font-bold text-muted-foreground text-lg md:text-xl">
				{details.name}
			</p>
			<div className="grid lg:flex lg:flex-row">
				<div className="lg:row-start-1 lg:col-span-3 mt-10 lg:mt-0 px-5">
					<div className="flex justify-center items-center">
						<div className="h-auto w-[350px] lg:w-[200px]">
							<img
								alt="school logo"
								src={details.logo}
							/>
						</div>
					</div>
					<div className="grid gap-5">
						{details.contact && (
							<div className="pt-5">
								<p className="text-lg">Contact Info</p>
								<div className="flex text-muted-foreground flex-col gap-2 text-xs">
									<div className="flex items-center gap-1">
										<svg
											className="h-5"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<title>map-marker</title>
											<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
										</svg>
										<p>{details.contact.location}</p>
									</div>
									<div className="flex items-center gap-1">
										<svg
											className="h-5"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<title>phone</title>
											<path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
										</svg>
										<p>{details.contact.number}</p>
									</div>
									<div className="flex items-center gap-1">
										<svg
											className="h-5"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<title>email</title>
											<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
										</svg>
										<p>{details.contact.email}</p>
									</div>
								</div>
							</div>
						)}
						<div>Social Profile</div>
						{/* <div>Map</div> */}
					</div>
				</div>
				<div className="row-start-1 lg:col-start-4 lg:col-span-full">
					<CarouselSpacing images={details.images} />
					<div className="px-2 pt-3 flex flex-col gap-6 md:gap-10">
						<div className="pt-10">
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
						<div>
							<p className="text-lg md:text-xl pb-2">Events</p>
							{details.events && (
								<div className="grid gap-2">
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
							)}
						</div>
						{details.toppers && (
							<div>
								<p className="text-lg md:text-xl">Toppers</p>
								<div className="text-muted-foreground text-sm">
									{details.toppers}
								</div>
							</div>
						)}
						<div>
							<p className="text-lg md:text-xl">Reviews</p>
							<div className="py-2 grid gap-1">
								<p className="text-sm font-light">
									Average Rating
								</p>
								<div className="font-light text-sm">
									{details.rating} / 5
								</div>
								<StarRating rating={details.rating} />
							</div>

							<div className="text-muted-foreground text-sm pt-3 border-y">
								<div className="flex flex-col gap-2 pl-4">
									{details.reviews.map(
										(
											{ message, name, date, rating },
											i
										) => (
											<div
												className="p-1"
												key={i}>
												<CardTitle className="font-normal text-base flex justify-between items-center">
													<div className="flex gap-2 items-center">
														<Avatar className="border flex justify-center items-center">
															<div>
																{name
																	.charAt(0)
																	.toUpperCase()}
															</div>
														</Avatar>
														<div>{name}</div>
													</div>
													<div className="text-muted-foreground text-xs md:text-sm">
														{date}
													</div>
												</CardTitle>
												<StarRating rating={rating} />
												<CardDescription className="py-2 text-xs">
													{message}
												</CardDescription>
											</div>
										)
									)}
								</div>
							</div>
							<ReviewForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
