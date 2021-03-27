/******/ var __webpack_modules__ = ({

/***/ "./src/components/radio-group/radio-group.css":
/*!****************************************************!*\
  !*** ./src/components/radio-group/radio-group.css ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.id, ":host {\n  user-select: none;\n}\n:host .label {\n  margin-bottom: 8px;\n}\n:host label.link {\n  cursor: pointer;\n  padding: 9px 11px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  position: relative;\n}\n:host input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n  padding: 0;\n}\n:host .btn-active {\n  background-color: #343a40;\n  color: white;\n}\n\nui-radio-group {\n  user-select: none;\n}\nui-radio-group .label {\n  margin-bottom: 8px;\n}\nui-radio-group label.link {\n  cursor: pointer;\n  padding: 9px 11px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  position: relative;\n}\nui-radio-group input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n  padding: 0;\n}\nui-radio-group .btn-active {\n  background-color: #343a40;\n  color: white;\n}\n", ""]);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./src/components/radio-group/radio-group.js ***!
  \***************************************************/
class RadioGroupComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['label', 'list'];
    }

    connectedCallback() {
        const style = document.createElement('style')
        style.textContent = __webpack_require__(/*! ./radio-group.css */ "./src/components/radio-group/radio-group.css").toString();
        this.appendChild(style);

        const content = document.createElement('div')
        content.innerHTML = `
                <div>
                        <div class="label">${this.label}*</div>
                        <div>
                        ${JSON.parse(this.list).map((opt) => {
                            return `
                                    <label class="link">
                                        <input type="radio" required
                                            value="${opt}"
                                            name="${this.id}">
                                        ${opt}
                                    </label>`
                        }).join('')}
                        </div>
                </div>`;
        this.appendChild(content)
        this.checked = null;
        this.addEventListener('click', ({ target }) => {
            if (/^radio$/.test(target.type)) {
                if (this.checked) this.checked.closest('label').classList.remove('btn-active');
                this.checked = document.querySelector(`input[name=${this.id}]:checked`);
                this.checked.closest('label').classList.add('btn-active');
                this.dispatchEvent(new CustomEvent('CHANGED', { detail: { [this.id]: target.value } }));
            }
        })
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }
}

customElements.define('ui-radio-group', RadioGroupComponent);

})();


//# sourceMappingURL=radio.js.map