import "./ReceiptCard.css";

/**
 * The order confirmation side of the import example.
 *
 * Everything here is placeholder data written by hand — there is no real
 * receipt image in this repo, and none of the original recipient's details
 * (name, street address, email, order id) or the real seller's handle exist
 * anywhere in the source or git history. Keep it that way: if this ever needs
 * updating, edit the strings below rather than importing a screenshot.
 */

const META = [
	{ label: "Shipping To", lines: ["Shopper", "123 Ocean Drive", "SAN DIEGO, CA 92100", "UNITED STATES"] },
	{ label: "Order Date", lines: ["June 04, 2026"] },
	{ label: "Seller", lines: ["@seller", "Ships from Arizona", "United States"] },
] as const;

const TOTALS = [
	{ label: "Subtotal", value: "$24.00" },
	{ label: "Shipping", value: "$6.49" },
	{ label: "Tax", value: "$1.86" },
] as const;

const ReceiptCard = () => {
	return (
		<div className="receipt">
			<div className="receipt__brand">Poshmark</div>

			<p className="receipt__greeting">Hello Shopper! Thank you for shopping on Poshmark.</p>

			<p className="receipt__body">
				@seller accepted your offer on "Aritzia Teal Long-Sleeve Square Neck Bodycon Dress". Your payment has
				been processed.
			</p>

			<dl className="receipt__meta">
				{META.map(({ label, lines }) => (
					<div key={label}>
						<dt>{label}</dt>
						<dd>
							{lines.map((line) => (
								<span key={line}>{line}</span>
							))}
						</dd>
					</div>
				))}
			</dl>

			<div className="receipt__item">
				<div className="receipt__item-name">
					Aritzia Teal Long-Sleeve Square Neck Bodycon Dress
					<span>Size: M</span>
				</div>
				<div className="receipt__item-price">$24.00</div>
			</div>

			<dl className="receipt__totals">
				{TOTALS.map(({ label, value }) => (
					<div key={label}>
						<dt>{label}</dt>
						<dd>{value}</dd>
					</div>
				))}
				<div className="receipt__totals-final">
					<dt>Total Price</dt>
					<dd>$32.35</dd>
				</div>
			</dl>
		</div>
	);
};

export default ReceiptCard;
