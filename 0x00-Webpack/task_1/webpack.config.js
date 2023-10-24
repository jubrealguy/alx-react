// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'development', // or 'production' based on your requirement
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // you can use appropriate loaders here
          options: {
            presets: ['@babel/preset-env'], // adjust based on your project's requirements
          },
        },
      },
    ],
  },
};
