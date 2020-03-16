import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/main.js",
    output: {
      format: "esm",
      file: "dist/graph2d.esm.js"
    },
    plugins: [vue()]
  },
  {
    input: "./lib/main.js",
    output: {
      format: "cjs",
      file: "dist/graph2d.cjs.js"
    },
    plugins: [vue()]
  }
];
