import FadeIn from "../FadeIn/FadeIn";

import "./Roadmap.css";

/**
 * Forward-looking section — deliberately framed as direction, not delivery.
 *
 * Both items are unbuilt: sharing/lending is E4 (flagged as the riskiest
 * milestone) and outfit planning is E16 Phase 1. Nothing here names a date, a
 * calendar integration, or a push notification, because none of those are
 * committed. Keep it that way when editing.
 */

const AHEAD = [
	{
		title: "Lend it without losing it.",
		body: "Share your closet with people you trust, and lend the real thing — tracked, not chaotic. When you approve a loan your care terms go with it, and the borrower has to accept them before the garment leaves. What is visible and what is borrowable are separate switches. Intimates are private by default. Revoke any time.",
	},
	{
		title: "Get dressed in ten seconds.",
		body: "A closet full of clean clothes, and you still lose ten minutes every morning. Once the app knows what is clean, at home, and not lent out, it can hand you one outfit for the day — already available, already appropriate.",
	},
] as const;

const Roadmap = () => {
	return (
		<section className="section section--lift">
			<div className="inner">
				<FadeIn>
					<div className="eyebrow">Where this is going</div>

					<h2 className="roadmap__heading">A closet that knows itself can do more than remember.</h2>

					<p className="lede roadmap__lede">
						The inventory is the foundation, not the point. Two things we want to build on top of it.
					</p>
				</FadeIn>

				<div className="roadmap__grid">
					{AHEAD.map(({ title, body }, index) => (
						<FadeIn key={title} delay={index * 100}>
							<div className="roadmap__item">
								<h3>{title}</h3>
								<p>{body}</p>
							</div>
						</FadeIn>
					))}
				</div>

				<FadeIn delay={200}>
					<p className="roadmap__note">
						On the roadmap, not in the box. Founding members help decide the order.
					</p>
				</FadeIn>
			</div>
		</section>
	);
};

export default Roadmap;
