const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    render: './src/render.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [

    new HtmlWebpackPlugin({
      title: 'KNOW',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};