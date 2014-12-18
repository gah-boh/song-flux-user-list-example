module.exports = {
    entry: './app/app.js',
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'vendor-shims'],
    }
};
