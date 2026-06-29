const statuses = [
	{ label: "Ready to wear", ready: true },
	{ label: "At dry cleaner", ready: false },
	{ label: "Needs attention", ready: false },
];

const HeroFloatingCareCard = () => {
	return (
		<div className="hero-float hero-float--care">
			<div className="hero-float__label hero-float__label--heading">
				Care Status
			</div>

			{statuses.map((status) => (
				<div key={status.label} className="hero-float__status">
					<span
						className={`hero-float__dot ${
							status.ready ? "hero-float__dot--ready" : ""
						}`}
					/>
					<span>{status.label}</span>
				</div>
			))}
		</div>
	);
};

export default HeroFloatingCareCard;
