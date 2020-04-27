const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        /*Dashboard: './local_apps/dashboard/app.js',
        AdminUsers: './local_apps/admin/users/app.js',
        BTMS: './local_apps/front/btms/index.js',*/
        MainScss: './src/sass/main.scss'
    },
    output: {
        path: path.resolve('./'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options:
                            { outputPath: './public/css', name: 'main.min.css' }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', 'actions.jsx']
    },
};