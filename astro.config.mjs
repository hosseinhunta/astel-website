import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: 'https://crm.astel.ir',
	integrations: [
		solidJs(),
		tailwind(),
		partytown(),
		sitemap({
			filter: (page) => page !== 'https://crm.astel.ir/dashboard/',
		}),
	],
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
		imageService: true,
	}),
});
