var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pxtorem = require('gulp-pxtorem');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gcmq = require('gulp-group-css-media-queries');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions'],
  grid: true
};

var pxtoremOptions = {
  propList: [
    'font',
    'font-size',
    'line-height',
    'padding',
    'padding-top',
    'padding-left',
    'padding-right',
    'padding-bottom',
    'width',
    'height',
    'border',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'top',
    'left',
    'bottom',
    'right',
    'margin',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom'
  ]
};

var jsQueue = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/owl.carousel2/dist/owl.carousel.js',
  'src/js/*.js'
];

gulp.task('sass', function(){
  return gulp
    .src('sass/style.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gcmq())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(pxtorem(pxtoremOptions))
    .pipe(gulp.dest('css/'))
});

gulp.task('compress', function() {
  return gulp.src(jsQueue)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('docroot/js'))
    .pipe(rename('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docroot/js'));
});

gulp.task('iconfont', function(){
  gulp.src(['src/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: 'aw_glyphs',
      targetPath: 'src/sass/_icons.scss',
      fontPath: 'fonts/'
    }))
    .pipe(iconfont({
      fontName: 'aw_glyphs',
      normalize:true,
      fontHeight: 1001
     }))
    .pipe(gulp.dest('docroot/fonts/'));
});

gulp.task('compile', function () {
  'use strict';
  return gulp.src(['src/twig/**/*.twig','!src/twig/templates/**/*.twig'])
    .pipe(twig({
      data: content
    }))
    .pipe(gulp.dest('docroot/'));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docroot/images'));
});

gulp.task('server', function() {
  gulp.src('docroot')	// <-- your app folder
    .pipe(server({
      livereload: true,
      open: true,
      port: 1234	// set a port to avoid conflicts with other local apps
    }));
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
