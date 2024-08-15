"use client";
import { useState, useEffect } from "react";
import { UploadDropzone } from "../utils/uploadthing";
import { Button } from "./ui/button";
import axios from "axios";

export default function UploadImages({
	setImage,
}: {
	setImage: (images: string[]) => void;
}) {
	const [images, setImages] = useState<{ url: string; key: string }[]>([]);

	// Update form data when images change
	useEffect(() => {
		setImage(images.map((img) => img.url));
	}, [images]); // No need to include setImage in the dependency array

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					console.log("Files: ", res);
					// Add new image to the images array
					setImages((prevImages) => [...prevImages, ...res]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2">
				{images.map((img, i) => (
					<div key={i}>
						<img
							src={img.url}
							alt={`img${i + 1}`}
							style={{ width: "100px", height: "100px" }}
						/>
						<Button
							onClick={async () => {
								// Delete image from server and update state
								await axios.get(
									`/api/deleteImage?img=${img.key}`
								);
								setImages((prevImages) =>
									prevImages.filter(
										(image) => image.key !== img.key
									)
								);
							}}>
							Delete
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}
