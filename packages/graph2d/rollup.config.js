import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/graph2d.esm.js"
    },
    plugins: [vue()]
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/graph2d.cjs.js"
    },
    plugins: [vue()]
  }
];
