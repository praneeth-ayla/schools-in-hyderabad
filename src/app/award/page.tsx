"use client";
import AwardPage from "@/components/AwardPage";
import React from "react";

export default function page({ searchParams }: any) {
	const id = searchParams.id || "";
	return (
		<div>
			<AwardPage id={id} />
		</div>
	);
}
