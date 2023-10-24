// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production', // or 'production' based on your requirement
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
