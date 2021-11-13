const tailwindcssDefaults = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			...tailwindcssDefaults.colors,
			gray: colors.trueGray,
			lime: colors.lime,
		},
		extend: {
			colors: {
				main: {
					900: "#C58228",
					800: "#DA9020",
					700: "#E3A019",
					600: "#EFB401",
					500: "#FFC401",
					400: "#FFCF01",
					300: "#FFE047",
					200: "#FFF08A",
					100: "#FEF9C3",
					50: "#FEFCE8",
				},
			},
			transformOrigin: {
				"bottom-center": "center bottom",
			},
			zIndex: {
				100: "100",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
