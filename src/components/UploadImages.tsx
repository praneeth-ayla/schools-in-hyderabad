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
	setImage: (images: string[]) => void;
}) {
	const [images, setImages] = useState<{ url: string; key: string }[]>([]);

	// Update form data when images change
	useEffect(() => {
		setImage(images.map((img) => img.url));
	}, [images, setImage]); // Added setImage to dependency array to avoid stale closures

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

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					// Add new image to the images array
					setImages((prevImages) => [...prevImages, ...res]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2 h-20 overflow-x-auto">
				{images.map((img, i) => (
					<div
						key={i}
						className="relative">
						<img
							src={img.url}
							onClick={() => {
								console.log(img); // For debugging
							}}
							alt={`img${i + 1}`}
							style={{ width: "100px", height: "100px" }}
						/>
						<div className="flex justify-center items-center pt-2 hover:cursor-pointer">
							<Trash onClick={() => handleDelete(img)} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
