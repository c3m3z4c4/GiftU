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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/loading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/loading.js":
/*!**************************!*\
  !*** ./pages/loading.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_GlobalStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle.js */ \"./styles/GlobalStyle.js\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/loading.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 100vh;\n\twidth: 100%;\n`;\nconst WrapperImageLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n`;\nconst LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n\theight: 150px;\n\twidth: auto;\n\tmargin: 50px;\n`;\nconst ColorLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n\tborder-radius: 50px;\n\tborder: 1px solid #87d3b8;\n\twidth: 230px;\n\theight: 10px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`\n\ttext-align: center;\n\tfont-size: 30px;\n\tfont-family: \"Quicksand\";\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;\nconst image = \"../images/logo.png\";\n\nconst Loading = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(_styles_GlobalStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }), __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 4\n    }\n  }, __jsx(WrapperImageLine, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(LogoImage, {\n    src: image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 6\n    }\n  }), __jsx(ColorLine, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 6\n    }\n  })), __jsx(Text, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, \"Estamos \", __jsx(Span, {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 14\n    }\n  }, \"buscando ...\"), \" \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 48\n    }\n  }), \"espera un \", __jsx(Span, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 16\n    }\n  }, \"poco\"), \"m\\xE1s\", __jsx(Span, {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 36\n    }\n  }, \" \\xDC\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2FkaW5nLmpzPzRlMmUiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInNlY3Rpb24iLCJXcmFwcGVySW1hZ2VMaW5lIiwiZGl2IiwiTG9nb0ltYWdlIiwiaW1nIiwiQ29sb3JMaW5lIiwiYnV0dG9uIiwiVGV4dCIsInAiLCJTcGFuIiwic3BhbiIsInByb3BzIiwicHJpbWFyeSIsImltYWdlIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLE9BQVE7Ozs7Ozs7Q0FBL0I7QUFTQSxNQUFNQyxnQkFBZ0IsR0FBR0Ysd0RBQU0sQ0FBQ0csR0FBSTs7OztDQUFwQztBQU1BLE1BQU1DLFNBQVMsR0FBR0osd0RBQU0sQ0FBQ0ssR0FBSTs7OztDQUE3QjtBQU1BLE1BQU1DLFNBQVMsR0FBR04sd0RBQU0sQ0FBQ08sTUFBTzs7Ozs7OztDQUFoQztBQVNBLE1BQU1DLElBQUksR0FBR1Isd0RBQU0sQ0FBQ1MsQ0FBRTs7OztDQUF0QjtBQU1BLE1BQU1DLElBQUksR0FBR1Ysd0RBQU0sQ0FBQ1csSUFBSztVQUNkQyxLQUFELElBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0QixTQUFXO0NBRDdEO0FBSUEsTUFBTUMsS0FBSyxHQUFHLG9CQUFkOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3JCLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsU0FBRDtBQUFXLE9BQUcsRUFBRUQsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURELEVBS0MsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1MsTUFBQyxJQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRFQsT0FDMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQzQyxnQkFFVyxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZYLFlBRStCLE1BQUMsSUFBRDtBQUFNLFdBQU8sTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRi9CLENBTEQsQ0FGRCxDQUREO0FBZUEsQ0FoQkQ7O0FBa0JlQyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGUuanNcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgV3JhcHBlckltYWdlTGluZSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBMb2dvSW1hZ2UgPSBzdHlsZWQuaW1nYFxuXHRoZWlnaHQ6IDE1MHB4O1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luOiA1MHB4O1xuYDtcblxuY29uc3QgQ29sb3JMaW5lID0gc3R5bGVkLmJ1dHRvbmBcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzg3ZDNiODtcblx0d2lkdGg6IDIzMHB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmFiMDcgNjAlLCB3aGl0ZSA2MCUpO1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG5gO1xuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5gO1xuXG5jb25zdCBpbWFnZSA9IFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEdsb2JhbFN0eWxlcyAvPlxuXHRcdFx0PFdyYXBwZXI+XG5cdFx0XHRcdDxXcmFwcGVySW1hZ2VMaW5lPlxuXHRcdFx0XHRcdDxMb2dvSW1hZ2Ugc3JjPXtpbWFnZX0gLz5cblx0XHRcdFx0XHQ8Q29sb3JMaW5lIC8+XG5cdFx0XHRcdDwvV3JhcHBlckltYWdlTGluZT5cblx0XHRcdFx0PFRleHQ+XG5cdFx0XHRcdFx0RXN0YW1vcyA8U3BhbiBwcmltYXJ5PmJ1c2NhbmRvIC4uLjwvU3Bhbj4gPGJyIC8+XG5cdFx0XHRcdFx0ZXNwZXJhIHVuIDxTcGFuPnBvY288L1NwYW4+bcOhczxTcGFuIHByaW1hcnk+IMOcPC9TcGFuPlxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L1dyYXBwZXI+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/loading.js\n");

/***/ }),

/***/ "./styles/GlobalStyle.js":
/*!*******************************!*\
  !*** ./styles/GlobalStyle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  #__next {\n      min-height: 100vh;\n      display: grid;\n      grid-template-rows: auto 1fr auto;\n    }\n    #__next > main {\n      margin: 1rem auto 0;\n      max-width: 80ch;\n    }\n    .body-main {\n      font-family: 'Balsamiq Sans', cursive;\n      font-size: 18px;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGUuanM/ZDFkNiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7OztDQUF0QztBQWdCZUQsMEVBQWYiLCJmaWxlIjoiLi9zdHlsZXMvR2xvYmFsU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAjX19uZXh0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICB9XG4gICAgI19fbmV4dCA+IG1haW4ge1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbiAgICAgIG1heC13aWR0aDogODBjaDtcbiAgICB9XG4gICAgLmJvZHktbWFpbiB7XG4gICAgICBmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.js\n");

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