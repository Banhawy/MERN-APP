import { dirname } from "path";

module.exports = {
    entry: '/src/index.js',
    output: {
        path: dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
}