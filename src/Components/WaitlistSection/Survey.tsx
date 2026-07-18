import { useState } from "react";

import {
	USEFUL_OPTIONS,
	USEFUL_RANK_LIMIT,
	ITEM_COUNT_OPTIONS,
	FEEDBACK_INTEREST_OPTIONS,
	serializeRanking,
	serializeReferrals,
	submitSurvey,
	type Referral,
} from "../../constants/survey";

const EMPTY_REFERRAL: Referral = { email: "", phone: "" };

interface SurveyProps {
	email: string;
	phone: string;
	onDone: () => void;
	onSkip: () => void;
}

const Survey = ({ email, phone, onDone, onSkip }: SurveyProps) => {
	const [frustration, setFrustration] = useState("");
	const [ranked, setRanked] = useState<string[]>([]);
	const [itemCount, setItemCount] = useState("");
	const [feedbackInterest, setFeedbackInterest] = useState("");
	const [hasReferrals, setHasReferrals] = useState(false);
	const [referralList, setReferralList] = useState<Referral[]>([]);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	// Referral rows — immutable updates only, never mutate in place.
	const toggleReferrals = (checked: boolean) => {
		setHasReferrals(checked);
		setReferralList(checked ? [EMPTY_REFERRAL] : []);
	};

	const addReferral = () =>
		setReferralList((prev) => [...prev, EMPTY_REFERRAL]);

	const removeReferral = (index: number) =>
		setReferralList((prev) => prev.filter((_, i) => i !== index));

	const updateReferral = (
		index: number,
		field: keyof Referral,
		value: string,
	) =>
		setReferralList((prev) =>
			prev.map((r, i) => (i === index ? { ...r, [field]: value } : r)),
		);

	// Tap to add to the ranking (in tap order); tap again to remove.
	// Immutable updates only — never mutate the existing array.
	const toggleRank = (option: string) => {
		setRanked((prev) => {
			if (prev.includes(option)) {
				return prev.filter((o) => o !== option);
			}
			if (prev.length >= USEFUL_RANK_LIMIT) {
				return prev;
			}
			return [...prev, option];
		});
	};

	const rankReached = ranked.length >= USEFUL_RANK_LIMIT;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitError(null);
		setLoading(true);

		try {
			await submitSurvey(
				email,
				phone,
				frustration,
				serializeRanking(ranked),
				itemCount,
				feedbackInterest,
				hasReferrals ? serializeReferrals(referralList) : "",
			);
			onDone();
		} catch {
			setSubmitError(
				"Something went wrong. Please check your connection and try again.",
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form className="survey" onSubmit={handleSubmit}>
			<div className="survey__intro">
				<h3>Welcome, Founding Member.</h3>
				<p>
					You're one of the first people shaping Nothing To Wear. A few quick
					questions — under a minute, totally optional — and here's what's in
					it for you: first access to every new feature, real influence over
					what we build next, and free access for life as a thank-you.
				</p>
			</div>

			{/* Q1 — open text */}
			<div className="survey__q">
				<label className="survey__q-label" htmlFor="survey-frustration">
					<span className="survey__q-num">1.</span>
					When you open a full closet and still feel like you have nothing to
					wear — what's really going on?
				</label>
				<textarea
					id="survey-frustration"
					value={frustration}
					onChange={(e) => setFrustration(e.target.value)}
					placeholder="e.g. I forget what I own and buy duplicates…"
				/>
			</div>

			{/* Q2 — ranked choice (tap to rank top 3) */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">2.</span>
					If we nailed just a few things first, which matter most?
				</span>
				<p className="survey__rank-hint">
					Tap to rank your top {USEFUL_RANK_LIMIT} — tap again to remove.
				</p>
				<div className="survey__options">
					{USEFUL_OPTIONS.map((option) => {
						const position = ranked.indexOf(option);
						const isRanked = position >= 0;
						const isDimmed = !isRanked && rankReached;
						return (
							<button
								key={option}
								type="button"
								aria-pressed={isRanked}
								onClick={() => toggleRank(option)}
								className={`survey__option survey__option--rank ${
									isRanked ? "survey__option--ranked" : ""
								} ${isDimmed ? "survey__option--dim" : ""}`}
							>
								<span className="survey__rank-badge">
									{isRanked ? position + 1 : ""}
								</span>
								{option}
							</button>
						);
					})}
				</div>
			</div>

			{/* Q3 — single choice */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">3.</span>
					Roughly how many clothing items do you own? (Best guess — most
					people undercount.)
				</span>
				<div className="survey__options">
					{ITEM_COUNT_OPTIONS.map((option) => (
						<label
							key={option}
							className={`survey__option ${itemCount === option ? "survey__option--checked" : ""}`}
						>
							<input
								type="radio"
								name="itemCount"
								value={option}
								checked={itemCount === option}
								onChange={() => setItemCount(option)}
							/>
							{option}
						</label>
					))}
				</div>
			</div>

			{/* Q4 — how involved they want to be */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">4.</span>
					How involved do you want to be?
				</span>
				<div className="survey__options">
					{FEEDBACK_INTEREST_OPTIONS.map((option) => (
						<label
							key={option}
							className={`survey__option ${feedbackInterest === option ? "survey__option--checked" : ""}`}
						>
							<input
								type="radio"
								name="feedbackInterest"
								value={option}
								checked={feedbackInterest === option}
								onChange={() => setFeedbackInterest(option)}
							/>
							{option}
						</label>
					))}
				</div>
			</div>

			{/* Q5 — referrals, optional reveal */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">5.</span>
					Know someone who'd love this?
				</span>
				<p className="survey__rank-hint">
					Founding Members are how we grow — be our hype person and put a
					friend on the list.
				</p>
				<label className="waitlist__consent survey__referral-toggle">
					<input
						type="checkbox"
						checked={hasReferrals}
						onChange={(e) => toggleReferrals(e.target.checked)}
					/>
					<span>Yes, I've got someone in mind</span>
				</label>
				{hasReferrals && (
					<div className="survey__referrals">
						{referralList.map((referral, index) => (
							<div className="survey__referral-row" key={index}>
								<input
									type="email"
									className="survey__referral-field"
									value={referral.email}
									onChange={(e) =>
										updateReferral(index, "email", e.target.value)
									}
									placeholder="Their email"
									autoComplete="off"
								/>
								<input
									type="tel"
									className="survey__referral-field"
									value={referral.phone}
									onChange={(e) =>
										updateReferral(index, "phone", e.target.value)
									}
									placeholder="Their phone (optional)"
									autoComplete="off"
								/>
								{referralList.length > 1 && (
									<button
										type="button"
										className="survey__referral-remove"
										onClick={() => removeReferral(index)}
										aria-label="Remove this person"
									>
										×
									</button>
								)}
							</div>
						))}
						<button
							type="button"
							className="survey__referral-add"
							onClick={addReferral}
						>
							+ Add another
						</button>
					</div>
				)}
			</div>

			{submitError && (
				<span className="waitlist__error waitlist__error--submit">
					{submitError}
				</span>
			)}

			<button
				type="submit"
				className={`waitlist__submit ${loading ? "loading" : ""}`}
				disabled={loading}
			>
				{loading ? "Submitting…" : "Submit Survey"}
			</button>
			<button type="button" className="survey__skip" onClick={onSkip}>
				No thanks
			</button>
		</form>
	);
};

export default Survey;
