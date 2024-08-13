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
import { Place, SchoolCategory, SchoolCategoryNames } from "@/lib/types";
import { useRouter } from "next/navigation";

interface SearchInputsProps {
	initialValues?: {
		school?: string;
		board?: SchoolCategory;
		where?: Place;
	};
}

export default function SearchInputs({ initialValues }: SearchInputsProps) {
	const router = useRouter();

	const defaultValues = {
		school: "",
		board: "",
		where: "",
	};

	const [formValues, setFormValues] = useState({
		...defaultValues,
		...initialValues,
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	}

	function handleSelectChange(name: string, value: string) {
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const values = formValues;
		router.push(
			`/search?name=${encodeURIComponent(
				values.school
			)}&board=${encodeURIComponent(
				values.board
			)}&area=${encodeURIComponent(values.where)}`
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-6 md:flex-row w-full justify-center items-start md:items-end">
				<div className="grid w-full items-center gap-1.5 p-0">
					<Label htmlFor="school">School</Label>
					<Input
						className="text-black h-8 sm:h-10"
						type="text"
						id="school"
						name="school"
						placeholder="Ex: KV AFS Hakimpet"
						value={formValues.school}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="board">Board</Label>
					<Select
						name="board"
						value={formValues.board}
						onValueChange={(value) =>
							handleSelectChange("board", value)
						}>
						<SelectTrigger className="text-black h-8 sm:h-10">
							<SelectValue
								placeholder="Select Board"
								className="text-black"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{Object.entries(SchoolCategoryNames).map(
									([key, value]) => (
										<SelectItem
											key={key}
											value={key}>
											{/* Replaces underscore with space */}
											{value.replace(/_/g, " ")}
										</SelectItem>
									)
								)}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="where">Where</Label>
					<Select
						name="where"
						value={formValues.where}
						onValueChange={(value) =>
							handleSelectChange("where", value)
						}>
						<SelectTrigger className="w-full text-black h-8 sm:h-10">
							<SelectValue
								placeholder="Select Area"
								className="text-black"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{Object.entries(Place).map(([key, value]) => (
									<SelectItem
										key={key}
										value={key}>
										{/* Replaces underscore with space */}
										{value.replace(/_/g, " ")}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-3">
					<Button
						variant="outline"
						className="text-black "
						onClick={() => {
							setFormValues(defaultValues);
						}}>
						Reset
					</Button>
					<Button type="submit">Submit</Button>
				</div>
			</div>
		</form>
	);
}
