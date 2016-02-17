var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

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


gulp.task('watch', ['sass', 'lint'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['lint']);
});