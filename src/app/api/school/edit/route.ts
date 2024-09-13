import { MerchantDetails, SchoolDetails } from "@/lib/types";
import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma";

export async function PUT(request: Request) {
	const body: SchoolDetails = await request.json();
	const user = await getServerSession();
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	if (!id) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "ID is required!",
			}),
			{ status: 400 }
		);
	}

	if (user?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "You're not authorized!",
			}),
			{ status: 403 }
		);
	}

	const contactData = body.contact
		? {
				location: body.contact.location,
				number: body.contact.number,
				email: body.contact.email,
				website: body.contact.website,
				instagram: body.contact.instagram,
				twitter: body.contact.twitter,
				linkedin: body.contact.linkedin,
				youtube: body.contact.youtube,
				facebook: body.contact.facebook,
				opening: body.contact.opening,
		  }
		: undefined;

	try {
		const res = await prisma.school.update({
			where: {
				id: parseInt(id, 10), // Convert id to number
			},
			data: {
				name: body.name,
				aboutUs: body.aboutUs,
				logo: body.logo,
				locationMap: body.locationMap,
				contact: contactData ? { update: contactData } : undefined,
				images: {
					deleteMany: {}, // Clear existing images
					create:
						body.images?.map((image) => ({
							url: image.url,
						})) || [],
				},
				videos: {
					deleteMany: {}, // Clear existing videos
					create:
						body.videos?.map((video) => ({
							src: video.src,
							title: video.title,
						})) || [],
				},
				events: {
					deleteMany: {},
					create:
						body.events?.map((event) => ({
							description: event.description,
							image: event.image,
							title: event.title,
							date: event.date,
							advertise: event.advertise,
						})) || [],
				},
				facilities: {
					deleteMany: {},
					// @ts-ignore
					create: body.facilities || [],
				},
				toppers: {
					deleteMany: {},
					create:
						body.toppers?.map((topper) => ({
							description: topper.description,
							image: topper.image,
							title: topper.title,
							date: topper.date,
							advertise: topper.advertise,
						})) || [],
				},
				awards: {
					deleteMany: {},
					create:
						body.awards?.map((award) => ({
							description: award.description,
							image: award.image,
							title: award.title,
							// @ts-ignore
							date: award.date,
						})) || [],
				},

				// reviews: {
				// 	deleteMany: {}, // Clear existing reviews
				// 	create:
				// 		body.reviews?.map((review) => ({
				// 			name: review.name, // Add the name field
				// 			message: review.message, // Add the message field
				// 			reviewText: review.reviewText,
				// 			rating: review.rating,
				// 			createdAt: new Date(review.createdAt),
				// 		})) || [],
				// },
			},
		});

		return new Response(JSON.stringify(res), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({
				success: false,
				message: "Failed to update merchant",
			}),
			{ status: 500 }
		);
	}
}
