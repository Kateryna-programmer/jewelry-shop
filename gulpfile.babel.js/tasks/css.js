const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');

// Обратботка css
const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(concat('style.css'))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'style.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'style.min.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: true }));
};

module.exports = css;
