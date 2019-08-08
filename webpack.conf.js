module.exports = {
    mode: 'development',
    entry: {
        all: [
            './src/index.js'
        ],
        tabs: [
            './src/components/tabs/tabs.js'
        ],
        footer: [
            './src/components/footers/course-footer.js'
        ],
        watch: [
            './src/components/watch/watch.js'
        ]
    },
    output: {
        path: __dirname + '/dist/webc',
        publicPath: '/dist/webc',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                loader: 'css-loader'
            }
        ]
    }
};
