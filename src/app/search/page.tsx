import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
	return (
		<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 px-2  sm:px-4 md:px-10 lg:px-40 xl:px-60">
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Delectus, iure?
					</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia perspiciatis id facilis quisquam praesentium
						magni explicabo neque sapiente itaque sequi, odio quis
						aliquam corporis optio, accusamus ipsam! Ut officia
						error qui beatae?
					</CardDescription>
				</Card>
			</Link>{" "}
			<Link href={"/school"}>
				<Card className="">
					<CardTitle>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Delectus, iure?
					</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia perspiciatis id facilis quisquam praesentium
						magni explicabo neque sapiente itaque sequi, odio quis
						aliquam corporis optio, accusamus ipsam! Ut officia
						error qui beatae?
					</CardDescription>
				</Card>
			</Link>{" "}
			<Link href={"/school"}>
				<Card className="">
					<CardTitle>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Delectus, iure?
					</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia perspiciatis id facilis quisquam praesentium
						magni explicabo neque sapiente itaque sequi, odio quis
						aliquam corporis optio, accusamus ipsam! Ut officia
						error qui beatae?
					</CardDescription>
				</Card>
			</Link>{" "}
			<Link href={"/school"}>
				<Card className="">
					<CardTitle>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Delectus, iure?
					</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia perspiciatis id facilis quisquam praesentium
						magni explicabo neque sapiente itaque sequi, odio quis
						aliquam corporis optio, accusamus ipsam! Ut officia
						error qui beatae?
					</CardDescription>
				</Card>
			</Link>
		</div>
	);
}
