const { src, dest } = require('gulp');

// Плагины
const clean = require('gulp-clean');

// Конфигурация
const path = require('../config/path.js');

// Удаление директории
const clear = () => {
  return src(path.root).pipe(clean());
};

module.exports = clear;
