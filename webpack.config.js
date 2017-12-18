var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: {
        main: './main'
    },
    output: {
        path: __dirname + './dist',
        publicPath: '/dist/',
        filename: 'main.js'
    },
    devServer: {
      contentBase: './dist',  
      compress: true,
      port:3000,
      inline: true,
      historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',//将资源转换成一个输出的模块
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks:true
        })
    ]
};

module.exports = config;