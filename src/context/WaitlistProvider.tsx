import { useCallback, useMemo, useState, type ReactNode } from "react";

import { WaitlistContext, type WaitlistErrors, type WaitlistStage, type WaitlistValue } from "./waitlistContext";
import { submitWaitlist } from "../constants/waitlist";
import { validateEmail, validatePhone } from "../utils/validation";

/**
 * Shared waitlist state.
 *
 * The hero and the bottom waitlist section are two entry points into ONE
 * signup. Holding the state here means a hero submit still advances the
 * bottom section to its success stage, so every signup — wherever it starts —
 * lands in the post-signup survey instead of skipping it.
 */

const NO_ERRORS: WaitlistErrors = { email: null, phone: null, consent: null, submit: null };

const CONSENT_REQUIRED = "Please agree to the Privacy Policy to continue.";
const SUBMIT_FAILED = "Something went wrong. Please check your connection and try again.";

export function WaitlistProvider({ children }: { children: ReactNode }) {
	const [email, setEmailValue] = useState("");
	const [phone, setPhoneValue] = useState("");
	const [countryCode, setCountryCode] = useState("+1");
	const [consent, setConsentValue] = useState(false);
	const [errors, setErrors] = useState<WaitlistErrors>(NO_ERRORS);
	const [loading, setLoading] = useState(false);
	const [stage, setStage] = useState<WaitlistStage>("form");

	// Each setter clears only its own field's error — new object, never mutated.
	const setEmail = useCallback((value: string) => {
		setEmailValue(value);
		setErrors((prev) => (prev.email ? { ...prev, email: null } : prev));
	}, []);

	const setPhone = useCallback((value: string) => {
		setPhoneValue(value);
		setErrors((prev) => (prev.phone ? { ...prev, phone: null } : prev));
	}, []);

	const setConsent = useCallback((value: boolean) => {
		setConsentValue(value);
		setErrors((prev) => (prev.consent ? { ...prev, consent: null } : prev));
	}, []);

	const submit = useCallback(async (): Promise<boolean> => {
		const trimmedEmail = email.trim();
		const trimmedPhone = phone.trim();

		const nextErrors: WaitlistErrors = {
			email: validateEmail(trimmedEmail),
			phone: validatePhone(trimmedPhone),
			consent: consent ? null : CONSENT_REQUIRED,
			submit: null,
		};

		if (nextErrors.email || nextErrors.phone || nextErrors.consent) {
			setErrors(nextErrors);
			return false;
		}

		setErrors(NO_ERRORS);
		setLoading(true);

		// Combine country code + local number for storage (e.g. "+34 683 19 73 08")
		const fullPhone = trimmedPhone ? `${countryCode} ${trimmedPhone}` : "";

		try {
			await submitWaitlist(trimmedEmail, fullPhone);
			setStage("success");
			return true;
		} catch {
			setErrors({ ...NO_ERRORS, submit: SUBMIT_FAILED });
			return false;
		} finally {
			setLoading(false);
		}
	}, [email, phone, countryCode, consent]);

	const value = useMemo<WaitlistValue>(
		() => ({
			email,
			phone,
			countryCode,
			consent,
			errors,
			loading,
			stage,
			setEmail,
			setPhone,
			setCountryCode,
			setConsent,
			setStage,
			submit,
		}),
		[email, phone, countryCode, consent, errors, loading, stage, setEmail, setPhone, setConsent, submit],
	);

	return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}
