import SchoolPage from "@/components/SchoolPage";

export default function page({ params }: any) {
	return (
		<>
			<SchoolPage school={params} />
		</>
	);
}
