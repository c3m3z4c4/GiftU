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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.jsx":
/*!*************************************!*\
  !*** ./components/Button/index.jsx ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./components/Button/style.jsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/cesarmezacarrillo/Desktop/demo1 GiftU/GiftU_frontend/components/Button/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Button = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__[\"Boton\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, props.title));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qc3g/NTk5MyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUMxQixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQyxLQUFLLENBQUNDLEtBQWQsQ0FERixDQURGO0FBS0QsQ0FOTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm90b24gfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxCb3Rvbj57cHJvcHMudGl0bGV9PC9Cb3Rvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/index.jsx\n");

/***/ }),

/***/ "./components/Button/style.jsx":
/*!*************************************!*\
  !*** ./components/Button/style.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* import styled from 'styled-components'\n\nexport const Boton = styled.a`\n    width: 124.16px;\n    height: 34.58px;\n    background: #87D3B8;\n    background: rgba(21,152,105,0.2);\n    border: none;\n    box-sizing: border-box;\n    border-radius: 12px;\n    transform: matrix(1, 0, 0, 1, 0, 0);\n    font-weight: bold;\n    font-size: 11px;\n    line-height: 14px;\n    display: flex;\n    align-items: center;\n    letter-spacing: 0.11em;\n    font-family: 'Quicksand', sans-serif;\n    display: flex;\n    justify-content: center;\n    color: rgba(20, 180, 122, 0.49);\n    margin-top: 50px;\n    \n      &:hover \n      {\n        color: rgba(254,170,7, 0.7);\n        box-shadow: -1px 2px 5px 6px rgba(254,170,7, 0.7);\n        transition: linear 0.5s; \n      }\n      \n` *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5qc3g/ZWNmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCb3RvbiA9IHN0eWxlZC5hYFxuICAgIHdpZHRoOiAxMjQuMTZweDtcbiAgICBoZWlnaHQ6IDM0LjU4cHg7XG4gICAgYmFja2dyb3VuZDogIzg3RDNCODtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLDE1MiwxMDUsMC4yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTFlbTtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyMCwgMTgwLCAxMjIsIDAuNDkpO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgXG4gICAgICAmOmhvdmVyIFxuICAgICAge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTQsMTcwLDcsIDAuNyk7XG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCA2cHggcmdiYSgyNTQsMTcwLDcsIDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGxpbmVhciAwLjVzOyBcbiAgICAgIH1cbiAgICAgIFxuYCAqLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button/style.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.jsx\");\nvar _jsxFileName = \"/Users/cesarmezacarrillo/Desktop/demo1 GiftU/GiftU_frontend/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst App = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"header\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/Gift\\xDC.png\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  })), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }, \"\\xBFQue quieres regalar?\")), __jsx(\"section\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    text: \"Un regalo Recomendado\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDZCxTQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyx1QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQUpKLENBREo7QUFlSCxDQWhCRDs7QUFrQmVBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvR2lmdMOcLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoMT7Cv1F1ZSBxdWllcmVzIHJlZ2FsYXI/PC9oMT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRleHQ9J1VuIHJlZ2FsbyBSZWNvbWVuZGFkbyc+PC9hPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });