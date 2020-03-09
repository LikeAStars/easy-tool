/**
 * Created by wujiaming on 2020/3/9
 **/

const path = require('path');
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
    main: path.join(__dirname, './src/main.js'),
  },
  output: {
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename,
    path: path.join(__dirname, './dist')
  }
};

module.exports = config;
