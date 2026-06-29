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

// TODO: fill in once the survey questions exist on a Google Form.
export const SURVEY_ENTRY_FRUSTRATION = "";
export const SURVEY_ENTRY_USEFUL = "";
export const SURVEY_ENTRY_COUNT = "";
