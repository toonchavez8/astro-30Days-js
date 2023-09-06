/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"corporate",
			"synthwave",
			"forest",
			"lofi",
			"wireframe",
			"black",
			"dracula",
			"business",
			"night",
			"winter",
		],
	},
};
