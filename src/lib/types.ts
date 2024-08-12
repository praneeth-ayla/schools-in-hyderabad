export type Contact = {
	location: string;
	number: string;
	email: string;
};

export type Facility = string; // Assuming facilities are just strings

export type EventSchool = {
	title: string;
	description: string;
};

export type Review = {
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

export enum Place {
	Abids = "Abids",
	Ameerpet = "Ameerpet",
	Bachupally = "Bachupally",
	Banjara_Hills = "Banjara_Hills",
	Begumpet = "Begumpet",
	Charminar = "Charminar",
	Gachibowli = "Gachibowli",
	Hitech_City = "Hitech_City",
	Kondapur = "Kondapur",
	Madhapur = "Madhapur",
	Mehdipatnam = "Mehdipatnam",
	Miyapur = "Miyapur",
	Somajiguda = "Somajiguda",
}

export enum SchoolCategory {
	PlaySchool = "PlaySchool",
	PrimaryStateBoard = "PrimaryStateBoard",
	HighStateBoard = "HighStateBoard",
	InternationalStateBoard = "InternationalStateBoard",
	ResidentialStateBoard = "ResidentialStateBoard",
	PrimaryCBSE = "PrimaryCBSE",
	HighCBSE = "HighCBSE",
	InternationalCBSE = "InternationalCBSE",
	ResidentialCBSE = "ResidentialCBSE",
	PrimaryICSE = "PrimaryICSE",
	HighICSE = "HighICSE",
	InternationalICSE = "InternationalICSE",
	ResidentialICSE = "ResidentialICSE",
	PrimaryIGCSE = "PrimaryIGCSE",
	HighIGCSE = "HighIGCSE",
	InternationalIGCSE = "InternationalIGCSE",
	ResidentialIGCSE = "ResidentialIGCSE",
	PreSchoolDayCare = "PreSchoolDayCare",
}
