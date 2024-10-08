import prisma from "../../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const idParam = searchParams.get("id");

		if (!idParam) {
			return new Response(
				JSON.stringify({ error: "ID parameter is missing" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Convert id to a number
		const id = parseInt(idParam, 10);

		if (isNaN(id)) {
			return new Response(
				JSON.stringify({ error: "Invalid ID parameter" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const merchantDetails = await prisma.merchant.findFirst({
			where: { id },
			select: {
				reviews: true,
				images: true,
				contact: true,
				videos: true,
				aboutUs: true,
				logo: true,
				name: true,
				rating: true,
				locationMap: true,
			},
		});

		if (!merchantDetails) {
			return new Response(
				JSON.stringify({ error: "Merchant not found" }),
				{
					status: 404,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		return new Response(JSON.stringify(merchantDetails), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: "Internal server error" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
