var path = require('path'); // Build-in module inside of Node. Helps in figure out paths
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared'); // Extract the common code into the shared.js file. This creates plugin which we need to add in webpack config object

module.exports = {
    context: path.resolve('js'), // sets a relative root directory for the entry key. So webpack will look utils and app files inside js directory
    entry: { // going to use three keys, one for each our javascript files so output will be three files
        about: './about_page.js', // here the three names (about, home, contact), will be used in the output [name]
		index: ['./utils.js','./app.js','./home_page.js'],
		contact: './contact_page.js'
    },
    output: {
        path: path.resolve('dist/js/'),// tells to put bundle.js file into dist/js/ directory
        publicPath: '/public/assets/js/', // where bundle is going to be on web server. So any request for public/assets/js are actually going to be served out of dist/js.
        filename: "[name].js" // based on the name of entry point
    },
    plugins: [commonsPlugin],
    devServer: {
        contentBase: 'public' // telling server any request on root are going to serve from public folder
    },
    module: {
        loaders: [
            {
                test: /login\.js/,
                exclude: /node_modules/,
				loader: "babel-loader"
            },
            {
                test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader" // Provides both the loader. Means any time webpack encounter css file its first run through the css loader and as soon as it's done with that, it's going to run it through the style-loader
            }
        ]
    }
}