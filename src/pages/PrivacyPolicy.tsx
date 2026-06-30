import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
	return (
		<div className="privacy">
			<div className="privacy__container">
				<a className="privacy__back" href="/">
					← Back to Nothing To Wear
				</a>

				<h1>Privacy Policy</h1>
				<p className="privacy__updated">Effective date: June 30, 2026</p>

				<p>
					Nothing To Wear ("we," "us," "our") is currently operated by its
					founder, Arianna Choza, and will soon operate under Of Provenance
					LLC. This policy explains what information we collect on this
					waitlist site, why we collect it, and the choices and rights you
					have.
				</p>

				<h2>1. Information We Collect</h2>
				<p>When you join the waitlist, we collect:</p>
				<ul>
					<li>
						<strong>Email address</strong> (required) — to notify you about
						early access and product updates.
					</li>
					<li>
						<strong>Phone number</strong> (optional) — only if you choose to
						provide it.
					</li>
				</ul>
				<p>
					If you complete the optional follow-up survey, we also collect your
					responses about wardrobe frustrations, feature preferences, and
					estimated wardrobe size. The survey is entirely optional and is used
					solely for product research.
				</p>
				<p>
					We do not use cookies, analytics, or tracking scripts on this site.
					The only third parties involved are described below.
				</p>

				<h2>2. How We Use Your Information</h2>
				<ul>
					<li>To maintain and manage the waitlist.</li>
					<li>To email you about early access, launch updates, and related product communications.</li>
					<li>To understand user needs and improve the product, using optional survey responses.</li>
				</ul>
				<p>We do not sell, rent, or trade your personal information.</p>

				<h2>3. Third-Party Processors</h2>
				<p>
					Waitlist and survey submissions are stored using <strong>Google
					Forms</strong> and <strong>Google Sheets</strong> (provided by
					Google LLC), which act as our data processor. Google's handling of
					this data is governed by{" "}
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google's Privacy Policy
					</a>{" "}
					and{" "}
					<a
						href="https://business.safety.google/processorterms/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google's Data Processing Terms
					</a>
					. This site also loads fonts from Google Fonts, which may log your
					IP address as part of serving font files.
				</p>
				<p>
					Where your information is transferred outside your country of
					residence (including to the United States), Google maintains
					standard contractual safeguards for international data transfers.
				</p>

				<h2>4. Data Retention</h2>
				<p>
					We retain waitlist and survey data for as long as the waitlist is
					active, or until you request deletion. Once early access launches
					or the waitlist is closed, we will delete or anonymize data we no
					longer need for the stated purposes.
				</p>

				<h2>5. Your Rights — GDPR (EEA/UK Residents)</h2>
				<p>
					If you are located in the European Economic Area or United Kingdom,
					you have the right to:
				</p>
				<ul>
					<li>Access the personal data we hold about you.</li>
					<li>Correct inaccurate or incomplete data.</li>
					<li>Request deletion of your data ("right to be forgotten").</li>
					<li>Restrict or object to our processing of your data.</li>
					<li>Receive your data in a portable format.</li>
					<li>Withdraw consent at any time, without affecting prior lawful processing.</li>
				</ul>
				<p>
					Our legal basis for collecting your email and phone number is your{" "}
					<strong>consent</strong>, given when you submit the waitlist form.
					You may withdraw consent at any time by contacting us below.
				</p>

				<h2>6. Your Rights — CCPA/CPRA (California Residents)</h2>
				<p>If you are a California resident, you have the right to:</p>
				<ul>
					<li>Know what personal information we collect and how it's used.</li>
					<li>Request deletion of your personal information.</li>
					<li>Correct inaccurate personal information.</li>
					<li>Opt out of the sale or sharing of personal information.</li>
					<li>Not be discriminated against for exercising these rights.</li>
				</ul>
				<p>
					We do not sell or share your personal information for cross-context
					behavioral advertising, so there is nothing to opt out of at this
					time.
				</p>

				<h2>7. Exercising Your Rights</h2>
				<p>
					To access, correct, delete, or export your data, or to withdraw
					consent, email us at{" "}
					<a href="mailto:ariannacodes@gmail.com">ariannacodes@gmail.com</a>.
					We will respond within 30 days.
				</p>

				<h2>8. Children's Privacy</h2>
				<p>
					This site is not directed at children under 16, and we do not
					knowingly collect personal information from them.
				</p>

				<h2>9. Changes to This Policy</h2>
				<p>
					We may update this policy as the product develops. Material changes
					will be reflected by updating the effective date above.
				</p>

				<h2>10. Contact</h2>
				<p>
					Questions about this policy or your data can be sent to{" "}
					<a href="mailto:ariannacodes@gmail.com">ariannacodes@gmail.com</a>.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
