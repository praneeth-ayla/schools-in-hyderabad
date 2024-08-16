import { getServerSession } from "next-auth";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const img = searchParams.get("img");
	const user = await getServerSession();

	if (user?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		if (img) {
			const res = await utapi.deleteFiles(img);
			return Response.json({ res, user });
		}
	}

	return Response.json({
		message: "You don't have access",
	});
}
