const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    signup: "./src/js/signup/signup.js",
    signin: "./src/js/signin/signin.js",
    todo: "./src/js/todo/todo.js",
    account: "./src/js/account-information/account-information.js",
    changePassword: "./src/js/change-password/change-password.js",
    dashBoard: "./src/js/dashboard/index.js",
  },
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name].[hash][ext]",
    publicPath: "/",
  },
  devServer:{
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["dashBoard"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/signin.html",
      filename: "signin.html",
      chunks: ["signin"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/signup.html",
      filename: "signup.html",
      chunks: ["signup"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo.html",
      filename: "todo.html",
      chunks: ["todo"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/account-information.html",
      filename: "account-information.html",
      chunks: ["account"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/change-password.html",
      filename: "change-password.html",
      chunks: ["changePassword"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/pictures",
          to: "pictures",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".scss", ".css"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  stats: {
    errorDetails: true,
  },
};