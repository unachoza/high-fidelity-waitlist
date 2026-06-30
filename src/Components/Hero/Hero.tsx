import { useState, useEffect } from "react";
import HeroMockup from "./HeroMockup";
import "./Hero.css";
import "./HeroWaitlistForm.css";

const scrollToWaitlist = () => {
	document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);
	return (
		<section className="hero">
			<div className="hero-grid-overlay" />

			<div className="hero-container">
				<div className="hero-copy">
					<div className="hero-label">
						<div className="hero-label-line" />
						<span>Wardrobe Operating System</span>
					</div>
					<h1 className={loaded ? "loaded" : ""}>
						<div className="slide-in">Know what you own</div>
						<div className="slide-in">Track where it is</div>
						<div className="slide-in">Learn how to care for it</div>
						<div className="slide-in">
							& what's actually <br></br>
							<em>available to wear.</em>
						</div>
					</h1>

					<p className="hero-description">
						A calm, intelligent home for your wardrobe. Know what you own, where it is, and what state it's in.
					</p>

					<div className="hero-form">
						<button type="button" className="hero-cta" onClick={scrollToWaitlist}>
							Join the Waitlist
						</button>
						<p className="hero-form-caption">Early access · No spam · Unsubscribe anytime</p>
					</div>
				</div>

				<HeroMockup />
			</div>

			<div className="hero-scroll">
				<div className="hero-scroll-line" />
				<span>Scroll</span>
			</div>
		</section>
	);
};

export default Hero;
