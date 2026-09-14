import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<p className="footer__line">
				<span>Nothing To Wear</span>
				<span aria-hidden="true">·</span>
				<a href="#privacy">Privacy</a>
				<span aria-hidden="true">·</span>
				<a
					href="https://www.instagram.com/nothingtowear_app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</a>
				<span aria-hidden="true">·</span>
				<a
					href="https://www.linkedin.com/in/arianna-choza/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Founded by Arianna Choza
				</a>
			</p>

			<p className="footer__copyright">© 2026 · A calm home for your wardrobe</p>
		</footer>
	);
};

export default Footer;
