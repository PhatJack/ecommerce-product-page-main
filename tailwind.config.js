/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"orange": "hsl(26, 100%, 55%)",
				"pale-orange": "hsl(25, 100%, 94%)",
				"very-dark-blue": "hsl(220, 13%, 13%)",
				"dark-grayish-blue": "hsl(219, 9%, 45%)",
				"grayish-blue": "hsl(220, 14%, 75%)",
				"light-grayish-blue": "hsl(223, 64%, 98%)"
			},
			fontFamily: {
				"kumbn-sans": "Kumbh Sans"
			},
			fontSize: {
				"custom-size": "clamp(1.5rem, 1.85rem + 1.2vw,2.65rem)"
			}

		},
	},
	plugins: [],
}