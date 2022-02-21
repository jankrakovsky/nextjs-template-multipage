module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					'red': '#BE6361',
					'flamingo': '#FF8482',
					'brown': '#A85756',
					'yellow': '#FFF2DD',
					"black": '#333333',
				},
			},
			fontFamily: {
				alfa: ['Alfa Slab One', 'cursive'],
				dm: ['DM Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

