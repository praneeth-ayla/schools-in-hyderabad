import generateSlug from "@/utils/slugGenerator";
import prisma from "../../../../../prisma";

export async function POST(request: Request) {
	const data = await request.json();
	const uriNewsletter = `${generateSlug(data.name)}-${generateSlug(
		data.area.name
	)}-newsletter`;
	try {
		const school = await prisma.school.create({
			data: {
				name: data.name,
				aboutUs: data.aboutUs,
				logo: data.logo,
				rating: data.rating,
				locationMap: data.locationMap,
				showReviews: data.showReviews,
				area: {
					connectOrCreate: {
						where: {
							name: data.area.name, // Check for existing area by name
						},
						create: {
							name: data.area.name, // Create new area if not exists
						},
					},
				},
				category: {
					connectOrCreate: {
						where: {
							name: data.category.name, // Check for existing category by name
						},
						create: {
							name: data.category.name, // Create new category if not exists
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
						image: data.newsletter.image,
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
