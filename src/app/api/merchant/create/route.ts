import { MerchantDetails } from "@/lib/types"; // Assuming you have a MerchantDetails type defined
import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma";

export async function POST(request: Request) {
	const body: MerchantDetails = await request.json();
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
	// const images =
	// 	// @ts-ignore
	// 	body.images?.map((url: string) => ({
	// 		url: url.url,
	// 		alt: url.alt,
	// 	})) || [];

	const videos =
		// @ts-ignore
		body.videos?.map((video) => ({
			src: video.src,
			title: video.title,
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
		const res = await prisma.merchant.create({
			data: {
				name: body.name,
				aboutUs: body.aboutUs,
				logo: body.logo,
				rating: 0,
				locationMap: body.locationMap,
				contact: contactData ? { create: contactData } : undefined,
				images: {
					create: body.images,
				},
				videos: {
					create: videos,
				},
			},
		});

		return new Response(JSON.stringify(res), { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({
				success: false,
				message: "Failed to create merchant",
			}),
			{ status: 500 }
		);
	}
}
