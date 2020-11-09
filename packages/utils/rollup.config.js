import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./lib/index.js",
    output: [
      {
        format: "esm",
        sourcemap: true,
        file: "dist/utils.esm.min.js"
      },
      {
        name: "vis",
        extend: true,
        exports: "named",
        sourcemap: true,
        format: "umd",
        file: "dist/utils.umd.min.js"
      }
    ],
    plugins: [
      externals({
        exclude: ["uuid"]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs(),
      terser({
        output: {
          comments: "some"
        }
      })
    ]
  }
];
