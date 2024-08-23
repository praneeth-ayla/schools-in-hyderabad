import { SchoolDetails } from "@/lib/types";
import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma";

export async function POST(request: Request) {
	const body: SchoolDetails = await request.json();
	const user = await getServerSession();

	if (user?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "You're not authorized!",
			}),
			{ status: 403 }
		);
	}

	// Transform the data for Prisma
	const facilities =
		body.facilities?.map((facility: string) => ({
			name: facility,
		})) || [];

	const images =
		// @ts-ignore
		body.images?.map((url: string) => ({
			url,
		})) || [];

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
		const res = await prisma.school.create({
			data: {
				name: body.name,
				aboutUs: body.aboutUs,
				logo: body.logo,
				rating: 0, // Assuming default rating is 0
				area: body.area,
				category: body.category,
				locationMap: body.locationMap,
				contact: contactData ? { create: contactData } : undefined,
				facilities: {
					create: facilities,
				},
				events: {
					create: body.events || [],
				},
				awards: {
					create: body.awards || [],
				},
				toppers: {
					create: body.toppers || [],
				},
				images: {
					create: images,
				},
				videos: {
					create: body.videos || [],
				},
				reviews: {
					create: body.reviews || [],
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
