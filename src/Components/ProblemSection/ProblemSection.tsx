import FadeIn from "../FadeIn/FadeIn";

import "./ProblemSection.css";

const ProblemSection = () => {
	return (
		<section className="problem-section">
			<FadeIn>
				<div className="problem-section__container">
					<div className="problem-section__label">
						<div className="problem-section__line" />

						<span>The Problem</span>
					</div>

					<div>
						<blockquote>
							Most wardrobes
							<br />
							are invisible.
						</blockquote>

						<div className="problem-section__content">
							<p>
								Clothes live across closets, storage bins, suitcases, dry cleaners, and borrowed piles. We buy new
								things because we forget what we already own.
							</p>

							<p>
								We get dressed in the dark. Nothing To Wear is the light — a clear, organized picture of everything
								you own and where it actually is.
							</p>
						</div>
					</div>
				</div>
			</FadeIn>
		</section>
	);
};

export default ProblemSection;
