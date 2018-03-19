const HtmlWebPackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const PORT = process.env.PORT || 3000;
const DEV_PORT = process.env.DEV_PORT || 1337;

module.exports = {
  devServer: {
    compress: true,
    open: true,
    port: DEV_PORT,
    quiet: true,
    proxy: {
      '/api': `http://localhost:${PORT}`
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-react-constant-elements',
              'react-hot-loader/babel' // disables itself in prod
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `React Dev Server is running here: http://localhost:${DEV_PORT}`,
          `Server requests proxied from this port: ${PORT}`
        ]
      }
    })
  ]
};
