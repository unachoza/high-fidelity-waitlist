import FadeIn from "../FadeIn/FadeIn";

import "./FabricIntelligence.css";

const STATS = [
	{ value: "23", label: "Fibres documented" },
	{ value: "8", label: "Weave structures" },
	{ value: "Every", label: "Care symbol explained" },
	{ value: "Built in", label: "Stain removal guide" },
] as const;

const FabricIntelligence = () => {
	return (
		<section id="care" className="section section--dark">
			<div className="inner">
				<FadeIn>
					<div className="eyebrow">Thoughtful ownership</div>

					<h2 className="fabric__heading">It knows the fabric before you do.</h2>

					<p className="lede fabric__lede">
						A receipt rarely mentions fibre content, so Nothing To Wear works it out, then tells you what
						that fibre actually needs. Elastane will not survive heat. Cashmere pills if you rub a stain.
						Linen softens rather than wears out. That knowledge is built in, on every garment, without you
						looking anything up.
					</p>
				</FadeIn>

				<FadeIn delay={100}>
					<div className="stats">
						{STATS.map(({ value, label }) => (
							<div key={label} className="stat">
								<b>{value}</b>
								<span>{label}</span>
							</div>
						))}
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default FabricIntelligence;
