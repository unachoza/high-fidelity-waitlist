import RevealCard from "./RevealCard";
import HeroWaitlistForm from "./HeroWaitlistForm";

import "./Hero.css";

const Hero = () => {
	return (
		<section className="section section--dark hero">
			<div className="inner hero__grid">
				<div className="hero__copy">
					<div className="eyebrow">Wardrobe Operating System</div>

					<h1>
						Most wardrobes are <em>invisible</em>.
					</h1>

					<p className="lede">
						Nothing To Wear shows you what you own, where it is, and what state it is in. Connect your inbox
						and your closet builds itself from receipts you already have.
					</p>

					<HeroWaitlistForm />
				</div>

				<RevealCard />
			</div>
		</section>
	);
};

export default Hero;
