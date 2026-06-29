import FadeIn from "../FadeIn/FadeIn";

// Interim stand-in — swap for the real textile/care screen when available.
// import screenTextile from "../../assets/hero.png";
import animal from "../../assets/screenshots/animal-fiber.png";
import plant from "../../assets/screenshots/plant-fiber.png";
import semi from "../../assets/screenshots/semi-senthetic-fiber.png";
// import stainRemoval1 from "../../assets/screenshots/stain-removal1.png";
// import stainRemoval2 from "../../assets/screenshots//stain-removal2.png";

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

const PREVIEWS = [
	{ src: animal, title: "Animal Fiber", alt: "Animal Fiber details card" },
	{ src: plant, title: "Plant Fiber", alt: "Plant Fiber details card" },
	{ src: semi, title: "Semi Synthetic Fiber", alt: "Semi Synthetic Fiber details card" },
];

const ThoughtfulOwnership = () => {
	return (
		<section className="ownership">
			<div className="ownership__container">
				<FadeIn>
					<div className="ownership__content">
						<div className="ownership__eyebrow">
							<div className="ownership__line" />
							<span>Thoughtful Ownership</span>
						</div>

						<h2>Clothing is one of the few things we use every day and understand the least.</h2>

						<p>
							Nothing To Wear includes a built-in textile encyclopedia covering fabrics, care symbols, weave structures,
							and garment longevity.
						</p>

						<div className="ownership__stats">
							{STATS.map((stat) => (
								<div key={stat.label}>
									<div className="ownership__value">{stat.value}</div>

									<div className="ownership__label">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</FadeIn>

				<FadeIn delay={150}>
					<div className="ownership__image">
						{PREVIEWS.map((preview, index) => (
							<FadeIn key={preview.title} delay={index * 80}>
								<div className="preview-card">
									<img src={preview.src} alt={preview.alt} />
									<p>{preview.title}</p>
								</div>
							</FadeIn>
						))}
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default ThoughtfulOwnership;
