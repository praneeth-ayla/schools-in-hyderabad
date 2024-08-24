import prisma from "../../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const idS = searchParams.get("id");
	const id = Number(idS);

	if (isNaN(id)) {
		return Response.json(
			{
				success: false,
				message: "Invalid school ID",
			},
			{ status: 400 }
		);
	}

	try {
		const deletedSchool = await prisma.$transaction(async (prisma) => {
			await prisma.event.deleteMany({
				where: { schoolId: id },
			});
			await prisma.toppers.deleteMany({
				where: { schoolId: id },
			});
			await prisma.contact.deleteMany({
				where: { schoolId: id },
			});
			await prisma.facility.deleteMany({
				where: { schoolId: id },
			});
			await prisma.awards.deleteMany({
				where: { schoolId: id },
			});
			await prisma.image.deleteMany({
				where: { schoolId: id },
			});
			await prisma.video.deleteMany({
				where: { schoolId: id },
			});
			await prisma.review.deleteMany({
				where: { schoolId: id },
			});

			return prisma.school.delete({
				where: { id },
			});
		});

		return Response.json({
			success: true,
			message: "School deleted successfully",
			data: deletedSchool,
		});
	} catch (error: any) {
		console.error("Error deleting school:", error);
		return Response.json(
			{
				success: false,
				message: "Failed to delete school",
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
