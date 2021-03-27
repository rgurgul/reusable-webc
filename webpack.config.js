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
        ],
        radio: [
            './src/components/radio-group/radio-group.js'
        ]
    },
    experiments: {
        outputModule: true,
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: '[name].js',
        library: {
            // do not specify a `name` here
            type: 'module',
        },
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
