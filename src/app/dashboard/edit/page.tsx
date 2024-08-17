"use client";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
// import UploadImages from "@/components/UploadDroper";
import { useSchoolDetails } from "@/lib/hooks";
import { Place, SchoolCategory, SchoolCategoryNames } from "@/lib/types";
import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SchoolForm({ searchParams }: any) {
	const schoolId = searchParams.id;
	const { details, isLoading } = useSchoolDetails(schoolId);
	const { data: session, status } = useSession();
	const router = useRouter();
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState<any>({
		name: details?.name || "",
		aboutUs: details?.aboutUs || "",
		logo: details?.logo || "",
		toppers: details?.toppers || "",
		area: details?.area || "",
		category: details?.category || "",
		contact: {
			email: details?.contact?.email || "",
			location: details?.contact?.location || "",
			number: details?.contact?.number || "",
		},
		facilities: details?.facilities || [""],
		events: details?.events || [{ title: "", description: "" }],
		images: details?.images || [""],
		videos: details?.videos || [{ src: "", title: "" }],
	});

	console.log(details);
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleNestedChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: string,
		index?: number
	) => {
		const { name, value } = e.target;

		if (field === "contact") {
			setFormData({
				...formData,
				contact: {
					...formData.contact,
					[name]: value,
				},
			});
		} else if (Array.isArray(formData[field])) {
			const updatedArray = [...formData[field]];

			if (index !== undefined) {
				if (typeof updatedArray[index] === "object") {
					updatedArray[index] = {
						...updatedArray[index],
						[name]: value,
					};
				} else {
					updatedArray[index] = value;
				}
			} else {
				updatedArray.push(value);
			}

			setFormData({
				...formData,
				[field]: updatedArray,
			});
		}
	};

	const handleSubmit = async (e: any) => {
		setLoading(true);
		e.preventDefault();
		console.log(formData);
		try {
			const res = schoolId
				? await axios.post("/api/school/edit", formData)
				: await axios.post("/api/school/create", formData);

			setLoading(false);
			toast({
				title: schoolId ? "Edit Successfully" : "Added Successfully",
			});
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error) {
			setLoading(false);
			toast({
				title: "Something Went Wrong!",
				description: "Try again later!",
			});
		}
	};

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/");
		} else if (
			status === "authenticated" &&
			session?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL
		) {
			router.push("/");
		}
	}, [status, session, router]);

	useEffect(() => {
		if (details) {
			setFormData({
				name: details.name || "",
				aboutUs: details.aboutUs || "",
				logo: details.logo || "",
				toppers: details.toppers || "",
				area: details.area || "",
				category: details.category || "",
				contact: {
					email: details.contact?.email || "",
					location: details.contact?.location || "",
					number: details.contact?.number || "",
				},
				facilities: details.facilities || [""],
				events: details.events || [{ title: "", description: "" }],
				images: details.images || [""],
				videos: details.videos || [{ src: "", title: "" }],
			});
		}
	}, [details]);

	if (status === "loading") {
		return (
			<div className="flex justify-center items-center h-screen">
				<p>Loading...</p>
			</div>
		);
	}

	if (
		status === "authenticated" &&
		session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
	) {
		return (
			<form
				onSubmit={handleSubmit}
				className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
				<h2 className="text-2xl font-semibold mb-6">
					School Information
				</h2>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Name</Label>
					<Input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full p-2 border rounded-md"
						placeholder="School Name"
						required
					/>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">About Us</Label>
					<textarea
						name="aboutUs"
						value={formData.aboutUs}
						onChange={handleChange}
						className="w-full p-2 border rounded-md"
						placeholder="About the School"
						required
					/>
				</div>

				<div className="mb-4">
					<UploadDropzone
						endpoint="imageUploader"
						onClientUploadComplete={(res: any) => {
							console.log("Files: ", res);
							// Update the form data with the logo URL
							setFormData((prevFormData: any) => ({
								...prevFormData,
								logo: res[0]?.url, // Assuming you're uploading one logo and taking the first URL
							}));
						}}
						onUploadError={(error: Error) => {
							alert(`ERROR! ${error.message}`);
						}}
					/>
					{formData.logo && (
						<img
							src={formData.logo}
							alt="Logo"
							style={{ width: "100px", height: "100px" }}
						/>
					)}
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Toppers</Label>
					<Input
						type="text"
						name="toppers"
						value={formData.toppers}
						onChange={handleChange}
						className="w-full p-2 border rounded-md"
						placeholder="John Doe, Jane Smith"
					/>
				</div>

				{/* Area */}
				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Area</Label>
					<Select
						required
						name="area"
						value={formData.area}
						onValueChange={(value) =>
							handleChange({ target: { name: "area", value } })
						}>
						<SelectTrigger>
							<SelectValue placeholder="Select an area" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{Object.values(Place).map((place) => (
									<SelectItem
										key={place}
										value={place}>
										{place.replace("_", " ")}{" "}
										{/* Replace underscores with spaces */}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				{/* School Category */}
				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Category</Label>
					<Select
						required
						value={formData.category}
						onValueChange={(value) =>
							handleChange({
								target: { name: "category", value },
							})
						}>
						<SelectTrigger>
							<SelectValue placeholder="Select a category" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Categories</SelectLabel>
								{Object.values(SchoolCategory).map(
									(category) => (
										<SelectItem
											key={category}
											value={category}>
											{SchoolCategoryNames[category]}
										</SelectItem>
									)
								)}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">
						Contact Email
					</Label>
					<Input
						type="email"
						name="email"
						value={formData.contact.email}
						onChange={(e) => handleNestedChange(e, "contact")}
						className="w-full p-2 border rounded-md"
						placeholder="contact@greenwoodhigh.com"
						required
					/>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">
						Contact Location
					</Label>
					<Input
						type="text"
						name="location"
						value={formData.contact.location}
						onChange={(e) => handleNestedChange(e, "contact")}
						className="w-full p-2 border rounded-md"
						placeholder="Gachibowli, Hyderabad"
						required
					/>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">
						Contact Number
					</Label>
					<Input
						type="text"
						name="number"
						value={formData.contact.number}
						onChange={(e) => handleNestedChange(e, "contact")}
						className="w-full p-2 border rounded-md"
						placeholder="+91 9876543210"
						required
					/>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">
						Facilities
					</Label>
					{formData.facilities.map((facility: any, index: any) => (
						<Input
							key={index}
							type="text"
							name={`facility_${index}`}
							value={facility.name}
							onChange={(e) =>
								handleNestedChange(e, "facilities", index)
							}
							className="w-full p-2 mb-2 border rounded-md"
							placeholder="Facility Name"
						/>
					))}
					<button
						type="button"
						onClick={() =>
							setFormData({
								...formData,
								facilities: [...formData.facilities, ""],
							})
						}
						className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
						Add Facility
					</button>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Events</Label>
					{formData.events.map((event: any, index: any) => (
						<div
							key={index}
							className="mb-2">
							<Input
								type="text"
								name="title"
								value={event.title}
								onChange={(e) =>
									handleNestedChange(e, "events", index)
								}
								className="w-full p-2 mb-2 border rounded-md"
								placeholder="Event Title"
							/>
							<Input
								type="text"
								name="description"
								value={event.description}
								onChange={(e) =>
									handleNestedChange(e, "events", index)
								}
								className="w-full p-2 border rounded-md"
								placeholder="Event Description"
							/>
						</div>
					))}
					<button
						type="button"
						onClick={() =>
							setFormData({
								...formData,
								events: [
									...formData.events,
									{ title: "", description: "" },
								],
							})
						}
						className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
						Add Event
					</button>
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Images</Label>
					{/* <UploadImages
						image={formData.images}
						setImage={(urls: string[]) =>
							setFormData({ ...formData, images: urls })
						}/> */}
				</div>

				<div className="mb-4">
					<Label className="block mb-2 font-semibold">Videos</Label>
					{formData.videos.map((video: any, index: any) => (
						<div
							key={index}
							className="mb-2">
							<Input
								type="text"
								name="src"
								value={video.src.src}
								onChange={(e) =>
									handleNestedChange(e, "videos", index)
								}
								className="w-full p-2 mb-2 border rounded-md"
								placeholder="Video Source URL"
							/>
							<Input
								type="text"
								name="title"
								value={video.title}
								onChange={(e) =>
									handleNestedChange(e, "videos", index)
								}
								className="w-full p-2 border rounded-md"
								placeholder="Video Title"
							/>
						</div>
					))}
					<button
						type="button"
						onClick={() =>
							setFormData({
								...formData,
								videos: [
									...formData.videos,
									{ src: "", title: "" },
								],
							})
						}
						className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
						Add Video
					</button>
				</div>

				{loading ? (
					<Button
						disabled={loading}
						className="w-1/3 sm:w-1/5">
						<Loading />
					</Button>
				) : (
					<Button
						onClick={handleSubmit}
						type="submit"
						className="w-1/3 sm:w-1/5">
						Submit
					</Button>
				)}
			</form>
		);
	}

	return null;
}
