(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Epitaph"] = factory();
	else
		root["Epitaph"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Epitaph =\n/*#__PURE__*/\nfunction () {\n  /* options\n      \n      {\n          split: \"letter\" / \"word\" / \"sentence\",\n          tag: DomNode,\n          wrapWords: true/false\n          className=\"\",\n          return: true/false\n      }\n      \n      */\n  function Epitaph(domNode, options) {\n    var _this = this;\n\n    _classCallCheck(this, Epitaph);\n\n    this.node = domNode;\n    this.options = options;\n    this.tag = this.options ? this.options.tag || \"span\" : \"span\";\n    this.split = this.options ? this.options.split || \"letter\" : \"letter\";\n    this.wrapWords = this.options ? this.options.wrapWords || true : true;\n    this.class = this.options ? this.options.className || null : null;\n    this.text = this.node.innerHTML;\n    this.return = this.options ? this.options.return || false : false;\n    var elem = this.returnDom();\n\n    if (this.return) {\n      return elem;\n    } else {\n      this.node.innerHTML = null;\n      elem.forEach(function (element) {\n        _this.node.appendChild(element);\n      });\n    }\n  }\n\n  _createClass(Epitaph, [{\n    key: \"returnDom\",\n    value: function returnDom() {\n      if (this.split === \"word\") {\n        return this.arrayToDomElem(this.splitByChar());\n      } else if (this.split === \"letter\") {\n        return this.arrayToDomElem(this.splitByLetter());\n      }\n    }\n  }, {\n    key: \"splitByChar\",\n    value: function splitByChar() {\n      var words = this.text.split(\" \");\n      return words;\n    }\n  }, {\n    key: \"splitByLetter\",\n    value: function splitByLetter(words) {\n      var splitWords;\n\n      if (words) {\n        splitWords = words.map(function (word) {\n          return word.split(\"\");\n        });\n      } else {\n        splitWords = this.text.split(\"\");\n      }\n\n      return splitWords;\n    }\n  }, {\n    key: \"arrayToDomElem\",\n    value: function arrayToDomElem(values) {\n      var _this2 = this;\n\n      var elem = values.map(function (value, i) {\n        var elem = document.createElement(_this2.tag);\n        elem.classList.add(_this2.class);\n        elem.innerHTML = value;\n        return elem;\n      });\n      return elem;\n    }\n  }]);\n\n  return Epitaph;\n}();\n\nmodule.exports = Epitaph;\n\n//# sourceURL=webpack://Epitaph/./src/index.js?");

/***/ })

/******/ });
});