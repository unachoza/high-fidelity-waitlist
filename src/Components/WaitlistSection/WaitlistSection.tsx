import { useState } from "react";

import FadeIn from "../FadeIn/FadeIn";
import Survey from "./Survey";

import { submitWaitlist } from "../../constants/waitlist";
import { validateEmail, validatePhone } from "../../utils/validation";

import "./WaitlistSection.css";

type Stage = "form" | "success" | "survey-done";

const WaitlistSection = () => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [emailError, setEmailError] = useState<string | null>(null);
	const [phoneError, setPhoneError] = useState<string | null>(null);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [stage, setStage] = useState<Stage>("form");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const eErr = validateEmail(email.trim());
		const pErr = validatePhone(phone.trim());
		setEmailError(eErr);
		setPhoneError(pErr);
		if (eErr || pErr) return;

		setSubmitError(null);
		setLoading(true);

		try {
			await submitWaitlist(email.trim(), phone.trim());
			setStage("success");
		} catch {
			setSubmitError("Something went wrong. Please check your connection and try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="waitlist-section" className="waitlist">
			<FadeIn>
				<div className="waitlist__container">
					<div className="waitlist__eyebrow">
						<div className="waitlist__line" />
						<span>Early Access</span>
						<div className="waitlist__line" />
					</div>

					<h2>
						See your wardrobe
						<br />
						<em>clearly.</em>
					</h2>

					{stage === "form" && (
						<>
							<p>Join the waitlist for early access to Nothing To Wear.</p>

							<form className="waitlist__form" onSubmit={handleSubmit} noValidate>
								<div className="waitlist__field">
									<label htmlFor="waitlist-email">Email</label>
									<input
										id="waitlist-email"
										type="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											if (emailError) setEmailError(null);
										}}
										placeholder="your@email.com"
										autoComplete="email"
										className={emailError ? "input-error" : ""}
									/>
									{emailError && <span className="waitlist__error">{emailError}</span>}
								</div>

								<div className="waitlist__field">
									<label htmlFor="waitlist-phone">
										Phone <span className="optional">optional</span>
									</label>
									<input
										id="waitlist-phone"
										type="tel"
										value={phone}
										onChange={(e) => {
											setPhone(e.target.value);
											if (phoneError) setPhoneError(null);
										}}
										placeholder="(555) 000-0000"
										autoComplete="tel"
										className={phoneError ? "input-error" : ""}
									/>
									{phoneError && <span className="waitlist__error">{phoneError}</span>}
								</div>

								<button type="submit" className={`waitlist__submit ${loading ? "loading" : ""}`} disabled={loading}>
									{loading ? "Reserving…" : "Reserve My Spot"}
								</button>

								{submitError && <span className="waitlist__error waitlist__error--submit">{submitError}</span>}

								<p className="waitlist__note">No spam. Unsubscribe anytime.</p>
							</form>
						</>
					)}

					{stage === "success" && (
						<div className="waitlist__success">
							<h3>You're on the list.</h3>
							<p>
								Congrats on joining the waitlist for Nothing To Wear. You'll be emailed as soon as we're ready for
								you.
							</p>

							<Survey
								email={email}
								phone={phone}
								onDone={() => setStage("survey-done")}
								onSkip={() => setStage("survey-done")}
							/>
						</div>
					)}

					{stage === "survey-done" && (
						<div className="waitlist__success">
							<h3>You're on the list.</h3>
							<p>Thank you — we'll be in touch as soon as early access opens.</p>
						</div>
					)}
				</div>
			</FadeIn>
		</section>
	);
};

export default WaitlistSection;
