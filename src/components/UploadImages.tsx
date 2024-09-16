"use client";
import { useState, useEffect } from "react";
import { UploadDropzone } from "../utils/uploadthing";
import axios from "axios";
import { Trash } from "lucide-react";
import { extractPngName } from "@/utils/extractPngName";

export default function UploadImages({
	image,
	setImage,
}: {
	image: any;
	setImage: (images: { url: string; alt: string }[]) => void;
}) {
	const [images, setImages] = useState<
		{ url: string; key: string; alt: string }[]
	>([]);

	// Update form data when images change
	useEffect(() => {
		setImage(images.map((img) => ({ url: img.url, alt: img.alt })));
	}, [images, setImage]);

	const handleDelete = async (img: { url: string; key: string }) => {
		try {
			// Delete image from server
			await axios.get(`/api/deleteImage?img=${extractPngName(img.url)}`);
			// Remove image from local state
			setImages((prevImages) =>
				prevImages.filter((image) => image.url !== img.url)
			);
		} catch (error: any) {
			console.error("Error deleting image:", error);
			alert(`ERROR! ${error.message}`);
		}
	};

	// Handle change of alt text input
	const handleAltChange = (index: number, newAlt: string) => {
		setImages((prevImages) =>
			prevImages.map((img, i) =>
				i === index ? { ...img, alt: newAlt } : img
			)
		);
	};

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					// Ensure that each item in res has the correct structure
					setImages((prevImages) => [
						...prevImages,
						...res.map((img: any) => ({
							url: img.url, // Use img.url directly
							key: img.key, // Use img.key if necessary
							alt: "", // Initialize alt as an empty string
						})),
					]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2 pt-4 flex-wrap items-center">
				{images.map((img, i) => (
					<div
						key={i}
						className="relative w-1/3 p-2 border border-gray-200 rounded-md flex justify-center items-center flex-col">
						<img
							src={img.url}
							onClick={() => {
								console.log(img); // For debugging
							}}
							alt={img.alt || `img${i + 1}`}
							style={{
								width: "auto",
								height: "100px",
							}}
						/>
						<div className="flex justify-center items-center pt-2 hover:cursor-pointer">
							<Trash onClick={() => handleDelete(img)} />
						</div>
						<input
							type="text"
							placeholder="Enter alt text"
							value={img.alt}
							onChange={(e) => handleAltChange(i, e.target.value)}
							className="mt-2 w-full border border-gray-300 rounded-md p-1"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
