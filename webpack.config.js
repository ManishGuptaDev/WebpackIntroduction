var path = require('path'); // Build-in module inside of Node. Helps in figure out paths

module.exports = {
    context: path.resolve('js'), // sets a relative root directory for the entry key. So webpack will look utils and app files inside js directory
    entry: ["./utils.js","./app.js"],
    output: {
        path: path.resolve('dist/js/'),// tells to put bundle.js file into dist/js/ directory
        publicPath: '/public/assets/js/', // where bundle is going to be on web server. So any request for public/assets/js are actually going to be served out of dist/js.
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public' // telling server any request on root are going to serve from public folder
    },
    module: {
        loaders: [
            {
                test: /login\.js/,
                exclude: /node_modules/,
				loader: "babel-loader"
            }
        ]
    }
}