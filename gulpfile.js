var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
    less: ['./less/**/*.less'],
    bootstrap: {
        less: ['./bootstrap/less/**/*.less']
    }
};

gulp.task('default', ['less', 'bootstrap-less']);

gulp.task('less', function(done) {
    gulp.src('./less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./css/'))
        .on('end', done);
});

gulp.task('bootstrap-less', function() {
    gulp.src('./bootstrap/less/bootstrap.less')
        .pipe(less({
            //paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./bootstrap/css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./bootstrap/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.bootstrap.less, ['bootstrap-less', 'less']);
});
