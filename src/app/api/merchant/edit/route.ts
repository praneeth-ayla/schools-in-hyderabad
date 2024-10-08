import { MerchantDetails } from "@/lib/types"; // Assuming you have a MerchantDetails type defined
import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma";

export async function PUT(request: Request) {
	const body: MerchantDetails = await request.json();
	const user = await getServerSession();
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	if (user?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "You're not authorized!",
			}),
			{ status: 403 }
		);
	}

	if (!id) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "ID is required!",
			}),
			{ status: 400 }
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
		const res = await prisma.merchant.update({
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
							alt: image.alt,
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
