import generateSlug from "@/utils/slugGenerator";
import prisma from "../../../../../prisma";

export async function POST(request: Request) {
	const data = await request.json();
	const uriNewsletter = `${generateSlug(data.name)}-${generateSlug(
		data.area.name
	)}`;
	const newsletterImage =
		data.newsletter.image !== "" ? data.newsletter.image : data.logo;
	try {
		const school = await prisma.school.create({
			data: {
				name: data.name,
				aboutUs: data.aboutUs,
				logo: data.logo,
				rating: data.rating,
				locationMap: data.locationMap,
				showReviews: data.showReviews,
				showNewsletter: data.showNewsletter,
				area: {
					connectOrCreate: {
						where: {
							name:
								data.area.name && data.area.name.trim() !== ""
									? data.area.name
									: "AREA", // Use "AREA" if empty string
						},
						create: {
							name:
								data.area.name && data.area.name.trim() !== ""
									? data.area.name
									: "AREA", // Default to "AREA" if empty string
						},
					},
				},
				category: {
					connectOrCreate: {
						where: {
							name:
								data.category.name &&
								data.category.name.trim() !== ""
									? data.category.name
									: "BOARD", // Use "BOARD" if empty string
						},
						create: {
							name:
								data.category.name &&
								data.category.name.trim() !== ""
									? data.category.name
									: "BOARD", // Default to "BOARD" if empty string
						},
					},
				},

				contact: {
					create: data.contact,
				},
				facilities: {
					create: data.facilities,
				},
				events: {
					create: data.events,
				},
				awards: {
					create: data.awards,
				},
				toppers: {
					create: data.toppers,
				},
				images: {
					create: data.images,
				},
				videos: {
					create: data.videos,
				},
				reviews: {
					create: data.reviews,
				},
				newsletter: {
					create: {
						image: newsletterImage,
						title: data.newsletter.title,
						description: data.newsletter.description,
						uri: uriNewsletter,
					},
				},
			},
		});
		return new Response(JSON.stringify(school), {
			status: 201,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error creating school:", error);
		return new Response(
			JSON.stringify({ error: (error as Error).message }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
