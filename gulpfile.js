var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');


gulp.task('default', function(){
	return gulp.src('public/javascripts/*.js')
	.pipe(concat('all-min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/dist'));
});

//if not working delete return and check uglify syntax