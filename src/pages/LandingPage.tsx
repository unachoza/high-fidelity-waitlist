import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Availability from "../Components/Availability/Availability";
import ClosetGrid from "../Components/ClosetGrid/ClosetGrid";
import ImportSection from "../Components/ImportSection/ImportSection";
import FabricIntelligence from "../Components/FabricIntelligence/FabricIntelligence";
import Trust from "../Components/Trust/Trust";
import Roadmap from "../Components/Roadmap/Roadmap";
import Founder from "../Components/Founder/Founder";
import WaitlistSection from "../Components/WaitlistSection/WaitlistSection";
import Footer from "../Components/Footer/Footer";

import { WaitlistProvider } from "../context/WaitlistProvider";

import "../styles/sections.css";
import "./LandingPage.css";

export default function LandingPage() {
	return (
		<WaitlistProvider>
			<div className="landing-page">
				<Navbar />
				<Hero />
				<Availability />
				<ClosetGrid />
				<ImportSection />
				<FabricIntelligence />
				<Trust />
				<Roadmap />
				<Founder />
				<WaitlistSection />
				<Footer />
			</div>
		</WaitlistProvider>
	);
}
