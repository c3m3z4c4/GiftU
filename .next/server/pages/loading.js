module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/loading.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/loading.jsx":
/*!***************************!*\
  !*** ./pages/loading.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Loading */ \"./styles/Loading.jsx\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/loading.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Loading = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Logo\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"logo-image\",\n    src: \"/images/logo.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 6\n    }\n  })), __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"ButLoading\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }), __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Texto\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, \"Estamos \", __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 14\n    }\n  }, \"buscando ...\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 6\n    }\n  }), \"espera un \", __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 16\n    }\n  }, \"poco\"), \" m\\xE1s \", __jsx(_styles_Loading__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 38\n    }\n  }, \"\\xDC\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2FkaW5nLmpzeD8wYzhlIl0sIm5hbWVzIjpbIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDckIsU0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBQyxrQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQUtDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUyxNQUFDLG9EQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRFQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsZ0JBR1csTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSFgsY0FHaUMsTUFBQyxvREFBRDtBQUFNLFdBQU8sTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSGpDLENBTEQsQ0FERCxDQUREO0FBZUEsQ0FoQkQ7O0FBa0JlQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvYWRpbmcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IExvZ28sIENvbnRhaW5lciwgVGV4dG8sIEJ1dExvYWRpbmcsIFNwYW4gfSBmcm9tIFwiLi4vc3R5bGVzL0xvYWRpbmdcIjtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8TG9nbz5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1hZ2VcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cblx0XHRcdFx0PC9Mb2dvPlxuXHRcdFx0XHQ8QnV0TG9hZGluZyAvPlxuXHRcdFx0XHQ8VGV4dG8+XG5cdFx0XHRcdFx0RXN0YW1vcyA8U3BhbiBwcmltYXJ5PmJ1c2NhbmRvIC4uLjwvU3Bhbj5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRlc3BlcmEgdW4gPFNwYW4+cG9jbzwvU3Bhbj4gbcOhcyA8U3BhbiBwcmltYXJ5PsOcPC9TcGFuPlxuXHRcdFx0XHQ8L1RleHRvPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/loading.jsx\n");

/***/ }),

/***/ "./styles/Loading.jsx":
/*!****************************!*\
  !*** ./styles/Loading.jsx ***!
  \****************************/
/*! exports provided: Container, Logo, ButLoading, Texto, Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButLoading\", function() { return ButLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Texto\", function() { return Texto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 100vh;\n\twidth: 100%;\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\t.logo-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\t.logo-image {\n\t\theight: 100px;\n\t\twidth: auto;\n\t}\n`;\nconst ButLoading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n\tborder-radius: 30px;\n\tborder: 1px solid #87d3b8;\n\twidth: 230px;\n\theight: 10px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n`;\nconst Texto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`\n\tcolor: black;\n\tfont-size: 22px;\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTG9hZGluZy5qc3g/OWJlZSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dvIiwiQnV0TG9hZGluZyIsImJ1dHRvbiIsIlRleHRvIiwicCIsIlNwYW4iLCJzcGFuIiwicHJvcHMiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBN0I7QUFTQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Q0FBeEI7QUFZQSxNQUFNRSxVQUFVLEdBQUdILHdEQUFNLENBQUNJLE1BQU87Ozs7Ozs7Q0FBakM7QUFTQSxNQUFNQyxLQUFLLEdBQUdMLHdEQUFNLENBQUNNLENBQUU7OztDQUF2QjtBQUtBLE1BQU1DLElBQUksR0FBR1Asd0RBQU0sQ0FBQ1EsSUFBSztVQUNyQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztDQUR0RCIsImZpbGUiOiIuL3N0eWxlcy9Mb2FkaW5nLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuXHQubG9nby1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5sb2dvLWltYWdlIHtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0TG9hZGluZyA9IHN0eWxlZC5idXR0b25gXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM4N2QzYjg7XG5cdHdpZHRoOiAyMzBweDtcblx0aGVpZ2h0OiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZhYjA3IDYwJSwgd2hpdGUgNjAlKTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0byA9IHN0eWxlZC5wYFxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMjJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Loading.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });