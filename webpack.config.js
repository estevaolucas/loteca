let BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public'),
      APP_DIR   = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: APP_DIR + '/components/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: __dirname + '/src/client',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // host: 'localhost',
      // port: 3000,
      // proxy: 'localhost:8000',
      server: { baseDir: ['src/client/public'] }
    },
    {
      reload: true
    })
  ]
};
