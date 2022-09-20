const path = require('path')

module.exports = {
  entry: "./src/index",
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "./dist")
  },
  module: {
    rules: [{
      test: /\.less$/i,
      include: {
        and: [path.join(__dirname, './src/')]
      },
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader"
        }
      ]
    }]
  }
}