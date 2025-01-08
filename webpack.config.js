const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Укажите ваш входной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, // Обработка .js и .jsx файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Добавьте поддержку .jsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Укажите ваш HTML-шаблон
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
}