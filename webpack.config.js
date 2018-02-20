const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname ,'./public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /.json$/,
                use: [
                    'json-loader'
                ]
            },
            {
                test: /.jsx$/,
                use: [
                    'jsx-loader'
                ]
            }
        ]
    }
}