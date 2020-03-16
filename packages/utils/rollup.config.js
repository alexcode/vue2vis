export default [
  {
    input: "./lib/utils.js",
    output: {
      format: "esm",
      file: "dist/utils.esm.js"
    }
  },
  {
    input: "./lib/utils.js",
    output: {
      format: "cjs",
      file: "dist/utils.cjs.js"
    }
  },
  {
    input: "./lib/utils.js",
    output: {
      format: "iife",
      file: "dist/utils.js"
    }
  }
];
