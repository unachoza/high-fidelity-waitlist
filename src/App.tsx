import { useSyncExternalStore } from "react";
// Vercel Web Analytics — cookieless page stats (visitors, bounce rate,
// referrers). The React component auto-tracks the hash route changes below;
// records only once "Web Analytics" is enabled on the Vercel project. See
// ANALYTICS.md.
import { Analytics } from "@vercel/analytics/react";

import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function subscribe(callback: () => void) {
	window.addEventListener("hashchange", callback);
	return () => window.removeEventListener("hashchange", callback);
}

function getHash() {
	return window.location.hash;
}

function App() {
	const hash = useSyncExternalStore(subscribe, getHash);

	return (
		<>
			{hash === "#privacy" ? <PrivacyPolicy /> : <LandingPage />}
			<Analytics />
		</>
	);
}

export default App;
