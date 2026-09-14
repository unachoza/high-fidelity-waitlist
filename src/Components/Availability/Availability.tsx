import FadeIn from "../FadeIn/FadeIn";

import "./Availability.css";

const QUESTIONS = [
	{ q: "Where is that black dress?", a: "At the dry cleaner." },
	{ q: "Where are your ski clothes?", a: "Packed in a storage bin." },
	{ q: "Is your favorite blazer free?", a: "Your sister borrowed it." },
	{ q: "Can that sweater go in the wash?", a: "It is 40% cashmere. No." },
] as const;

const PILLARS = ["Status", "Location", "Availability", "Care"] as const;

const Availability = () => {
	return (
		<section id="problem-section" className="section section--lift">
			<div className="inner">
				<FadeIn>
					<div className="eyebrow">The problem nobody tracks</div>

					<h2 className="availability__heading">Half your wardrobe isn't where you think it is.</h2>

					<p className="lede">
						You are not short of clothes. You are short of clothes you can actually reach today.
					</p>
				</FadeIn>

				<dl className="availability__qa">
					{QUESTIONS.map(({ q, a }, index) => (
						<FadeIn key={q} delay={index * 80}>
							<div className="availability__row">
								<dt>{q}</dt>
								<dd>{a}</dd>
							</div>
						</FadeIn>
					))}
				</dl>

				<FadeIn>
					<ul className="availability__pillars">
						{PILLARS.map((pillar) => (
							<li key={pillar}>{pillar}</li>
						))}
					</ul>
				</FadeIn>
			</div>
		</section>
	);
};

export default Availability;
