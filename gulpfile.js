'use strict';
 
var gulp     = require('gulp');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin  = require('gulp-htmlmin');
var rename   = require('gulp-rename');
var sitemap  = require('gulp-sitemap');
 
gulp.task('images', () =>
    gulp.src('**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./'))
);

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(''));
});
 
gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function () {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./js'));
});

gulp.task('sitemap', function () {
    gulp.src('*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://imaginamundo.github.io/'
        }))
        .pipe(gulp.dest(''));
});
 
gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['uglify']);
    gulp.watch('./src/*.html', ['html']);
});