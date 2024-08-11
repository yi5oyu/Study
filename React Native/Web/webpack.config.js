const HtmlWebpackPlugin = require('html-webpack-plugin');

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      // babel-loader
      //  JavaScript 파일 트랜스파일
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // babel-loader //
      // url-loader
      // 이미지 파일 처리
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader',
      },
      // url-loader //
    ],
  },
};


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Webpack 번들링 설정
  // 진입점 설정
  entry: './index.web.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Webpack //
  // Resolve extensions and alias for React Native to web
  resolve: {
    extensions: ['.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },

  module: {
    rules: [
      // babel-loader
      // JavaScript/JSX 파일 트랜스파일 (ES6+)
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-react-native-web'],
          },
        },
      },
      // babel-loader //
      // url-loader
      // 이미지 파일 처리 (8kb to base64 strings)
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/[name].[hash:8].[ext]',
          },
        },
      },
      // url-loader //
    ],
  },

  // Plugins to automate and optimize the build process
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true, // For React Router
  },
};
