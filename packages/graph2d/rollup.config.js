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
      file: "dist/graph2d.esm.js"
    },
    plugins: [
      externals({
        exclude: [
          "component-emitter",
          "propagating-hammerjs",
          "@egjs/hammerjs",
          "keycharm",
          "uuid"
        ]
      }),
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
      file: "dist/graph2d.cjs.js"
    },
    plugins: [
      externals({
        exclude: [
          "component-emitter",
          "propagating-hammerjs",
          "@egjs/hammerjs",
          "keycharm",
          "uuid"
        ]
      }),
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
