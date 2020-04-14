import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/utils.esm.js"
    },
    plugins: [
      externals({
        exclude: ["uuid"]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs()
    ]
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/utils.cjs.js"
    },
    plugins: [
      externals({
        exclude: ["uuid"]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs()
    ]
  }
];
