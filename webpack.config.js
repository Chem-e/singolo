module.exports = {
    entry: './js/script.js',
    output: {
        filename: './js/bundle.js'
    },
    watch: true,
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }]
    }
};