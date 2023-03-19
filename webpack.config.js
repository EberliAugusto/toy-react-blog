const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, // Match both .js and .jsx files
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'] // Use presets for ES6+ and React
                }
            }
        },
        {
            test: /\.md$/i,
            use: 'raw-loader',
        }, 
        {
            test: /\.svg$/i,
            type: "asset/resource",
        }]
    }
};