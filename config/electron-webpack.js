const path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: './src/electron.preload.ts',
        target: 'electron-preload',
        module: {
            rules: [{
                test: /\.ts$/i,
                include: /src/,
                use: ['ts-loader']
            }]
        },
        output: {
            path: path.join(__dirname, '..', 'build'),
            filename: 'preload.js'
        }
    },
    {
        mode: 'development',
        entry: './src/electron.ts',
        target: 'electron-main',
        module: {
        rules: [{
            test: /\.ts$/,
            include: /src/,
            use: ['ts-loader']
        }]
        },
        output: {
            path: path.join(__dirname, '..', 'build'),
            filename: 'electron.js'
        }
    }
];