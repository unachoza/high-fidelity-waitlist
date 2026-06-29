/* ─────────────────────────────────────────────────────────────
   Google Form wiring for the waitlist.

   These values are ported from the working v1 HTML and connect the
   waitlist form to a Google Form that backs a Google Sheet.

   To repoint at a different form:
     1. forms.google.com → create/open the form (Email + Phone short-answer Qs)
     2. ⋮ menu → "Get pre-filled link", fill dummy values, copy the URL
     3. FORM_ACTION  = that URL with "/viewform?..." replaced by "/formResponse"
        ENTRY_EMAIL  = the entry.XXXX id for the email field
        ENTRY_PHONE  = the entry.YYYY id for the phone field
───────────────────────────────────────────────────────────── */

export const WAITLIST_FORM_ACTION =
	"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMZcKmwjU52jgjjBYY2WEHS-0JSuw0af8mTDoadaKX3C40gA/formResponse";

export const WAITLIST_ENTRY_EMAIL = "entry.171178120";
export const WAITLIST_ENTRY_PHONE = "entry.134399048";

/**
 * Submits the waitlist signup to Google Forms.
 *
 * Uses `no-cors`, so the response is opaque and always resolves — Google
 * does not expose CORS headers for form submission. We treat a resolved
 * fetch as success and surface network failures to the caller.
 */
export async function submitWaitlist(email: string, phone: string): Promise<void> {
	const body = new FormData();
	body.append(WAITLIST_ENTRY_EMAIL, email);
	if (phone) body.append(WAITLIST_ENTRY_PHONE, phone);

	await fetch(WAITLIST_FORM_ACTION, {
		method: "POST",
		mode: "no-cors",
		body,
	});
}
