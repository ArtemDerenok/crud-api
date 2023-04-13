import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import NodemonPlugin from "nodemon-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  entry: "./src/server.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  plugins: [new NodemonPlugin(), new ESLintPlugin({ extensions: ["ts"] })],
};

export default config;
