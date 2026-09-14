import FadeIn from "../FadeIn/FadeIn";

import closetGrid from "../../assets/closet-grid.jpg";

import "./ClosetGrid.css";

/**
 * Sits directly under the availability Q&A: that section asks "where is that
 * black dress?", and this shows the screen that answers it. The five statuses
 * in the image are the ones the app tracks today — note that "lent out" is
 * not among them, which is why the Q&A's borrowed-blazer line is the one
 * answer the picture cannot yet back up.
 */
const ClosetGrid = () => {
	return (
		<section className="section section--light closet-section">
			<div className="inner">
				<FadeIn>
					<div className="eyebrow">What it looks like</div>

					<h2 className="closet-section__heading">Every piece, and where it actually is.</h2>

					<p className="lede closet-section__lede">
						One view of the whole wardrobe — in the closet, in the wash, at the cleaner, in a suitcase, in
						storage. "Where is it?" stops being a guess.
					</p>
				</FadeIn>

				<FadeIn delay={120}>
					<figure className="closet-section__figure">
						<img
							src={closetGrid}
							alt="A closet view in Nothing To Wear: garment cards for a dress, blazer, sweaters, jeans, shoes and bags, each labelled with where it is — in closet, at the cleaner, in laundry, in a suitcase, or in storage."
							width={1068}
							height={1218}
							loading="lazy"
							decoding="async"
						/>
						<figcaption>
							An example closet. Status moves as you wear, wash, pack, and put away.
						</figcaption>
					</figure>
				</FadeIn>
			</div>
		</section>
	);
};

export default ClosetGrid;
