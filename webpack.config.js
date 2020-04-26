"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const bundleFolder = "./dist/";

const config = { 
  devtool: 'eval-source-map', //cheap-module-source-map
  entry: {
    "home.index": "./src/js/index.js",
  },
  output: {
    filename: "home.index.js",
    path: path.join(__dirname, bundleFolder),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "less-loader", // compiles Less to CSS
        ],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  // Add an instance of the MiniCssExtractPlugin to the plugins list
  // But remember - only for production!
  plugins: [
    new MiniCssExtractPlugin({
      filename: "site.css", // [name].css will generate stats.index.css
    }),
  ],
  watch: false,
};

module.exports = config;
