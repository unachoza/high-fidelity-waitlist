# Waitlist Analytics — Vercel Web Analytics

How visitor stats work on **https://nothingtowear-waitlist.app/** — unique visitors, page views, bounce rate, referrers, countries, devices.

> **Tool choice:** Vercel Web Analytics, because the page already deploys on Vercel, it's **cookieless** (no consent banner needed, GDPR-friendly), and the free Hobby tier easily covers a waitlist page. The **app** (closet-inventory) uses PostHog ([project 504367](https://us.posthog.com/project/504367/activity/explore)) for product events — two different jobs, two tools.

---

## How it works

This is a **Vite + React** app, so it uses the official `@vercel/analytics` React component rather than a raw script tag. In `src/App.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

function App() {
	// ...
	return (
		<>
			{hash === "#privacy" ? <PrivacyPolicy /> : <LandingPage />}
			<Analytics />
		</>
	);
}
```

- `<Analytics />` renders nothing visible — it injects Vercel's tracking script and pings `/_vercel/insights/view` on the same domain (no cookies, no third-party requests; visitors deduplicated by a daily-rotating anonymous hash).
- Because this app uses **hash routing** (`#privacy` vs the landing page), the component matters: it auto-tracks those in-app route changes as separate views, which a static script tag would miss.
- Locally (`npm run dev`) the beacon 404s silently — that's expected; it only records on the Vercel deployment.

## One-time setup (≈1 minute, dashboard)

The component records **nothing** until Web Analytics is switched on for the project:

1. Open [vercel.com](https://vercel.com) → your team → the **high-fidelity-waitlist project** (the one serving nothingtowear-waitlist.app).
2. Left sidebar (or top tabs) → **Analytics**.
3. Click **Enable Web Analytics**.
4. **Redeploy** the site once (push to the deployed branch, or Deployments → ⋯ → Redeploy) so the enabled state and the `@vercel/analytics` code are both live.

## Verify it's recording

1. Visit https://nothingtowear-waitlist.app/ in a normal browser tab (ad-blockers can block the beacon — try a private window if unsure).
2. DevTools → **Network** tab → filter `insights` → you should see `script.js` (200) and a `view` request.
3. Vercel dashboard → project → **Analytics** → data appears within ~30 seconds.

## Reading the stats

Dashboard → project → **Analytics** tab. Use the time-range picker (top right) — day / 7d / 30d.

| Stat | What it means |
|---|---|
| **Visitors** | Unique people (deduplicated per day). Your headline number. |
| **Page Views** | Total loads, including hash-route changes. Views ÷ Visitors ≈ pages/reloads per person. |
| **Bounce Rate** | % of visits that viewed one page and left. On a one-page waitlist a "high" bounce rate is *normal* — what matters is whether they submit the form before leaving. |
| **Top Pages** | Which paths/hashes get traffic (landing vs `#privacy`). |
| **Referrers** | Where visitors came from — Instagram, TikTok, direct link, etc. Tells you which channel to double down on. |
| **Countries / Devices / OS / Browsers** | Audience breakdown. Expect mobile-heavy if traffic is from social. |

**Tracking a campaign:** share links with UTM parameters, e.g.
`https://nothingtowear-waitlist.app/?utm_source=instagram&utm_campaign=founding-members`
— the Analytics tab has a **UTM Parameters** panel that breaks visitors down by source/campaign, so you can compare "IG story" vs "text to friends".

## Limits (free Hobby tier)

- ~50,000 events/month included and ~1 month of data retention — far beyond what a 30-person beta waitlist generates. (Check [vercel.com/pricing](https://vercel.com/pricing) for current numbers.)
- **Custom events** (e.g. firing a `waitlist_signup` event on form submit) require the paid Web Analytics tier. Not needed now: form submissions already land in the Google Form's response sheet, so *that* count is your conversion number. Conversion rate = form responses ÷ Vercel unique visitors.

## What this does NOT cover

- **The app itself** (closet-inventory on Vercel) — product analytics live in PostHog ([project 504367](https://us.posthog.com/project/504367/activity/explore)): onboarding funnel, Gmail-import funnel, feature usage.
- **Waitlist → beta funnel** — Vercel counts visits, the Google Form sheet counts signups; comparing the two is manual for now.

---

> **Note on the two waitlist repos:** this repo (`high-fidelity-waitlist`) serves the **live** nothingtowear-waitlist.app. The older `waitlist` repo (ntw-waitlist.online) also has a Vercel analytics script tag in its HTML — harmless, left in place, but this repo is the one that matters.
