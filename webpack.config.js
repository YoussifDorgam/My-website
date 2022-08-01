const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name]_bundle.js",
  },

  devServer: {
    static: "./dist",
    hot: true,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModules: true,
            outputPath: "images",
            name: "images/[name].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
