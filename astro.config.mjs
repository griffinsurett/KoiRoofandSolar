import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig(({ mode }) => {
  // Load environment variables based on current mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');
  const { PUBLIC_DOMAIN } = env;

  return {
    // Use the PUBLIC_DOMAIN env var for the site URL
    site: `https://${PUBLIC_DOMAIN}`,
    server: {
      port: 5500,
    },
    vite: {
      plugins: [tailwindcss()],
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Split React and ReactDOM into a separate chunk
              if (
                id.includes('node_modules/react') ||
                id.includes('node_modules/react-dom')
              ) {
                return 'react-vendor';
              }
            },
          },
        },
      },
    },
    integrations: [mdx(), react(), sitemap()],
  };
});
