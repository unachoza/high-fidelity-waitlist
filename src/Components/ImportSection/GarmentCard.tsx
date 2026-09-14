import ReceiptCard from "./ReceiptCard";

import dressCard from "../../assets/garment-dress-card.jpg";

import "./GarmentCard.css";

/**
 * One worked example: an order confirmation above the arrow, and the garment
 * Nothing To Wear derives from it below.
 *
 * The closet card image already carries the garment's name and status, so
 * this deliberately does not repeat them in text — everything beside the
 * photo is an attribute the app works out from the receipt.
 */

interface DetailGroup {
	readonly label: string;
	/** Short chips — used for the size / colour / category line. */
	readonly pills?: readonly string[];
	readonly rows?: readonly (readonly [string, string])[];
}

const DETAIL_GROUPS: readonly DetailGroup[] = [
	{ label: "Size & Colour · Category", pills: ["M", "Teal", "Dresses"] },
	{ label: "Silhouette & Shape", rows: [["Length", "Mini"]] },
	{
		label: "Neckline & Sleeves",
		rows: [
			["Neckline", "Square Neck"],
			["Sleeve Length", "Long Sleeve"],
		],
	},
	{ label: "Construction Details", rows: [["Shaping", "Contoured"]] },
];

const COMPOSITION = [
	{ fibre: "Nylon", percent: 94, colour: "#8b695b" },
	{ fibre: "Elastane", percent: 6, colour: "#c9a474" },
] as const;

/* Category now lives in the pills above, so only care instructions remain. */
const CARE_TAGS = ["Cold wash", "No heat", "Wash with like colours"] as const;

const GarmentCard = () => {
	return (
		<div className="garment-card">
			<div className="inner split">
				<div className="garment-card__receipt">
					<p className="garment-card__label">From your inbox</p>
					<ReceiptCard />
				</div>
				
				<div>
					<p className="garment-card__label">In your closet, automatically</p>

					<div className="garment-card__result">
						<img
							className="garment-card__photo"
							src={dressCard}
							alt="The closet card for the Aritzia Contour Squareneck Dress in teal, marked In Closet."
							width={560}
							height={764}
							loading="lazy"
							decoding="async"
						/>

						<div className="garment-card__info">
							<div className="garment-card__details">
								{DETAIL_GROUPS.map(({ label, pills, rows }) => (
									<section key={label} className="garment-card__group">
										<h4>{label}</h4>

										{pills && (
											<ul className="garment-card__pills">
												{pills.map((pill) => (
													<li key={pill}>{pill}</li>
												))}
											</ul>
										)}

										{rows && (
											<dl className="garment-card__rows">
												{rows.map(([key, value]) => (
													<div key={key}>
														<dt>{key}:</dt>
														<dd>{value}</dd>
													</div>
												))}
											</dl>
										)}
									</section>
								))}
							</div>

							<div className="garment-card__derived">
								<h4>Fabric &amp; Care</h4>

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
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="garment-card__arrow" aria-hidden="true">
				↓
			</div>
		</div>
	);
};

export default GarmentCard;
