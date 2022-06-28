import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript({ sourceMap: !production }),
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
});
