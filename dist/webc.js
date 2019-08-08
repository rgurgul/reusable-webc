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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-loader/index.js!./src/components/tabs/tab.html":
/*!*****************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/tabs/tab.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template id=\\\"tab-tpl\\\">\\n    <style>\\n        /*todo: scss*/\\n\\n        :host {\\n            display: none;\\n        }\\n\\n        :host([visible=\\\"true\\\"]) {\\n            display: block;\\n        }\\n\\n        ui-tab {\\n            display: none;\\n        }\\n\\n        ui-tab[visible=\\\"true\\\"] {\\n            display: block;\\n        }\\n    </style>\\n    <slot></slot>\\n</template>\\n\";\n\n//# sourceURL=webpack:///./src/components/tabs/tab.html?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./src/components/tabs/tabs.html":
/*!******************************************************************!*\
  !*** ./node_modules/html-loader!./src/components/tabs/tabs.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template id=\\\"tabs-tpl\\\">\\n    <style>\\n        .slot {\\n            margin: 0 20px;\\n            padding: 20px;\\n        }\\n\\n        ::slotted(button) {\\n            margin: 5px !important;\\n            display: block !important;\\n        }\\n\\n        ::slotted(button.selected) {\\n            background-color: #ff0000 !important;\\n            outline: none !important;\\n            color: white !important;\\n        }\\n\\n        .row {\\n            display: inline-flex;\\n        }\\n    </style>\\n\\n    <div class=\\\"row\\\">\\n        <div class='btns'></div>\\n        <div class=\\\"slot\\\">\\n            <slot></slot>\\n        </div>\\n    </div>\\n</template>\\n\";\n\n//# sourceURL=webpack:///./src/components/tabs/tabs.html?./node_modules/html-loader");

/***/ }),

/***/ "./src/components/footers/course-footer.js":
/*!*************************************************!*\
  !*** ./src/components/footers/course-footer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class CourseFooter extends HTMLElement {\n    static get observedAttributes() {\n        return ['courses'];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n\n        this.shadowRoot.innerHTML = `\n            <footer>\n                <div class=\"linkedin\">\n                    <h3>Podziel się opinią o szkoleniu.</h3>\n                    <br>\n                    Jeżeli szkolenie było <b>OK</b>, zapraszam Cię do moich kontaktów na\n                    <a href=\"https://www.linkedin.com/in/robertgurgul\" target=\"_blank\">linkedin</a>\n                </div>\n            </footer>\n         `;\n\n        const style = document.createElement('style')\n        style.textContent = `\n        footer{\n            border: 1px solid #999;\n            color: white;\n            padding: 50px;\n            background: #606060;\n            border-radius: 4px;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        footer a {\n            color: white;\n            font-weight: bold;\n            cursor: pointer;\n            text-decoration: none;\n            border: 2px solid;\n            padding: 4px 6px;\n            line-height: 36px;\n        }\n        footer ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n        footer ul li {\n            display: inline-block;\n        }\n\n        h3 {\n            margin: 0;\n        }\n        *{\n            font-family: sans-serif;\n        }\n        .linkedin, .courses{\n            flex: 1;\n        }\n        @media screen and (max-width: 600px) {\n            footer {\n                flex-direction: column;\n            }\n            .linkedin, .courses {\n                flex-basis: auto;\n                margin-top: 20px;\n            }\n        }\n        `\n        this.shadowRoot.appendChild(style);\n    }\n\n    courses() {\n        const container = document.createElement('div');\n        container.classList.add('courses');\n        this.shadowRoot.querySelector('footer').appendChild(container);\n        fetch('https://urgu.pl/api/courses')\n            .then((resp) => resp.json())\n            .then((resp) => {\n                container.innerHTML = `\n\n                <div class=\"courses\">\n                    <h3>Lista wszystkich szkoleń</h3>\n                    <br>\n                    <ul>\n                    ${resp.map((item, idx) => `\n                        <li>\n                            <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>\n                            ${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\\w]/g, (val, idx, str) => {\n                                const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);\n                                return ' ' + result;\n                            })}</a>\n                        </li>\n                    `).join('')}\n                    </ul>\n                </div>\n\n                `\n            })\n    }\n\n    attributeChangedCallback(name) {\n        this[name]();\n    }\n}\n\ncustomElements.define('course-footer', CourseFooter);\n\n\n//# sourceURL=webpack:///./src/components/footers/course-footer.js?");

/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Helpers; });\nfunction Helpers() {\n}\n\nHelpers.createEl = function (tagName, target, params) {\n    var el = document.createElement(tagName);\n    if (params) {\n        Object.keys(params).forEach(function (key) {\n            if (key in el) {\n                el[key] = params[key];\n            } else {\n                el.setAttribute(key, params[key]);\n            }\n        })\n    }\n    target instanceof HTMLElement\n        ? target.appendChild(el)\n        : document.querySelector(target).appendChild(el);\n\n    return el;\n};\n\nHelpers.getHtmlTmpl = async function (textTemplate, url) {\n    if(url) {\n        const res = await fetch(url);\n        textTemplate = await res.text();\n    }\n    return new DOMParser().parseFromString(textTemplate, 'text/html').querySelector('template');\n}\n\n\n//# sourceURL=webpack:///./src/components/helpers.js?");

/***/ }),

