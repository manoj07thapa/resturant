module.exports = {
	mode: 'jit',
	purge: [ './public/**/*.html', './components/**/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	fontFamily: {
		body: [ 'Poppins' ]
	},
	variants: {
		extend: {}
	},
	plugins: [ require('@tailwindcss/forms') ]
};
