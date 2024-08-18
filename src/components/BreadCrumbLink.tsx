import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

export default function BreadCrumbLink({ text }: { text: string }) {
	return (
		<Breadcrumb>
			<BreadcrumbList className="">
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/"
						className="hover:text-gray-400">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator></BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage className="text-blue-600">
						{text}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
