"use client";
import TopperPage from "@/components/TopperPage";
import React from "react";

export default function page({ searchParams }: any) {
	const id = searchParams.id || "";
	return (
		<div>
			<TopperPage id={id} />
		</div>
	);
}
