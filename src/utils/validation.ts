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

export function validatePhone(localNumber: string): string | null {
	if (!localNumber) return null; // phone is optional — empty is fine

	// Strip spaces, dashes, parentheses, and dots — keep only digits
	const digits = localNumber.replace(/[\s\-().]/g, "").replace(/\D/g, "");

	// Local number should be between 5 and 12 digits (covers all countries)
	if (digits.length >= 5 && digits.length <= 12) return null;

	return "Please enter a valid phone number.";
}
