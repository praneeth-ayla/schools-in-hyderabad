"use client";
import TopperPage from "@/components/TopperPage";
import React from "react";

export default function page({ params }: any) {
	const id = params.id || "";

	return (
		<div>
			<TopperPage topper={id} />
		</div>
	);
}
