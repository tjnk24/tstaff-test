const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const development = process.env.NODE_ENV !== 'production';

const cssLoaders = [
  {
    loader: development ? 'style-loader' : MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      sourceMap: development,
    },
  },
];

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  watch: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    historyApiFallback: true,
  },
  mode: development ? 'development' : 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: development ? '[name].css' : '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
};
