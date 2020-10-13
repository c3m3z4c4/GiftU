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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\PlatziMaster\\Gift\xDC Project\\frontend\\GiftU_frontend\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;
const WrapperLogin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const Cuenta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
	font-size: 15px;
`;
const LinkLogin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
	color: blue;
	font-size: 16px;
`;
const ImageFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
	height: auto;
	width: 100vw;
`;
const image = "images/footer.png";

const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, __jsx(WrapperLogin, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(Cuenta, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, "\xBFYa tienes cuenta?"), __jsx(LinkLogin, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, "Log in")), __jsx(ImageFooter, {
    src: image,
    alt: "footer`s image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\PlatziMaster\\Gift\xDC Project\\frontend\\GiftU_frontend\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
	z-index: 5;
	display: flex;
	justify-content: space-between;
`;
const WrapperMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	display: flex;
	align-items: center;
`;
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
	font-size: 30px;
	font-family: "Quicksand";
	color: #87d3b8;
`;
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
	padding: 10px 25px;
	height: 60px;
	width: auto;
`;
const LogoName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;
const image = "../images/logo.png";
const name = "../images/giftu.png";

const Header = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, __jsx(LogoName, {
    src: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(WrapperMenu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "MENU"), __jsx(LogoImage, {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\PlatziMaster\\Gift\xDC Project\\frontend\\GiftU_frontend\\components\\main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;
const WrapperTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
	text-align: center;
	color: black;
	font-size: 50px;
	font-family: "Quicksand";
`;
const WrapperGifts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	display: flex;
	justify-content: space-around;
	width: 100vw;
`;
const Wrappergift = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;
const GiftTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
	text-align: center;
	color: black;
	// font-size: 50px;
	font-family: "Quicksand";
`;
const ColorLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
	width: 230px;
	height: 6px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
	background: ${props => props.primary ? "#ffab07" : "#87d3b8"};
	border: ${props => props.primary ? "1px solid #ffab07" : "1px solid #87d3b8"};
`;
const Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
	color: ${props => props.primary ? "#ffab07" : "#87d3b8"};
`;

const Main = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx(WrapperTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, "HOLA, ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), "\xBF ", __jsx(Span, {
    primary: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "Q"), "U\xC9 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 46
    }
  }), "QUIERES ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), "REGALAR ", __jsx(Span, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "?"))), __jsx(WrapperGifts, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(Wrappergift, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, __jsx(GiftTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "REGALO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }), "RECOM ", __jsx(Span, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 14
    }
  }, "\xC9"), "NDADO"), __jsx(ColorLine, {
    primary: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  })), __jsx(Wrappergift, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(GiftTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "REGALO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), "ID", __jsx(Span, {
    primary: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 10
    }
  }, "E"), "AL"), __jsx(ColorLine, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main */ "./components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\PlatziMaster\\Gift\xDC Project\\frontend\\GiftU_frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* import GlobalStyle from "../Styles/GlobalStyle"; */





const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), __jsx(_components_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIldyYXBwZXJMb2dpbiIsImRpdiIsIkN1ZW50YSIsInAiLCJMaW5rTG9naW4iLCJhIiwiSW1hZ2VGb290ZXIiLCJpbWciLCJpbWFnZSIsIkZvb3RlciIsIldyYXBwZXJNZW51IiwiTWVudSIsInNwYW4iLCJMb2dvSW1hZ2UiLCJMb2dvTmFtZSIsIm5hbWUiLCJIZWFkZXIiLCJXcmFwcGVyVGl0bGUiLCJUaXRsZSIsImgxIiwiV3JhcHBlckdpZnRzIiwiV3JhcHBlcmdpZnQiLCJHaWZ0VGl0bGUiLCJoMiIsIkNvbG9yTGluZSIsImJ1dHRvbiIsInByb3BzIiwicHJpbWFyeSIsIlNwYW4iLCJNYWluIiwiQXBwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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O0FBQUE7QUFBQSxLQUVDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsRUFJQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxDQUREO0FBUUEsQ0FURDs7QUFXZUEsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNsQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlckxvZ2luID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tdG9wOiA2MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEN1ZW50YSA9IHN0eWxlZC5wYFxyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IExpbmtMb2dpbiA9IHN0eWxlZC5hYFxyXG5cdGNvbG9yOiBibHVlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRm9vdGVyID0gc3R5bGVkLmltZ2BcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5gO1xyXG5cclxuY29uc3QgaW1hZ2UgPSBcImltYWdlcy9mb290ZXIucG5nXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PFdyYXBwZXI+XHJcblx0XHRcdFx0PFdyYXBwZXJMb2dpbj5cclxuXHRcdFx0XHRcdDxDdWVudGE+wr9ZYSB0aWVuZXMgY3VlbnRhPzwvQ3VlbnRhPlxyXG5cdFx0XHRcdFx0PExpbmtMb2dpbj5Mb2cgaW48L0xpbmtMb2dpbj5cclxuXHRcdFx0XHQ8L1dyYXBwZXJMb2dpbj5cclxuXHRcdFx0XHQ8SW1hZ2VGb290ZXIgc3JjPXtpbWFnZX0gYWx0PVwiZm9vdGVyYHMgaW1hZ2VcIiAvPlxyXG5cdFx0XHQ8L1dyYXBwZXI+XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5cdHotaW5kZXg6IDU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBXcmFwcGVyTWVudSA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTWVudSA9IHN0eWxlZC5zcGFuYFxyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuXHRjb2xvcjogIzg3ZDNiODtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29JbWFnZSA9IHN0eWxlZC5pbWdgXHJcblx0cGFkZGluZzogMTBweCAyNXB4O1xyXG5cdGhlaWdodDogNjBweDtcclxuXHR3aWR0aDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IExvZ29OYW1lID0gc3R5bGVkLmltZ2BcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGhlaWdodDogMzdweDtcclxuXHR3aWR0aDogYXV0bztcclxuYDtcclxuY29uc3QgaW1hZ2UgPSBcIi4uL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5jb25zdCBuYW1lID0gXCIuLi9pbWFnZXMvZ2lmdHUucG5nXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PFdyYXBwZXI+XHJcblx0XHRcdFx0PExvZ29OYW1lIHNyYz17bmFtZX0gLz5cclxuXHRcdFx0XHQ8V3JhcHBlck1lbnU+XHJcblx0XHRcdFx0XHQ8TWVudT5NRU5VPC9NZW51PlxyXG5cdFx0XHRcdFx0PExvZ29JbWFnZSBzcmM9e2ltYWdlfSAvPlxyXG5cdFx0XHRcdDwvV3JhcHBlck1lbnU+XHJcblx0XHRcdDwvV3JhcHBlcj5cclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlclRpdGxlID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlckdpZnRzID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuYDtcclxuXHJcbmNvbnN0IFdyYXBwZXJnaWZ0ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbmA7XHJcblxyXG5jb25zdCBHaWZ0VGl0bGUgPSBzdHlsZWQuaDJgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHQvLyBmb250LXNpemU6IDUwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbmA7XHJcblxyXG5jb25zdCBDb2xvckxpbmUgPSBzdHlsZWQuYnV0dG9uYFxyXG5cdHdpZHRoOiAyMzBweDtcclxuXHRoZWlnaHQ6IDZweDtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmFiMDcgNjAlLCB3aGl0ZSA2MCUpO1xyXG5cdGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/IFwiI2ZmYWIwN1wiIDogXCIjODdkM2I4XCIpfTtcclxuXHRib3JkZXI6ICR7KHByb3BzKSA9PlxyXG5cdFx0cHJvcHMucHJpbWFyeSA/IFwiMXB4IHNvbGlkICNmZmFiMDdcIiA6IFwiMXB4IHNvbGlkICM4N2QzYjhcIn07XHJcbmA7XHJcblxyXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcblx0Y29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/IFwiI2ZmYWIwN1wiIDogXCIjODdkM2I4XCIpfTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PFdyYXBwZXI+XHJcblx0XHRcdFx0PFdyYXBwZXJUaXRsZT5cclxuXHRcdFx0XHRcdDxUaXRsZT5cclxuXHRcdFx0XHRcdFx0SE9MQSwgPGJyIC8+wr8gPFNwYW4gcHJpbWFyeT5RPC9TcGFuPlXDiSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0UVVJRVJFUyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0UkVHQUxBUiA8U3Bhbj4/PC9TcGFuPlxyXG5cdFx0XHRcdFx0PC9UaXRsZT5cclxuXHRcdFx0XHQ8L1dyYXBwZXJUaXRsZT5cclxuXHRcdFx0XHQ8V3JhcHBlckdpZnRzPlxyXG5cdFx0XHRcdFx0PFdyYXBwZXJnaWZ0PlxyXG5cdFx0XHRcdFx0XHQ8R2lmdFRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRSRUNPTSA8U3Bhbj7DiTwvU3Bhbj5OREFET1xyXG5cdFx0XHRcdFx0XHQ8L0dpZnRUaXRsZT5cclxuXHRcdFx0XHRcdFx0PENvbG9yTGluZSBwcmltYXJ5IC8+XHJcblx0XHRcdFx0XHQ8L1dyYXBwZXJnaWZ0PlxyXG5cdFx0XHRcdFx0PFdyYXBwZXJnaWZ0PlxyXG5cdFx0XHRcdFx0XHQ8R2lmdFRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRJRDxTcGFuIHByaW1hcnk+RTwvU3Bhbj5BTFxyXG5cdFx0XHRcdFx0XHQ8L0dpZnRUaXRsZT5cclxuXHRcdFx0XHRcdFx0PENvbG9yTGluZSAvPlxyXG5cdFx0XHRcdFx0PC9XcmFwcGVyZ2lmdD5cclxuXHRcdFx0XHQ8L1dyYXBwZXJHaWZ0cz5cclxuXHRcdFx0PC9XcmFwcGVyPlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8qIGltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vU3R5bGVzL0dsb2JhbFN0eWxlXCI7ICovXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0PE1haW4gLz5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9