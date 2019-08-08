module.exports = {
    mode: 'development',
    entry: {
        main: [
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
        path: __dirname + '/dist',
        publicPath: '/dist',
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
