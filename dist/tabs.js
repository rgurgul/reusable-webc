/******/ var __webpack_modules__ = ({

/***/ "./src/components/tabs/styles/tabs-landscape.css":
/*!*******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-landscape.css ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.id, "/* $color-main: #202020; */\n.slot {\n  padding: 10px 0;\n  border-top: 1px solid #333;\n}\n\n::slotted(button) {\n  /* margin: 0 0 -1px; */\n  padding: 8px 10px 6px;\n  font-weight: 600;\n  border: 1px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: bold;\n}\n\n::slotted(button.btn-active) {\n  outline: none !important;\n  border: 1px solid #333;\n  border-bottom: 1px solid white;\n  box-shadow: 0px 1px #fafafa, inset 0px -3px 6px 0px white;\n}\n\n.row {\n  padding: 2px;\n}\n\n@media screen and (max-width: 768px) {\n  ::slotted(button) {\n    display: block;\n    margin: 10px 0;\n    padding: 10px;\n    border: none;\n    box-shadow: inset 0 0 0 1px #333;\n    background-color: white;\n  }\n\n  ::slotted(button.btn-active) {\n    background-color: #eaeaea;\n    border: none;\n    box-shadow: inset 0 0 0 1px #333;\n  }\n\n  .slot {\n    border-top: none;\n  }\n}\n", ""]);


/***/ }),

/***/ "./src/components/tabs/styles/tabs-portrait.css":
/*!******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-portrait.css ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.id, ".slot {\n  margin: 0 20px;\n  padding: 20px;\n}\n\n::slotted(button) {\n  display: block;\n  margin: 5px 0;\n  font-weight: bold;\n  cursor: pointer;\n  background: #333;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  outline: none !important;\n  box-shadow: inset 0 0 0 1px #343a40;\n  background-color: white !important;\n  color: #333 !important;\n  font-family: inherit;\n}\n@media (max-width: 768px) {\n  ::slotted(button) {\n    margin: 10px;\n    padding: 10px;\n  }\n}\n\n::slotted(button.btn-active) {\n  color: white !important;\n  background-color: black !important;\n}\n\n.row {\n  display: inline-flex;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

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
/*!**************************************************************************!*\
  !*** ./node_modules/html-loader/index.js!./src/components/tabs/tab.html ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<template id=\"tab-tpl\">\n    <style>\n        /*todo: scss*/\n\n        :host {\n            display: none;\n        }\n\n        :host([visible=\"true\"]) {\n            display: block;\n        }\n\n        ui-tab {\n            display: none;\n        }\n\n        ui-tab[visible=\"true\"] {\n            display: block;\n        }\n    </style>\n    <slot></slot>\n</template>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./src/components/tabs/tabs.html":
/*!***************************************************************************!*\
  !*** ./node_modules/html-loader/index.js!./src/components/tabs/tabs.html ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<template id=\"tabs-tpl\">\n    <div class=\"row\">\n        <div class='btns'></div>\n        <div class=\"slot\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n";

/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helpers)
/* harmony export */ });
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


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/components/tabs/tabs.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/components/helpers.js");


(function () {

    class UiTabs extends HTMLElement {
        async  connectedCallback() {
            const root = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            const content = this.hasAttribute('portrait') ? __webpack_require__(/*! ./styles/tabs-portrait.css */ "./src/components/tabs/styles/tabs-portrait.css") : __webpack_require__(/*! ./styles/tabs-landscape.css */ "./src/components/tabs/styles/tabs-landscape.css")
            style.textContent = content.toString();
            root.appendChild(style);

            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.getHtmlTmpl(__webpack_require__(/*! html-loader!./tabs.html */ "./node_modules/html-loader/index.js!./src/components/tabs/tabs.html"));
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
            } catch (err) { }

            tab.setAttribute('visible', 'true');
            btn.classList.add('btn-active');
            this.dispatchEvent(new CustomEvent('changed', { detail: tab }));
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
                    const btn = _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.createEl('button', this,
                        {
                            'data-target': tabName,
                            innerHTML: `${this.hasAttribute('number')
                                ? `<nobr><small style="border: 1px solid;padding: 0 2px;">${idx}</small>`
                                : ''} ${tabName}</nobr>`,
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
            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.getHtmlTmpl(__webpack_require__(/*! html-loader!./tab.html */ "./node_modules/html-loader/index.js!./src/components/tabs/tab.html"));
            root.appendChild(tpl.content.cloneNode(true));
        }
    }

    customElements.define('ui-tabs', UiTabs);
    customElements.define('ui-tab', UiTab);

}());

})();


//# sourceMappingURL=tabs.js.map