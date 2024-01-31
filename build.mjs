import { build } from "esbuild";

build({
  outdir: "dist/cjs",
  entryPoints: ["src/index.ts"],
  format: "cjs",
});

build({
  outdir: "dist/esm",
  entryPoints: ["src/index.ts"],
  format: "esm",
});
