import "./HeroWaitlistForm.css";

interface HeroWaitlistFormProps {
  heroEmail: string;
  setHeroEmail: (value: string) => void;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
  theme: any;
}

const HeroWaitlistForm = ({
  heroEmail,
  setHeroEmail,
  submitted,
  onSubmit,
}: HeroWaitlistFormProps) => {
  if (submitted) {
    return (
      <div className="hero-success">
        <h3>You're on the list.</h3>

        <p>
          We'll be in touch when early access opens.
        </p>
      </div>
    );
  }

  return (
    <form
      className="hero-form"
      onSubmit={onSubmit}
    >
      <div className="hero-form-row">
        <input
          type="email"
          value={heroEmail}
          onChange={(e) =>
            setHeroEmail(e.target.value)
          }
          placeholder="Your email address"
          required
        />

        <button type="submit">
          Join Waitlist
        </button>
      </div>

      <p className="hero-form-caption">
        Early access · No spam · Unsubscribe anytime
      </p>
    </form>
  );
};

export default HeroWaitlistForm;