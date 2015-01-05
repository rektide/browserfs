var gulp = require('gulp')
var typescript = require('gulp-typescript')
//var eventStream = require('event-stream')

gulp.task('default', function() {
	return gulp
		.src('src/**/*.ts')
		.pipe(typescript())
		.pipe(gulp.dest('build'))
})
