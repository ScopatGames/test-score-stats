// gulp
var gulp = require('gulp');

// plugins
var cssnano = require('gulp-cssnano');
var del = require('del');
var gulpIf = require('gulp-if');
var jshint = require('gulp-jshint');
var karmaServer = require('karma').Server;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

// tasks

gulp.task('build', function(callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'fonts', 'directives'],
        callback
    )
});

gulp.task('clean:dist', function(){
    return del.sync('dist');
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'serve', 'tdd', 'watch'],
        callback
    )
});

gulp.task('directives', function(){
   return gulp.src('app/directives/**/*')
        .pipe(gulp.dest('dist/directives'));
});

gulp.task('fonts', function(){
   return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('lint', function() {
   return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('serve', serve({
    root: 'app',
    port: 3000})
);

gulp.task('serve-build', serve({
    root: 'dist',
    port: 4000})
);

gulp.task('tdd', function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['lint']);
});
