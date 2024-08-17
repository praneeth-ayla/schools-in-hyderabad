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
	}, [images]); // No need to include setImage in the dependency array

	return (
		<div>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res: any) => {
					console.log("Files: ", res);
					console.log(image);
					// Add new image to the images array
					setImages((prevImages) => [...prevImages, ...res]);
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<div className="flex gap-2">
				{image.map((img: any, i: number) => (
					<div key={i}>
						<img
							src={img}
							alt={`img${i + 1}`}
							style={{ width: "100px", height: "100px" }}
						/>
						<div className="flex justify-center items-center pt-2 hover:cursor-pointer">
							<Trash
								onClick={async () => {
									// Delete image from server and update state
									console.log("before", images);
									await axios.get(
										`/api/deleteImage?img=${extractPngName(
											img
										)}`
									);
									console.log("tes", img, "tes");
									setImages((prevImages) =>
										prevImages.filter(
											(image) => image.url !== img
										)
									);
									console.log("after", images);
								}}></Trash>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
