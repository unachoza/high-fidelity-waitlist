import logoImg from "../../assets/logo-mark.png";

import { useScrolled } from "../../hooks/useScrolled";

import "./Navbar.css";

const NAV_LINKS = [
	{ id: "problem-section", label: "The Problem" },
	{ id: "how-it-works", label: "Import" },
	{ id: "care", label: "Care" },
] as const;

const scrollToId = (id: string) => {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
	const scrolled = useScrolled();

	return (
		<nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
			<div className="navbar__container">
				<div className="navbar__brand">
					<img src={logoImg} alt="" className="navbar__logo" />
					<span className="navbar__title">Nothing To Wear</span>
				</div>

				<div className="navbar__right">
					<ul className="navbar__links">
						{NAV_LINKS.map(({ id, label }) => (
							<li key={id}>
								<button type="button" className="navbar__link" onClick={() => scrollToId(id)}>
									{label}
								</button>
							</li>
						))}
					</ul>

					<button type="button" className="btn navbar__cta" onClick={() => scrollToId("waitlist-section")}>
						Join the waitlist
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
