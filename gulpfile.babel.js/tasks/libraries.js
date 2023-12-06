const { src, dest } = require('gulp');
const path = require('../config/path');

const copyLibraries = () => {
  return src(path.libraries.src).pipe(dest(path.libraries.dest));
};

module.exports = copyLibraries;
