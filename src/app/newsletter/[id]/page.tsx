"use client";
import NewsletterPage from "@/components/NewsletterPage";
import React from "react";

export default function page({ params }: any) {
	const id = params.id || "";
	return (
		<div>
			<NewsletterPage newsletterUri={id} />
		</div>
	);
}
