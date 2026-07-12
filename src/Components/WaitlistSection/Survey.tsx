import { useState } from "react";

import {
	USEFUL_OPTIONS,
	USEFUL_RANK_LIMIT,
	ITEM_COUNT_OPTIONS,
	serializeRanking,
	submitSurvey,
} from "../../constants/survey";

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
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

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
				<h3>You're in. Help us build it.</h3>
				<p>
					Three quick questions — your answers decide what we ship first.
					Under a minute, and totally optional.
				</p>
			</div>

			{/* Q1 — open text */}
			<div className="survey__q">
				<label className="survey__q-label" htmlFor="survey-frustration">
					<span className="survey__q-num">01</span>
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
					<span className="survey__q-num">02</span>
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
					<span className="survey__q-num">03</span>
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
