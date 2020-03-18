import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/timeline.esm.js"
    },
    plugins: [vue()]
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/timeline.cjs.js"
    },
    plugins: [vue()]
  }
];
