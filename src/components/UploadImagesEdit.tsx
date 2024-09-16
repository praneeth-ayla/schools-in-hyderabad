"use client";
import { useState, useEffect } from "react";
import { UploadDropzone } from "../utils/uploadthing";
import { Trash } from "lucide-react";

export default function UploadImages({
	image,
	setImage,
}: {
	image: { url: string; alt: string }[];
	setImage: (images: { url: string; alt: string }[]) => void;
}) {
	const [images, setImages] = useState<{ url: string; alt: string }[]>([]);

	// Update local images state when the parent image prop changes
	useEffect(() => {
		setImages(image);
	}, [image]); // Only update when `image` prop changes

	// Handle image deletion
	const handleDelete = (img: { url: string }) => {
		const updatedImages = images.filter((image) => image.url !== img.url);
		setImages(updatedImages); // Update local state
		setImage(updatedImages); // Update parent state
	};

	// Handle alt text change
	const handleAltChange = (index: number, newAlt: string) => {
		const updatedImages = images.map((img, i) =>
			i === index ? { ...img, alt: newAlt } : img
		);
		setImages(updatedImages); // Update local state
		setImage(updatedImages); // Update parent state
	};

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					// Add new images to the images array with empty alt text
					const newImages = res.map((img: any) => ({
						url: img.url,
						key: img.key || img.url, // Ensure key is present
						alt: "", // Initialize alt as an empty string
					}));
					const updatedImages = [...images, ...newImages];
					setImages(updatedImages); // Update local state
					setImage(updatedImages); // Update parent state
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2 flex-wrap">
				{images.map((img, i) => (
					<div
						key={i}
						className="relative p-2 w-1/3 border border-gray-200 rounded-md">
						<img
							src={img.url}
							alt={img.alt || `img${i + 1}`}
							style={{ width: "auto", height: "100px" }}
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
