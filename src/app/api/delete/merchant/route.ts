import prisma from "../../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	try {
		// Delete the merchant from the database using Prisma
		const deletedMerchant = await prisma.merchant.delete({
			where: {
				id: Number(id),
			},
		});

		return Response.json({
			success: true,
			message: "Merchant deleted successfully",
			data: deletedMerchant,
		});
	} catch (error: any) {
		console.error("Error deleting merchant:", error);
		return Response.json(
			{
				success: false,
				message: "Failed to delete merchant",
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
