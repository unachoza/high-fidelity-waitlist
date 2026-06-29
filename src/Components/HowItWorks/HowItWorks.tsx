import FadeIn from "../FadeIn/FadeIn";

import "./HowItWorks.css";

const STEPS = [
	{
		num: "01",
		title: "Import",
		desc: "Connect your inbox and purchase history. Bring in your wardrobe effortlessly — receipts, orders, and existing items catalogued without friction.",
	},
	{
		num: "02",
		title: "Organize",
		desc: "Track each garment's condition, location, and care requirements. Know what's at the dry cleaner, what needs repair, and what's truly available.",
	},
	{
		num: "03",
		title: "Understand",
		desc: "Discover patterns in how you wear and care for your clothes. See what you reach for, what you've forgotten, and what your wardrobe is telling you.",
	},
];

const HowItWorks = () => {
	return (
		<section className="how-it-works">
			<div className="how-it-works__container">
				<FadeIn>
					<div className="section-heading">
						<div className="section-heading__line" />
						<span>
							How It Works
						</span>
					</div>
				</FadeIn>

				<div className="how-it-works__grid">
					{STEPS.map(
						(
							step,
							index,
						) => (
							<FadeIn
								key={
									step.num
								}
								delay={
									index *
									100
								}
							>
								<div className="step-card">
									<div className="step-card__num">
										{
											step.num
										}
									</div>

									<h3>
										{
											step.title
										}
									</h3>

									<div className="step-card__line" />

									<p>
										{
											step.desc
										}
									</p>
								</div>
							</FadeIn>
						),
					)}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;