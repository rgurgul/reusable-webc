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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./node_modules/html-loader/index.js!./src/components/tabs/tab.html":
/*!*****************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/tabs/tab.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"tab-tpl\">\n    <style>\n        /*todo: scss*/\n\n        :host {\n            display: none;\n        }\n\n        :host([visible=\"true\"]) {\n            display: block;\n        }\n\n        ui-tab {\n            display: none;\n        }\n\n        ui-tab[visible=\"true\"] {\n            display: block;\n        }\n    </style>\n    <slot></slot>\n</template>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./src/components/tabs/tabs.html":
/*!******************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/tabs/tabs.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"tabs-tpl\">\n    <div class=\"row\">\n        <div class='btns'></div>\n        <div class=\"slot\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n";

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

/***/ "./src/components/tabs sync recursive ^.*$":
/*!***************************************!*\
  !*** ./src/components/tabs sync ^.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./styles/tabs-landscape.css": "./src/components/tabs/styles/tabs-landscape.css",
	"./styles/tabs-landscape.scss": "./src/components/tabs/styles/tabs-landscape.scss",
	"./styles/tabs-portrait.css": "./src/components/tabs/styles/tabs-portrait.css",
	"./styles/tabs-portrait.scss": "./src/components/tabs/styles/tabs-portrait.scss",
	"./tab.html": "./src/components/tabs/tab.html",
	"./tabs": "./src/components/tabs/tabs.js",
	"./tabs.html": "./src/components/tabs/tabs.html",
	"./tabs.js": "./src/components/tabs/tabs.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/tabs sync recursive ^.*$";

/***/ }),

/***/ "./src/components/tabs/styles/tabs-landscape.css":
/*!*******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-landscape.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slot {\n  padding: 10px 0;\n  border-top: 1px solid black;\n}\n\n::slotted(button) {\n  margin: 0 0 -1px;\n  padding: 5px 5px;\n  font-weight: 600;\n  border: 1px solid transparent;\n  background: transparent;\n}\n\n::slotted(button.btn-active) {\n  outline: none !important;\n  border: 1px solid black;\n  border-bottom: 2px solid #fff;\n  border-radius: 1px;\n}\n\n.row {\n  padding: 1px;\n}\n", ""]);


/***/ }),

/***/ "./src/components/tabs/styles/tabs-landscape.scss":
/*!********************************************************!*\
  !*** ./src/components/tabs/styles/tabs-landscape.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .slot {\n|     padding: 10px 0;\n|     border-top: 1px solid black;");

/***/ }),

/***/ "./src/components/tabs/styles/tabs-portrait.css":
/*!******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-portrait.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slot {\n  margin: 0 20px;\n  padding: 20px;\n}\n\n::slotted(button) {\n  margin: 5px !important;\n  display: block !important;\n}\n\n::slotted(button.selected) {\n  background-color: #ff0000 !important;\n  outline: none !important;\n  color: white !important;\n}\n\n.row {\n  display: inline-flex;\n}\n", ""]);


/***/ }),

/***/ "./src/components/tabs/styles/tabs-portrait.scss":
/*!*******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-portrait.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .slot {\n|     margin: 0 20px;\n|     padding: 20px;");

/***/ }),

/***/ "./src/components/tabs/tab.html":
/*!**************************************!*\
  !*** ./src/components/tabs/tab.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <template id=\"tab-tpl\">\n|     <style>\n|         /*todo: scss*/");

/***/ }),

/***/ "./src/components/tabs/tabs.html":
/*!***************************************!*\
  !*** ./src/components/tabs/tabs.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <template id=\"tabs-tpl\">\n|     <div class=\"row\">\n|         <div class='btns'></div>");

/***/ }),

/***/ "./src/components/tabs/tabs.js":
/*!*************************************!*\
  !*** ./src/components/tabs/tabs.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/components/helpers.js");


(function () {

    class UiTabs extends HTMLElement {
        async  connectedCallback() {
            const root = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            const styleUrl = './styles/tabs-' + (this.hasAttribute('portrait') ? 'portrait' : 'landscape') + '.css';
            style.textContent = __webpack_require__("./src/components/tabs sync recursive ^.*$")(`${styleUrl}`).toString();
            root.appendChild(style);

            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHtmlTmpl(__webpack_require__(/*! html-loader!./tabs.html */ "./node_modules/html-loader/index.js!./src/components/tabs/tabs.html"));
            root.appendChild(tpl.content.cloneNode(true));
            this.createButtons(this);
        }

        setActive(btn, tab) {
            try {
                this
                    .querySelector('ui-tab[visible=true]')
                    .setAttribute('visible', 'false');
                this
                    .querySelector('button.btn-active')
                    .classList.remove('btn-active');
            } catch (err) { } _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"]

            tab.setAttribute('visible', 'true');
            btn.classList.add('btn-active');
        }

        createButtons() {
            Array.from(this.querySelectorAll('ui-tab'))
                .forEach((tab, idx) => {
                    const slotType = tab.getAttribute('type');
                    if (!this.shadowRoot.querySelector(`slot[name=${slotType}]`)) {
                        const label = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('div'));
                        label.innerHTML = slotType;
                        label.style = `text-transform:uppercase`
                        const newSlot = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('slot'));
                        newSlot.name = slotType;
                    }
                    const tabName = tab.getAttribute('tab-name');
                    const btn = _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEl('button', this,
                        {
                            'data-target': tabName,
                            innerHTML: `${this.hasAttribute('number')
                                ? `<small style="border: 1px solid;padding: 0 2px;">${idx}</small>`
                                : ''} ${tabName}`,
                            slot: slotType,
                            /* className: 'link' */
                        });
                    tab.getAttribute('visible') && (btn.className = 'btn-active');
                    btn.addEventListener('click', (evt) => {
                        this.setActive(evt.currentTarget, tab);
                    });
                });
        }
    }

    class UiTab extends HTMLElement {
        async connectedCallback() {
            const root = this.attachShadow({ mode: 'open' });
            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHtmlTmpl(__webpack_require__(/*! html-loader!./tab.html */ "./node_modules/html-loader/index.js!./src/components/tabs/tab.html"));
            root.appendChild(tpl.content.cloneNode(true));
        }
    }

    customElements.define('ui-tabs', UiTabs);
    customElements.define('ui-tab', UiTab);

}());


/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./src/components/tabs/tabs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/components/tabs/tabs.js */"./src/components/tabs/tabs.js");


/***/ })

/******/ });
//# sourceMappingURL=tabs.js.map