"use client";
import { CarouselSpacing } from "@/components/Carousel";
import { CarouselYoutube } from "@/components/CarouselYoutube";
import ReviewForm from "@/components/ReviewForm";
import StarRating from "@/components/StarRating";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardDescription, CardTitle } from "@/components/ui/card";

export default function page({ searchParams }: any) {
	const schoolId = searchParams.id;

	const details = {
		name: "Lorem International school hyderabad",
		images: [
			"data:image/jpeg;base64,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",
			"data:image/jpeg;base64,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",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEwhC_L46SxnT44PvkRn4qWjeCm-zlrDvdQ&s",
		],
		aboutUs:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in dolorum error tempore repudiandae? <br/>Ipsa, laborum laboriosam. Quisquam voluptatem exercitationem, ut cumque quas accusantium ad unde magni, deserunt quidem modi magnam. Rerum, maiores magni? Corporis expedita consequuntur ad. Aspernatur, voluptatem ipsam nam modi, veniam laboriosam error asperiores dolor eum, consectetur maxime fuga ab nobis sed laborum repudiandae. Enim recusandae, deserunt provident necessitatibus ipsa labore distinctio. Quia, eligendi dignissimos voluptas labore nam magnam quod est, recusandae vero nemo modi minima corrupti a perferendis vitae. Debitis, vel incidunt voluptate possimus dolore dignissimos porro quidem quia consectetur, quo voluptas cum et exercitationem. Perspiciatis sit provident, accusamus ad distinctio ratione voluptas. Fugit et quasi perspiciatis rem! Sed tempore exercitationem modi quos beatae impedit, voluptatibus voluptas consequuntur debitis eligendi minus molestias sapiente veniam sequi ducimus ad similique facere. Beatae vero laborum obcaecati! Atque rerum quam quisquam maiores fuga cumque esse explicabo nisi impedit, labore aperiam mollitia optio tempora ea ab, illo earum molestiae in reiciendis ex laudantium quidem libero! Veritatis aut, neque, debitis ex ducimus eaque eum repellat rerum dolorum recusandae vel a pariatur dicta ab eveniet sit. Explicabo dignissimos architecto delectus iste ad! Ea veniam ipsa hic alias molestiae dolorem nulla quam placeat provident.",
		toppers: "suresh muckesh sdkfjasd",
		facilities: [
			"pool",
			"computer labs",
			"smart boards",
			"high school",
			"play ground",
			"transport",
		],
		videos: [
			{
				src: "https://www.youtube.com/watch?v=Yocja_N5s1I",
				title: "history video for testing",
			},
			{
				src: "https://www.youtube.com/watch?v=Yocja_N5s1I",
				title: "history video for testing",
			},
			{
				src: "https://www.youtube.com/watch?v=Yocja_N5s1I",
				title: "history video for testing",
			},
		],
		rating: 4.5,
		reviews: [
			{
				name: "user 1",
				message:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem,error natus non magnam sed illum. Exercitationem nisi molestias sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitrepellendus quidem laudantium! Deleniti rerum expedita omnismollitia accusamus placeat, ipsa delectus ab numquam, nobis dolorquisquam fugiat amet illum facilis ratione harum laudantium facereodio! Alias quaerat praesentium nisi provident?ood school with good facilities",
				date: "11 aug 2024",
				rating: 4,
			},
			{
				name: "user 2",
				message:
					"Fees is little high	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laudantium, perspiciatis pariatur sit recusandae tempora saepe aut vel fugiat sed eveniet totam velit repellat necessitatibus sunt cum consequuntur dolores labore!	",
				date: "11 aug 2024",
				rating: 3,
			},
		],
		events: [
			{
				title: "anual day",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laudantium, perspiciatis pariatur sit recusandae tempora saepe aut vel fugiat sed eveniet totam velit repellat necessitatibus sunt cum consequuntur dolores labore!	",
			},
			{ title: "lorem", description: "lorem" },
			{},
		],
	};
	return (
		<div className="grid lg:grid-cols-12 sm:px-4 md:px-10 lg:px-40 xl:px-60 pt-4 lg:pt-8">
			<div className="row-start-1 lg:col-start-4 lg:col-span-full">
				<h1 className="text-center font-semibold text-muted-foreground text-2xl pb-4">
					{details.name}
				</h1>
				<CarouselSpacing images={details.images}></CarouselSpacing>
				<div className="px-2 pt-3  flex flex-col gap-6 md:gap-10">
					<div className="pt-10">
						<p className="text-lg md:text-xl">About</p>
						<div className="text-muted-foreground text-sm">
							{details.aboutUs}
						</div>
					</div>
					<div>
						<p className="text-lg md:text-xl">Facilities</p>
						<div className="flex flex-wrap gap-1 text-sm">
							{details.facilities.map((item, i) => (
								<Badge key={i}>{item}</Badge>
							))}
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
										<p className="text-sm">{event.title}</p>
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
							<p className="text-sm font-light">Average Rating</p>
							<div className="font-light text-sm">
								{details.rating} / 5
							</div>
							<StarRating rating={details.rating} />
						</div>

						<div className="text-muted-foreground text-sm pt-3 border-y">
							<div className="flex flex-col gap-2">
								{details.reviews.map(
									({ message, name, date, rating }, i) => (
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
											<CardDescription className="py-2 text-xs ">
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
				<div className="lg:row-start-1 lg:col-span-3 bg-green-400 mt-10">
					<div>details</div>
				</div>
			</div>
		</div>
	);
}
