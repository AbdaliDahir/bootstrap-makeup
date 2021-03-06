var gulp                   = require('gulp'),
    sass                   = require('gulp-sass'),
    autoprefixer           = require('gulp-autoprefixer'),
    rename                 = require('gulp-rename'),
    path                   = require("path"),
    cssnano                = require('gulp-cssnano'),
    cache                  = require('gulp-cache'),
    npmDist                = require('gulp-npm-dist'),
    del                    = require('del'),
    pug                    = require('gulp-pug'),
    browserSync            = require('browser-sync').create();
    

const production = false;

//
// Gulp plumber error handler - displays if any error occurs during the process on your command
//
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}


// SASS - Compile SASS files into CSS
//
gulp.task('sass', async function () {
  // Theme
  gulp.src(['./scss/*.scss'])
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(rename(function (file) {

        // file.dirname before any changes
        console.log("file.dirname  1 = " + file.dirname);

        // this removes the last directory
        var temp = file.dirname;
        console.log("    temp = " + temp);

        // now add 'Css' to the end of the directory path 
        file.dirname = path.join(temp, '');
        console.log("    after = " + file.dirname);
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});


//
// Gulp Watch and Tasks
//
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

//
// CSS minifier - merges and minifies the below given list of Front libraries into one theme.min.css
//
gulp.task('minCSS', function() {
  del.sync(['./dist/css/**/*.min.css'])
  return gulp.src(['./dist/css/**/**/*.css'])
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css/'));
});

//
// Copy Vendors - a utility to copy client-side dependencies into a folder
//
gulp.task('copyVendors', async function() {
  gulp.src(npmDist(), {base:'./node_modules/@popperjs/core/dist/cjs/'})
    .pipe(gulp.dest('./dist/js/'));
});

// Gulp Tasks
// gulp.task('default', gulp.series('sass', 'views', gulp.parallel('watch', 'serve'), function () {}));
gulp.task('default', gulp.series('sass', gulp.parallel('watch'), function () {}));

// gulp.task('build', ['minCSS']);