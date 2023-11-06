const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederalPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederalPlugin(
            {
                name: 'users',
                filename: 'remoteEntry.js',
                exposes: {
                    './UsersIndex': './src/index'
                }
            }
        ),
        new HtmlWebpackPlugin({
                template: './public/index.html'
        })
    ]
}