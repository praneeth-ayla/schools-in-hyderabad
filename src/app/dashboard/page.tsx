"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function InputDemo() {
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(true);
	const [board, setBoard] = useState("");
	const [area, setArea] = useState("");
	const [schoolId, setSchoolId] = useState<number>();
	const [merchantId, setMerchantId] = useState<number>();
	const [advertiseTime, setAdvertiseTime] = useState<number | "">("");
	const [schoolDeleteId, setSchoolDeleteId] = useState<number | "">("");
	const [merchantDeleteId, setMerchantDeleteId] = useState<number | "">();

	const router = useRouter();
	const { toast } = useToast();

	const handleAddBoard = async () => {
		if (!board || board.trim() === "") {
			toast({
				title: "Invalid Input",
				description: "Please enter a valid board name.",
				variant: "destructive",
			});
			return;
		}

		try {
			const res = await axios.post("/api/boards", { name: board });

			if (res.status === 201) {
				toast({
					title: "Board Added",
					description: "The board was added successfully.",
				});
				setBoard(""); // Clear the input field
			} else {
				toast({
					title: "Error",
					description: res.data.error || "Failed to add the board.",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while adding the board.",
				variant: "destructive",
			});
		}
	};

	const handleAddArea = async () => {
		if (!area || area.trim() === "") {
			toast({
				title: "Invalid Input",
				description: "Please enter a valid area name.",
				variant: "destructive",
			});
			return;
		}

		try {
			const res = await axios.post("/api/areas", {
				name: area,
			});

			if (res.status === 201) {
				toast({
					title: "Area Added",
					description: "The area was added successfully.",
				});
				setArea(""); // Clear the input field
			} else {
				toast({
					title: "Error",
					description: "Failed to add the area.",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while adding the area.",
				variant: "destructive",
			});
		}
	};

	const handleUpdate = async () => {
		if (advertiseTime === "" || isNaN(advertiseTime)) {
			// Handle invalid input
			alert("Please enter a valid number for advertiseTime.");
			return;
		}

		try {
			// Send the update request to your API
			const response = await fetch(
				`/api/advertiseTime?advertiseTime=${advertiseTime}`,
				{
					method: "GET",
				}
			);

			if (!response.ok) {
				throw new Error("Failed to update advertise time");
			}

			// Optionally handle success, like showing a success message or redirecting
			alert("Advertise time updated successfully");
			router.push("/dashboard"); // Redirect or navigate to a different page
		} catch (error) {
			console.error("Update failed:", error);
			alert("An error occurred while updating the advertise time.");
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (
		status === "authenticated" &&
		session?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL
	) {
		setTimeout(() => {
			router.push("/");
		}, 2000);
		return (
			<div className="flex flex-col justify-center items-center h-screen">
				<p>You&apos;re not Authorized!</p>
				<p className="text-sm text-muted-foreground">
					Redirecting back to Home
				</p>
			</div>
		);
	}

	if (status === "loading") {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading session...
			</div>
		);
	}

	if (status === "authenticated") {
		return (
			<div className="min-h-screen text-black">
				<div className="flex gap-3 flex-wrap lg:px-40 py-32 justify-evenly">
					<div className="p-4">
						<div className="bg-white shadow-md rounded-lg p-6">
							<CardTitle className=" font-semibold">
								Add Board
							</CardTitle>
							<CardContent className="mt-4">
								<Input
									type="text"
									className="mt-5 placeholder:text-gray-600"
									value={board}
									onChange={(e) => setBoard(e.target.value)}
									placeholder="Board Name"
								/>
							</CardContent>
							<CardFooter>
								<Button
									onClick={handleAddBoard}
									className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
									Add
								</Button>
							</CardFooter>
						</div>
					</div>

					<Card className="p-4">
						<CardTitle>Add Area</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								value={area}
								type="text"
								onChange={(e) => setArea(e.target.value)}
								placeholder="Area Name"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								className="mt-4"
								onClick={() => {
									handleAddArea();
								}}>
								Add
							</Button>
						</CardFooter>
					</Card>

					<Card className="p-4">
						<CardTitle>School Create</CardTitle>
						<CardContent className="flex flex-col items-center justify-center"></CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								className="mt-4"
								onClick={() => {
									router.push("/dashboard/create");
								}}>
								Create
							</Button>
						</CardFooter>
					</Card>
					<Card className="p-4">
						<CardTitle>School Edit</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								min={1}
								value={schoolId}
								type="number"
								onChange={(e) => {
									setSchoolId(Number(e.target.value));
								}}
								placeholder="School Id"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								className="mt-4"
								onClick={() => {
									schoolId;
									router.push(
										"/dashboard/edit?id=" + schoolId
									);
								}}>
								Edit
							</Button>
						</CardFooter>
					</Card>
					<Card className="p-4">
						<CardTitle>Merchant Create</CardTitle>
						<CardContent className="flex flex-col items-center justify-center"></CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								onClick={() => {
									router.push("/dashboard/merchant/create");
								}}
								className="mt-4">
								Create
							</Button>
						</CardFooter>
					</Card>
					<Card className="p-4">
						<CardTitle>Merchant Edit</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								min={1}
								value={merchantId}
								type="number"
								onChange={(e) => {
									setMerchantId(Number(e.target.value));
								}}
								placeholder="Merchant Id"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								onClick={() => {
									merchantId &&
										router.push(
											"/dashboard/merchant/edit?id=" +
												merchantId
										);
								}}
								className="mt-4">
								Edit
							</Button>
						</CardFooter>
					</Card>

					{/* <Card className="p-4">
						<CardTitle>Event Time</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								min={1}
								value={advertiseTime}
								type="number"
								onChange={(e) => {
									setAdvertiseTime(
										Number(e.target.value) || ""
									);
								}}
								placeholder="Advertise Time"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								onClick={handleUpdate}
								className="mt-4">
								Update
							</Button>
						</CardFooter>
					</Card> */}
					<Card className="p-4">
						<CardTitle>Delete Merchant</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								min={1}
								value={merchantDeleteId}
								type="number"
								onChange={(e) => {
									setMerchantDeleteId(
										Number(e.target.value) || ""
									);
								}}
								placeholder="Merchant Id"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								onClick={async () => {
									if (merchantDeleteId) {
										try {
											const res = await axios.get(
												`/api/delete/merchant?id=${merchantDeleteId}`
											);
											toast({
												title: "Merchant Deleted",
												description: res.data.message,
											});
										} catch (error) {
											toast({
												title: "Error",
												description:
													"Failed to delete merchant",
												variant: "destructive",
											});
										}
									} else {
										toast({
											title: "Invalid ID",
											description:
												"Please enter a valid merchant ID",
											variant: "destructive",
										});
									}
								}}
								className="mt-4">
								Delete
							</Button>
						</CardFooter>
					</Card>

					<Card className="p-4">
						<CardTitle>Delete School</CardTitle>
						<CardContent className="flex flex-col items-center justify-center">
							<Input
								className="mt-5 placeholder:text-gray-600"
								min={1}
								value={schoolDeleteId}
								type="number"
								onChange={(e) => {
									setSchoolDeleteId(
										Number(e.target.value) || ""
									);
								}}
								placeholder="School Id"
							/>
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							<Button
								onClick={async () => {
									if (schoolDeleteId) {
										try {
											const res = await axios.get(
												`/api/delete/school?id=${schoolDeleteId}`
											);
											toast({
												title: "School Deleted",
												description: res.data.message,
											});
										} catch (error) {
											toast({
												title: "Error",
												description:
													"Failed to delete school",
												variant: "destructive",
											});
										}
									} else {
										toast({
											title: "Invalid ID",
											description:
												"Please enter a valid school ID",
											variant: "destructive",
										});
									}
								}}
								className="mt-4">
								Delete
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex justify-center items-center h-screen">
				Please sign in
			</div>
		);
	}
}
