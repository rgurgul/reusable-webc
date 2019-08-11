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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/html-loader/index.js!./src/components/watch/watch.html":
/*!********************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/watch/watch.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\n    <div class=\"watch-box hid\">\n        <div class=\"binary\"></div>\n        <span class=\"time\"></span>\n    </div>\n</template>\n";

/***/ }),

/***/ "./src/components/footers/course-footer.js":
/*!*************************************************!*\
  !*** ./src/components/footers/course-footer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class CourseFooter extends HTMLElement {
    static get observedAttributes() {
        return ['courses'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <footer>
                <div class="linkedin">
                    <h3>Podziel się opinią o szkoleniu</h3>
                    <br>
                    Jeżeli szkolenie było <b>OK</b>, zapraszam Cię do moich kontaktów na
                    <a href="https://www.linkedin.com/in/robertgurgul" target="_blank">linkedin</a>
                    <br/>
                    <br/>
                    <a href="https://debugger.pl/kontakt" target="_blank">Kontakt ze mną</a>
                </div>
            </footer>
         `;

        const style = document.createElement('style')
        style.textContent = `
        footer{
            border: 1px solid #999;
            color: white;
            padding: 50px;
            background: #555;
            border-radius: 4px;
            display: flex;
            flex-wrap: wrap;
        }
        footer a {
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            border: 1.2px solid;
            padding: 4px 6px;
            line-height: 36px;
        }
        footer ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        footer ul li {
            display: inline-block;
        }

        h3 {
            margin: 0;
        }
        *{
            font-family: sans-serif;
        }
        .linkedin, .courses{
            flex: 1;
        }
        @media screen and (max-width: 600px) {
            footer {
                flex-direction: column;
            }
            .linkedin, .courses {
                flex-basis: auto;
                margin-top: 20px;
            }
        }
        `
        this.shadowRoot.appendChild(style);
    }

    courses() {
        const container = document.createElement('div');
        container.classList.add('courses');
        this.shadowRoot.querySelector('footer').appendChild(container);
        fetch('https://urgu.pl/api/courses')
            .then((resp) => resp.json())
            .then((resp) => {
                container.innerHTML = `

                <div class="courses">
                    <h3>Lista wszystkich szkoleń</h3>
                    <br>
                    <ul>
                    ${resp.map((item, idx) => `
                        <li>
                            <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>
                            ${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\w]/g, (val, idx, str) => {
                                const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);
                                return ' ' + result;
                            })}</a>
                        </li>
                    `).join('')}
                    </ul>
                </div>

                `
            })
    }

    attributeChangedCallback(name) {
        this[name]();
    }
}

customElements.define('course-footer', CourseFooter);


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

/***/ "./src/components/radio-group/radio-group.css":
/*!****************************************************!*\
  !*** ./src/components/radio-group/radio-group.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":host {\n  user-select: none;\n}\n:host .label {\n  margin-bottom: 8px;\n}\n:host label.link {\n  cursor: pointer;\n  padding: 9px 11px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  position: relative;\n}\n:host input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n  padding: 0;\n}\n:host .btn-active {\n  box-shadow: 0 0 0 2px tomato;\n}\n\nui-radio-group {\n  user-select: none;\n}\nui-radio-group .label {\n  margin-bottom: 8px;\n}\nui-radio-group label.link {\n  cursor: pointer;\n  padding: 9px 11px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  position: relative;\n}\nui-radio-group input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n  padding: 0;\n}\nui-radio-group .btn-active {\n  box-shadow: 0 0 0 2px tomato;\n}\n", ""]);


/***/ }),

