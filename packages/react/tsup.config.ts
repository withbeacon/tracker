import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: false,
  dts: true,
  format: ["esm", "cjs"],
  outDir: "dist", 
  entry: ["./src/index.tsx"],
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";',
    };
  },
});

