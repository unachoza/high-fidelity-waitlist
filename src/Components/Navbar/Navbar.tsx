import "./Navbar.css";

import logoImg from "../../assets/Logo.png";

import { useScrolled } from "../../hooks/useScrolled";

const scrollToWaitlist = () => {
	document
		.getElementById("waitlist-section")
		?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
	const scrolled = useScrolled();

	return (
		<nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
			<div className="navbar__container">
				<div className="navbar__brand">
					<img
						src={logoImg}
						alt="Nothing To Wear"
						className="navbar__logo"
					/>
					<span className="navbar__title">Nothing To Wear</span>
				</div>

				<button className="navbar__cta" onClick={scrollToWaitlist}>
					Join Waitlist
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
