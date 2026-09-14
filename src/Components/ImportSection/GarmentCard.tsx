import "./GarmentCard.css";

/**
 * One worked example: an order confirmation on the left of the arrow, the
 * garment Nothing To Wear derives from it on the right.
 *
 * The composition bar widths and the fibre percentages are the same numbers,
 * so they are declared once and drive both.
 */

const COMPOSITION = [
	{ fibre: "Nylon", percent: 94, colour: "#8b695b" },
	{ fibre: "Elastane", percent: 6, colour: "#c9a474" },
] as const;

const CARE_TAGS = ["Cold wash", "No heat", "Wash with like colours"] as const;
const CATEGORY_TAGS = ["Dresses", "Going out"] as const;

const GarmentCard = () => {
	return (
		<div className="garment-card">
			<p className="garment-card__label">From your inbox</p>
			<p className="garment-card__receipt">
				<strong>Aritzia</strong> · Order confirmation
				<br />
				Teal Long-Sleeve Square Neck Bodycon Dress
				<br />
				Size M · $24.00 · Jun 4, 2026
			</p>

			<div className="garment-card__arrow" aria-hidden="true">
				↓
			</div>

			<p className="garment-card__label">In your closet, automatically</p>
			<p className="garment-card__name">Teal Square Neck Bodycon Dress</p>

			<div className="garment-card__bar">
				{COMPOSITION.map(({ fibre, percent, colour }) => (
					<i key={fibre} style={{ width: `${percent}%`, background: colour }} />
				))}
			</div>

			<ul className="garment-card__key">
				{COMPOSITION.map(({ fibre, percent, colour }) => (
					<li key={fibre}>
						<i style={{ background: colour }} />
						{percent}% {fibre}
					</li>
				))}
			</ul>

			<ul className="garment-card__tags">
				{CARE_TAGS.map((tag) => (
					<li key={tag} className="garment-card__tag garment-card__tag--auto">
						{tag}
					</li>
				))}
				{CATEGORY_TAGS.map((tag) => (
					<li key={tag} className="garment-card__tag">
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
};

export default GarmentCard;
