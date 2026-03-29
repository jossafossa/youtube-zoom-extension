import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    author: { email: "info@jossafossa.nl" },
    name: "Youtube zoomer",
    permissions: ['storage'],
  }
});
