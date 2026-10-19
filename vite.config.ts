import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

const base =
  process.env.GITHUB_ACTIONS === 'true' && repoName
    ? `/${repoName}/`
    : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
});
