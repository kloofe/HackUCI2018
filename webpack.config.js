var path = require('path');
var node_dir = __dirname + '/node_modules';
module.exports = {
	entry: './WebContent/js/index.js',
    devtool: 'sourcemaps',
    cache: false,
    debug: true,
    output: {
        path: __dirname,
        filename: './WebContent/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
            	test: /\.css$/,
            	loader: 'style-loader'
            }, 
            {
            	test: /\.css$/,
            	loader: 'css-loader',
            	query: {
            		modules: true,
            	    localIdentName: '[name]__[local]___[hash:base64:5]'
            	}
            }
        ]
    }
};