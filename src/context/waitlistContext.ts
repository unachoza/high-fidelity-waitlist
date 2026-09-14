import { createContext } from "react";

export type WaitlistStage = "form" | "success" | "survey-done";

export interface WaitlistErrors {
	readonly email: string | null;
	readonly phone: string | null;
	readonly consent: string | null;
	readonly submit: string | null;
}

export interface WaitlistValue {
	readonly email: string;
	readonly phone: string;
	readonly countryCode: string;
	readonly consent: boolean;
	readonly errors: WaitlistErrors;
	readonly loading: boolean;
	readonly stage: WaitlistStage;
	readonly setEmail: (value: string) => void;
	readonly setPhone: (value: string) => void;
	readonly setCountryCode: (value: string) => void;
	readonly setConsent: (value: boolean) => void;
	readonly setStage: (stage: WaitlistStage) => void;
	/** Validates, submits, and advances to "success". Resolves true on success. */
	readonly submit: () => Promise<boolean>;
}

export const WaitlistContext = createContext<WaitlistValue | null>(null);
