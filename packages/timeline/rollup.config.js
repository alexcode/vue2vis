import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/timeline.esm.js"
    },
    plugins: [
      externals(),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs({
        namedExports: {
          uuid: ["v4"]
        }
      }),
      vue()
    ]
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/timeline.cjs.js"
    },
    plugins: [
      externals(),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs({
        namedExports: {
          uuid: ["v4"]
        }
      }),
      vue()
    ]
  }
];
