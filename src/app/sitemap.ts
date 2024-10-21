import generateSlug from "@/utils/slugGenerator";
import prisma from "../../prisma/index";

export default async function sitemap() {
	const url = "https://schoolsinhyderabad.co.in";
	const staticURL = [
		{
			url: `${url}/`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/about-us`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/contact`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/privacy-policy`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/terms-conditions`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/blogs`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${url}/merchandise`,
			lastModified: new Date().toISOString(),
		},
	];

	const schools = await prisma.school.findMany({
		select: {
			name: true,
			area: true,
			id: true,
		},
	});

	const schoolSitemaps = schools.map((school) => {
		return {
			url: `${url}/school/${generateSlug(school.name)}/${generateSlug(
				school.area.name
			)}`,
			lastModified: new Date().toISOString(),
		};
	});

	const events = await prisma.event.findMany({
		select: {
			title: true,
			id: true,
			school: {
				select: {
					name: true,
				},
			},
		},
	});

	const eventSitemaps = events.map((event) => {
		return {
			url: `${url}/events/${generateSlug(
				event.school.name
			)}-${generateSlug(event.title)}-${event.id}`,
			lastModified: new Date().toISOString(),
		};
	});

	const toppers = await prisma.toppers.findMany({
		select: { title: true, id: true, school: { select: { name: true } } },
	});

	const topperSitemaps = toppers.map((topper) => {
		return {
			url: `${url}/topper/${generateSlug(
				topper.school.name
			)}-${generateSlug(topper.title)}-${topper.id}`,
			lastModified: new Date().toISOString(),
		};
	});

	const awards = await prisma.awards.findMany({
		select: { title: true, id: true, school: { select: { name: true } } },
	});

	const awardSitemaps = awards.map((award) => {
		return {
			url: `${url}/award/${generateSlug(
				award.school.name
			)}-${generateSlug(award.title)}-${award.id}`,
			lastModified: new Date().toISOString(),
		};
	});

	const merchants = await prisma.merchant.findMany({
		select: {
			name: true,
			id: true,
		},
	});
	const merchantSitemaps = merchants.map((merchant) => {
		return {
			url: `${url}/merchant/${generateSlug(merchant.name)}-${
				merchant.id
			}`,
			lastModified: new Date().toISOString(),
		};
	});

	return [
		...staticURL,
		...schoolSitemaps,
		...eventSitemaps,
		...topperSitemaps,
		...awardSitemaps,
		...merchantSitemaps,
	];
}
