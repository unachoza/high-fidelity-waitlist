import { useState } from "react";

import { USEFUL_OPTIONS, ITEM_COUNT_OPTIONS, type SurveyResponse } from "../../constants/survey";
import { submitSurvey } from "../../constants/survey";

interface SurveyProps {
	onSubmit: (response: SurveyResponse) => void;
	onSkip: () => void;
}

type Stage = "form" | "success" | "survey-done";

const Survey = ({ onSubmit, onSkip }: SurveyProps) => {
	const [frustration, setFrustration] = useState("");
	const [mostUseful, setMostUseful] = useState("");
	const [itemCount, setItemCount] = useState("");
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [stage, setStage] = useState<Stage>("form");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await submitSurvey(frustration, mostUseful, itemCount);
			setStage("success");
		} catch {
			setSubmitError("Something went wrong. Please check your connection and try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form className="survey" onSubmit={handleSubmit}>
			<div className="survey__intro">
				<h3>One more thing?</h3>
				<p>Optional — help shape what we build. Takes about a minute.</p>
			</div>

			{/* Q1 — open text */}
			<div className="survey__q">
				<label className="survey__q-label" htmlFor="frustration">
					<span className="survey__q-num">01</span>
					What's the biggest frustration you have with your wardrobe today?
				</label>
				<textarea
					id="frustration"
					value={frustration}
					onChange={(e) => setFrustration(e.target.value)}
					placeholder="e.g. I forget what I own and buy duplicates…"
				/>
			</div>

			{/* Q2 — single choice */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">02</span>
					Which sounds most useful to you?
				</span>
				<div className="survey__options">
					{USEFUL_OPTIONS.map((option) => (
						<label key={option} className={`survey__option ${mostUseful === option ? "survey__option--checked" : ""}`}>
							<input
								type="radio"
								name="mostUseful"
								value={option}
								checked={mostUseful === option}
								onChange={() => setMostUseful(option)}
							/>
							{option}
						</label>
					))}
				</div>
			</div>

			{/* Q3 — single choice */}
			<div className="survey__q">
				<span className="survey__q-label">
					<span className="survey__q-num">03</span>
					How many clothing items do you think you own?
				</span>
				<div className="survey__options">
					{ITEM_COUNT_OPTIONS.map((option) => (
						<label key={option} className={`survey__option ${itemCount === option ? "survey__option--checked" : ""}`}>
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

			<button type="submit" className={`waitlist__submit ${loading ? "loading" : ""}`} disabled={loading}>
				{loading ? "Submitting.." : "Recieved!"}
			</button>
			<button type="button" className="survey__skip" onClick={onSkip}>
				No thanks
			</button>
		</form>
	);
};

export default Survey;
