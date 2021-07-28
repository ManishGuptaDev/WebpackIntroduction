var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
	test: [/\.js$/, /\.es6$/], // will check all files with .js and .es extensions
	exclude: /node_modules/,
	loader: WebpackStrip.loader('console.log') // this will strip off console.logs from the bundle file
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;