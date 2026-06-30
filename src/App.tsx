import { useSyncExternalStore } from "react";

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

	if (hash === "#privacy") {
		return <PrivacyPolicy />;
	}

	return <LandingPage />;
}

export default App;
