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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home */ \"./styles/Home.jsx\");\n/* harmony import */ var _styles_GlobalStyle_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle.jsx */ \"./styles/GlobalStyle.jsx\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/home.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }\n  }, __jsx(_styles_GlobalStyle_jsx__WEBPACK_IMPORTED_MODULE_2__[\"GlobalStyle\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }, __jsx(\"img\", {\n    className: \"logo-name\",\n    src: \"/images/Gift\\xDC.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"MenuDerecho\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 6\n    }\n  }, \"MENU\"), __jsx(\"img\", {\n    className: \"logo-image\",\n    src: \"/images/logo.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerText\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Texto\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"HOLA , \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }), \"\\xBF \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, \"Q\"), \"U\\xC9\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }), \"QUIERES \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 14\n    }\n  }), \"REGALAR \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 14\n    }\n  }, \"?\"))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerGift\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 14\n    }\n  }), \"RECOM\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 12\n    }\n  }, \"\\xC9\"), \"NDADO\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 6\n    }\n  })), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 14\n    }\n  }), \"ID\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"E\"), \"AL\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Login\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    className: \"yatienes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, \"\\xBFYa tienes cuenta?\"), __jsx(\"a\", {\n    className: \"anchor\",\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, \"Log in\")), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], {\n    src: \"/images/footer.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzeD81MTI1Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBYUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDbEIsU0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsT0FBRyxFQUFDLHNCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsT0FBRyxFQUFDLGtCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FGRCxDQUZELEVBU0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixXQUNnQixNQUFDLGlEQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEaEIsV0FFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsY0FHUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFQsY0FJUyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKVCxDQURELENBVEQsRUFpQkMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsV0FFTSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGTixVQURELEVBS0MsTUFBQyxrREFBRDtBQUFPLFdBQU8sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxFQVFDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLFFBRUcsTUFBQyxpREFBRDtBQUFNLFdBQU8sTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkgsT0FERCxFQUtDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBUkQsQ0FqQkQsRUFpQ0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELEVBRUM7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFJLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELENBakNELEVBdUNDLE1BQUMsbURBQUQ7QUFBUSxPQUFHLEVBQUMsb0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRCxDQUREO0FBMkNBLENBNUNEOztBQThDZUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuXHRIZWFkZXIsXG5cdENvbnRhaW5lclRleHQsXG5cdENvbnRhaW5lckdpZnQsXG5cdFRleHRvLFxuXHRTcGFuLFxuXHRHaWZ0VHlwZSxcblx0Rm9vdGVyLFxuXHRCYXJyYSxcblx0TG9naW4sXG5cdE1lbnVEZXJlY2hvLFxufSBmcm9tIFwiLi4vc3R5bGVzL0hvbWVcIjtcblxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbFN0eWxlLmpzeFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PEhlYWRlcj5cblx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvLW5hbWVcIiBzcmM9XCIvaW1hZ2VzL0dpZnTDnC5wbmdcIiAvPlxuXHRcdFx0XHQ8TWVudURlcmVjaG8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVudVwiPk1FTlU8L3A+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvLWltYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG5cdFx0XHRcdDwvTWVudURlcmVjaG8+XG5cdFx0XHQ8L0hlYWRlcj5cblx0XHRcdDxDb250YWluZXJUZXh0PlxuXHRcdFx0XHQ8VGV4dG8+XG5cdFx0XHRcdFx0SE9MQSAsIDxiciAvPsK/IDxTcGFuIHByaW1hcnk+UTwvU3Bhbj5Vw4lcblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRRVUlFUkVTIDxiciAvPlxuXHRcdFx0XHRcdFJFR0FMQVIgPFNwYW4+PzwvU3Bhbj5cblx0XHRcdFx0PC9UZXh0bz5cblx0XHRcdDwvQ29udGFpbmVyVGV4dD5cblx0XHRcdDxDb250YWluZXJHaWZ0PlxuXHRcdFx0XHQ8R2lmdFR5cGU+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRSRUdBTE8gPGJyIC8+XG5cdFx0XHRcdFx0XHRSRUNPTTxTcGFuPsOJPC9TcGFuPk5EQURPXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSBwcmltYXJ5IC8+XG5cdFx0XHRcdDwvR2lmdFR5cGU+XG5cdFx0XHRcdDxHaWZ0VHlwZT5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cblx0XHRcdFx0XHRcdElEPFNwYW4gcHJpbWFyeT5FPC9TcGFuPkFMXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSAvPlxuXHRcdFx0XHQ8L0dpZnRUeXBlPlxuXHRcdFx0PC9Db250YWluZXJHaWZ0PlxuXHRcdFx0PExvZ2luPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ5YXRpZW5lc1wiPsK/WWEgdGllbmVzIGN1ZW50YT88L3A+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImFuY2hvclwiIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0TG9nIGluXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTG9naW4+XG5cdFx0XHQ8Rm9vdGVyIHNyYz1cIi9pbWFnZXMvZm9vdGVyLnBuZ1wiIC8+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.jsx\n");

/***/ }),

/***/ "./styles/GlobalStyle.jsx":
/*!********************************!*\
  !*** ./styles/GlobalStyle.jsx ***!
  \********************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  #__next {\n      min-height: 100vh;\n      display: grid;\n      grid-template-rows: auto 1fr auto;\n    }\n    #__next > main {\n      margin: 1rem auto 0;\n      max-width: 80ch;\n    }\n    .body-main {\n      font-family: 'Balsamiq Sans', cursive;\n      font-size: 18px;\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGUuanN4PzBjNzUiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7OztDQUF0QyIsImZpbGUiOiIuL3N0eWxlcy9HbG9iYWxTdHlsZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgI19fbmV4dCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgfVxuICAgICNfX25leHQgPiBtYWluIHtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XG4gICAgICBtYXgtd2lkdGg6IDgwY2g7XG4gICAgfVxuICAgIC5ib2R5LW1haW4ge1xuICAgICAgZm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.jsx\n");

/***/ }),

