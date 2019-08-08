/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/webc";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/html-loader/index.js!./src/components/watch/watch.html":
/*!********************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/watch/watch.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\n    <style>\n        /* @import \"/src/components/watch/watch.css\"; */\n    </style>\n    <div class=\"watch-box hid\">\n        <div class=\"binary\"></div>\n        <span class=\"time\"></span>\n    </div>\n</template>\n";

/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helpers; });
function Helpers() {
}

Helpers.createEl = function (tagName, target, params) {
    var el = document.createElement(tagName);
    if (params) {
        Object.keys(params).forEach(function (key) {
            if (key in el) {
                el[key] = params[key];
            } else {
                el.setAttribute(key, params[key]);
            }
        })
    }
    target instanceof HTMLElement
        ? target.appendChild(el)
        : document.querySelector(target).appendChild(el);

    return el;
};

Helpers.getHtmlTmpl = async function (textTemplate, url) {
    if(url) {
        const res = await fetch(url);
        textTemplate = await res.text();
    }
    return new DOMParser().parseFromString(textTemplate, 'text/html').querySelector('template');
}


/***/ }),

/***/ "./src/components/watch/watch.css":
/*!****************************************!*\
  !*** ./src/components/watch/watch.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":host .watch-box{display:inline-block;transform-origin:0 0;transform:skew(0deg, 7deg)}:host .watch-box .binary{margin-top:50px;cursor:pointer}:host .watch-box .binary table{display:inline;margin-right:3px}:host .watch-box .binary table td{width:15px;height:15px;border:1px solid rgba(0,0,0,0.1);box-sizing:border-box;border-radius:2px}:host .watch-box .binary table .active{background-color:rgba(0,0,0,0.2)}:host .watch-box .time{font-size:28px}:host .watch-box.hid span{display:none}ui-watch .watch-box{display:inline-block;transform-origin:0 0;transform:skew(0deg, 7deg)}ui-watch .watch-box .binary{margin-top:50px;cursor:pointer}ui-watch .watch-box .binary table{display:inline;margin-right:3px}ui-watch .watch-box .binary table td{width:15px;height:15px;border:1px solid rgba(0,0,0,0.1);box-sizing:border-box;border-radius:2px}ui-watch .watch-box .binary table .active{background-color:rgba(0,0,0,0.2)}ui-watch .watch-box .time{font-size:28px}ui-watch .watch-box.hid span{display:none}\n", ""]);


/***/ }),

/***/ "./src/components/watch/watch.js":
/*!***************************************!*\
  !*** ./src/components/watch/watch.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/components/helpers.js");


(function () {

    class WatchComponent extends HTMLElement {

        async connectedCallback() {
            this.root = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style')
            style.textContent = __webpack_require__(/*! ./watch.css */ "./src/components/watch/watch.css").toString();
            this.root.appendChild(style);

            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHtmlTmpl(__webpack_require__(/*! html-loader!./watch.html */ "./node_modules/html-loader/index.js!./src/components/watch/watch.html"));
            this.root.appendChild(tpl.content.cloneNode(true));

            this.box = this.root.querySelector('.watch-box');
            this.binary = this.box.querySelector('.binary');
            this.time = this.box.querySelector('.time');
            this.getNow.forEach(this.createTable.bind(this));
            setInterval(this.setTime.bind(this), 1000);
            this.setTime();
            this.addEventListener('click', () => this.box.classList.remove('hid'));
        }

        createTable(t, classNr) {
            const table = document.createElement('table');
            table.classList.add('t' + classNr);
            this.binary.appendChild(table);
            [8, 4, 2, 1].forEach((num) => {
                const tr = document.createElement('tr');
                tr.classList.add('row' + num);
                table.appendChild(tr);
                [0, 1].forEach(() => {
                    const td = tr.appendChild(document.createElement('td'));
                    const digit = td.appendChild(document.createElement('span'));
                    digit.innerHTML = num;
                });
            });
        }

        setActive(table, bin, col) {
            this.root.querySelector(`.t${table} .row${bin} td:nth-child(${col})`).classList.add('active');
        }

        setCell(table, digit, col) {
            switch (true) {
                case /^[1|2]$/.test(digit):
                    this.setActive(table, digit, col);
                    break;
                case digit === 3:
                    this.setActive(table, 1, col);
                    this.setActive(table, 2, col);
                    break;
                case digit >= 4 && digit < 8:
                    this.setActive(table, 4, col);
                    this.setCell(table, digit % 4, col);
                    break;
                case digit >= 8:
                    this.setActive(table, 8, col);
                    this.setCell(table, digit % 8, col);
                    break;
            }
        }

        get getNow() {
            return new Date().toLocaleTimeString('en-US', { hour12: false }).match(/\d+/g);
        }

        setTime() {
            Array.from(this.root.querySelectorAll('.active')).forEach((item) => item.classList.remove('active'));
            this.getNow.forEach((value, table) => Array.from(("0" + value).slice(-2)).forEach((d, idx) => this.setCell(table, +d, idx + 1)));
            this.time.innerHTML = this.getNow.join(':');
        }

    }

    customElements.define('ui-watch', WatchComponent);

})();


/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./src/components/watch/watch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/components/watch/watch.js */"./src/components/watch/watch.js");


/***/ })

/******/ });
//# sourceMappingURL=watch.js.map