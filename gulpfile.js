var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync').create();
var notify       = require('gulp-notify');
var imagemin     = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect-php');

var sourcesPath = './sources';
var assetsPath  = './assets';

var jslibs = [
    sourcesPath + '/js/vendors/swiper.js',
    sourcesPath + '/js/app.js'
];


gulp.task('sass', function() {
    return gulp.src(sourcesPath + '/sass/main.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'opera 12', '> 1% in RU', 'ie 8']
        }))
        .pipe(gulp.dest(assetsPath))
        .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src(jslibs)
        .pipe(plumber())
        .pipe(concat(assetsPath + '/main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
        .pipe(notify('Complete!'));
});

gulp.task('image', () =>
  gulp.src(assetsPath + '/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest(assetsPath + '/img'))
);

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "market-c"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch(sourcesPath + '/sass/**/*.scss', ['sass']);
    gulp.watch(sourcesPath + '/js/app.js', ['js']);
});


gulp.task('default', ['watch', 'browser-sync']); //default gulp start project
gulp.task('imgmin', ['image']); // if need to minify images
