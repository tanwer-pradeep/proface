const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: ['babel-polyfill',"./src/index.js"],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules\/(?!(query-string|strict-uri-encode)\/).*/,
      },
      {
        // For all .css files except from node_modules
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new Dotenv({ path: path.resolve(__dirname, "./.env") })],
  devServer: {
    contentBase: [
      path.join(__dirname, "dist/"),
      path.join(__dirname, "public/"),
    ],
    inline: true,
    port: 4000,
    hot: true,
    host: "localhost",
    compress: true,
    historyApiFallback: true,
    overlay: true,
    publicPath: "/dist/",
  },
};
