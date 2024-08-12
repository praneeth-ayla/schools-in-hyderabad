"use client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { SchoolDetails, Video } from "./types";
import axios from "axios";

export function useSchoolDetails(schoolId: string) {
	const [details, setDetails] = useState<SchoolDetails | undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	async function getDetails(schoolId: string) {
		try {
			const res = await axios.get(`/api/schoolDetails?id=${schoolId}`);
			const data = res.data;

			const videos: Video[] = data.videos
				? data.videos.map((video: string) => ({
						src: video,
						title: "Video", // Replace this with actual titles if available
				  }))
				: [];

			setDetails({
				...data,
				videos,
			});
			setIsLoading(false);
		} catch (error: any) {
			console.error("Error fetching school details:", error.message);
			setIsLoading(false);
			toast({
				title: "Something went wrong!",
				description: "Redirecting back",
				duration: 1000,
			});
			setTimeout(() => {
				setFailed(true);
			}, 1000);
		}
	}

	useEffect(() => {
		getDetails(schoolId);
	}, [schoolId]);

	return { isLoading, details, failed };
}
