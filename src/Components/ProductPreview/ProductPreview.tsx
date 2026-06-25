// import FadeIn from "../FadeIn/FadeIn";

// import screenGrid from "../../imports/Screenshot_2026-06-24_at_4.42.26_PM.png";
// import screenFilters from "../../imports/Screenshot_2026-06-24_at_4.43.15_PM.png";
// import screenOnboard from "../../imports/Screenshot_2026-06-24_at_4.43.40_PM.png";
// import screenTextile from "../../imports/Screenshot_2026-06-24_at_4.44.03_PM.png";

// import "./ProductPreview.css";

// const PREVIEWS = [
// 	{
// 		src: screenFilters,
// 		title: "Wardrobe Inventory",
// 		alt: "Inventory filters",
// 	},
// 	{
// 		src: screenOnboard,
// 		title: "Garment Setup",
// 		alt: "Onboarding flow",
// 	},
// 	{
// 		src: screenTextile,
// 		title: "Textile Knowledge",
// 		alt: "Textile compendium",
// 	},
// ];

// const ProductPreview = () => {
// 	return (
// 		<section className="product-preview">
// 			<div className="product-preview__container">
// 				<FadeIn>
// 					<div className="product-preview__header">
// 						<div className="section-heading">
// 							<div className="section-heading__line" />
// 							<span>Product Preview</span>
// 							<div className="section-heading__line" />
// 						</div>

// 						<h2>
// 							Every detail.
// 							<br />
// 							In one place.
// 						</h2>
// 					</div>
// 				</FadeIn>

// 				<FadeIn delay={100}>
// 					<div className="product-preview__hero">
// 						<img
// 							src={screenGrid}
// 							alt="Wardrobe inventory"
// 						/>
// 					</div>
// 				</FadeIn>

// 				<div className="product-preview__grid">
// 					{PREVIEWS.map(
// 						(
// 							preview,
// 							index,
// 						) => (
// 							<FadeIn
// 								key={
// 									preview.title
// 								}
// 								delay={
// 									index *
// 									80
// 								}
// 							>
// 								<div className="preview-card">
// 									<img
// 										src={
// 											preview.src
// 										}
// 										alt={
// 											preview.alt
// 										}
// 									/>
// 								</div>

// 								<p className="preview-card__caption">
// 									{
// 										preview.title
// 									}
// 								</p>
// 							</FadeIn>
// 						),
// 					)}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ProductPreview;

import "./ProductPreview.css";

interface ProductPreviewProps {
  theme: any;
  screenGrid: string;
  screenFilters: string;
  screenOnboard: string;
  screenTextile: string;
}

const ProductPreview = ({
  theme,
  screenGrid,
  screenFilters,
  screenOnboard,
  screenTextile,
}: ProductPreviewProps) => {
  return (
    <section
      className="product-preview"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="product-preview-container">
        <div className="product-preview-header">
          <span className="section-label">
            Product Preview
          </span>

          <h2>
            Every detail.
            <br />
            In one place.
          </h2>
        </div>

        <div className="product-preview-hero">
          <img
            src={screenGrid}
            alt="Wardrobe Inventory"
          />
        </div>

        <div className="product-preview-grid">
          <div className="preview-card">
            <img
              src={screenFilters}
              alt="Filters"
            />
            <p>Wardrobe Inventory</p>
          </div>

          <div className="preview-card">
            <img
              src={screenOnboard}
              alt="Onboarding"
            />
            <p>Garment Setup</p>
          </div>

          <div className="preview-card">
            <img
              src={screenTextile}
              alt="Textile Compendium"
            />
            <p>Textile Knowledge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;