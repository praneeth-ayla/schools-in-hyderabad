"use client";
import EventPage from "@/components/EventPage";
import React from "react";

export default function page({ searchParams }: any) {
	const id = searchParams.id || "";
	return (
		<div>
			<EventPage id={id} />
		</div>
	);
}
