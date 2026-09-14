import FadeIn from "../FadeIn/FadeIn";

import "./Trust.css";

const PROMISES = [
	{
		title: "Export whenever you like",
		body: "Take the whole closet as a spreadsheet for Excel or Sheets, or as a backup file that restores exactly. Built in, not on request.",
	},
	{
		title: "Works without signal",
		body: "Installs to your home screen and keeps working in the dry cleaner's, the storage unit, the back of a shop. Changes sync when you are back.",
	},
	{
		title: "Delete means deleted",
		body: "Erase your account and its contents from inside the app, permanently, without emailing anyone to ask.",
	},
	{
		title: "Try before you commit",
		body: "A sample closet is waiting when you arrive, so you can see how it works before importing anything of your own.",
	},
] as const;

const Trust = () => {
	return (
		<section className="section section--light">
			<div className="inner">
				<FadeIn>
					<div className="eyebrow">Yours, and portable</div>

					<h2 className="trust__heading">A wardrobe is personal. So is its record.</h2>

					<p className="lede trust__lede">
						Nothing To Wear reads your receipts and nothing else. It never posts, never sells your data, and
						never uses it for advertising.
					</p>
				</FadeIn>

				<div className="trust__grid">
					{PROMISES.map(({ title, body }, index) => (
						<FadeIn key={title} delay={index * 80}>
							<div>
								<h3>{title}</h3>
								<p>{body}</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};

export default Trust;
