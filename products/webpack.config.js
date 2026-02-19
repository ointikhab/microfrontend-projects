const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports =  {
  mode: 'development',
   plugins: [
        new ModuleFederationPlugin({
           name: 'products',
           filename: 'remoteEntry.js',
           exposes: {
            './ProductsIndex': './src/bootstrap'
           },
           shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
  devServer: {
    port: 8081,
  }
}