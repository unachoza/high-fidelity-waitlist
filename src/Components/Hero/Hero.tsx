import HeroMockup from "./HeroMockup";
import HeroWaitlistForm from "./HeroWaitlistForm";
import "./Hero.css";

interface HeroProps {
  theme: any;
  heroEmail: string;
  setHeroEmail: (email: string) => void;
  heroSubmitted: boolean;
  onSubmit: (e: React.FormEvent) => void;

  screenCloset: string;
}

const Hero = ({
  theme,
  heroEmail,
  setHeroEmail,
  heroSubmitted,
  onSubmit,
  screenCloset,
}: HeroProps) => {
  return (
    <section
      className="hero"
      style={{
        backgroundColor: theme.dark,
        color: theme.darkFg,
      }}
    >
      <div className="hero-grid-overlay" />

      <div className="hero-container">
        <div className="hero-copy">
          <div className="hero-label">
            <div className="hero-label-line" />
            <span>Wardrobe Operating System</span>
          </div>

          <h1>
            Know what's in
            <br />
            your closet.
            <br />
            <em>
              Know it's ready
              <br />
              to wear.
            </em>
          </h1>

          <p className="hero-description">
            A calm, intelligent home for your wardrobe.
          </p>

          <HeroWaitlistForm
            heroEmail={heroEmail}
            setHeroEmail={setHeroEmail}
            submitted={heroSubmitted}
            theme={theme}
            onSubmit={onSubmit}
          />
        </div>

        <HeroMockup
          theme={theme}
          screenCloset={screenCloset}
        />
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;