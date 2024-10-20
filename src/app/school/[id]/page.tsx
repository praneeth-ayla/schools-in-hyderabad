import SchoolPage from "@/components/SchoolPage";

export default function page({ params }: any) {
	const schoolId = params.id;
	return (
		<>
			<SchoolPage school={schoolId} />
		</>
	);
}
