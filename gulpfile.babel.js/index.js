const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path');

// Задачи
const clear = require('./tasks/clear');
const html = require('./tasks/html');
const scss = require('./tasks/scss');
const js = require('./tasks/js');
const image = require('./tasks/image');
const copyLibrariesTask = require('./tasks/libraries');

// Сервер
const server = () => {
  browserSync.init({
    server: { baseDir: path.root },
    injectChanges: true,
  });
};

// Наблюдатель
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.image.watch, image).on('all', browserSync.reload);
};

// Сборка

exports.dev = series(
  // clear,
  parallel(html, scss, js, image, copyLibrariesTask),
  parallel(watcher, server)
);
