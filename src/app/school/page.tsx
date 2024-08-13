import SchoolPage from "@/components/SchoolPage";

export default function page({ searchParams }: any) {
	const schoolId = searchParams.id;
	return (
		<>
			<SchoolPage schoolId={schoolId} />
		</>
	);
}
