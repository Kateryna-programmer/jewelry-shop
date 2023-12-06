const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Обратботка js
const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(babel())
    .pipe(
      webpack({
        mode: 'development',
      })
    )
    .pipe(dest(path.js.dest, { sourcemaps: true }));
};

module.exports = js;