/***/ "./src/components/tabs/tabs.js":
/*!*************************************!*\
  !*** ./src/components/tabs/tabs.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/components/helpers.js\");\n\n\n(function () {\n\n    class UiTabs extends HTMLElement {\n        async  connectedCallback() {\n            const root = this.attachShadow({ mode: 'open' });\n            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHtmlTmpl(__webpack_require__(/*! html-loader!./tabs.html */ \"./node_modules/html-loader/index.js!./src/components/tabs/tabs.html\"));\n\n            //const tpl = await Helpers.getHtmlTmpl('components/tabs/tabs.html');\n\n            root.appendChild(tpl.content.cloneNode(true));\n\n            this.createButtons(this);\n        }\n\n        setActive(btn, tab) {\n            try {\n                this\n                    .querySelector('ui-tab[visible=true]')\n                    .setAttribute('visible', 'false');\n                this\n                    .querySelector('button.btn-active')\n                    .classList.remove('btn-active');\n            } catch (err) { }_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n            tab.setAttribute('visible', 'true');\n            btn.classList.add('btn-active');\n        }\n\n        createButtons() {\n            Array.from(this.querySelectorAll('ui-tab'))\n                .forEach((tab, idx) => {\n                    const slotType = tab.getAttribute('type');\n                    if (!this.shadowRoot.querySelector(`slot[name=${slotType}]`)) {\n                        const label = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('div'));\n                        label.innerHTML = slotType;\n                        label.style = `font-weight: bold; text-transform:uppercase`\n                        const newSlot = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('slot'));\n                        newSlot.name = slotType;\n                    }\n                    const tabName = tab.getAttribute('tab-name');\n                    const btn = _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createEl('button', this,\n                        {\n                            'data-target': tabName,\n                            innerHTML: `<span style=\"background: white; color: black; padding: 2px 3px; margin: 0 2px;\"><b>${idx}</b></span> ${tabName}`,\n                            slot: slotType,\n                            className: 'link'\n                        });\n                    tab.getAttribute('visible') && (btn.className = 'btn-active');\n                    btn.addEventListener('click', (evt) => {\n                        this.setActive(evt.currentTarget, tab);\n                    });\n                });\n        }\n    }\n\n    class UiTab extends HTMLElement {\n        async connectedCallback() {\n            const root = this.attachShadow({ mode: 'open' });\n            const tpl = await _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHtmlTmpl(__webpack_require__(/*! html-loader!./tab.html */ \"./node_modules/html-loader/index.js!./src/components/tabs/tab.html\"));\n            root.appendChild(tpl.content.cloneNode(true));\n        }\n    }\n\n    customElements.define('ui-tabs', UiTabs);\n    customElements.define('ui-tab', UiTab);\n\n}());\n\n\n//# sourceURL=webpack:///./src/components/tabs/tabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footers/course-footer */ \"./src/components/footers/course-footer.js\");\n/* harmony import */ var _components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_footers_course_footer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/tabs */ \"./src/components/tabs/tabs.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });