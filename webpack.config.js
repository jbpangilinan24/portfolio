const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/react/index.jsx',
  output: {
    path: path.resolve(__dirname, 'theme/js'), // output location
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
