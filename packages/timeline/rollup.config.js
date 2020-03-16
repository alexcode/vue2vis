import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/main.js",
    output: {
      format: "esm",
      file: "dist/timeline.esm.js"
    },
    plugins: [vue()]
  },
  {
    input: "./lib/main.js",
    output: {
      format: "cjs",
      file: "dist/timeline.cjs.js"
    },
    plugins: [vue()]
  }
];
