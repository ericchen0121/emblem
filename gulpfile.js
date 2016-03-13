// GULP SASS
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp.src('./styles/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('defulat:watch', function () {
  gulp.watch('./stlyes/*.sass', ['sass']);
})
