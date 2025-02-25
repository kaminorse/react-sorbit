import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src"] })],
  css: {
    modules: {
      globalModulePaths: [
        /.*\/src\/base\/Sorbit\/.*/,
        /.*\/src\/base\/SorbitCssVariableStylesProvider\/.*/,
        /.*\/src\/base\/SorbitCssVariableStylesProviderStatic\/.*/,
        /.*\/src\/base\/SorbitStatic\/.*/,
      ],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/react-sorbit.ts"),
      name: "ReactSorbit",
      fileName: "react-sorbit",
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*!(*.d).{ts,tsx}", {
            ignore: ["src/**/*.stories.tsx", "src/**/*.test.{ts,tsx}"],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        globals: {
          react: "React",
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
