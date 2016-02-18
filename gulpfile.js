var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
    }));
});

gulp.task('lint', function() {
   return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserSync', function(){
   browserSync.init({
       server: {
           baseDir: 'app',
       }
   }); 
});

gulp.task('watch', ['sass', 'lint'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['lint']);
});

