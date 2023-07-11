import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }),
  },

  vitePlugin: {
    inspector: {
      showToggleButton: 'always',
    },
  },
}

export default config
