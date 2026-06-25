import { useState } from "react";

import FadeIn from "../FadeIn/FadeIn";

import "./WaitlistSection.css";

const WaitlistSection = () => {
	const [email, setEmail] =
		useState("");

	const [submitted, setSubmitted] =
		useState(false);

	const handleSubmit = (
		e: React.FormEvent,
	) => {
		e.preventDefault();

		if (!email) return;

		setSubmitted(true);
	};

	return (
		<section
			id="waitlist-section"
			className="waitlist"
		>
			<FadeIn>
				<div className="waitlist__container">
					<div className="waitlist__eyebrow">
						<div className="waitlist__line" />
						<span>
							Early Access
						</span>
						<div className="waitlist__line" />
					</div>

					<h2>
						See your wardrobe
						<br />
						<em>clearly.</em>
					</h2>

					<p>
						Join the waitlist
						for early access to
						Nothing To Wear.
					</p>

					{submitted ? (
						<div className="waitlist__success">
							<h3>
								You're on the
								list.
							</h3>

							<p>
								We'll be in
								touch when
								early access
								opens.
							</p>
						</div>
					) : (
						<form
							onSubmit={
								handleSubmit
							}
							className="waitlist__form"
						>
							<div className="waitlist__row">
								<input
									type="email"
									value={
										email
									}
									onChange={(
										e,
									) =>
										setEmail(
											e
												.target
												.value,
										)
									}
									placeholder="Enter your email"
									required
								/>

								<button type="submit">
									Join Waitlist
								</button>
							</div>

							<p className="waitlist__note">
								No spam.
								Unsubscribe
								anytime.
							</p>
						</form>
					)}
				</div>
			</FadeIn>
		</section>
	);
};

export default WaitlistSection;