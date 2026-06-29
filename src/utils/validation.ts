/* Field validation for the waitlist form.
   Returns a user-facing error message, or null when the value is valid. */

export function validateEmail(value: string): string | null {
	if (!value) return "Email is required.";
	if (!value.includes("@")) return "Please include an @ in your email address.";

	const [local, domain] = value.split("@");
	if (!local) return "Please enter the part before the @.";
	if (!domain || !domain.includes(".")) {
		return "Please enter a complete email address (e.g. you@example.com).";
	}

	return null;
}

export function validatePhone(value: string): string | null {
	if (!value) return null; // phone is optional — empty is fine

	const digits = value.replace(/\D/g, "");
	// accept 10 digits (US) or 11 if it starts with a 1 (country code)
	if (digits.length === 11 && digits[0] === "1") return null;
	if (digits.length === 10) return null;

	return "Please enter a 10-digit phone number (e.g. 5550001234).";
}
