import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://schoolsinhyderabad.co.in";

	return {
		rules: {
			userAgent: "*",
			allow: [
				"/",
				"/about-us",
				"/contact",
				"/privacy-policy",
				"/terms-conditions",
				"/blogs",
				"/merchandise",
				"/school",
				"/events",
				"/topper",
				"/award",
				"/merchant",
			],
			disallow: [
				"/api", // Disallow all API routes
				"/dashboard", // Disallow dashboard routes
			],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
