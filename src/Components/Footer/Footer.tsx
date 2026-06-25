import "./Footer.css";

interface FooterProps {
  theme: any;
  logoImg: string;
}

const Footer = ({
  theme,
  logoImg,
}: FooterProps) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: theme.dark,
        color: theme.darkFg,
      }}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src={logoImg}
            alt="Nothing To Wear"
          />

          <span>
            Nothing To Wear
          </span>
        </div>

        <div className="footer-links">
          <a href="/">Privacy</a>
          <a href="/">Contact</a>
          <span>
            © 2026 Nothing To Wear
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;