#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('node:child_process');
const { argv } = require('node:process');

const target = process.cwd();
const source = path.join(__dirname);
if (argv.length === 2) {
    throw 'Please provide package name.';
}
const name = argv[2];

if (fs.existsSync(path.resolve(target, 'package.json'))) {
    throw 'Please run this command in an uninitialized folder.';
}

const package = {
    "name": name,
    "version": "1.0.0",
    "description": "",
    "author": "",
    "scripts": {
        "dev": "rm -rf build/ && webpack -c ./config/electron-webpack.js && concurrently \"webpack s -c ./config/react-webpack.js\" \"wait-on http://localhost:9000/ && cross-env NODE_ENV=development ELECTRON_DISABLE_SECURITY_WARNINGS=true electron ./build/electron.js\"",
        "build": "rm -rf build/ && webpack -c ./config/electron-webpack.js --mode=production && webpack -c ./config/react-webpack.js --mode=production",
        "dist-linux": "electron-builder -c ./config/electron-builder.json -l",
        "dist-mac": "electron-builder -c ./config/electron-builder.json -m",
        "dist-windows": "electron-builder -c ./config/electron-builder.json -w"
    }
};

fs.writeFileSync(path.resolve(target, 'package.json'), JSON.stringify(package, null, 2));
console.log('package.json created');

fs.mkdirSync(path.resolve(target, 'src'));
fs.mkdirSync(path.resolve(target, 'config'));
fs.writeFileSync(path.resolve(target, 'tsconfig.json'), fs.readFileSync(path.resolve(source, 'tsconfig.json')));
fs.readdirSync(path.resolve(source, 'src')).forEach(file => fs.writeFileSync(path.resolve(target, 'src', file), fs.readFileSync(path.resolve(source, 'src', file))));
fs.readdirSync(path.resolve(source, 'config')).forEach(file => fs.writeFileSync(path.resolve(target, 'config', file), fs.readFileSync(path.resolve(source, 'config', file))));
console.log('files copied');

console.log('installing dependencies');
execSync('npm i -D @types/node @types/react @types/react-dom concurrently cross-env css-loader electron electron-builder electron-devtools-installer html-webpack-plugin react react-dom ts-loader typescript wait-on webpack webpack-cli webpack-dev-server');
console.log('dependencies installed');

console.log('complete');
process.exit(1);