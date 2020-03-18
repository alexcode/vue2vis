export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/utils.esm.js"
    }
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/utils.cjs.js"
    }
  }
];
