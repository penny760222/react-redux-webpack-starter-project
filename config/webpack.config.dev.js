const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// App files location
const PATHS = {
  app: path.resolve(__dirname, '../app'),
  styles: path.resolve(__dirname, '../app/stylesheets'),
  build: path.resolve(__dirname, '../build')
};

const plugins = [
  // Avoid publishing files when compilation fails
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    AppConfig: {
      serverUrl: JSON.stringify('http://localhost:8080'),
      imageServerUrl: JSON.stringify('')
    }
  }),
  new ExtractTextPlugin('css/[name].css', { allChunks: true }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
];

const sassLoaders = [
  'css-loader?sourceMap',
  'sass-loader?outputStyle=expanded'
];

module.exports = {
  env: process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'main.jsx')
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1'],
        include: PATHS.app,
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.css$/,
        include: PATHS.styles,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.css$/,
        include: PATHS.vendor_styles,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins,
  postcss: () => ([autoprefixer({ browsers: ['last 2 versions'] })]),
  devServer: {
    contentBase: path.resolve(__dirname, PATHS.app),
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'eval'
};
