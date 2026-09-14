import { useEffect, useRef } from "react";

import { useWaitlist } from "../../hooks/useWaitlist";

import "./HeroWaitlistForm.css";

const scrollToWaitlist = () =>
	document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * Email capture in the hero — the primary conversion point.
 *
 * On success the shared context flips the bottom section to its survey stage.
 * The scroll runs from an effect rather than inline after `submit()`, because
 * swapping that form for the survey changes the section's height: scrolling
 * before React commits would aim at a position that no longer exists.
 */
const HeroWaitlistForm = () => {
	const { email, consent, errors, loading, stage, setEmail, setConsent, submit } = useWaitlist();

	// Only follow the visitor down if *this* form is what signed them up.
	const awaitingScroll = useRef(false);

	useEffect(() => {
		if (stage !== "success" || !awaitingScroll.current) return;
		awaitingScroll.current = false;
		scrollToWaitlist();
	}, [stage]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		awaitingScroll.current = true;
		const ok = await submit();
		if (!ok) awaitingScroll.current = false;
	};

	if (stage !== "form") {
		return (
			<div className="hero-signed-up" role="status">
				<p className="hero-signed-up__title">You are on the list.</p>
				<button type="button" className="hero-signed-up__link" onClick={scrollToWaitlist}>
					Answer 3 quick questions →
				</button>
			</div>
		);
	}

	return (
		<form className="hero-form" onSubmit={handleSubmit} noValidate>
			<div className="hero-form__row">
				<input
					id="hero-email"
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
					{loading ? "Reserving…" : "Join the waitlist"}
				</button>
			</div>

			{errors.email && <span className="hero-form__error">{errors.email}</span>}

			<label className="hero-form__consent">
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
					</a>
					.
				</span>
			</label>

			{errors.consent && <span className="hero-form__error">{errors.consent}</span>}
			{errors.submit && <span className="hero-form__error">{errors.submit}</span>}

			<p className="microcopy">Early access · No spam · Unsubscribe anytime</p>
		</form>
	);
};

export default HeroWaitlistForm;
