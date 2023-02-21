/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			backgroundImage: {
				wave: "url('./src/assets/wave.svg')",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
