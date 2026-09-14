import "./RevealCard.css";

/**
 * The hero visual: what an imported closet looks like sixty seconds in.
 *
 * The figures are an illustrative example, not a real account — the note at
 * the foot of the card says so, and it must stay.
 */

const ROWS = [
	{ label: "Brands found", value: "23" },
	{ label: "Value catalogued", value: "$8,420+" },
	{ label: "Purchases spanning", value: "Mar 2023 – Sep 2026" },
	{ label: "Fabric composition read", value: "112 of 147" },
] as const;

const RevealCard = () => {
	return (
		<div className="reveal">
			<p className="reveal__head">Your closet, imported.</p>
			<p className="reveal__sub">After you connect your inbox.</p>

			<div className="reveal__figure">
				<b>147</b>
				<span>
					pieces
					<br />
					tracked
				</span>
			</div>

			<dl className="reveal__rows">
				{ROWS.map(({ label, value }) => (
					<div key={label} className="reveal__row">
						<dt>{label}</dt>
						<dd>{value}</dd>
					</div>
				))}
			</dl>

			<p className="reveal__note">Example closet. Yours is assembled from your own receipts.</p>
		</div>
	);
};

export default RevealCard;
