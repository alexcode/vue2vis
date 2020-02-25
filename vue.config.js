const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "examples")
      }
    },
    entry: {
      app: path.join(__dirname, "examples", "main.js")
    }
  }
};
