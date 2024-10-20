"use client";
import EventPage from "@/components/EventPage";
import React from "react";

export default function page({ params }: any) {
	const id = params.id || "";
	return (
		<div>
			<EventPage eventN={id} />
		</div>
	);
}
