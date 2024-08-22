export type Contact = {
	location: string;
	number: string;
	email: string;
};

export type Facility = string;

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
		website: string;
		instagram: string;
		twitter: string;
		linkedin: string;
		youtube: string;
		facebook: string;
		opening: string;
	};
	awards: {
		title: string;
		description: string;
		id: string;
		image: string;
	}[];
	locationMap: string;
	images: string[];
	aboutUs: string;
	videos?: Video[];
	events?: {
		title: string;
		description: string;
		id: string;
		image: string;
	}[];
	toppers?: {
		title: string;
		description: string;
		id: string;
		image: string;
	}[];
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
	HighCBSE = "HighCBSE",
	HighICSE = "HighICSE",
	HighIGCSE = "HighIGCSE",
	HighStateBoard = "HighStateBoard",
	InternationalCBSE = "InternationalCBSE",
	InternationalICSE = "InternationalICSE",
	InternationalIGCSE = "InternationalIGCSE",
	InternationalStateBoard = "InternationalStateBoard",
	PlaySchool = "PlaySchool",
	PreSchoolDayCare = "PreSchoolDayCare",
	PrimaryCBSE = "PrimaryCBSE",
	PrimaryICSE = "PrimaryICSE",
	PrimaryIGCSE = "PrimaryIGCSE",
	PrimaryStateBoard = "PrimaryStateBoard",
	ResidentialCBSE = "ResidentialCBSE",
	ResidentialICSE = "ResidentialICSE",
	ResidentialIGCSE = "ResidentialIGCSE",
	ResidentialStateBoard = "ResidentialStateBoard",
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
	[SchoolCategory.HighCBSE]: "High School - CBSE",
	[SchoolCategory.HighICSE]: "High School - ICSE",
	[SchoolCategory.HighIGCSE]: "High School - IGCSE",
	[SchoolCategory.HighStateBoard]: "High School - State Board",
	[SchoolCategory.InternationalCBSE]: "International School - CBSE",
	[SchoolCategory.InternationalICSE]: "International School - ICSE",
	[SchoolCategory.InternationalIGCSE]: "International School - IGCSE",
	[SchoolCategory.InternationalStateBoard]:
		"International School - State Board",
	[SchoolCategory.PlaySchool]: "Play School",
	[SchoolCategory.PreSchoolDayCare]: "PreSchool & Day Care",
	[SchoolCategory.PrimaryCBSE]: "Primary School - CBSE",
	[SchoolCategory.PrimaryICSE]: "Primary School - ICSE",
	[SchoolCategory.PrimaryIGCSE]: "Primary School - IGCSE",
	[SchoolCategory.PrimaryStateBoard]: "Primary School - State Board",
	[SchoolCategory.ResidentialCBSE]: "Residential School - CBSE",
	[SchoolCategory.ResidentialICSE]: "Residential School - ICSE",
	[SchoolCategory.ResidentialIGCSE]: "Residential School - IGCSE",
	[SchoolCategory.ResidentialStateBoard]: "Residential School - State Board",
};
