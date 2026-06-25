import "./Navbar.css";

import logoImg from "../../imports/navyHangerLogoEdited.png";

import type { ThemeKey } from "../../constants/themes";
import { useScrolled } from "../../hooks/useScrolled";

interface NavbarProps {
	theme: ThemeKey;
	setTheme: (theme: ThemeKey) => void;
}

const Navbar = ({
	theme,
	setTheme,
}: NavbarProps) => {
	const scrolled = useScrolled();

	const scrollToWaitlist = () => {
		document
			.getElementById("waitlist-section")
			?.scrollIntoView({
				behavior: "smooth",
			});
	};

	return (
		<nav
			className={`navbar ${
				scrolled
					? "navbar--scrolled"
					: ""
			}`}
		>
			<div className="navbar__container">
				<div className="navbar__brand">
					<img
						src={logoImg}
						alt="Nothing To Wear"
						className="navbar__logo"
					/>

					<span className="navbar__title">
						Nothing To Wear
					</span>
				</div>

				<div className="navbar__theme-toggle">
					<button
						className={
							theme === "navy"
								? "active"
								: ""
						}
						onClick={() =>
							setTheme("navy")
						}
					>
						Navy
					</button>

					<button
						className={
							theme === "terracotta"
								? "active"
								: ""
						}
						onClick={() =>
							setTheme(
								"terracotta",
							)
						}
					>
						Terracotta
					</button>
				</div>

				<button
					className="navbar__cta"
					onClick={scrollToWaitlist}
				>
					Join Waitlist
				</button>
			</div>
		</nav>
	);
};

export default Navbar;