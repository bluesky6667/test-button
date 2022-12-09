const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'bundle.js',
        library: {
            type: 'commonjs2'
        },
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
        ],
    },
};