/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// pe-7s-close s-close\r\n\r\nconst showSearchField = __webpack_require__(/*! ./modules/search */ \"./src/js/modules/search.js\");\r\nshowSearchField();\r\n\r\nconst openCloseBurger = __webpack_require__(/*! ./modules/burger */ \"./src/js/modules/burger.js\");\r\nopenCloseBurger();\r\n\n\n//# sourceURL=webpack://furnicing-shop/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = function () {\r\n  $('.burger').on('click', function () {\r\n    $(this).hide();\r\n    $('.navbar').css({ display: 'block', height: '100vh', opacity: '1' });\r\n    $('.burger-close').css({ display: 'block', opacity: '1' });\r\n  });\r\n\r\n  $('.burger-close').on('click', function () {\r\n    $('.burger').show();\r\n    $('.search-cart').show();\r\n    $('.navbar, .burger-close').css({ display: 'none' });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://furnicing-shop/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = function () {\r\n  $('.search-item').on('click', function () {\r\n    $(this).hide();\r\n    $('.search-input, .search-close').css('display', 'initial');\r\n  });\r\n\r\n  $('.search-close').on('click', function () {\r\n    $('.search-input, .search-close').css('display', 'none');\r\n    $('.search-item').show();\r\n  });\r\n\r\n  let cartItemCount = 0;\r\n\r\n  $('#cartIcon').on('click', function () {\r\n    cartItemCount++;\r\n    $('#cartCount').text(cartItemCount);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://furnicing-shop/./src/js/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;