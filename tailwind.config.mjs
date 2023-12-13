/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Iransans: ['Iransans'],
				Yekan: ['Yekan'],
				Anjoman: ['Anjoman'],
				Mehrajan: ['Mehrajan'],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#1e3a8a',

					secondary: '#6731BB',

					accent: '#f5f5f5',

					neutral: '#f5f5f5',

					'base-100': '#f5f5f5',

					info: '#00AED1',

					success: '#6DBF1A',

					warning: '#C1AF07',

					error: '#E23641',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
