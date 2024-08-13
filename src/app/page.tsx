import HeroSection from "@/components/HeroSection";
import HomeDetails from "@/components/HomeDetails";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeroSection />
			<HomeDetails />
		</div>
	);
}
