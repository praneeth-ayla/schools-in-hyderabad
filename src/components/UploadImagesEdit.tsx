import { useState, useEffect } from "react";
import { UploadDropzone } from "../utils/uploadthing";
import axios from "axios";
import { Trash } from "lucide-react";
import { extractPngName } from "@/utils/extractPngName";

export default function UploadImagesEdit({
	image,
	setImage,
}: {
	image: { url: string; id?: string; schoolId: string }[];
	setImage: (
		images: { url: string; id?: string; schoolId: string }[]
	) => void;
}) {
	const [images, setImages] =
		useState<{ url: string; id?: string; schoolId: string }[]>(image);

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
							alt={`img${i + 1}`}
							style={{ width: "100px", height: "100px" }}
						/>
						<div className="absolute top-0 right-0 flex gap-1 p-1">
							<Trash
								className="cursor-pointer text-red-600 hover:text-red-800"
								onClick={() => handleDelete(img)}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
