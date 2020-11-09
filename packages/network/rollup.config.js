import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/index.js",
    output: [
      {
        format: "esm",
        sourcemap: true,
        file: "dist/network.esm.min.js"
      },
      {
        name: "vis",
        extend: true,
        exports: "named",
        sourcemap: true,
        format: "umd",
        file: "dist/network.umd.min.js"
      }
    ],
    plugins: [
      externals({
        exclude: [
          "component-emitter",
          "timsort",
          "@egjs/hammerjs",
          "keycharm",
          "uuid"
        ]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs({
        namedExports: {
          timsort: ["sort"]
        }
      }),
      terser({
        output: {
          comments: "some"
        }
      }),
      vue()
    ]
  }
];
