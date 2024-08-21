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
	const aboutUs = JSON.stringify(body.aboutUs);
	// try {
	// 	const res = await prisma.school.create({
	// 		data: {
	// 			name: body.name,
	// 			// aboutUs: body.aboutUs,
	// 			aboutUs,
	// 			logo: body.logo,
	// 			rating: body.rating || 0,
	// 			toppers: body.toppers || "",
	// 			area: body.area,
	// 			category: body.category,
	// 			locationMap: body.locationMap,
	// 			contact: {
	// 				create: body.contact,
	// 			},
	// 			facilities: {
	// 				create: facilities,
	// 			},
	// 			events: {
	// 				create: body.events,
	// 			},
	// 			images: {
	// 				create: images,
	// 			},
	// 			videos: {
	// 				create: body.videos,
	// 			},
	// 			reviews: {
	// 				create: body.reviews,
	// 			},
	// 		},
	// 	});

	// 	return new Response(JSON.stringify(res), { status: 201 });
	try {
		const res = await prisma.school.create({
			data: {
				name: "11",
				aboutUs: "testa df asdf asdf",
				logo: "https://utfs.io/f/412def88-2dae-4bf8-a572-1094bb07e73f-1zbfv.png",
				rating: 0,
				toppers:
					"testing with the new topper option where each class has a new topper.\n\nclass X: suresh 98%\nclass I: Mukesh 30%",
				area: "Gachibowli",
				category: "PlaySchool",
				locationMap:
					'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7608.372027566216!2d78.50562147927617!3d17.546328305742865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85189e5f7155%3A0xc67337b740849d21!2sKENDRIYA%20VIDYALAYA%20HAKIMPET!5e0!3m2!1sen!2sin!4v1724166091971!5m2!1sen!2sin" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
				contact: {
					create: {
						email: "suresh@gmail.com,\nmukesh@gmail.com,\ntestinggamil@gmail.com,\ntseting@gmail.com",
						location:
							"rreees,\nserafd, asdfas,\nkas djfa sd,\n asdjfl ajsdklf jadsl a, dsf,\nsadkfjasd , dsafsadf",
						number: "46546546565453,\n465451313221, \n4613115564566545, \n4561311323321222",
						website: "https://schoolsinhyderabad.co.in/",
						facebook: "https://www.facebook.com/",
						youtube: "https://www.youtube.com/",
						instagram: "https://www.instagram.com/",
						twitter: "https://x.com/",
						linkedin: "https://www.linkedin.com/",
					},
				},
				facilities: {
					create: [
						{
							name: "tesa saf",
						},
						{
							name: "ta sdfs asdf",
						},
						{
							name: "fdsfa",
						},
					],
				},
				events: {
					create: [
						{
							title: "",
							description: "",
						},
					],
				},
				images: {
					create: [
						{
							url: "https://utfs.io/f/996f952a-1ee0-4fd0-900e-16254de00c05-k6szsx.png",
						},
					],
				},
				videos: {
					create: [
						{
							src: "https://www.youtube.com/watch?v=9dbnXEEHgsc&list=PL9myHLrE5hrPQI6ljQCNZ0KQsnvTsgENG",
							title: "fsdaf",
						},
					],
				},
				reviews: {
					create: undefined,
				},
			},
		});

		return Response.json({
			message: "sucesss",
			res,
		});
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
