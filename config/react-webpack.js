const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: './src/react.tsx',
        target: 'web',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: ['ts-loader']
                },
                {
                    test: /\.css$/,
                    include: /src/,
                    use: ['css-loader']
                },
                {
                    test: /\.ttf$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.svg$/i,
                    type: 'asset/inline'
                }
            ]
        },
        output: {
            path: path.join(__dirname, '..', 'build'),
            filename: 'react.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            static: './build',
            port: 9000,
            hot: true,
            historyApiFallback: true
        }
    }
];