import FadeIn from "../FadeIn/FadeIn";

import "./ProblemSection.css";

const ProblemSection = () => {
	return (
		<section className="problem-section">
			<FadeIn>
				<div className="problem-section__container">
					<div className="problem-section__label">
						<div className="problem-section__line" />

						<span>
							The Problem
						</span>
					</div>

					<div>
						<blockquote>
							Most wardrobes
							<br />
							are invisible.
						</blockquote>

						<div className="problem-section__content">
							<p>
								Clothes live across
								closets, storage
								bins, dry cleaners,
								suitcases and
								borrowed piles.
							</p>

							<p>
								Nothing To Wear
								gives you a clear
								view of everything
								you own and where
								it actually is.
							</p>
						</div>
					</div>
				</div>
			</FadeIn>
		</section>
	);
};

export default ProblemSection;