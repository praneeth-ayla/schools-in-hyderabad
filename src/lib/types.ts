type Contact = {
	location: string;
	number: string;
	email: string;
};

type Facility = string; // Assuming facilities are just strings

type EventSchool = {
	title: string;
	description: string;
};

type Review = {
	message: string;
	name: string;
	date: string;
	rating: number;
};

export type Video = {
	src: string;
	title: string;
};

export type SchoolDetails = {
	name: string;
	logo: string;
	contact?: {
		location: string;
		number: string;
		email: string;
	};
	images: string[];
	aboutUs: string;
	videos?: Video[];
	events?: {
		title: string;
		description: string;
	}[];
	toppers?: string;
	rating: number;
	reviews: {
		message: string;
		name: string;
		date: string;
		rating: number;
	}[];
};

export type { Contact, EventSchool, Facility, Review };
