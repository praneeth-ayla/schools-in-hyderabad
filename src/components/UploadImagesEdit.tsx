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
	image: {
		url: string;
		id?: string;
		schoolId: string;
	}[];
	setImage: (
		images: {
			url: string;
			id?: string;
			schoolId: string;
		}[]
	) => void;
}) {
	// Initialize images state with the provided image prop, including schoolId
	const [images, setImages] = useState<
		{ url: string; id?: string; schoolId: string }[]
	>(
		image.map((img) => ({
			url: img.url,
			id: img.id,
			schoolId: img.schoolId,
		}))
	);

	// Update form data when images change
	useEffect(() => {
		setImage(images);
	}, [images, setImage]);

	const handleDelete = async (img: {
		url: string;
		id?: string;
		schoolId: string;
	}) => {
		try {
			// Delete image from the server
			await axios.get(`/api/deleteImage?img=${extractPngName(img.url)}`);
			// Update state
			setImages((prevImages) =>
				prevImages.filter((image) => image.url !== img.url)
			);
		} catch (error) {
			console.error("Failed to delete the image", error);
		}
	};

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					// Add new image to the images array with schoolId
					const newImages = res.map((img: any) => ({
						...img,
						schoolId: images[0].schoolId, // assuming all images have the same schoolId
					}));
					setImages((prevImages) => [...prevImages, ...newImages]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2 h-20 bg-green-300">
				{images.map((img, i: number) => (
					<div key={i}>
						<img
							className="bg-green-500"
							src={img.url}
							onClick={() => console.log(img)}
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
