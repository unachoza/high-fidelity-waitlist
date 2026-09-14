import FadeIn from "../FadeIn/FadeIn";
import GarmentCard from "./GarmentCard";

import "./ImportSection.css";

const STATS = [
	{ value: "40+", label: "Retailers read" },
	{ value: "1 min", label: "To first results" },
	{ value: "0", label: "Photos required" },
] as const;

const ImportSection = () => {
	return (
		<section id="how-it-works" className="section section--stone">
			{/* <div className="inner split"> */}
			<FadeIn>
				<div className="inner">
					<div className="eyebrow">Step one</div>

					<h2>You have already catalogued your closet. It is sitting in your inbox.</h2>

					<p className="lede">
						Every order confirmation you have ever received is a record of something you own: the brand, the colour, the size,
						the price, the date. Nothing To Wear reads them and builds your closet for you.
					</p>

					<p className="lede import__lede-second">
						No photographing every hanger. No typing in two hundred items. You connect your inbox once and watch the closet
						appear.
					</p>

					<p className="import__trust">Read-only access, used only to find receipts. Never shared, revoke anytime.</p>

					<div className="stats">
						{STATS.map(({ value, label }) => (
							<div key={label} className="stat">
								<b>{value}</b>
								<span>{label}</span>
							</div>
						))}
					</div>
				</div>
			</FadeIn>

			<FadeIn delay={120}>
				<GarmentCard />
			</FadeIn>
			{/* </div> */}
		</section>
	);
};

export default ImportSection;
