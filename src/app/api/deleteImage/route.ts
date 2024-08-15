import { getServerSession } from "next-auth";
import { UTApi } from "uploadthing/server";

export const utapi = new UTApi();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const img = searchParams.get("img");
	const user = await getServerSession();
	console.log(process.env.NEXT_PUBLIC_ADMIN_EMAIL);
	if (user?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		const res = img && (await utapi.deleteFiles(img));

		return Response.json({ res, user });
	}
	return Response.json({
		message: "You don't have access",
	});
}
