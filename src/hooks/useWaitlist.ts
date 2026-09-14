import { useContext } from "react";

import { WaitlistContext, type WaitlistValue } from "../context/waitlistContext";

/** Reads the shared waitlist state. Throws outside a <WaitlistProvider>. */
export function useWaitlist(): WaitlistValue {
	const value = useContext(WaitlistContext);
	if (!value) throw new Error("useWaitlist must be used inside a <WaitlistProvider>.");
	return value;
}
