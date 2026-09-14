import { useState } from "react";

import FadeIn from "../FadeIn/FadeIn";
import Survey from "./Survey";

import { useWaitlist } from "../../hooks/useWaitlist";
import { COUNTRY_CODES } from "../../constants/countryCodes";

import "./WaitlistSection.css";

const WaitlistSection = () => {
	const {
		email,
		phone,
		countryCode,
		consent,
		errors,
		loading,
		stage,
		setEmail,
		setPhone,
		setCountryCode,
		setConsent,
		setStage,
		submit,
	} = useWaitlist();

	// Phone is optional — keep it out of the required path until asked for.
	const [showPhone, setShowPhone] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await submit();
	};

	return (
		<section id="waitlist-section" className="section section--dark waitlist">
			<div className="narrow waitlist__block">
				<FadeIn>
					<div className="eyebrow eyebrow--centered">Early access</div>

					<h2>See your wardrobe clearly.</h2>

					{stage === "form" && (
						<>
							<p className="lede waitlist__lede">
								Founding members get in first, and help shape what gets built next.
							</p>

							<form className="waitlist__form" onSubmit={handleSubmit} noValidate>
								<div className="waitlist__row">
									<input
										id="waitlist-email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="you@example.com"
										autoComplete="email"
										aria-label="Email address"
										aria-invalid={errors.email ? true : undefined}
										className={errors.email ? "is-invalid" : ""}
									/>
									<button type="submit" className="btn" disabled={loading}>
										{loading ? "Reserving…" : "Reserve my spot"}
									</button>
								</div>

								{errors.email && <span className="waitlist__error">{errors.email}</span>}

								{showPhone ? (
									<div className="waitlist__phone">
										<label htmlFor="waitlist-phone">
											Phone <span className="waitlist__optional">optional</span>
										</label>
										<div className={`waitlist__phone-group ${errors.phone ? "is-invalid" : ""}`}>
											<select
												aria-label="Country code"
												value={countryCode}
												onChange={(e) => setCountryCode(e.target.value)}
												className="waitlist__phone-code"
											>
												{COUNTRY_CODES.map(({ code, country, flag }) => (
													<option key={`${code}-${country}`} value={code}>
														{flag} {code}
													</option>
												))}
											</select>
											<input
												id="waitlist-phone"
												type="tel"
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												placeholder="555 000 1234"
												autoComplete="tel-national"
												className="waitlist__phone-number"
											/>
										</div>
										{errors.phone && <span className="waitlist__error">{errors.phone}</span>}
									</div>
								) : (
									<button
										type="button"
										className="waitlist__phone-toggle"
										onClick={() => setShowPhone(true)}
									>
										+ Add a phone number (optional)
									</button>
								)}

								<label className="waitlist__consent">
									<input
										type="checkbox"
										checked={consent}
										onChange={(e) => setConsent(e.target.checked)}
										aria-label="I agree to the Privacy Policy"
									/>
									<span>
										I agree to the{" "}
										<a href="#privacy" target="_blank" rel="noopener noreferrer">
											Privacy Policy
										</a>{" "}
										and consent to my email (and phone, if provided) being collected for waitlist
										communications.
									</span>
								</label>

								{errors.consent && <span className="waitlist__error">{errors.consent}</span>}
								{errors.submit && <span className="waitlist__error">{errors.submit}</span>}

								<p className="microcopy">
									No spam. Unsubscribe anytime. After you join, 3 quick questions help shape what we
									build first.
								</p>
							</form>
						</>
					)}

					{stage === "success" && (
						<div className="waitlist__success">
							<p className="lede waitlist__lede">
								You are on the list. We will email you the moment the doors open — and the three
								questions below decide what gets built first.
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
						<p className="lede waitlist__lede">
							Thank you — we will be in touch as soon as early access opens.
						</p>
					)}
				</FadeIn>
			</div>
		</section>
	);
};

export default WaitlistSection;
