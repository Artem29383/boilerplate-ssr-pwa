import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import { webpackConfig } from './webpack.config';

module.exports = (env: string, argv: any) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';
  const config = webpackConfig();

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [] as UglifyJsPlugin[],
  };

  if (isProd) {
    optimizations.minimizer.push(new UglifyJsPlugin());
  }

  return {
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(process.cwd(), 'dist'),
      compress: true,
      port: 4200,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.jsClient,
        config.modules.css,
        config.modules.fonts,
        config.modules.images,
        config.modules.svg,
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/Html/Browser.html',
        favicon: './src/Html/favicon.ico',
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
      new webpack.DefinePlugin({
        RUNTIME_ENV: JSON.stringify('client'),
      }),
    ],
    entry: {
      main: ['@babel/polyfill', './src/Client.tsx'],
    },
    output: {
      filename: watchMode
        ? 'assets/[name].[hash].js'
        : 'assets/[name].[chunkhash].js',
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
