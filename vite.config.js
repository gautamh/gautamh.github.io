import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
    	environment: 'jsdom',
	},
	server: {
		fs: {
			allow: [
				'./',
				'./favicon'
				// './thumbs'
			]
		}
	}
};

export default config;
