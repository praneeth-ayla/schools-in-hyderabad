"use client";
import AwardPage from "@/components/AwardPage";
import React from "react";

export default function page({ params }: any) {
	const id = params.id || "";
	return (
		<div>
			<AwardPage award={id} />
		</div>
	);
}
