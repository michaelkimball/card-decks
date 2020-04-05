const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let config = JSON.parse(fs.readFileSync('./foundryconfig.json'));
let name = JSON.parse(fs.readFileSync('./module.json')).name;
let linkDir;
let destDir = 'modules';
if (config.dataPath) {
    if (!fs.existsSync(path.join(config.dataPath, 'Data')))
        throw Error('User Data path invalid, no Data directory found');
    linkDir = path.join(config.dataPath, 'Data', destDir, name);
} else {
    throw Error('No User Data path defined in foundryconfig.json');
}

module.exports = {
  entry: ['./src/card-decks.ts'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'module.json', to: '' }
    ]),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, linkDir)
    // path: path.resolve(__dirname, '.\\dist\\')
  },
};