/***/ "./styles/Home.jsx":
/*!*************************!*\
  !*** ./styles/Home.jsx ***!
  \*************************/
/*! exports provided: Header, MenuDerecho, ContainerText, Texto, Span, ContainerGift, GiftType, Barra, Login, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuDerecho\", function() { return MenuDerecho; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerText\", function() { return ContainerText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Texto\", function() { return Texto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerGift\", function() { return ContainerGift; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GiftType\", function() { return GiftType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Barra\", function() { return Barra; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t.logo-name {\n\t\tpadding: 10px;\n\t\theight: 37px;\n\t\twidth: auto;\n\t}\n\n\t.logo-image {\n\t\tpadding: 10px 25px;\n\t\theight: 70px;\n\t\twidth: auto;\n\t}\n`;\nconst MenuDerecho = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\talign-items: center;\n\t.menu {\n\t\tcolor: #87d3b8;\n\t}\n`;\nconst ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\theight: 250px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n`;\nconst Texto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`\n\ttext-align: center;\n\tcolor: black;\n\tfont-size: 50px;\n\tfont-family: \"Quicksand\";\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;\nconst ContainerGift = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-around;\n`;\nconst GiftType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: \"Quicksand\";\n`;\nconst Barra = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n\twidth: 230px;\n\theight: 6px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n\tbackground: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n\tborder: ${props => props.primary ? \"1px solid #ffab07\" : \"1px solid #87d3b8\"};\n`;\nconst Login = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tmargin-top: 25px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\n\t.yatienes {\n\t\tfont-size: 15px;\n\t}\n\n\t.anchor {\n\t\tcolor: blue;\n\t\tfont-size: 16px;\n\t}\n`;\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`\n\theight: auto;\n\twidth: 100vw;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5qc3g/NGY1MSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZWQiLCJkaXYiLCJNZW51RGVyZWNobyIsIkNvbnRhaW5lclRleHQiLCJUZXh0byIsInAiLCJTcGFuIiwic3BhbiIsInByb3BzIiwicHJpbWFyeSIsIkNvbnRhaW5lckdpZnQiLCJHaWZ0VHlwZSIsIkJhcnJhIiwiYnV0dG9uIiwiTG9naW4iLCJGb290ZXIiLCJpbWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7OztDQUExQjtBQWlCQSxNQUFNQyxXQUFXLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUEvQjtBQVFBLE1BQU1FLGFBQWEsR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7O0NBQWpDO0FBUUEsTUFBTUcsS0FBSyxHQUFHSix3REFBTSxDQUFDSyxDQUFFOzs7OztDQUF2QjtBQU9BLE1BQU1DLElBQUksR0FBR04sd0RBQU0sQ0FBQ08sSUFBSztVQUNyQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztDQUR0RDtBQUlBLE1BQU1DLGFBQWEsR0FBR1Ysd0RBQU0sQ0FBQ0MsR0FBSTs7O0NBQWpDO0FBS0EsTUFBTVUsUUFBUSxHQUFHWCx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTVCO0FBU0EsTUFBTVcsS0FBSyxHQUFHWix3REFBTSxDQUFDYSxNQUFPOzs7OztlQUtuQkwsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztXQUN0REQsS0FBRCxJQUNUQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsbUJBQWhCLEdBQXNDLG1CQUFvQjtDQVByRDtBQVVBLE1BQU1LLEtBQUssR0FBR2Qsd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7OztDQUF6QjtBQWtCQSxNQUFNYyxNQUFNLEdBQUdmLHdEQUFNLENBQUNnQixHQUFJOzs7Q0FBMUIiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdC5sb2dvLW5hbWUge1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0aGVpZ2h0OiAzN3B4O1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5cblx0LmxvZ28taW1hZ2Uge1xuXHRcdHBhZGRpbmc6IDEwcHggMjVweDtcblx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0d2lkdGg6IGF1dG87XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51RGVyZWNobyA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC5tZW51IHtcblx0XHRjb2xvcjogIzg3ZDNiODtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lclRleHQgPSBzdHlsZWQuZGl2YFxuXHRoZWlnaHQ6IDI1MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0byA9IHN0eWxlZC5wYFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiA1MHB4O1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyR2lmdCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdpZnRUeXBlID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG5gO1xuXG5leHBvcnQgY29uc3QgQmFycmEgPSBzdHlsZWQuYnV0dG9uYFxuXHR3aWR0aDogMjMwcHg7XG5cdGhlaWdodDogNnB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZhYjA3IDYwJSwgd2hpdGUgNjAlKTtcblx0YmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5wcmltYXJ5ID8gXCIjZmZhYjA3XCIgOiBcIiM4N2QzYjhcIil9O1xuXHRib3JkZXI6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLnByaW1hcnkgPyBcIjFweCBzb2xpZCAjZmZhYjA3XCIgOiBcIjFweCBzb2xpZCAjODdkM2I4XCJ9O1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ2luID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogMjVweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHQueWF0aWVuZXMge1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0fVxuXG5cdC5hbmNob3Ige1xuXHRcdGNvbG9yOiBibHVlO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5pbWdgXG5cdGhlaWdodDogYXV0bztcblx0d2lkdGg6IDEwMHZ3O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.jsx\n");

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