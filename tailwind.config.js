module.exports = {
	purge: [],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	purge: [ './src/**/*.{js,jsx,ts,tsx,php}' ],
	theme: {
		extend: {
			colors: {
				primary: '#f30d55',
				secondary: '#5820e5',
				'mh': '#ff0000',
			},
			gradientColorStops: theme => ({
				...theme('colors'),
				primary: '#f30d55',
				secondary: '#5820e5',
			}),
			textColor: {
				primary: '#f30d55',
				secondary: '#5820e5',
			},
		},
	},
	variants: {
		extend: {
			
		},
	},
	plugins: [],
}
