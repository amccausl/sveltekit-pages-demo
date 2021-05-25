import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter: adapter({
			// GitHub pages can be hosted from the root or docks folder
      pages: 'docs',
      assets: 'docs',
      fallback: null
    })
	}
};

export default config;
