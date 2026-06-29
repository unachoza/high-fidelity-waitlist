import HeroMockup from "./HeroMockup";
import "./Hero.css";
import "./HeroWaitlistForm.css";

const scrollToWaitlist = () => {
	document
		.getElementById("waitlist-section")
		?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-grid-overlay" />

			<div className="hero-container">
				<div className="hero-copy">
					<div className="hero-label">
						<div className="hero-label-line" />
						<span>Wardrobe Operating System</span>
					</div>

					<h1>
						Know what's in
						<br />
						your closet.
						<br />
						<em>
							Know it's ready
							<br />
							to wear.
						</em>
					</h1>

					<p className="hero-description">
						A calm, intelligent home for your wardrobe. Know what you
						own, where it is, and what state it's in.
					</p>

					<div className="hero-form">
						<button
							type="button"
							className="hero-cta"
							onClick={scrollToWaitlist}
						>
							Join the Waitlist
						</button>
						<p className="hero-form-caption">
							Early access · No spam · Unsubscribe anytime
						</p>
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
