import Loader from "@/components/Loading";
export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className="loading w-screen h-screen flex justify-center items-center">
			<Loader />
		</div>
	);
}
