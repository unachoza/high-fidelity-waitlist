import HeroFloatingStats from "./HeroFloatingStats";
import HeroFloatingCareCard from "./HeroFloatingCareCard";
import "./HeroMockup.css";

interface HeroMockupProps {
  screenCloset: string;
  theme: any;
}

const HeroMockup = ({
  screenCloset,
  theme,
}: HeroMockupProps) => {
  return (
    <div className="hero-mockup">
      <div className="hero-browser">
        <div className="hero-browser-header">
          <div className="hero-dot" />
          <div className="hero-dot" />
          <div className="hero-dot" />

          <span>
            nothingtowear.app
          </span>
        </div>

        <img
          src={screenCloset}
          alt="Closet View"
        />
      </div>

      <HeroFloatingStats theme={theme} />

      <HeroFloatingCareCard theme={theme} />
    </div>
  );
};

export default HeroMockup;