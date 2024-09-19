import prisma from "../../../../prisma";

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

		const wholeDetails = await prisma.awards.findFirst({
			where: { id },
			select: {
				description: true,
				title: true,
				date: true,
				image: true,
				school: {
					select: {
						area: true,
						name: true,
						logo: true,
					},
				},
			},
		});

		if (!wholeDetails) {
			return new Response(JSON.stringify({ error: "Topper not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify(wholeDetails), {
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
