const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    mode: 'production',
    target: 'web',

    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },

  module: {
    rules: [
        {

        // @TODO js rule
        test: /\.(js|jsx)$/i,
        use: { loader: 'babel-loader',
        options: {
        presets: [
          '@babel/preset-env', ['@babel/preset-react', { 
            runtime: 'automatic' }
            ]
            ],
            },
            },
        exclude: /(node_modules)/,

        resolve: { extensions: ['.js', '.jsx'] },
    },
    
    {

        // @TODO css rule
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
       

}, 
       
    ],
},
  };