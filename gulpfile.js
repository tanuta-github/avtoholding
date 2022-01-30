let gulp     = require('gulp'),
browserSync  = require('browser-sync').create(),
sass         = require('gulp-sass')(require('sass')),
cssmin     = require('gulp-clean-css');


gulp.task('sass', function () {
    return gulp.src('./html/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./html/css/'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./html"
        }
    });

  gulp.watch(['./html/scss/**/*.scss'], gulp.series('sass'));
});
