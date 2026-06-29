/* ─────────────────────────────────────────────────────────────
   Optional user-research survey (shown after waitlist signup).

   ⚠️ NOT YET WIRED TO A BACKEND.
   The waitlist Google Form only has Email + Phone fields, so these
   three questions have nowhere to submit yet. To make the survey
   persist responses:
     1. Add three questions to the Google Form (or create a 2nd form):
        Q1 short answer, Q2 + Q3 multiple choice.
     2. Grab each field's `entry.XXXX` id (see constants/waitlist.ts).
     3. Fill in SURVEY_ENTRY_* below and implement submitSurvey().
───────────────────────────────────────────────────────────── */

export interface SurveyResponse {
	frustration: string;
	mostUseful: string;
	itemCount: string;
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

export const ITEM_COUNT_OPTIONS = [
	"Under 50",
	"50–100",
	"100–250",
	"250–500",
	"500+",
];

export const WAITLIST_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfMZcKmwjU52jgjjBYY2WEHS-0JSuw0af8mTDoadaKX3C40gA/formResponse";

export const WAITLIST_ENTRY_EMAIL = "entry.171178120";
export const WAITLIST_ENTRY_PHONE = "entry.134399048";

export const SURVEY_ENTRY_FRUSTRATION = "entry.1512875088";
export const SURVEY_ENTRY_USEFUL = "entry.64709087";
export const SURVEY_ENTRY_COUNT = "entry.1877331144";

export async function submitSurvey(
	email: string,
	phone: string,
	frustration: string,
	mostUseful: string,
	itemCount: string,
): Promise<void> {
	const body = new FormData();
	body.append(WAITLIST_ENTRY_EMAIL, email);
	if (phone) body.append(WAITLIST_ENTRY_PHONE, phone);
	body.append(SURVEY_ENTRY_FRUSTRATION, frustration);
	body.append(SURVEY_ENTRY_USEFUL, mostUseful);
	body.append(SURVEY_ENTRY_COUNT, itemCount);

	await fetch(WAITLIST_FORM_ACTION, {
		method: "POST",
		mode: "no-cors",
		body,
	});
}
