"use client";
import { useState, useEffect } from "react";
import { UploadDropzone } from "../utils/uploadthing";
import { Trash } from "lucide-react";

export default function UploadImages({
	image,
	setImage,
}: {
	image: any;
	setImage: any;
}) {
	const [images, setImages] = useState<{ url: string; key: string }[]>([]);

	// Synchronize images state with the incoming image prop
	useEffect(() => {
		setImages(
			image.map((img: any) => ({
				url: img,
				key: img + "1",
			}))
		);
	}, [image]); // `image` is sufficient in the dependency array

	const handleDelete = async (img: { url: string }) => {
		try {
			// Remove image from local state
			const updatedImages = images.filter(
				(images) => images.url !== img.url
			);
			setImages(updatedImages);

			// Update the parent component's image state
			setImage(updatedImages.map((img) => img.url));
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
					const updatedImages = [...images, ...res];
					setImages(updatedImages);

					// Update the parent component's image state
					setImage(updatedImages.map((img) => img.url));
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2 bg-green-400 flex-wrap">
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
