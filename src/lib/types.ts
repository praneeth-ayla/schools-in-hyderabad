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
	area: Place;
	category: SchoolCategory;
	facilities: Facility[];
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

export type SchoolPartialData = {
	id: number;
	name: string;
	aboutUs: string;
	logo: string;
	rating: number;
	toppers: string;
	area: Place;
	category: SchoolCategory;
};

export const SchoolCategoryNames: { [key in SchoolCategory]: string } = {
	[SchoolCategory.PlaySchool]: "Play School",
	[SchoolCategory.PrimaryStateBoard]: "Primary School - State Board",
	[SchoolCategory.HighStateBoard]: "High School - State Board",
	[SchoolCategory.InternationalStateBoard]:
		"International School - State Board",
	[SchoolCategory.ResidentialStateBoard]: "Residential School - State Board",
	[SchoolCategory.PrimaryCBSE]: "Primary School - CBSE",
	[SchoolCategory.HighCBSE]: "High School - CBSE",
	[SchoolCategory.InternationalCBSE]: "International School - CBSE",
	[SchoolCategory.ResidentialCBSE]: "Residential School - CBSE",
	[SchoolCategory.PrimaryICSE]: "Primary School - ICSE",
	[SchoolCategory.HighICSE]: "High School - ICSE",
	[SchoolCategory.InternationalICSE]: "International School - ICSE",
	[SchoolCategory.ResidentialICSE]: "Residential School - ICSE",
	[SchoolCategory.PrimaryIGCSE]: "Primary School - IGCSE",
	[SchoolCategory.HighIGCSE]: "High School - IGCSE",
	[SchoolCategory.InternationalIGCSE]: "International School - IGCSE",
	[SchoolCategory.ResidentialIGCSE]: "Residential School - IGCSE",
	[SchoolCategory.PreSchoolDayCare]: "PreSchool & Day Care",
};
