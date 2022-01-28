'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var cssmin = require('gulp-cssmin');

gulp.task('sass', function () {
    return gulp.src('./html/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(gulp.dest('./html/css/'))
        .pipe(reload({stream:true}));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./html"
        }
    });

  gulp.watch(['./html/scss/**/*.scss'], ['sass']);
});

gulp.task('build', [
    'sass'
]);

