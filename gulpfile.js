var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var _ = require('lodash');
var globby = require('globby');

gulp.task('bundle', function(cb) {
    webpack(webpackConfig, function(err, stats) {
        if (err) throw new gutil.PluginError('webpack bundle', err); 
        gutil.log('[webpack]', stats.toString({colors: true}));
        cb();
    });
});

gulp.task('bundle-watch', function() {
    var customConfig = _.cloneDeep(webpackConfig);
    customConfig.watch = true;
    customConfig.watchDelay = 1;
    customConfig.devtool = 'source-map';
    webpack(customConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack bundle', err);
        }
        gutil.log('[webpack]', stats.toString({colors: true}));
    });
});

gulp.task('bundle-tests-watch', function() {
    var customConfig = _.cloneDeep(webpackConfig);
    var testFiles = globby.sync(['./app/**/*_test.js', '!./app/bower_components', '!./app/bundle_test.js']);
    customConfig.watch = true;
    customConfig.watchDelay = 1;
    customConfig.devtool = 'source-map';
    customConfig.entry = testFiles;
    customConfig.output.filename = 'bundle_test.js';
    webpack(customConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack bundle', err);
        }
        gutil.log('[webpack]', stats.toString({colors: true}));
    });
});

gulp.task('default', ['bundle-watch', 'bundle-tests-watch']);

