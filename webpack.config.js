const path = require('path')

module.exports = {
  entry: './lib/index.ts',
  mode: 'production',
  target: 'web',
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}