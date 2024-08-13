import * as z from "zod";
import prisma from "../../../../prisma";

const bodySchema = z.object({
	name: z.string(),
	schoolId: z.number(),
	rating: z.number(),
	message: z.string(),
});

export async function POST(request: Request) {
	const body = await request.json();
	const parsed = bodySchema.safeParse(body);

	if (!parsed.success) {
		return new Response(
			JSON.stringify({
				error: "Invalid request body",
				issues: parsed.error.errors,
			}),
			{ status: 400 }
		);
	}

	const { name, schoolId, rating, message } = parsed.data;

	try {
		// Add the review to the school
		const res = await prisma.school.update({
			where: {
				id: schoolId,
			},
			data: {
				reviews: {
					create: {
						message,
						name,
						rating,
						date: new Date(),
					},
				},
			},
		});

		// Calculate the new average rating
		const reviews = await prisma.review.findMany({
			where: { schoolId },
			select: { rating: true },
		});

		const totalRating = reviews.reduce(
			(sum: number, review: { rating: number }) => sum + review.rating,
			0
		);
		const newAverageRating = (totalRating / reviews.length).toFixed(1);

		// Update the school's average rating
		const updatedSchool = await prisma.school.update({
			where: { id: schoolId },
			data: { rating: parseFloat(newAverageRating) },
		});

		return new Response(
			JSON.stringify({
				message: "Review added successfully",
				review: res,
				updatedSchool,
			}),
			{
				status: 201,
			}
		);
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}

export async function PUT(request: Request) {
	const body = await request.json();
	const { success } = bodySchema.safeParse(body);
	return Response.json({ message: "put endpoint", body, success });
}
