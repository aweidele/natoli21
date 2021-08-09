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
  'node_modules/tiny-slider/dist/tiny-slider.js',
  'src/js/*.js'
];

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gcmq())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(pxtorem(pxtoremOptions))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('compress', function() {
  return gulp.src(jsQueue)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('icons', function() {
  gulp.src('src/icons/**/*.svg')
  .pipe(rename(function(path) {
    path.basename = "icon-" + path.basename;
    path.extname = ".svg.php";
  }))
  .pipe(gulp.dest('includes/icons/'));
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch('src/icons/**/*.svg', ['icons']);
});

gulp.task('default', ['sass', 'compress', 'watch']);
