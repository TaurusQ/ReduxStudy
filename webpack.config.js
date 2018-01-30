var path = require('path');

var webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index',
	},

	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist',
		/** 指定的是构建后在html里引用资源的路径 */
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react',
			exclude: /node_modules/,
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}]
	},
}