"use client";
import { useState } from "react";
import { UploadButton, UploadDropzone } from "../utils/uploadthing";
import { Button } from "./ui/button";

export default function UploadDroper() {
	const [images, setImages] = useState<{ url: string; key: string }[]>([]);

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					// Do something with the response
					console.log("Files: ", res);
					// Add new image to the images array
					setImages((prevImages) => [
						...prevImages,
						{ url: res[0].url, key: res[0].key },
					]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<Button>Delete</Button>
			<div>{JSON.stringify(images)}</div>
			<div>
				{images.map((img, i) => (
					<img
						src={img.url}
						alt={`img${i + 1}`}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}
