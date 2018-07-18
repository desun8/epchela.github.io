const gulp = require('gulp'),
	  rename = require('gulp-rename'),
	  fileinclude = require('gulp-file-include'),
	  postcss = require('gulp-postcss'),
	  sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync').create(),
      svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace'),
      imagemin = require('gulp-imagemin'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat');






gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['fileinclude']);
  gulp.watch('src/style/**/*.{pcss,css}', ['css']);
  gulp.watch('src/script/**/*.js', ['js']);
});

gulp.task('serve', function () {
  browserSync.init({
    server: '../'
  });

  browserSync.watch('../**/*.*', browserSync.reload);
});

gulp.task('fileinclude', function() {
  gulp.src(['src/_index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename( (path) => path.basename = 'index' ))
    .pipe(gulp.dest('../'));
});

gulp.task('css', function () {
  return gulp.src('src/style/style.pcss')
	.pipe( sourcemaps.init() )
	.pipe( postcss([
	  require('postcss-partial-import'),
	  require('postcss-nested'),
      require('postcss-custom-media'),
      require('postcss-media-variables'),
      require('postcss-custom-properties'),
      require('postcss-extend'),
      require('postcss-media-variables'),
      require('postcss-utilities'),
      require('postcss-cssnext')
	]) )
	.pipe( sourcemaps.write('.') )
	.pipe(rename('style.css'))
	.pipe( gulp.dest('../') );
});


gulp.task('svgMin', function () {
  return gulp.src('src/img/*.svg')
    .pipe(svgmin({
      js2svg: {pretty: true}
    }))
    .pipe(gulp.dest('../img/'));
});

gulp.task('svgSprite', function () {
  return gulp.src('src/img/_svgSprite/*.svg')
    .pipe(svgmin({js2svg: {pretty: true}}))
  // remove fill and style
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style')
      },
      parserOptions: {xmlMode: true}
    }))

  // cheerio plugin create unnecessary string '>', so replace it.
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: true,
        css: {
          render: {
            css: true
          }
        }
      }
    }))
    .pipe(gulp.dest('../img'));
});

gulp.task('imgMin', function () {
  return gulp.src('src/img/**/*.{jpeg,jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('../img/'))
});

gulp.task("js", function () {
  return gulp.src("src/script/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(concat("script.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("../"));
});

gulp.task('default', ['watch', 'serve']);
gulp.task('build', ['fileinclude', 'css']);
