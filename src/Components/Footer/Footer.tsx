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
					<span>© 2026 Nothing To Wear · Founded by Arianna Choza</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
