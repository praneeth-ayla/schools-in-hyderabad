"use client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import {
	Place,
	SchoolCategory,
	SchoolDetails,
	SchoolPartialData,
	Video,
} from "./types";
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

interface UseSchoolListParams {
	name?: string;
	area?: Place;
	board?: SchoolCategory;
}

export function useSchoolList({ name, area, board }: UseSchoolListParams) {
	const [details, setDetails] = useState<SchoolPartialData[] | null>(null); // Set initial state to null or an empty array if preferred
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);

	const { toast } = useToast();

	useEffect(() => {
		async function getDetails() {
			try {
				const { data } = await axios.get<SchoolPartialData[]>(
					"/api/schoolList",
					{
						params: { name, area, board },
					}
				);
				setDetails(data);
			} catch (error: any) {
				console.error("Error fetching school details:", error.message);
				toast({
					title: "Something went wrong!",
					description: "Redirecting back",
					duration: 1000,
				});
				setFailed(true);
			} finally {
				setIsLoading(false);
			}
		}

		getDetails();
	}, [name, area, board, toast]);

	return { details, isLoading, failed };
}
