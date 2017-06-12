'use strict';

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    debug = require('gulp-debug'),
    gulpIf = require('gulp-if'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),

    path = {
        src: {
            pug: 'src/pug/*.pug',
            style: 'src/assets/styles/styles.scss',
            js:'src/assets/js/**',
            img: 'src/assets/img/*.*',
            fonts: 'src/assets/fonts/**'
        },
        docs: {
            html: 'docs',
            css: 'docs/assets/style/',
            js: 'docs/assets/js',
            img: 'docs/assets/img/',
            fonts: 'docs/assets/fonts/'
        }
    };

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

//html
gulp.task('pug', function() {
    return gulp.src(path.src.pug)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.docs.html))
});

//style
gulp.task('styles', function(){
    return gulp.src(path.src.style)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(path.docs.css))
});

//js
gulp.task('js', function () {
    return gulp.src(path.src.js)
        .pipe(gulp.dest(path.docs.js))
});

gulp.task('img', function() {
    return gulp.src(path.src.img, {since: gulp.lastRun('img')})
        .pipe(gulp.dest(path.docs.img));
});

//Fonts
gulp.task('fonts', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.docs.fonts))
});

gulp.task('clean', function() {
    return del('docs');
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('pug','styles', 'js', 'img', 'fonts'))
);

gulp.task('watch', function() {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/assets/styles/**/*.*', gulp.series('styles'));
    gulp.watch('src/assets/js/**/*.*', gulp.series('js'));
    gulp.watch('frontend/assets/img/*.*', gulp.series('img'));
});

//Server
gulp.task('serve', function() {
    browserSync.init({
        notify: false,
        server: 'docs'
    });
    browserSync.watch('docs/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
