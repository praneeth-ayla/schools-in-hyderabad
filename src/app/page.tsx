import AccordionHome from "@/components/AccordionHome";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeDetails from "@/components/HomeDetails";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<HomeDetails />
			<Footer />
		</>
	);
}
