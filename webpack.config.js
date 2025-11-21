const path = require("path");

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
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js"),
    clean: true,
    assetModuleFilename: "../assets/[name][ext]",
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
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
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
