module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: [
    "/node_modules/(?!vis-data|vis-util|vis-timeline|vis-network)"
  ]
};
