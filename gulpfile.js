var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var serve = require('gulp-serve');


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('lint', function() {
   return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('serve', serve({
    root: 'app',
    port: 3000}));

gulp.task('watch', ['serve', 'sass', 'lint'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['lint']);
});

