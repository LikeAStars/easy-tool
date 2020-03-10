/**
 * Created by wujiaming on 2020/3/9
 **/

const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
let filename = 'easy-tool.js';

const isProd = process.env.NODE_ENV === 'production';
const isPolyfill = !!process.env.POLYFILL;

if (isPolyfill) {
  filename = 'easy-tool.polyfill.min.js';
} else if (isProd) {
  filename = 'easy-tool.min.js';
}

let config = {
  mode: 'none',
  entry: {
    main: path.join(__dirname, './src/index.js'),
  },
  output: {
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename,
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
