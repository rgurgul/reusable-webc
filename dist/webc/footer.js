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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 2:
/*!*******************************************************!*\
  !*** multi ./src/components/footers/course-footer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/components/footers/course-footer.js */"./src/components/footers/course-footer.js");


/***/ })

/******/ });
//# sourceMappingURL=footer.js.map