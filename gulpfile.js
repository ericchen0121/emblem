// GULP SASS
var gulp = require('gulp');
var sass = require('gulp-sass');

//http://www.codevoila.com/post/5/customizing-bootstrap-css-style-with-gulp-bower-and-sass
// source and distribution folder
var
  source = 'src/',
  dest = 'dist/';


// Bootstrap scss source
var bootstrapSass = {
    in: './bower_components/bootstrap-sass-official/'
};
    
// fonts
var fonts = {
    in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
    out: dest + 'fonts/'
};

// css source file: .scss files
var css = {
    in: source + 'css/main.scss',
    out: dest + 'css/',
    watch: source + 'css/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(gulp.dest(css.out));
});

// default task
gulp.task('default', ['sass'], function () {
     gulp.watch(css.watch, ['sass']);
});

// // TASKS
// gulp.task('default', function () {
//   return gulp.src('./styles/*.sass')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./dist/css'));
// })

// gulp.task('default:watch', function () {
//   gulp.watch('./styles/*.sass', ['sass']);
// })

// gulp.task('default:bs', function () {
//   return gulp.src('./node_modules/bootstrap-sass/assets/stylesheets/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./dist/css'));
// })
