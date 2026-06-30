import "./Footer.css";

import logoImg from "../../assets/navyHangerLogoEdited.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-brand">
					<img src={logoImg} alt="Nothing To Wear" />
					<span>Nothing To Wear</span>
				</div>

				<div className="footer-links">
					<a href="/">Privacy</a>
					<a href="/">Contact</a>
					<a href="/">2026 Nothing To Wear</a>
					<a href="/">Founded by Arianna Choza</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
