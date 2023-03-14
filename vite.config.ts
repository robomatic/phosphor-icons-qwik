import { resolve } from "path";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [qwikVite({
    srcDir: './example'
  }), tsconfigPaths()],
  build: {
    target: "es2020",
    outDir: "./dist/",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "PhosphorReact",
      formats: ["es"],
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      input: "./src/index.ts",
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
