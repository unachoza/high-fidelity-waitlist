import FadeIn from "../FadeIn/FadeIn";

import screenTextile from "../../imports/Screenshot_2026-06-24_at_4.44.03_PM.png";

import "./ThoughtfulOwnership.css";

const STATS = [
	{
		value: "30+",
		label: "Fibers Covered",
	},
	{
		value: "8",
		label: "Weave Structures",
	},
	{
		value: "∞",
		label: "Care Knowledge",
	},
];

const ThoughtfulOwnership = () => {
	return (
		<section className="ownership">
			<div className="ownership__container">
				<FadeIn>
					<div className="ownership__content">
						<div className="ownership__eyebrow">
							<div className="ownership__line" />
							<span>
								Thoughtful Ownership
							</span>
						</div>

						<h2>
							Clothing is one of
							the few things we
							use every day and
							understand the least.
						</h2>

						<p>
							Nothing To Wear
							includes a built-in
							textile encyclopedia
							covering fabrics,
							care symbols, weave
							structures, and
							garment longevity.
						</p>

						<div className="ownership__stats">
							{STATS.map(
								(
									stat,
								) => (
									<div
										key={
											stat.label
										}
									>
										<div className="ownership__value">
											{
												stat.value
											}
										</div>

										<div className="ownership__label">
											{
												stat.label
											}
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</FadeIn>

				<FadeIn delay={150}>
					<div className="ownership__image">
						<img
							src={screenTextile}
							alt="Textile Compendium"
						/>
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default ThoughtfulOwnership;