"use client";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import UploadImages from "@/components/UploadImages";
import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { Plus, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MerchantForm() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	// Separate states for each section of the form
	const [basicInfo, setBasicInfo] = useState({
		name: "",
		aboutUs: "",
		logo: "",
		locationMap: "",
	});

	const [contact, setContact] = useState({
		email: "",
		location: "",
		number: "",
		website: "",
		facebook: "",
		youtube: "",
		instagram: "",
		twitter: "",
		linkedin: "",
		opening: "",
	});

	// Initially empty arrays for facilities and videos
	const [images, setImages] = useState([""]);
	const [videos, setVideos] = useState([{ src: "", title: "" }]);

	const handleBasicInfoChange = (e: any) => {
		const { name, value } = e.target;
		setBasicInfo({ ...basicInfo, [name]: value });
	};

	const handleContactChange = (e: any) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	// Function to handle adding new video input
	const addVideo = () => {
		setVideos([...videos, { src: "", title: "" }]);
	};

	// Function to handle removing a video input
	const removeVideo = (index: number) => {
		setVideos(videos.filter((_, i) => i !== index));
	};

	// Function to handle changes in video inputs
	const handleVideosChange = (e: any, index: number) => {
		const { name, value } = e.target;
		const updatedVideos = [...videos];
		updatedVideos[index] = { ...updatedVideos[index], [name]: value };
		setVideos(updatedVideos);
	};

	const handleSubmit = async (e: any) => {
		setLoading(true);
		e.preventDefault();

		const formData = {
			...basicInfo,
			contact,
			images,
			videos,
		};

		console.log(formData);

		try {
			const res = await axios.post("/api/merchant/create", formData);
			console.log(res);
			setLoading(false);
			toast({
				title: "Added Successfully",
			});
			// setTimeout(() => {
			// 	// window.location.reload();
			// }, 2000);
		} catch (error) {
			console.log(error);
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

	if (status === "loading") {
		return (
			<div className="flex justify-center items-center h-screen w-3/4">
				<p>Loading...</p>
			</div>
		);
	}

	if (
		status === "authenticated" &&
		session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
	) {
		return (
			<>
				<h2 className="text-2xl font-semibold my-6 text-center text-white">
					School Information
				</h2>
				<form
					onSubmit={handleSubmit}
					className="max-w-lg grid gap-3 mx-auto p-6 bg-white shadow-md rounded-md">
					{/* Basic Information */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">Name</Label>
						<Input
							type="text"
							name="name"
							value={basicInfo.name}
							onChange={handleBasicInfoChange}
							className="w-full p-2 border rounded-md"
							placeholder="School Name"
							required
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							About Us
						</Label>
						<Textarea
							name="aboutUs"
							value={basicInfo.aboutUs}
							onChange={handleBasicInfoChange}
							className="w-full p-2 border rounded-md h-96"
							placeholder="About the School"
							required
						/>
					</div>
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Map Location
						</Label>
						<Input
							name="locationMap"
							value={basicInfo.locationMap}
							onChange={handleBasicInfoChange}
							className="w-full p-2 border rounded-md"
							required
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">Logo</Label>
						<UploadDropzone
							endpoint="imageUploader"
							onClientUploadComplete={(res: any) => {
								console.log("Files: ", res);
								setBasicInfo({
									...basicInfo,
									logo: res[0]?.url,
								});
							}}
							onUploadError={(error: Error) => {
								alert(`ERROR! ${error.message}`);
							}}
						/>
						{basicInfo.logo && (
							<img
								src={basicInfo.logo}
								alt="Logo"
								style={{ width: "100px", height: "100px" }}
							/>
						)}
					</div>

					{/* Contact Information */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Contact Email
						</Label>
						<Textarea
							name="email"
							value={contact.email}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md h-96"
							placeholder="school@example.com"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Location
						</Label>
						<Textarea
							name="location"
							value={contact.location}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md h-96"
							placeholder="Hyderabad"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Contact Number
						</Label>
						<Textarea
							name="number"
							value={contact.number}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md h-96"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Youtube
						</Label>
						<Input
							name="youtube"
							value={contact.youtube}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Instagram
						</Label>
						<Input
							name="instagram"
							value={contact.instagram}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							twitter
						</Label>
						<Input
							name="twitter"
							value={contact.twitter}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							linkedin
						</Label>
						<Input
							name="linkedin"
							value={contact.linkedin}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Facebook
						</Label>
						<Input
							name="facebook"
							value={contact.facebook}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Twitter
						</Label>
						<Input
							name="twitter"
							value={contact.twitter}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							website
						</Label>
						<Input
							name="website"
							value={contact.website}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md"
							placeholder="91-9999999999"
						/>
					</div>

					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							opening
						</Label>
						<Textarea
							name="opening"
							value={contact.opening}
							onChange={handleContactChange}
							className="w-full p-2 border rounded-md h-96"
							placeholder="John Doe, Jane Smith"
						/>
					</div>

					{/* Image Upload */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Images
						</Label>

						<UploadImages
							image={images}
							setImage={setImages}
						/>
					</div>

					{/* Videos */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Videos
						</Label>
						{videos.map((video, index) => (
							<div
								key={index}
								className="flex gap-6 items-center mb-2">
								<div className="w-full">
									<Input
										type="text"
										name="src"
										value={video.src}
										onChange={(e) =>
											handleVideosChange(e, index)
										}
										className="w-full p-2 border rounded-md mb-2"
										placeholder={`Video ${
											index + 1
										} Source`}
									/>
									<Input
										type="text"
										name="title"
										value={video.title}
										onChange={(e) =>
											handleVideosChange(e, index)
										}
										className="w-full p-2 border rounded-md mb-2"
										placeholder={`Video ${index + 1} Title`}
									/>
								</div>
								<Trash
									onClick={() => removeVideo(index)}
									className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"></Trash>
							</div>
						))}
						<Plus
							onClick={addVideo}
							className="text-center text-3xl font-bold w-full h-12 py-2 rounded-md cursor-pointer">
							+
						</Plus>
					</div>

					<Button
						disabled={loading}
						type="submit"
						className="bg-blue-500 text-white w-full py-2 rounded-md">
						{loading ? <Loading /> : "Submit"}
					</Button>
				</form>
			</>
		);
	}
	return null;
}
