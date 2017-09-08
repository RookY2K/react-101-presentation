var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
		{
			test: /\.jsx?$/,
      		loaders: ['react-hot-loader', 'babel-loader'],
      		include: path.join(__dirname, 'src')
    	},
		{
			test: /\.tsx?$/,
			loaders: ['react-hot-loader', 'babel-loader', 'ts-loader'],
			include: path.join(__dirname, 'src')
		},
        {
            test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
            loaders: ['file-loader']
        }
	]
  },
  resolve: {
	  extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
