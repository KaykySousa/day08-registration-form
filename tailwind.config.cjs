/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			backgroundImage: {
				wave: "url(/wave.svg)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
