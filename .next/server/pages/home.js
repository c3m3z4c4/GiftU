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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home */ \"./styles/Home.jsx\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/home.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }, __jsx(\"img\", {\n    className: \"logo-name\",\n    src: \"/images/Gift\\xDC.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"MenuDerecho\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 6\n    }\n  }, \"menu\"), __jsx(\"img\", {\n    className: \"logo-image\",\n    src: \"/images/logo.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerText\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Texto\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, \"HOLA , \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), \"\\xBF \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, \"Q\"), \"U\\xC9\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 6\n    }\n  }), \"QUIERES \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 14\n    }\n  }), \"REGALAR \", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 14\n    }\n  }, \"?\"))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"ContainerGift\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }, __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }\n  }), \"RECOM\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }\n  }, \"\\xC9\"), \"NDADO\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 6\n    }\n  })), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"GiftType\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 6\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 14\n    }\n  }), \"ID\", __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Span\"], {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"E\"), \"AL\"), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Barra\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 6\n    }\n  }))), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Login\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    className: \"yatienes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"\\xBFYa tienes cuenta?\"), __jsx(\"a\", {\n    className: \"anchor\",\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, \"Log in\")), __jsx(_styles_Home__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], {\n    src: \"/images/footer.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzeD81MTI1Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBYUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDbEIsU0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLE9BQUcsRUFBQyxzQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFQztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBQyxrQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBRkQsQ0FERCxFQVFDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsV0FDZ0IsTUFBQyxpREFBRDtBQUFNLFdBQU8sTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRGhCLFdBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELGNBR1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhULGNBSVMsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSlQsQ0FERCxDQVJELEVBZ0JDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLFdBRU0sTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk4sVUFERCxFQUtDLE1BQUMsa0RBQUQ7QUFBTyxXQUFPLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBREQsRUFRQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixRQUVHLE1BQUMsaURBQUQ7QUFBTSxXQUFPLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZILE9BREQsRUFLQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQVJELENBaEJELEVBZ0NDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxFQUVDO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBc0IsUUFBSSxFQUFDLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxDQWhDRCxFQXNDQyxNQUFDLG1EQUFEO0FBQVEsT0FBRyxFQUFDLG9CQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0QsQ0FERDtBQTBDQSxDQTNDRDs7QUE2Q2VBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0SGVhZGVyLFxuXHRDb250YWluZXJUZXh0LFxuXHRDb250YWluZXJHaWZ0LFxuXHRUZXh0byxcblx0U3Bhbixcblx0R2lmdFR5cGUsXG5cdEZvb3Rlcixcblx0QmFycmEsXG5cdExvZ2luLFxuXHRNZW51RGVyZWNobyxcbn0gZnJvbSBcIi4uL3N0eWxlcy9Ib21lXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEhlYWRlcj5cblx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvLW5hbWVcIiBzcmM9XCIvaW1hZ2VzL0dpZnTDnC5wbmdcIiAvPlxuXHRcdFx0XHQ8TWVudURlcmVjaG8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVudVwiPm1lbnU8L3A+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvLWltYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG5cdFx0XHRcdDwvTWVudURlcmVjaG8+XG5cdFx0XHQ8L0hlYWRlcj5cblx0XHRcdDxDb250YWluZXJUZXh0PlxuXHRcdFx0XHQ8VGV4dG8+XG5cdFx0XHRcdFx0SE9MQSAsIDxiciAvPsK/IDxTcGFuIHByaW1hcnk+UTwvU3Bhbj5Vw4lcblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRRVUlFUkVTIDxiciAvPlxuXHRcdFx0XHRcdFJFR0FMQVIgPFNwYW4+PzwvU3Bhbj5cblx0XHRcdFx0PC9UZXh0bz5cblx0XHRcdDwvQ29udGFpbmVyVGV4dD5cblx0XHRcdDxDb250YWluZXJHaWZ0PlxuXHRcdFx0XHQ8R2lmdFR5cGU+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRSRUdBTE8gPGJyIC8+XG5cdFx0XHRcdFx0XHRSRUNPTTxTcGFuPsOJPC9TcGFuPk5EQURPXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSBwcmltYXJ5IC8+XG5cdFx0XHRcdDwvR2lmdFR5cGU+XG5cdFx0XHRcdDxHaWZ0VHlwZT5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cblx0XHRcdFx0XHRcdElEPFNwYW4gcHJpbWFyeT5FPC9TcGFuPkFMXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxCYXJyYSAvPlxuXHRcdFx0XHQ8L0dpZnRUeXBlPlxuXHRcdFx0PC9Db250YWluZXJHaWZ0PlxuXHRcdFx0PExvZ2luPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ5YXRpZW5lc1wiPsK/WWEgdGllbmVzIGN1ZW50YT88L3A+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImFuY2hvclwiIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0TG9nIGluXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTG9naW4+XG5cdFx0XHQ8Rm9vdGVyIHNyYz1cIi9pbWFnZXMvZm9vdGVyLnBuZ1wiIC8+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.jsx\n");

/***/ }),

/***/ "./styles/Home.jsx":
/*!*************************!*\
  !*** ./styles/Home.jsx ***!
  \*************************/
