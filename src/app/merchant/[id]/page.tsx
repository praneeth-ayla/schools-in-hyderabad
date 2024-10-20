"use client";

import MerchantPage from "@/components/MerchantPage";

export default function page({ params }: any) {
	const MerchantId = params.id;
	return (
		<div>
			<MerchantPage merchant={MerchantId} />
		</div>
	);
}
