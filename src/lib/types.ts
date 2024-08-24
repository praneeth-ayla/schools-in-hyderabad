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
		id?: string;
		image: string;
	}[];
	locationMap: string;
	images: { url: string; id?: string; schoolId: string }[];
	aboutUs: string;
	videos?: Video[];
	events?: {
		title: string;
		description: string;
		id?: string;
		image: string;
	}[];
	toppers?: {
		title: string;
		description: string;
		id?: string;
		image: string;
	}[];
	rating: number;
	reviews: {
		message: string;
		name: string;
		date: string;
		rating: number;
	}[];
	area: { name: string };
	category: { name: string };
	facilities: Facility[];
};

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
	area: {
		name: string;
		id: string;
	};
	category: {
		name: string;
		id: string;
	};
};

export type MerchantDetails = {
	name: string;
	aboutUs: string;
	logo: string;
	rating?: number; // Optional field
	locationMap?: string; // Optional field
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
	images?: { url: string; id?: string; schoolId: string }[];
	videos?: Video[];
	reviews?: Review[];
};

export enum Place {
	A_C_Guards = "A. C. Guards",
	A_S_Rao_Nagar = "A. S. Rao Nagar",
	Abhyudaya_Nagar = "Abhyudaya Nagar",
	Abids = "Abids",
	Adibatla = "Adibatla",
	Adikmet = "Adikmet",
	Afzal_Gunj = "Afzal Gunj",
	Aghapura = "Aghapura",
	Aliabad_Hyderabad = "Aliabad, Hyderabad",
	Alijah_Kotla = "Alijah Kotla",
	Allwyn_Colony = "Allwyn Colony",
	Alwal = "Alwal",
	Amberpet = "Amberpet",
	Ameenpur = "Ameenpur",
	Ameerpet = "Ameerpet",
	Anandbagh = "Anandbagh",
	Ashok_Nagar_Hyderabad = "Ashok Nagar, Hyderabad",
	Asif_Nagar = "Asif Nagar",
	Attapur = "Attapur",
	Azamabad_Hyderabad = "Azamabad, Hyderabad",
	Azampura = "Azampura",
	Badichowdi = "Badichowdi",
	Bagh_Lingampally = "Bagh Lingampally",
	Bairamalguda = "Bairamalguda",
	Balapur_Ranga_Reddy_district = "Balapur, Ranga Reddy district",
	Balkampet = "Balkampet",
	Banjara_Hills = "Banjara Hills",
	Bank_Street_Hyderabad = "Bank Street, Hyderabad",
	Barkas_Hyderabad = "Barkas, Hyderabad",
	Barkatpura = "Barkatpura",
	Basheerbagh = "Basheerbagh",
	Bazarghat = "Bazarghat",
	Begum_Bazaar = "Begum Bazaar",
	Begumpet = "Begumpet",
	Bharat_Nagar = "Bharat Nagar",
	BHEL_Township_Hyderabad = "BHEL Township, Hyderabad",
	Boggulkunta = "Boggulkunta",
	Bolarum = "Bolarum",
	Borabanda = "Borabanda",
	Bowenpally = "Bowenpally",
	Chaderghat = "Chaderghat",
	Champapet = "Champapet",
	Chanchalguda = "Chanchalguda",
	Chandrayan_Gutta = "Chandrayan Gutta",
	Chatta_Bazaar = "Chatta Bazaar",
	Chengicherla = "Chengicherla",
	Cherlapally = "Cherlapally",
	Chikkadpally = "Chikkadpally",
	Chilkalguda = "Chilkalguda",
	Chintal_Basti = "Chintal Basti",
	Chintalakunta = "Chintalakunta",
	Dabirpura = "Dabirpura",
	Dar_ul_Shifa = "Dar-ul-Shifa",
	Dhoolpet = "Dhoolpet",
	Dilsukhnagar = "Dilsukhnagar",
	Domalguda = "Domalguda",
	Dundigal = "Dundigal",
	ECIL_X_Roads = "ECIL X Roads",
	Edi_Bazar = "Edi Bazar",
	Erragadda = "Erragadda",
	Fateh_Nagar_Hyderabad = "Fateh Nagar, Hyderabad",
	Ferozguda = "Ferozguda",
	Film_Nagar = "Film Nagar",
	Financial_District_Hyderabad = "Financial District, Hyderabad",
	Gachibowli = "Gachibowli",
	Gaddiannaram = "Gaddiannaram",
	Gautham_Nagar = "Gautham Nagar",
	Golnaka = "Golnaka",
	Goshamahal = "Goshamahal",
	Gudimalkapur = "Gudimalkapur",
	Gulzar_Houz = "Gulzar Houz",
	Gundlapochampalli = "Gundlapochampalli",
	Habsiguda = "Habsiguda",
	Hafeezpet = "Hafeezpet",
	Hasmathpet = "Hasmathpet",
	Hastinapuram = "Hastinapuram",
	Hayathnagar = "Hayathnagar",
	Himayatnagar_Hyderabad = "Himayatnagar, Hyderabad",
	HITEC_City = "HITEC City",
	Hyderguda = "Hyderguda",
	IDA_Bollaram = "IDA Bollaram",
	Izzat_Nagar = "Izzat Nagar",
	Jagathgirigutta = "Jagathgirigutta",
	Jahanuma = "Jahanuma",
	Jalal_Baba_Nagar = "Jalal Baba Nagar",
	Jamia_Osmania = "Jamia Osmania",
	Jeedimetla = "Jeedimetla",
	Jubilee_Hills = "Jubilee Hills",
	Kachiguda = "Kachiguda",
	Kakatiya_Nagar = "Kakatiya Nagar",
	Kamala_Nagar_Hyderabad = "Kamala Nagar, Hyderabad",
	Kapra = "Kapra",
	Karkhana_Secunderabad = "Karkhana, Secunderabad",
	Karmanghat = "Karmanghat",
	Karwan = "Karwan",
	Kavadiguda = "Kavadiguda",
	Khairatabad = "Khairatabad",
	Khajaguda = "Khajaguda",
	Khilwat = "Khilwat",
	Kings_Colony_Shastripuram = "Kings Colony, Shastripuram",
	Kompally = "Kompally",
	Kothapet_Rangareddy = "Kothapet, Rangareddy",
	Koti_Hyderabad = "Koti, Hyderabad",
	Krishna_Nagar_Hyderabad = "Krishna Nagar, Hyderabad",
	Kukatpally = "Kukatpally",
	Kushaiguda = "Kushaiguda",
	L_B_Nagar = "L. B. Nagar",
	Laad_Bazaar = "Laad Bazaar",
	Lab_quarters = "Lab quarters",
	Lakdi_ka_pul = "Lakdi ka pul",
	Lal_Darwaza = "Lal Darwaza",
	Lallaguda = "Lallaguda",
	Langar_Houz = "Langar Houz",
	Laxminagar_Colony_Mehdipatnam = "Laxminagar Colony, Mehdipatnam",
	Lingojiguda = "Lingojiguda",
	Lothkunta = "Lothkunta",
	Macha_Bollaram = "Macha Bollaram",
	Madannapet = "Madannapet",
	Madeenaguda = "Madeenaguda",
	Madhapur = "Madhapur",
	Madina_building_Hyderabad = "Madina building, Hyderabad",
	Maharajgunj = "Maharajgunj",
	Mahatma_Gandhi_Road_Secunderabad = "Mahatma Gandhi Road (Secunderabad)",
	Malakpet = "Malakpet",
	Malkajgiri = "Malkajgiri",
	Malkajgiri_mandal = "Malkajgiri mandal",
	Mallapur = "Mallapur",
	Mallepally = "Mallepally",
	Manikonda = "Manikonda",
	Marredpally = "Marredpally",
	Masab_Tank = "Masab Tank",
	Mehboob_ki_Mehendi_Hyderabad = "Mehboob ki Mehendi, Hyderabad",
	Mehdipatnam = "Mehdipatnam",
	Mettuguda = "Mettuguda",
	Minister_Road_Hyderabad = "Minister Road, Hyderabad",
	Mir_Alam_Tank = "Mir Alam Tank",
	Moazzam_Jahi_Market = "Moazzam Jahi Market",
	Moghalpura = "Moghalpura",
	Moosapet = "Moosapet",
	Moosarambagh = "Moosarambagh",
	Moti_Nagar_Hyderabad = "Moti Nagar, Hyderabad",
	Musheerabad = "Musheerabad",
	Mylargadda = "Mylargadda",
	Nacharam = "Nacharam",
	Nagaram_Medchal_Malkajgiri_district = "Nagaram, Medchal–Malkajgiri district",
	Nagole = "Nagole",
	Nallagandla = "Nallagandla",
	Nallakunta = "Nallakunta",
	Namalagundu = "Namalagundu",
	Nampally_Hyderabad = "Nampally, Hyderabad",
	Nanakramguda = "Nanakramguda",
	Nanalnagar = "Nanalnagar",
	Narayanguda = "Narayanguda",
	Nawab_Saheb_Kunta = "Nawab Saheb Kunta",
	Nayapul = "Nayapul",
	Neredmet = "Neredmet",
	Old_Neredmet = "Old Neredmet",
	Padmanabha_Nagar_Colony = "Padmanabha Nagar Colony",
	Padmarao_Nagar = "Padmarao Nagar",
	Pan_bazar = "Pan bazar",
	Parsigutta = "Parsigutta",
	Patancheru = "Patancheru",
	Patny = "Patny",
	Pet_Basheerabad = "Pet Basheerabad",
	Pisal_Banda = "Pisal Banda",
	Pragathi_Nagar = "Pragathi Nagar",
	Punjagutta = "Punjagutta",
	Purana_pul = "Purana pul",
	Putlibowli = "Putlibowli",
	Quthbullapur = "Quthbullapur",
	Raidurg = "Raidurg",
	Raj_Bhavan_Road = "Raj Bhavan Road",
	Ramachandrapuram_Telangana = "Ramachandrapuram, Telangana",
	Ramanthapur = "Ramanthapur",
	Ramnagar_Hyderabad = "Ramnagar, Hyderabad",
	Rani_Gunj = "Rani Gunj",
	Red_Hills_Hyderabad = "Red Hills, Hyderabad",
	Rein_Bazar = "Rein Bazar",
	Risala_Bazar = "Risala Bazar",
	RTC_X_Roads = "RTC X Roads",
	S_R_Nagar = "S. R. Nagar",
	Safilguda = "Safilguda",
	Saidabad_mandal = "Saidabad mandal",
	Saifabad = "Saifabad",
	Sainikpuri = "Sainikpuri",
	Sanathnagar = "Sanathnagar",
	Sanghi_Nagar = "Sanghi Nagar",
	Santoshnagar = "Santoshnagar",
	Saroornagar = "Saroornagar",
	Secunderabad = "Secunderabad",
	Serilingampally = "Serilingampally",
	Shah_Ali_Banda = "Shah-Ali-Banda",
	Shahran_Market = "Shahran Market",
	Shanker_Mutt = "Shanker Mutt",
	Shivam_Road = "Shivam Road",
	Sikh_Village = "Sikh Village",
	Silpa_Avenue_Colony = "Silpa Avenue Colony",
	Sindhi_Colony_Secunderabad = "Sindhi Colony, Secunderabad",
	Sitaphalmandi = "Sitaphalmandi",
	Somajiguda = "Somajiguda",
	Srinagar_colony = "Srinagar colony",
	Suchitra_Center = "Suchitra Center",
	Sultan_Bazar = "Sultan Bazar",
	Tarnaka = "Tarnaka",
	Tilaknagar = "Tilaknagar",
	Tirumalagiri = "Tirumalagiri",
	Tolichowki = "Tolichowki",
	Uddemgadda = "Uddemgadda",
	Umdanagar = "Umdanagar",
	Uppal_Kalan = "Uppal Kalan",
	Uppuguda = "Uppuguda",
	Vanasthalipuram = "Vanasthalipuram",
	Venkatapuram_Hyderabad = "Venkatapuram, Hyderabad",
	Vidyanagar = "Vidyanagar",
	Vikrampuri = "Vikrampuri",
	Vinayak_Nagar = "Vinayak Nagar",
	Warsiguda = "Warsiguda",
	Yakutpura = "Yakutpura",
	Yapral = "Yapral",
	Yellareddyguda = "Yellareddyguda",
	Yousufguda = "Yousufguda",
}
