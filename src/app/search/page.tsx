import SearchPage from "@/components/SearchPage";
import { Place, SchoolCategory } from "../../lib/types";

export default function page({ searchParams }: any) {
	const board = (searchParams.board as SchoolCategory) || "";
	const area = (searchParams.area as Place) || "";
	const name = searchParams.name || "";

	return (
		<>
			<SearchPage
				area={area}
				board={board}
				name={name}
			/>
		</>
	);
}