/*! exports provided: Header, MenuDerecho, ContainerText, Texto, Span, ContainerGift, GiftType, Barra, Login, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuDerecho\", function() { return MenuDerecho; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerText\", function() { return ContainerText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Texto\", function() { return Texto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerGift\", function() { return ContainerGift; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GiftType\", function() { return GiftType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Barra\", function() { return Barra; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t.logo-name {\n\t\tpadding: 10px;\n\t\theight: 37px;\n\t\twidth: auto;\n\t}\n\n\t.logo-image {\n\t\tpadding: 10px 25px;\n\t\theight: 70px;\n\t\twidth: auto;\n\t}\n`;\nconst MenuDerecho = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\talign-items: center;\n\n\t.menu {\n\t\tcolor: #87d3b8;\n\t}\n`;\nconst ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\theight: 250px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n`;\nconst Texto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`\n\ttext-align: center;\n\tcolor: black;\n\tfont-size: 50px;\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;\nconst ContainerGift = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-around;\n`;\nconst GiftType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n`;\nconst Barra = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n\twidth: 230px;\n\theight: 6px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n\tbackground: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n\tborder: ${props => props.primary ? \"1px solid #ffab07\" : \"1px solid #87d3b8\"};\n`;\nconst Login = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n\tmargin-top: 25px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\n\t.yatienes {\n\t\tfont-size: 15px;\n\t}\n\n\t.anchor {\n\t\tcolor: blue;\n\t\tfont-size: 16px;\n\t}\n`;\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`\n\theight: auto;\n\twidth: 100vw;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5qc3g/NGY1MSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZWQiLCJkaXYiLCJNZW51RGVyZWNobyIsIkNvbnRhaW5lclRleHQiLCJUZXh0byIsInAiLCJTcGFuIiwic3BhbiIsInByb3BzIiwicHJpbWFyeSIsIkNvbnRhaW5lckdpZnQiLCJHaWZ0VHlwZSIsIkJhcnJhIiwiYnV0dG9uIiwiTG9naW4iLCJGb290ZXIiLCJpbWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7OztDQUExQjtBQWlCQSxNQUFNQyxXQUFXLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBL0I7QUFTQSxNQUFNRSxhQUFhLEdBQUdILHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUFqQztBQVFBLE1BQU1HLEtBQUssR0FBR0osd0RBQU0sQ0FBQ0ssQ0FBRTs7OztDQUF2QjtBQU1BLE1BQU1DLElBQUksR0FBR04sd0RBQU0sQ0FBQ08sSUFBSztVQUNyQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztDQUR0RDtBQUlBLE1BQU1DLGFBQWEsR0FBR1Ysd0RBQU0sQ0FBQ0MsR0FBSTs7O0NBQWpDO0FBS0EsTUFBTVUsUUFBUSxHQUFHWCx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Q0FBNUI7QUFRQSxNQUFNVyxLQUFLLEdBQUdaLHdEQUFNLENBQUNhLE1BQU87Ozs7O2VBS25CTCxLQUFELElBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0QixTQUFXO1dBQ3RERCxLQUFELElBQ1RBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixtQkFBaEIsR0FBc0MsbUJBQW9CO0NBUHJEO0FBVUEsTUFBTUssS0FBSyxHQUFHZCx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0NBQXpCO0FBa0JBLE1BQU1jLE1BQU0sR0FBR2Ysd0RBQU0sQ0FBQ2dCLEdBQUk7OztDQUExQiIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0LmxvZ28tbmFtZSB7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRoZWlnaHQ6IDM3cHg7XG5cdFx0d2lkdGg6IGF1dG87XG5cdH1cblxuXHQubG9nby1pbWFnZSB7XG5cdFx0cGFkZGluZzogMTBweCAyNXB4O1xuXHRcdGhlaWdodDogNzBweDtcblx0XHR3aWR0aDogYXV0bztcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVEZXJlY2hvID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHQubWVudSB7XG5cdFx0Y29sb3I6ICM4N2QzYjg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJUZXh0ID0gc3R5bGVkLmRpdmBcblx0aGVpZ2h0OiAyNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dG8gPSBzdHlsZWQucGBcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogNTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyR2lmdCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdpZnRUeXBlID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBCYXJyYSA9IHN0eWxlZC5idXR0b25gXG5cdHdpZHRoOiAyMzBweDtcblx0aGVpZ2h0OiA2cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmFiMDcgNjAlLCB3aGl0ZSA2MCUpO1xuXHRiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyBcIiNmZmFiMDdcIiA6IFwiIzg3ZDNiOFwiKX07XG5cdGJvcmRlcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMucHJpbWFyeSA/IFwiMXB4IHNvbGlkICNmZmFiMDdcIiA6IFwiMXB4IHNvbGlkICM4N2QzYjhcIn07XG5gO1xuXG5leHBvcnQgY29uc3QgTG9naW4gPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdC55YXRpZW5lcyB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cblx0LmFuY2hvciB7XG5cdFx0Y29sb3I6IGJsdWU7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiBhdXRvO1xuXHR3aWR0aDogMTAwdnc7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.jsx\n");

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