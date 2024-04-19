import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bgColor: {
					light: "#F4F4F4",
					dark: "#29292F",
					cardLight: "",
					cardDark: "#39394B",
				},
				brand: {
					lighter: "#AFACF7",
					primary: "#7068CB",
					primaryDark: "",
					hover: "#343250",
					hoverDark: "#5D5D88",
					accent: "#c7c734",
					accentDark: "",
				},
			},
			text: {
				light: "#fff",
			},
		},
	},
	plugins: [],
};
export default config;
