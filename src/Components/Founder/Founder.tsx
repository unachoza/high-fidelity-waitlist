import FadeIn from "../FadeIn/FadeIn";

import "./Founder.css";

const Founder = () => {
	return (
		<section className="section section--stone founder">
			<FadeIn>
				<p className="founder__quote">
					Built by a software engineer who wanted a better way to understand, care for, and share the clothes
					she already owned.
				</p>
			</FadeIn>
		</section>
	);
};

export default Founder;
