var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var _ = require('lodash');
var globby = require('globby');
var minimist = require('minimist');
var notify = require('gulp-notify');
var nn = require('node-notifier');

gulp.task('bundle', function(cb) {
    webpack(webpackConfig, function(err, stats) {
        if (err) throw new gutil.PluginError('webpack bundle', err); 
        gutil.log('[webpack]', stats.toString({colors: true}));
        cb();
    });
});

function getNotifier() {
    if(minimist(process.argv.slice(2)).notify === 'growl') {
        return new nn.Growl({name: 'Gulp'});
    }
    return nn;
}

function webpackWatch(config) {
    var notifier = getNotifier();
    config.watch = true;
    config.watchDelay = 1;
    config.devtool = 'source-map';
    webpack(config, function(err, stats) {
        if (err) {
            notifier.notify({
                title: 'WebPack Build',
                message: '${config.output.filename} failed'
            });
            throw new gutil.PluginError('webpack bundle', err);
        }
        gutil.log('[webpack]', stats.toString({colors: true}));
        notifier.notify({
            title: 'WebPack Build',
            message: config.output.filename + ' built succesfully'
        });
    });
}

gulp.task('bundle-watch', function() {
    var customConfig = _.cloneDeep(webpackConfig);
    webpackWatch(customConfig);
});

gulp.task('bundle-tests-watch', function() {
    var customConfig = _.cloneDeep(webpackConfig);
    var testFiles = globby.sync(['./app/**/*_test.js', '!./app/bower_components', '!./app/bundle_test.js']);
    customConfig.entry = testFiles;
    customConfig.output.filename = 'bundle_test.js';
    webpackWatch(customConfig);
});

gulp.task('default', ['bundle-watch', 'bundle-tests-watch']);

