import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const newAdvertiseTime = searchParams.get("advertiseTime");

		if (!newAdvertiseTime) {
			return Response.json(
				{ error: "Missing 'advertiseTime' parameter" },
				{ status: 400 }
			);
		}

		const advertiseTime = parseInt(newAdvertiseTime, 10);

		if (isNaN(advertiseTime) || advertiseTime <= 0) {
			return Response.json(
				{ error: "'advertiseTime' must be a positive number" },
				{ status: 400 }
			);
		}

		// Update or create the global settings with the new advertiseTime
		const updatedSettings = await prisma.globalSettings.upsert({
			where: { id: 1 }, // Assuming there's only one settings entry
			update: { advertiseTime },
			create: { advertiseTime },
		});

		return Response.json(
			{ message: "Advertise time updated successfully", updatedSettings },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return Response.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
