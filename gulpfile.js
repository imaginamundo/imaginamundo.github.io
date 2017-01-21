'use strict';
 
var gulp   = require('gulp');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./js'));
});
 
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});