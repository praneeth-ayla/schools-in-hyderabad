"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAreaList, useBoardList } from "@/lib/hooks";
import { useToast } from "./ui/use-toast";

export default function SearchInputs({ initialValues }: any) {
	const router = useRouter();
	const { toast } = useToast();

	const defaultValues = {
		school: "",
		board: "",
		area: "",
	};

	const [formValues, setFormValues] = useState({
		...defaultValues,
		...initialValues,
	});

	const { areas, failed, isLoading: isLoadingAreas } = useAreaList();
	const {
		boards,
		failed: failedBoards,
		isLoading: isLoadingBoards,
	} = useBoardList();

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormValues((prevValues: any) => ({
			...prevValues,
			[name]: value,
		}));
	}

	function handleSelectChange(name: string, value: string) {
		setFormValues((prevValues: any) => ({
			...prevValues,
			[name]: value,
		}));
	}

	async function handleSubmitSchool(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const values = formValues;
		if (values.school !== "") {
			router.push(`/search?name=${encodeURIComponent(values.school)}`);
		} else {
			toast({
				title: "Please enter a school name before searching.",
			});
		}
	}

	async function handleSubmitTwo(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const values = formValues;

		if (values.area !== "" && values.board === "") {
			// Case 1: Only area is provided
			router.push(`/search?area=${encodeURIComponent(values.area)}`);
		} else if (values.board !== "" && values.area !== "") {
			// Case 2: Both area and board are provided
			router.push(
				`/search?board=${encodeURIComponent(
					values.board
				)}&area=${encodeURIComponent(values.area)}`
			);
		} else {
			// Case 3: None of the fields are provided
			toast({
				title: "Please select an area or both area and board before searching.",
			});
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmitTwo}>
				<div className="flex flex-col gap-3 md:flex-row w-full justify-center items-start md:items-end">
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="board">Board</Label>
						<Select
							name="board"
							value={formValues.board}
							onValueChange={(value) =>
								handleSelectChange("board", value)
							}>
							<SelectTrigger className="w-full text-black h-10">
								<SelectValue
									placeholder="Select Board"
									className="text-black"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{!isLoadingBoards &&
										boards &&
										boards.map((board) => (
											<SelectItem
												key={board.id}
												value={board.name}>
												{board.name}
											</SelectItem>
										))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="area">Area</Label>
						<Select
							name="area"
							value={formValues.area}
							onValueChange={(value) =>
								handleSelectChange("area", value)
							}>
							<SelectTrigger className="w-full text-black h-10">
								<SelectValue
									placeholder="Select Area"
									className="text-black"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{!isLoadingAreas &&
										areas &&
										areas.map((area) => (
											<SelectItem
												key={area.id}
												value={area.name}>
												{area.name}
											</SelectItem>
										))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex gap-3">
						<Button
							variant="outline"
							className="text-black h-10"
							onClick={() => {
								setFormValues(defaultValues);
							}}>
							Reset
						</Button>
						<Button
							type="submit"
							className="h-10">
							Search
						</Button>
					</div>
				</div>
			</form>

			<div className="text-white text-center font-bold pt-3">or</div>
			<form onSubmit={handleSubmitSchool}>
				<div className="flex flex-col gap-6 md:flex-row w-full justify-center items-start md:items-end">
					<div className="grid w-full items-center gap-1.5 p-0">
						<Label htmlFor="school">School</Label>
						<Input
							className="text-black h-10 placeholder:text-gray-500"
							type="text"
							id="school"
							name="school"
							placeholder="Search by school name"
							value={formValues.school}
							onChange={handleChange}
						/>
					</div>
					<div className="flex gap-3">
						<Button type="submit">Search</Button>
					</div>
				</div>
			</form>
			<div className="text-center pt-3 font-bold italic">
				<span className="">Please note: </span>
				We are continuously updating profiles of schools, your patience
				is appreciated.
			</div>
		</div>
	);
}