/***/ "./src/components/radio-group/radio-group.js":
/*!***************************************************!*\
  !*** ./src/components/radio-group/radio-group.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/components/tabs/styles/tabs-landscape.css":
/*!*******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-landscape.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slot {\n  padding: 10px 0;\n  border-top: 1px solid #333;\n}\n\n::slotted(button) {\n  margin: 0 0 -1px;\n  padding: 7px 8px;\n  font-weight: 600;\n  border: 1px solid transparent;\n  background: transparent;\n  cursor: pointer;\n}\n\n::slotted(button.btn-active) {\n  outline: none !important;\n  border: 1px solid #333;\n  border-bottom: 1px solid white;\n  border-radius: 3px 3px 0 0 !important;\n}\n\n.row {\n  padding: 2px;\n}\n\n@media screen and (max-width: 600px) {\n  ::slotted(button) {\n    display: block;\n    border: 1px solid;\n    margin: 2px;\n    border-radius: 3px !important;\n  }\n\n  ::slotted(button.btn-active) {\n    border: 1px solid #333;\n    border-radius: 3px !important;\n    background-color: #333;\n    color: white;\n  }\n\n  .slot {\n    border-top: none;\n  }\n}\n", ""]);


/***/ }),

/***/ "./src/components/tabs/styles/tabs-portrait.css":
/*!******************************************************!*\
  !*** ./src/components/tabs/styles/tabs-portrait.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slot {\n  margin: 0 20px;\n  padding: 20px;\n}\n\n::slotted(button) {\n  display: block;\n  margin: 5px 0 !important;\n  cursor: pointer;\n  background: #333;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  outline: none !important;\n  color: white !important;\n  box-shadow: inset 0 0 0 1px #343a40;\n  border-radius: 3px;\n}\n\n::slotted(button.btn-active) {\n  background-color: white !important;\n  color: #333 !important;\n}\n\n.row {\n  display: inline-flex;\n}\n", ""]);


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
            const content = this.hasAttribute('portrait') ? __webpack_require__(/*! ./styles/tabs-portrait.css */ "./src/components/tabs/styles/tabs-portrait.css") : __webpack_require__(/*! ./styles/tabs-landscape.css */ "./src/components/tabs/styles/tabs-landscape.css")
            style.textContent = content.toString();
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
                    const btn = _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEl('button', this,
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
            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHtmlTmpl(__webpack_require__(/*! html-loader!./tab.html */ "./node_modules/html-loader/index.js!./src/components/tabs/tab.html"));
            root.appendChild(tpl.content.cloneNode(true));
        }
    }

    customElements.define('ui-tabs', UiTabs);
    customElements.define('ui-tab', UiTab);

}());


/***/ }),

/***/ "./src/components/watch/watch.css":
/*!****************************************!*\
  !*** ./src/components/watch/watch.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":host .watch-box {\n  display: inline-block;\n  transform-origin: 0 0;\n  /* transform: skew(0deg, 7deg); */\n}\n:host .watch-box .binary {\n  cursor: pointer;\n}\n:host .watch-box .binary table {\n  display: inline;\n  margin-right: 3px;\n}\n:host .watch-box .binary table td {\n  width: 15px;\n  height: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n:host .watch-box .binary table .active {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n:host .watch-box .time {\n  font-size: 28px;\n}\n:host .watch-box.hid span {\n  display: none;\n}\n\nui-watch .watch-box {\n  display: inline-block;\n  transform-origin: 0 0;\n  /* transform: skew(0deg, 7deg); */\n}\nui-watch .watch-box .binary {\n  cursor: pointer;\n}\nui-watch .watch-box .binary table {\n  display: inline;\n  margin-right: 3px;\n}\nui-watch .watch-box .binary table td {\n  width: 15px;\n  height: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  border-radius: 2px;\n}\nui-watch .watch-box .binary table .active {\n  background-color: rgba(0, 0, 0, 0.2);\n}\nui-watch .watch-box .time {\n  font-size: 28px;\n}\nui-watch .watch-box.hid span {\n  display: none;\n}\n", ""]);


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
            this.addEventListener('click', () => this.box.classList.toggle('hid'));
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footers/course-footer */ "./src/components/footers/course-footer.js");
/* harmony import */ var _components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/tabs */ "./src/components/tabs/tabs.js");
/* harmony import */ var _components_watch_watch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/watch/watch */ "./src/components/watch/watch.js");
/* harmony import */ var _components_radio_group_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/radio-group/radio-group */ "./src/components/radio-group/radio-group.js");
/* harmony import */ var _components_radio_group_radio_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_radio_group_radio_group__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=all.js.map