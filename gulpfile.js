var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

//if not working delete return and check uglify syntax
gulp.task('scripts', function(){
	return gulp.src('public/javascripts/*.js')
	.pipe(concat('all-min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/dist'));
});

// gulp.task('watch', function(){
// 	gulp.watch('public/javascripts/*.js', ['scripts']);
// });


gulp.task('default', ['scripts'], function(){

});