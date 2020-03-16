import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/main.js",
    output: {
      format: "esm",
      file: "dist/network.esm.js"
    },
    plugins: [vue()]
  },
  {
    input: "./lib/main.js",
    output: {
      format: "cjs",
      file: "dist/network.cjs.js"
    },
    plugins: [vue()]
  }
];
