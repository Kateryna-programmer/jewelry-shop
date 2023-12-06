const { src, dest, watch, series, parallel } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

// Обратботка image
const image = () => {
  return src(path.image.src)
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(newer(path.image.dest))
    .pipe(webp())
    .pipe(dest(path.image.dest))
    .pipe(src(path.image.src))
    .pipe(newer(path.image.dest))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest(path.image.dest));
};

module.exports = image;
