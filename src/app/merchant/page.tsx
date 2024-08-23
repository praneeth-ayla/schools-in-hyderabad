"use client";

import MerchantPage from "@/components/MerchantPage";

export default function page({ searchParams }: any) {
	const MerchantId = searchParams.id;
	return (
		<div>
			<MerchantPage merchantId={MerchantId} />
		</div>
	);
}
