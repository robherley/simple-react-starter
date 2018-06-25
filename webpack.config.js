const HtmlWebPackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const SERVER_PORT = 1337;
const DEV_PORT = 3000;

module.exports = {
	devServer: {
		compress: true,
		open: false,
		port: DEV_PORT,
		quiet: true,
		proxy: {
			'/': `http://localhost:${SERVER_PORT}`
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				resolve: {
					extensions: ['.js', '.jsx']
				},
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true,
						plugins: [
							'@babel/plugin-proposal-object-rest-spread',
							'@babel/plugin-transform-react-constant-elements',
							'@babel/plugin-proposal-class-properties',
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
			},
			{
				test: /(\.css|\.scss|\.sass)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(ttf|eot|woff(2)?)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'
					}
				}
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
					`Server requests proxied from this port: ${SERVER_PORT}`
				]
			}
		})
	]
};
