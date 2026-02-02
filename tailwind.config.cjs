/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,ts,js}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FDECEC',   // jasny czerwony
					500: '#C62828',  // główny czerwony
					950: '#3B0A0A'   // ciemny czerwony
				},
				secondary: {
					50: '#EAF1F8',
					500: '#1E3A5F',
					950: '#0B1A2D'
				},
				tertiary: {
					50: '#E6F2EF',
					500: '#2E7D6B',
					950: '#0F3D34'
				},
				surface: {
					50: '#FFFFFF',
					500: '#F5F5F5',
					950: '#121212'
				},
				success: {
					50: '#E8F5E9',
					500: '#2E7D32',
					950: '#0F3D1C'
				},
				warning: {
					50: '#FFF8E1',
					500: '#F9A825',
					950: '#4A2E00'
				},
				error: {
					50: '#FCE8E6',
					500: '#D32F2F',
					950: '#4A0B0B'
				}
			}
		}
	},
	darkMode: 'class'
};
