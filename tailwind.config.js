const tailwindcssDefaults = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: {
		content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
		safelist: [
			"text-green-800",
			"bg-green-100",
			"text-lime-800",
			"bg-lime-100",
			"text-red-800",
			"bg-red-100",
			"text-pink-800",
			"bg-pink-100",
			"text-yellow-800",
			"bg-yellow-100",
			"text-purple-800",
			"bg-purple-100",
		],
	},
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
				110: "110",
			},
			height: {
				...tailwindcssDefaults.height,
				screen80: "80vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
