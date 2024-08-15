import { SchoolDetails } from "@/lib/types";
import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma";

export async function POST(request: Request) {
	const body: SchoolDetails = await request.json();
	const user = await getServerSession();

	console.log(process.env.NEXT_PUBLIC_ADMIN_EMAIL);
	if (user?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "You're not authorized!",
			}),
			{ status: 403 }
		);
	}

	// Transform facilities and images into the correct format
	const facilities = body.facilities.map((facility: string) => ({
		name: facility,
	}));

	const images = body.images.map((imageUrl: string) => ({
		url: imageUrl,
	}));

	try {
		const res = await prisma.school.create({
			data: {
				name: body.name,
				aboutUs: body.aboutUs,
				logo: body.logo,
				rating: body.rating || 0,
				toppers: body.toppers || "",
				area: body.area,
				category: body.category,
				contact: {
					create: body.contact,
				},
				facilities: {
					create: facilities,
				},
				events: {
					create: body.events,
				},
				images: {
					create: images,
				},
				videos: {
					create: body.videos,
				},
				reviews: {
					create: body.reviews,
				},
			},
		});

		return new Response(JSON.stringify(res), { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({
				success: false,
				message: "Failed to create school",
			}),
			{ status: 500 }
		);
	}
}
