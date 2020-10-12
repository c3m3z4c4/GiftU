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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home */ \"./styles/Home.js\");\n/* harmony import */ var _styles_GlobalStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle.js */ \"./styles/GlobalStyle.js\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/home.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }\n  }, __jsx(_styles_GlobalStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"GlobalStyle\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }, __jsx(LogoName, {\n    src: \"/images/Gift\\xDC.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"MenuDerecho\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  }, \"MENU\"), __jsx(\"img\", {\n    className: \"logo-image\",\n    src: \"/images/logo.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerText\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Texto\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, \"HOLA , \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), \"\\xBF \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"Q\"), \"U\\xC9\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 6\n    }\n  }), \"QUIERES \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 14\n    }\n  }), \"REGALAR \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 14\n    }\n  }, \"?\"))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerGift\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 14\n    }\n  }), \"RECOM\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 12\n    }\n  }, \"\\xC9\"), \"NDADO\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 6\n    }\n  })), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 14\n    }\n  }), \"ID\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"E\"), \"AL\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Login\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    className: \"yatienes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, \"\\xBFYa tienes cuenta?\"), __jsx(\"a\", {\n    className: \"anchor\",\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, \"Log in\")), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], {\n    src: \"/images/footer.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzA4N2QiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFhQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNsQixTQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUMsTUFBQyxRQUFEO0FBQVUsT0FBRyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUM7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixPQUFHLEVBQUMsa0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUhELENBRkQsRUFVQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLFdBQ2dCLE1BQUMsaURBQUQ7QUFBTSxXQUFPLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURoQixXQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxjQUdTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIVCxjQUlTLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpULENBREQsQ0FWRCxFQWtCQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixXQUVNLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZOLFVBREQsRUFLQyxNQUFDLGtEQUFEO0FBQU8sV0FBTyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELEVBUUMsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsUUFFRyxNQUFDLGlEQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSCxPQURELEVBS0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FSRCxDQWxCRCxFQWtDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsRUFFQztBQUFHLGFBQVMsRUFBQyxRQUFiO0FBQXNCLFFBQUksRUFBQyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsQ0FsQ0QsRUF3Q0MsTUFBQyxtREFBRDtBQUFRLE9BQUcsRUFBQyxvQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENELENBREQ7QUE0Q0EsQ0E3Q0Q7O0FBK0NlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0SGVhZGVyLFxuXHRDb250YWluZXJUZXh0LFxuXHRDb250YWluZXJHaWZ0LFxuXHRUZXh0byxcblx0U3Bhbixcblx0R2lmdFR5cGUsXG5cdEZvb3Rlcixcblx0QmFycmEsXG5cdExvZ2luLFxuXHRNZW51RGVyZWNobyxcbn0gZnJvbSBcIi4uL3N0eWxlcy9Ib21lXCI7XG5cbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZS5qc1wiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PEhlYWRlcj5cblx0XHRcdFx0ey8qIDxpbWcgY2xhc3NOYW1lPVwibG9nby1uYW1lXCIgc3JjPVwiL2ltYWdlcy9HaWZ0w5wucG5nXCIgLz4gKi99XG5cdFx0XHRcdDxMb2dvTmFtZSBzcmM9XCIvaW1hZ2VzL0dpZnTDnC5wbmdcIiAvPlxuXHRcdFx0XHQ8TWVudURlcmVjaG8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVudVwiPk1FTlU8L3A+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvLWltYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG5cdFx0XHRcdDwvTWVudURlcmVjaG8+XG5cdFx0XHQ8L0hlYWRlcj5cblx0XHRcdDxDb250YWluZXJUZXh0PlxuXHRcdFx0XHQ8VGV4dG8+XG5cdFx0XHRcdFx0SE9MQSAsIDxiciAvPsK/IDxTcGFuIHByaW1hcnk+UTwvU3Bhbj5Vw4lcblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRRVUlFUkVTIDxiciAvPlxuXHRcdFx0XHRcdFJFR0FMQVIgPFNwYW4+PzwvU3Bhbj5cblx0XHRcdFx0PC9UZXh0bz5cblx0XHRcdDwvQ29udGFpbmVyVGV4dD5cblx0XHRcdDxDb250YWluZXJHaWZ0PlxuXHRcdFx0XHQ8R2lmdFR5cGU+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRSRUdBTE8gPGJyIC8+XG5cdFx0XHRcdFx0XHRSRUNPTTxTcGFuPsOJPC9TcGFuPk5EQURPXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSBwcmltYXJ5IC8+XG5cdFx0XHRcdDwvR2lmdFR5cGU+XG5cdFx0XHRcdDxHaWZ0VHlwZT5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cblx0XHRcdFx0XHRcdElEPFNwYW4gcHJpbWFyeT5FPC9TcGFuPkFMXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSAvPlxuXHRcdFx0XHQ8L0dpZnRUeXBlPlxuXHRcdFx0PC9Db250YWluZXJHaWZ0PlxuXHRcdFx0PExvZ2luPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ5YXRpZW5lc1wiPsK/WWEgdGllbmVzIGN1ZW50YT88L3A+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImFuY2hvclwiIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0TG9nIGluXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTG9naW4+XG5cdFx0XHQ8Rm9vdGVyIHNyYz1cIi9pbWFnZXMvZm9vdGVyLnBuZ1wiIC8+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ }),

/***/ "./styles/GlobalStyle.js":
/*!*******************************!*\
  !*** ./styles/GlobalStyle.js ***!
  \*******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  #__next {\n      min-height: 100vh;\n      display: grid;\n      grid-template-rows: auto 1fr auto;\n    }\n    #__next > main {\n      margin: 1rem auto 0;\n      max-width: 80ch;\n    }\n    .body-main {\n      font-family: 'Balsamiq Sans', cursive;\n      font-size: 18px;\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGUuanM/ZDFkNiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7Ozs7Ozs7O0NBQXRDIiwiZmlsZSI6Ii4vc3R5bGVzL0dsb2JhbFN0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICNfX25leHQge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIH1cbiAgICAjX19uZXh0ID4gbWFpbiB7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xuICAgICAgbWF4LXdpZHRoOiA4MGNoO1xuICAgIH1cbiAgICAuYm9keS1tYWluIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQmFsc2FtaXEgU2FucycsIGN1cnNpdmU7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.js\n");

/***/ }),

