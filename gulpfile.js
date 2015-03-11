var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');


gulp.task('clean', function () {
    return gulp.src(['build', 'dist'], {read: false})
        .pipe(clean())
});


gulp.task('babel', ['clean'], function () {
    return gulp.src(['src/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('build'))
});


gulp.task('browserify', ['babel'], function() {
    return gulp.src('build/Layout.js')
        .pipe(browserify())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'))
        ;
});


gulp.task('example', function() {
    gulp.src(['demo/Example.js'])
        .pipe(babel())
        .pipe(rename('Example.dist.js'))
        .pipe(gulp.dest('demo'));

    gulp.src('demo/Example.dist.js')
        .pipe(browserify())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('demo'))
        ;
});


gulp.task('watch', function () {
    return watch('./src/**/*', function () {
        gulp.start('default');
    });
});


gulp.task('default', ['browserify']);
