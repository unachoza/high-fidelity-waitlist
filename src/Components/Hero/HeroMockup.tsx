import HeroFloatingStats from "./HeroFloatingStats";
import HeroFloatingCareCard from "./HeroFloatingCareCard";
import "./HeroMockup.css";

import screenCloset from "../../assets/emptyClosetWithCarosel.png";

const HeroMockup = () => {
	return (
		<div className="hero-mockup">
			<div className="hero-browser">
				<div className="hero-browser-header">
					<div className="hero-dot" />
					<div className="hero-dot" />
					<div className="hero-dot" />
					<span>nothingtowear.app</span>
				</div>

				<img src={screenCloset} alt="Closet View" />
			</div>

			<HeroFloatingStats />
			<HeroFloatingCareCard />
		</div>
	);
};

export default HeroMockup;
