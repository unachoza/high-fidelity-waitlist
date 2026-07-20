/* ─────────────────────────────────────────────────────────────
   Optional user-research survey (shown after waitlist signup).
───────────────────────────────────────────────────────────── */

export interface SurveyResponse {
	frustration: string;
	mostUseful: string;
	itemCount: string;
	feedbackInterest: string;
	referrals: string;
}

export const USEFUL_OPTIONS = [
	"Keeping track of what I own",
	"Organizing clothing by category",
	"Tracking laundry and garment care",
	"Travel packing",
	"Outfit planning",
	"Understanding my wardrobe habits",
	"Borrowing and sharing clothes",
	"Learning about fabrics and garment care",
];

/** How many options a respondent may rank in Q2. */
export const USEFUL_RANK_LIMIT = 3;

/**
 * Serializes an ordered top-N selection into a single Google Forms value,
 * e.g. ["Outfit planning", "Travel packing"] → "1. Outfit planning | 2. Travel packing".
 * Returns "" when nothing was ranked so the field submits empty.
 */
export function serializeRanking(ranked: readonly string[]): string {
	return ranked.map((option, index) => `${index + 1}. ${option}`).join(" | ");
}

export const ITEM_COUNT_OPTIONS = ["Under 50", "50–100", "100–250", "250–500", "500+"];

/** Q4 — how involved a Founding Member wants to be in shaping the product. */
export const FEEDBACK_INTEREST_OPTIONS = [
	"Very interested — reach out to me, I want to help shape this",
	"Some feedback — check in occasionally",
	"Don't bother me — I'll use it quietly",
];

/** Q5 — a single person a Founding Member wants to refer. */
export interface Referral {
	email: string;
	phone: string;
}

/**
 * Serializes referral rows into one Google Forms value. Empty rows are
 * dropped. Each kept row becomes "email (phone)" (phone omitted if blank),
 * rows joined with " | ".
 *
 * Attribution ("who referred whom") is by-row: the Google Form row already
 * carries the referrer's own email in WAITLIST_ENTRY_EMAIL, so pairing that
 * column with this one in the response sheet tells you exactly who each
 * referred contact came from — no extra field needed.
 */
export function serializeReferrals(referrals: readonly Referral[]): string {
	return referrals
		.map((r) => ({ email: r.email.trim(), phone: r.phone.trim() }))
		.filter((r) => r.email || r.phone)
		.map((r) => (r.phone ? `${r.email} (${r.phone})` : r.email))
		.join(" | ");
}

export const WAITLIST_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfMZcKmwjU52jgjjBYY2WEHS-0JSuw0af8mTDoadaKX3C40gA/formResponse";

export const WAITLIST_ENTRY_EMAIL = "entry.171178120";
export const WAITLIST_ENTRY_PHONE = "entry.134399048";

export const SURVEY_ENTRY_FRUSTRATION = "entry.1512875088";
export const SURVEY_ENTRY_USEFUL = "entry.64709087";
export const SURVEY_ENTRY_COUNT = "entry.1877331144";

export const SURVEY_ENTRY_FEEDBACK_INTEREST = "entry.1075906102";
export const SURVEY_ENTRY_REFERRALS = "entry.1885652293";

export async function submitSurvey(
	email: string,
	phone: string,
	frustration: string,
	mostUseful: string,
	itemCount: string,
	feedbackInterest: string,
	referrals: string,
): Promise<void> {
	const body = new FormData();
	body.append(WAITLIST_ENTRY_EMAIL, email);
	if (phone) body.append(WAITLIST_ENTRY_PHONE, phone);
	body.append(SURVEY_ENTRY_FRUSTRATION, frustration);
	body.append(SURVEY_ENTRY_USEFUL, mostUseful);
	body.append(SURVEY_ENTRY_COUNT, itemCount);
	if (SURVEY_ENTRY_FEEDBACK_INTEREST && feedbackInterest) {
		body.append(SURVEY_ENTRY_FEEDBACK_INTEREST, feedbackInterest);
	}
	if (SURVEY_ENTRY_REFERRALS && referrals) {
		body.append(SURVEY_ENTRY_REFERRALS, referrals);
	}

	await fetch(WAITLIST_FORM_ACTION, {
		method: "POST",
		mode: "no-cors",
		body,
	});
}