/***/ "./styles/Home.js":
/*!************************!*\
  !*** ./styles/Home.js ***!
  \************************/
/*! exports provided: Header, LogoName, MenuDerecho, ContainerText, Texto, Span, ContainerGift, GiftType, Barra, Login, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoName\", function() { return LogoName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuDerecho\", function() { return MenuDerecho; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerText\", function() { return ContainerText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Texto\", function() { return Texto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerGift\", function() { return ContainerGift; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GiftType\", function() { return GiftType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Barra\", function() { return Barra; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t// .logo-name {\n\t// \tpadding: 10px;\n\t// \theight: 37px;\n\t// \twidth: auto;\n\t// }\n\n\t.logo-image {\n\t\tpadding: 10px 25px;\n\t\theight: 70px;\n\t\twidth: auto;\n\t}\n`;\nconst LogoName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`\n\tpadding: 10px;\n\theight: 37px;\n\twidth: auto;\n`;\nconst MenuDerecho = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\talign-items: center;\n\t.menu {\n\t\tcolor: #87d3b8;\n\t}\n`;\nconst ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\theight: 250px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n`;\nconst Texto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`\n\ttext-align: center;\n\tcolor: black;\n\tfont-size: 50px;\n\tfont-family: \"Quicksand\";\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;\nconst ContainerGift = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-around;\n`;\nconst GiftType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: \"Quicksand\";\n`;\nconst Barra = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n\twidth: 230px;\n\theight: 6px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n\tbackground: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n\tborder: ${props => props.primary ? \"1px solid #ffab07\" : \"1px solid #87d3b8\"};\n`;\nconst Login = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tmargin-top: 25px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\n\t.yatienes {\n\t\tfont-size: 15px;\n\t}\n\n\t.anchor {\n\t\tcolor: blue;\n\t\tfont-size: 16px;\n\t}\n`;\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`\n\theight: auto;\n\twidth: 100vw;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5qcz8yMmRiIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwiaW1nIiwiTWVudURlcmVjaG8iLCJDb250YWluZXJUZXh0IiwiVGV4dG8iLCJwIiwiU3BhbiIsInNwYW4iLCJwcm9wcyIsInByaW1hcnkiLCJDb250YWluZXJHaWZ0IiwiR2lmdFR5cGUiLCJCYXJyYSIsImJ1dHRvbiIsIkxvZ2luIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7OztDQUExQjtBQWlCQSxNQUFNQyxRQUFRLEdBQUdGLHdEQUFNLENBQUNHLEdBQUk7Ozs7Q0FBNUI7QUFNQSxNQUFNQyxXQUFXLEdBQUdKLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUEvQjtBQVFBLE1BQU1JLGFBQWEsR0FBR0wsd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7O0NBQWpDO0FBUUEsTUFBTUssS0FBSyxHQUFHTix3REFBTSxDQUFDTyxDQUFFOzs7OztDQUF2QjtBQU9BLE1BQU1DLElBQUksR0FBR1Isd0RBQU0sQ0FBQ1MsSUFBSztVQUNyQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztDQUR0RDtBQUlBLE1BQU1DLGFBQWEsR0FBR1osd0RBQU0sQ0FBQ0MsR0FBSTs7O0NBQWpDO0FBS0EsTUFBTVksUUFBUSxHQUFHYix3REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTVCO0FBU0EsTUFBTWEsS0FBSyxHQUFHZCx3REFBTSxDQUFDZSxNQUFPOzs7OztlQUtuQkwsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztXQUN0REQsS0FBRCxJQUNUQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsbUJBQWhCLEdBQXNDLG1CQUFvQjtDQVByRDtBQVVBLE1BQU1LLEtBQUssR0FBR2hCLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBekI7QUFrQkEsTUFBTWdCLE1BQU0sR0FBR2pCLHdEQUFNLENBQUNHLEdBQUk7OztDQUExQiIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHQvLyAubG9nby1uYW1lIHtcblx0Ly8gXHRwYWRkaW5nOiAxMHB4O1xuXHQvLyBcdGhlaWdodDogMzdweDtcblx0Ly8gXHR3aWR0aDogYXV0bztcblx0Ly8gfVxuXG5cdC5sb2dvLWltYWdlIHtcblx0XHRwYWRkaW5nOiAxMHB4IDI1cHg7XG5cdFx0aGVpZ2h0OiA3MHB4O1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nb05hbWUgPSBzdHlsZWQuaW1nYFxuXHRwYWRkaW5nOiAxMHB4O1xuXHRoZWlnaHQ6IDM3cHg7XG5cdHdpZHRoOiBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVEZXJlY2hvID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Lm1lbnUge1xuXHRcdGNvbG9yOiAjODdkM2I4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyVGV4dCA9IHN0eWxlZC5kaXZgXG5cdGhlaWdodDogMjUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRvID0gc3R5bGVkLnBgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDUwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcblx0Y29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/IFwiI2ZmYWIwN1wiIDogXCIjODdkM2I4XCIpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJHaWZ0ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgR2lmdFR5cGUgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbmA7XG5cbmV4cG9ydCBjb25zdCBCYXJyYSA9IHN0eWxlZC5idXR0b25gXG5cdHdpZHRoOiAyMzBweDtcblx0aGVpZ2h0OiA2cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmFiMDcgNjAlLCB3aGl0ZSA2MCUpO1xuXHRiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5cdGJvcmRlcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMucHJpbWFyeSA/IFwiMXB4IHNvbGlkICNmZmFiMDdcIiA6IFwiMXB4IHNvbGlkICM4N2QzYjhcIn07XG5gO1xuXG5leHBvcnQgY29uc3QgTG9naW4gPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdC55YXRpZW5lcyB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cblx0LmFuY2hvciB7XG5cdFx0Y29sb3I6IGJsdWU7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiBhdXRvO1xuXHR3aWR0aDogMTAwdnc7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.js\n");

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