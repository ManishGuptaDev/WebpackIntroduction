module.exports = {
    entry: ["./utils.js","./app.js"],
    output: {
        filename: "dist/bundle.js"
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