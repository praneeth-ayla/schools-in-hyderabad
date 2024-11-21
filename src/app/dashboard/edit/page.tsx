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
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import UploadImagesEdit from "@/components/UploadImagesEdit";
import { useAreaList, useBoardList, useSchoolDetailsId } from "@/lib/hooks";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { Plus, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SchoolForm({ searchParams }: any) {
	const id = searchParams.id;
	const { isLoading, details, failed } = useSchoolDetailsId(id);
	const { data: session, status } = useSession();
	const router = useRouter();
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);
	const { areas, isLoading: isLoadingAreas } = useAreaList();
	const {
		boards,
		failed: failedBoards,
		isLoading: isLoadingBoards,
	} = useBoardList();

	// Initialize state with default values
	const [basicInfo, setBasicInfo] = useState({
		name: "",
		aboutUs: "",
		logo: "",
		area: "",
		board: "",
		locationMap: "",
		showReviews: false,
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

	const [newsletter, setNewsletter] = useState({
		title: "",
		description: "",
		image: "",
	});

	// Initialize state with empty arrays
	const [facilities, setFacilities] = useState([""]);
	const [events, setEvents] = useState([
		{ title: "", description: "", image: "", advertise: false },
	]);
	const [toppers, setToppers] = useState([
		{ title: "", description: "", image: "", advertise: false },
	]);
	const [awards, setAwards] = useState([
		{ title: "", description: "", image: "" },
	]);
	const [images, setImages] = useState([{ url: "", alt: "" }]);
	const [videos, setVideos] = useState([{ src: "", title: "" }]);

	useEffect(() => {
		if (details) {
			console.log("Details:", details);

			setBasicInfo({
				name: details.name || "",
				aboutUs: details.aboutUs || "",
				logo: details.logo || "",
				area: details.area?.name || "",
				board: details.category?.name || "",
				locationMap: details.locationMap || "",
				showReviews: details.showReviews || false,
			});
			console.log("basic", basicInfo.board);

			setContact({
				email: details.contact?.email || "",
				location: details.contact?.location || "",
				number: details.contact?.number || "",
				website: details.contact?.website || "",
				facebook: details.contact?.facebook || "",
				youtube: details.contact?.youtube || "",
				instagram: details.contact?.instagram || "",
				twitter: details.contact?.twitter || "",
				linkedin: details.contact?.linkedin || "",
				opening: details.contact?.opening || "",
			});
			setFacilities(
				// @ts-ignore
				details.facilities.map((facility) => facility.name) || []
			);

			setNewsletter({
				title: details.newsletter?.title || "",
				description: details.newsletter?.description || "",
				image: details.newsletter?.image || "",
			});

			setToppers(details.toppers || []);
			setAwards(details.awards || []);
			setEvents(details.events || []);
			setVideos(details.videos || []);
			setImages(details.images || []);
			// setImages(details.images.map((img) => img.url) || []);
		}
	}, [details]);

	const handleBasicInfoChange = (e: any) => {
		const { name, value } = e.target;
		setBasicInfo({ ...basicInfo, [name]: value });
	};

	const handleContactChange = (e: any) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	// Function to handle adding new facility input
	const addFacility = () => {
		setFacilities([...facilities, ""]);
	};

	// Function to handle removing a facility input
	const removeFacility = (index: number) => {
		setFacilities(facilities.filter((_, i) => i !== index));
	};

	// Function to handle changes in facility inputs
	const handleFacilitiesChange = (e: any, index: number) => {
		const updatedFacilities = [...facilities];
		updatedFacilities[index] = e.target.value;
		setFacilities(updatedFacilities);
	};

	// Function to handle adding new event input
	const addEvent = () => {
		setEvents([
			...events,
			{ title: "", description: "", image: "", advertise: false },
		]);
	};
	const addToppers = () => {
		setToppers([
			...toppers,
			{ title: "", description: "", image: "", advertise: false },
		]);
	};
	const addAwards = () => {
		setAwards([...awards, { title: "", description: "", image: "" }]);
	};

	// Function to handle removing an event input
	const removeEvent = (index: number) => {
		setEvents(events.filter((_, i) => i !== index));
	};
	// Function to handle removing a topper input
	const removeToppers = (index: number) => {
		setToppers(toppers.filter((_, i) => i !== index));
	};
	// Function to handle removing an award input
	const removeAward = (index: number) => {
		setAwards(awards.filter((_, i) => i !== index));
	};
	// Function to handle changes in event inputs
	const handleEventsChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index: number,
		field?: string
	) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		if (target instanceof HTMLInputElement) {
			const { type, checked } = target;
			setEvents((prevEvents) => {
				const updatedEvents = [...prevEvents];
				updatedEvents[index] = {
					...updatedEvents[index],
					[name]: type === "checkbox" ? checked : value,
					...(field === "advertise" ? { advertise: checked } : {}),
				};
				return updatedEvents;
			});
		} else if (target instanceof HTMLTextAreaElement) {
			setEvents((prevEvents) => {
				const updatedEvents = [...prevEvents];
				updatedEvents[index] = {
					...updatedEvents[index],
					[name]: value,
				};
				return updatedEvents;
			});
		}
	};

	// Function to handle changes in topper inputs
	const handleToppersChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index: number,
		field?: string
	) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		if (target instanceof HTMLInputElement) {
			const { type, checked } = target;
			setToppers((prevToppers) => {
				const updatedToppers = [...prevToppers];
				updatedToppers[index] = {
					...updatedToppers[index],
					[name]: type === "checkbox" ? checked : value,
					...(field === "advertise" ? { advertise: checked } : {}),
				};
				return updatedToppers;
			});
		} else if (target instanceof HTMLTextAreaElement) {
			setToppers((prevToppers) => {
				const updatedToppers = [...prevToppers];
				updatedToppers[index] = {
					...updatedToppers[index],
					[name]: value,
				};
				return updatedToppers;
			});
		}
	};

	// Function to handle changes in award inputs
	const handleAwardsChange = (e: any, index: number) => {
		const { name, value } = e.target;
		const updatedAwards = [...awards];
		updatedAwards[index] = { ...updatedAwards[index], [name]: value };
		setAwards(updatedAwards);
	};

	// Function to handle event image upload
	const handleEventImageUpload = (res: any, index: number) => {
		const updatedEvents = [...events];
		updatedEvents[index] = {
			...updatedEvents[index],
			image: res[0]?.url,
		};
		setEvents(updatedEvents);
	};
	// Function to handle topper image upload
	const handleTopperImageUpload = (res: any, index: number) => {
		const updatedToppers = [...toppers];
		updatedToppers[index] = {
			...updatedToppers[index],
			image: res[0]?.url,
		};
		setToppers(updatedToppers);
	};

	// Function to handle award image upload
	const handleAwardImageUpload = (res: any, index: number) => {
		const updatedAwards = [...awards];
		updatedAwards[index] = {
			...updatedAwards[index],
			image: res[0]?.url,
		};
		setAwards(updatedAwards);
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

	const handleCheckboxChange = (e: any) => {
		setBasicInfo({ ...basicInfo, showReviews: e.target.checked });
	};

	const handleSubmit = async (e: any) => {
		setLoading(true);
		e.preventDefault();

		const formData = {
			...basicInfo,
			area: {
				name: basicInfo.area,
			},
			category: {
				name: basicInfo.board,
			},
			contact,
			facilities: facilities.map((facility) => ({
				name: facility,
			})),
			events,
			awards,
			toppers,
			images,
			videos,
			newsletter,
		};

		console.log(formData);

		try {
			const res = await axios.put("/api/school/edit?id=" + id, formData);
			console.log(res);
			setLoading(false);
			toast({
				title: "Edited Successfully",
			});
			setTimeout(() => {
				// window.location.reload();
				setLoading(false);
			}, 2000);
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
							Newsletter
						</Label>
						<div className="mb-2 flex gap-6 items-center border border-black p-2">
							<div className="w-full">
								<Input
									type="text"
									value={newsletter.title}
									onChange={(e) => {
										setNewsletter({
											...newsletter,
											title: e.target.value,
										});
									}}
									placeholder="Title Newsletter"
									name="title"
									className="w-full p-2 border rounded-md mb-2"
								/>
								<Textarea
									name="description"
									value={newsletter.description}
									onChange={(e) => {
										setNewsletter({
											...newsletter,
											description: e.target.value,
										});
									}}
									placeholder="Description Newsletter"
									className="w-full p-2 border rounded-md mb-2 h-40"
								/>
								<div>
									<div className="flex flex-col justify-center items-center gap-4 my-5">
										<img
											className="w-20 h-20"
											src={newsletter.image}
										/>
										<Trash
											onClick={() => {
												setNewsletter({
													...newsletter,
													image: "",
												});
											}}
											className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"
										/>
									</div>
									<UploadButton
										endpoint="imageUploader"
										onClientUploadComplete={(res: any) => {
											setNewsletter({
												...newsletter,
												image: res[0].url,
											});
										}}
										onUploadError={(error: Error) => {
											alert(`ERROR! ${error.message}`);
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<Label>
						Show Reviews
						<Input
							type="checkbox"
							checked={basicInfo.showReviews}
							onChange={handleCheckboxChange}
						/>
					</Label>

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

					{/* Area */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">Area</Label>
						<Select
							required
							name="area"
							value={basicInfo.area}
							onValueChange={(value) =>
								handleBasicInfoChange({
									target: { name: "area", value },
								})
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select an area" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{!isLoadingAreas &&
									areas &&
									Array.isArray(areas) &&
									areas.length > 0 ? (
										areas.map((place) => (
											<SelectItem
												key={place.name}
												value={place.name}>
												{place.name}
											</SelectItem>
										))
									) : (
										<SelectItem
											disabled
											value="t">
											No areas available
										</SelectItem>
									)}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* School Category */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Board
						</Label>
						<Select
							required
							name="board"
							value={basicInfo.board} // Ensure this matches the value set in state
							onValueChange={(value) =>
								handleBasicInfoChange({
									target: { name: "board", value },
								})
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select a board" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{!isLoadingBoards &&
										boards &&
										boards.map((board) => (
											<SelectItem
												key={board.id} // Use a unique key if possible
												value={board.name}>
												{board.name}
											</SelectItem>
										))}
								</SelectGroup>
							</SelectContent>
						</Select>
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

					{/* Facilities */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Facilities
						</Label>
						{facilities.map((facility, index) => (
							<div
								key={index}
								className="flex gap-6 items-center mb-2">
								<Input
									type="text"
									value={facility}
									onChange={(e) =>
										handleFacilitiesChange(e, index)
									}
									className="w-full p-2 border rounded-md"
									placeholder={`Facility ${index + 1}`}
								/>
								<Trash
									onClick={() => removeFacility(index)}
									className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"></Trash>
							</div>
						))}
						<Plus
							onClick={addFacility}
							className="text-center text-3xl font-bold w-full h-12 py-2 rounded-md cursor-pointer">
							+
						</Plus>
					</div>

					{/* Toppers */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Toppers
						</Label>

						<div className="grid gap-3 boarder border-black p-2">
							{toppers.map((topper, index) => (
								<div
									key={index}
									className="mb-2 flex gap-6 items-center border border-black p-2">
									<div className="w-full">
										<Input
											type="text"
											name="title"
											value={topper.title}
											onChange={(e) =>
												handleToppersChange(e, index)
											}
											className="w-full p-2 border rounded-md mb-2"
											placeholder={`Topper ${
												index + 1
											} Title`}
										/>
										<Textarea
											name="description"
											value={topper.description}
											onChange={(e) =>
												handleToppersChange(e, index)
											}
											className="w-full p-2 border rounded-md mb-2 h-40"
											placeholder={`Topper ${
												index + 1
											} Description`}
										/>
										<div className="mb-2">
											<img
												className="w-20 h-20"
												src={topper.image}
												alt={`Topper ${index + 1}`}
											/>
											<UploadButton
												endpoint="imageUploader"
												onClientUploadComplete={(
													res: any
												) =>
													handleTopperImageUpload(
														res,
														index
													)
												}
												onUploadError={(error: Error) =>
													alert(
														`ERROR! ${error.message}`
													)
												}
											/>
										</div>
										{/* Advertise Option */}
										<div className="flex items-center gap-2 mt-2">
											<Label className="font-semibold">
												Advertise
											</Label>
											<Input
												type="checkbox"
												name="advertise"
												checked={
													topper.advertise || false
												}
												onChange={(e) =>
													handleToppersChange(
														e,
														index,
														"advertise"
													)
												}
											/>
										</div>
									</div>
									<Trash
										onClick={() => removeToppers(index)}
										className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"
									/>
								</div>
							))}
							<Plus
								onClick={addToppers}
								className="text-center text-3xl font-bold w-full h-12 py-2 rounded-md cursor-pointer">
								+
							</Plus>
						</div>
					</div>

					{/* Awards */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Awards
						</Label>
						{awards.map((award, index) => (
							<div
								key={index}
								className="mb-2 flex gap-6 items-center">
								<div className="w-full">
									<Input
										type="text"
										name="title"
										value={award.title}
										onChange={(e) =>
											handleAwardsChange(e, index)
										}
										className="w-full p-2 border rounded-md mb-2"
										placeholder={`Award ${index + 1} Title`}
									/>
									<Textarea
										name="description"
										value={award.description}
										onChange={(e) =>
											handleAwardsChange(e, index)
										}
										className="w-full p-2 border rounded-md mb-2 h-40"
										placeholder={`Award ${
											index + 1
										} Description`}
									/>
									<div>
										<img
											className="w-20 h-20"
											src={awards[index].image}
										/>
										<UploadButton
											endpoint="imageUploader"
											onClientUploadComplete={(
												res: any
											) => {
												handleAwardImageUpload(
													res,
													index
												);
											}}
											onUploadError={(error: Error) => {
												alert(
													`ERROR! ${error.message}`
												);
											}}
										/>
									</div>
								</div>
								<Trash
									onClick={() => removeAward(index)}
									className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"></Trash>
							</div>
						))}
						<Plus
							onClick={addAwards}
							className="text-center text-3xl font-bold w-full h-12 py-2 rounded-md cursor-pointer">
							+
						</Plus>
					</div>

					{/* Events */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Events
						</Label>
						<div className="grid gap-3 boarder border-black p-2">
							{events.map((event, index) => (
								<div
									key={index}
									className="mb-2 flex gap-6 items-center border border-black p-2">
									<div className="w-full">
										<Input
											type="text"
											name="title"
											value={event.title}
											onChange={(e) =>
												handleEventsChange(e, index)
											}
											className="w-full p-2 border rounded-md mb-2"
											placeholder={`Event ${
												index + 1
											} Title`}
										/>
										<Textarea
											name="description"
											value={event.description}
											onChange={(e) =>
												handleEventsChange(e, index)
											}
											className="w-full p-2 border rounded-md mb-2 h-40"
											placeholder={`Event ${
												index + 1
											} Description`}
										/>
										<div>
											<img
												className="w-20 h-20"
												src={event.image}
												alt={`Event ${index + 1}`}
											/>
											<UploadButton
												endpoint="imageUploader"
												onClientUploadComplete={(
													res: any
												) =>
													handleEventImageUpload(
														res,
														index
													)
												}
												onUploadError={(error: Error) =>
													alert(
														`ERROR! ${error.message}`
													)
												}
											/>
										</div>
										{/* Advertise Option */}
										<div className="flex items-center gap-2 mt-2">
											<Label className="font-semibold">
												Advertise
											</Label>
											<Input
												type="checkbox"
												name="advertise"
												checked={
													event.advertise || false
												}
												onChange={(e) =>
													handleEventsChange(
														e,
														index,
														"advertise"
													)
												}
											/>
										</div>
									</div>
									<Trash
										onClick={() => removeEvent(index)}
										className="text-center text-3xl font-bold h-6 rounded-md cursor-pointer"
									/>
								</div>
							))}
							<Plus
								onClick={addEvent}
								className="text-center text-3xl font-bold w-full h-12 py-2 rounded-md cursor-pointer">
								+
							</Plus>
						</div>
					</div>

					{/* Image Upload */}
					<div className="mb-4">
						<Label className="block mb-2 font-semibold">
							Images
						</Label>

						<UploadImagesEdit
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

export default SchoolForm;
