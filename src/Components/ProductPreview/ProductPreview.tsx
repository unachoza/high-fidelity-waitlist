import FadeIn from "../FadeIn/FadeIn";

import "./ProductPreview.css";

/*
 * NOTE: the original product screenshots are not in the repo yet.
 * `hero.png` is used as an interim stand-in for all four slots.
 * Drop real screens into src/assets and swap the imports below.
 */
// import screenGrid from "../../assets/hero.png";
// import filterCloset from "../../assets/filterCloset.png";
import carousel from "../../assets/carousel.png";
// import animal from "../../assets/screenshots/animal-fiber.png";
// import plant from "../../assets/screenshots/plant-fiber.png";
// import semi from "../../assets/screenshots/semi-senthetic-fiber.png";
import stainRemoval1 from "../../assets/screenshots/stain-removal1.png";
// import stainRemoval2 from "../../assets/screenshots//stain-removal2.png";
// import filters from "../../assets/screenshots//filtercloset.png";
import filterMore from "../../assets/screenshots//filter-more.png";
import details from "../../assets/screenshots/card-details.png";

const PREVIEWS = [
	{ src: filterMore, title: "Wardrobe Search & Filter", alt: "Inventory filters" },
	{ src: details, title: "Garment Details", alt: "Card Item details" },
	{ src: stainRemoval1, title: "Stain Removal Guide", alt: "Stain Removal Guide Notes" },
];

const ProductPreview = () => {
	return (
		<section className="product-preview">
			<div className="product-preview-container">
				<FadeIn>
					<div className="product-preview-header">
						<span className="section-label">Product Preview</span>
						<h2>Every detail. In one place.</h2>
					</div>
				</FadeIn>

				<FadeIn delay={100}>
					<div className="product-preview-hero">
						<img src={carousel} alt="Wardrobe inventory" />
					</div>
				</FadeIn>

				<div className="product-preview-grid">
					{PREVIEWS.map((preview, index) => (
						<FadeIn key={preview.title} delay={index * 80}>
							<div className="preview-card">
								<img src={preview.src} alt={preview.alt} />
								<p>{preview.title}</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductPreview;
