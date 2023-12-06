module.exports = require('babel-jest').createTransformer({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
    require.resolve("expo-router/babel"),
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
    }],
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
  ],
});
