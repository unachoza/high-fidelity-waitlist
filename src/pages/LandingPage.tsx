// import { useState } from "react";

// import Navbar from "../Components/Navbar/Navbar";
// import Hero from "../Components/Hero/Hero";
// import ProblemSection from "../Components/ProblemSection/ProblemSection";
// import HowItWorks from "../Components/HowItWorks/HowItWorks";
// import ProductPreview from "../Components/ProductPreview/ProductPreview";
// import ThoughtfulOwnership from "../Components/ThoughtfulOwnership/ThoughtfulOwnership"
// import FeaturesStrip from "../Components/FeaturesStrip/FeaturesStrip";
// import WaitlistSection from "../Components/WaitlistSection/WaitlistSection";
// import Footer from "../Components/Footer/Footer";

// import { THEMES, type ThemeKey } from "../constants/themes";

// import "./LandingPage.css";

// export default function LandingPage() {
//   const [theme, setTheme] = useState<ThemeKey>("navy");

//   const currentTheme = THEMES[theme];

//   return (
//     <div
//       className="landing-page"
//       style={{
//         "--bg": currentTheme.bg,
//         "--fg": currentTheme.fg,
//         "--dark": currentTheme.dark,
//         "--dark-fg": currentTheme.darkFg,
//         "--gold": currentTheme.gold,
//         "--gold-hover": currentTheme.goldHover,
//       } as React.CSSProperties}
//     >
//       <Navbar
//         theme={theme}
//         setTheme={setTheme}
//       />

//       <Hero />

//       <ProblemSection />

//       <HowItWorks />

//       <ProductPreview />

//       <ThoughtfulOwnership />

//       <FeaturesStrip />

//       <WaitlistSection />

//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import type { CSSProperties } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ProblemSection from "../Components/ProblemSection/ProblemSection";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import ProductPreview from "../Components/ProductPreview/ProductPreview";
import ThoughtfulOwnership from "../Components/ThoughtfulOwnership/ThoughtfulOwnership";
// import FeaturesStrip from "../Components/FeaturesStrip/FeaturesStrip";
import WaitlistSection from "../Components/WaitlistSection/WaitlistSection";
import Footer from "../Components/Footer/Footer";

import { THEMES, type ThemeKey } from "../constants/themes";

import "./LandingPage.css";

export default function LandingPage() {
	const [theme, setTheme] = useState<ThemeKey>("navy");

	const currentTheme = THEMES[theme];

	return (
		<div
			className="landing-page"
			style={
				{
					"--bg": currentTheme.bg,
					"--fg": currentTheme.fg,
					"--dark": currentTheme.dark,
					"--dark-fg": currentTheme.darkFg,
					"--gold": currentTheme.gold,
					"--gold-hover": currentTheme.goldHover,
					"--stone": currentTheme.stone,
					"--stone-mid": currentTheme.stoneMid,
					"--border": currentTheme.border,
					"--border-dark": currentTheme.borderDark,
					"--muted": currentTheme.muted,
					"--label": currentTheme.label,
					"--num-color": currentTheme.numColor,
				} as CSSProperties
			}
		>
			<Navbar theme={theme} setTheme={setTheme} />

			<Hero theme={undefined} heroEmail={""} setHeroEmail={function (email: string): void {
                        throw new Error("Function not implemented.");
                  } } heroSubmitted={false} onSubmit={function (e: React.FormEvent): void {
                        throw new Error("Function not implemented.");
                  } } screenCloset={""} />

			<ProblemSection />

			<HowItWorks />

			<ProductPreview theme={undefined} screenGrid={""} screenFilters={""} screenOnboard={""} screenTextile={""} />

			<ThoughtfulOwnership />

			{/* <FeaturesStrip /> */}

			<WaitlistSection />

			<Footer theme={undefined} logoImg={""} />
		</div>
	);
}