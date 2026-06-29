import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ProblemSection from "../Components/ProblemSection/ProblemSection";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import ProductPreview from "../Components/ProductPreview/ProductPreview";
import ThoughtfulOwnership from "../Components/ThoughtfulOwnership/ThoughtfulOwnership";
import WaitlistSection from "../Components/WaitlistSection/WaitlistSection";
import Footer from "../Components/Footer/Footer";

import "./LandingPage.css";

export default function LandingPage() {
	return (
		<div className="landing-page">
			<Navbar />
			<Hero />
			<ProblemSection />
			<HowItWorks />
			<ProductPreview />
			<ThoughtfulOwnership />
			<WaitlistSection />
			<Footer />
		</div>
	);
}
