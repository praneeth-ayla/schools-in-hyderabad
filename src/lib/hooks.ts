"use client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import {
	Place,
	SchoolCategory,
	SchoolDetails,
	SchoolPartialData,
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

			setDetails({
				...data,
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

// Correct usage in a custom hook
export function useGetEvent(id: string) {
	const [event, setEvent] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	useEffect(() => {
		async function getDetails() {
			try {
				const { data } = await axios.get<any>(`/api/event?id=${id}`);
				setEvent(data);
			} catch (error: any) {
				console.error("Error fetching events", error.message);
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
	}, [toast]);

	return { event, isLoading, failed };
}

export function useGetEventsList(area: Place) {
	const [events, setEvents] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	useEffect(() => {
		async function getDetails() {
			try {
				const { data } = await axios.get<any>(
					`/api/eventList?area=${area}`
				);
				// Reverse the order of events here
				const reversedEvents = data.reverse();
				setEvents(reversedEvents);
			} catch (error: any) {
				console.error("Error fetching events", error.message);
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
	}, [area]);

	return { events, isLoading, failed };
}

export function useMerchantDetails(merchantId: string) {
	const [details, setDetails] = useState<SchoolDetails | undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	async function getDetails(merchantId: string) {
		try {
			const res = await axios.get(
				`/api/merchant/details?id=${merchantId}`
			);
			const data = res.data;

			// Assuming the data structure matches MerchantDetails
			setDetails(data);
			setIsLoading(false);
		} catch (error: any) {
			console.error("Error fetching merchant details:", error.message);
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
		if (merchantId) {
			getDetails(merchantId);
		}
	}, [merchantId]);

	return { isLoading, details, failed };
}

export function useMerchantList() {
	const [details, setDetails] = useState<SchoolPartialData[] | undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	async function getDetails() {
		try {
			const res = await axios.get(`/api/merchant/list`);
			const data = res.data;
			setDetails(data);
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
		getDetails();
	}, []);

	return { isLoading, details, failed };
}

export function useGetTopper(id: string) {
	const [event, setEvent] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { toast } = useToast();

	useEffect(() => {
		async function getDetails() {
			try {
				const { data } = await axios.get<any>(`/api/topper?id=${id}`);
				setEvent(data);
			} catch (error: any) {
				console.error("Error fetching events", error.message);
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
	}, [toast]);

	return { event, isLoading, failed };
}
