export type ThemeKey = "navy" | "terracotta";

export interface Theme {
	label: string;

	bg: string;
	fg: string;

	dark: string;
	darkFg: string;

	gold: string;
	goldHover: string;

	stone: string;
	stoneMid: string;

	border: string;
	borderDark: string;

	muted: string;
	labelColor: string;

	numColor: string;

	cardShadow: string;
	heroShadow: string;
}

export const THEMES: Record<ThemeKey, Theme> = {
	navy: {
		label: "Navy",

		bg: "#F7F4EF",
		fg: "#2F3440",

		dark: "#0D1A2B",
		darkFg: "#F7F4EF",

		gold: "#C9B37E",
		goldHover: "#B8A06E",

		stone: "#D8D3CB",
		stoneMid: "rgba(216,211,203,0.