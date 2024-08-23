import prisma from "../../../../../prisma";

export async function GET(req: Request) {
	try {
		// Fetch merchants with their related data
		const merchants = await prisma.merchant.findMany({
			include: {
				contact: true,
				images: true,
				videos: true,
				reviews: true,
			},
		});

		return Response.json(merchants);
	} catch (error) {
		console.error("Error fetching merchants: ", error);
		return new Response(
			JSON.stringify({ error: "Internal server error" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
