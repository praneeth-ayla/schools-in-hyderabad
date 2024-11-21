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

		const wholeDetails = await prisma.newsletter.findFirst({
			where: { uri: idParam },
			select: {
				description: true,
				title: true,
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
			return new Response(JSON.stringify({ error: "School not found" }), {
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
