/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\n\nhtml, body {\n    min-height: 100vh;\n}\n\nbody {\n    font-size: .9rem;\n\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n\n}\n\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n\n}\n\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n\n.home-icon {\n\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n\n}\n\n.hd-link:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n\n    transition: transform .3s ease-in-out;\n}\n\nnav.collapse {\n    transform: translateX(-250px);\n}\n\n\nnav>* {\n    cursor: pointer;\n\n}\n\n.nav-links {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n\n}\n\n\n.nav-link {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n\n}\n\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n\n.nav-link:hover {\n    background-color: var(--nav-bg-hover);\n}\n\n\n\n\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n\n}\n\n.todo-form {\n    min-width: 600px;\n\n}\n\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\n\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\n\nform>* {\n    margin: 0px 5px;\n}\n\ninput {\n    border: none;\n    font-size: 1.5rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\n\ninput::placeholder {\n    font-size: .9rem;\n}\n\ninput:focus {\n    outline: none;\n\n}\n\n.submit-todo-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-todo-btn:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n/* Todo section */\n\n.todo-list,\n.header-links {\n    list-style: none;\n}\n\n.todo {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 8px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n}\n\n.todo-status {\n    padding: 8px;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    border: 1px solid var(--gray);\n    cursor: pointer;\n}\n\n.todo-text {\n    flex: 1;\n    margin: 0px 10px 0px 0px;\n    padding: 5px;\n\n}\n\n.todo-text.edit {\n    border: none;\n    border-left: 2px solid lightblue;\n    outline-color: lightblue;\n}\n\n.remove-btn,\n.edit-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n    color: var(--gray);\n}\n\n.todo .fa-trash-can,\n.todo .fa-pen-to-square {\n    font-size: 1rem;\n    pointer-events: none;\n    cursor: not-allowed;\n\n}\n\n.remove-btn:hover,\n.edit-btn:hover {\n    color: var(--main);\n\n}\n\n@media  (max-width: 950px) {\n\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n\n    .wrapper{\n        min-width: 300px;\n\n        margin: 25px 20px;\n    }\n\n    .todo-form {\n        min-width: 400px;\n\n    }\n\n    }\n\n\n@media (max-width: 600px) {\n\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas: \n        \"header\"\n        \"nav\"\n        \"wrapper\";\n\n    }\n\n    .header-links {\n        margin: 0px 20px;\n    }\n\n\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    \n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n\n    .nav-links {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        height: 100%;\n        width: 200px;\n\n    }\n   .wrapper.collapse  {\n    transform: none;\n\n   }\n\n    .todo-form {\n        min-width: 90%;\n\n    }\n\n    .todo-list {\n        display: flex;\n        flex-direction: column;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\n\nhtml, body {\n    min-height: 100vh;\n}\n\nbody {\n    font-size: .9rem;\n\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n\n}\n\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n\n}\n\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n\n.home-icon {\n\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n\n}\n\n.hd-link:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n\n    transition: transform .3s ease-in-out;\n}\n\nnav.collapse {\n    transform: translateX(-250px);\n}\n\n\nnav>* {\n    cursor: pointer;\n\n}\n\n.nav-links {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n\n}\n\n\n.nav-link {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n\n}\n\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n\n.nav-link:hover {\n    background-color: var(--nav-bg-hover);\n}\n\n\n\n\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n\n}\n\n.todo-form {\n    min-width: 600px;\n\n}\n\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\n\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\n\nform>* {\n    margin: 0px 5px;\n}\n\ninput {\n    border: none;\n    font-size: 1.5rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\n\ninput::placeholder {\n    font-size: .9rem;\n}\n\ninput:focus {\n    outline: none;\n\n}\n\n.submit-todo-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-todo-btn:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n/* Todo section */\n\n.todo-list,\n.header-links {\n    list-style: none;\n}\n\n.todo {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 8px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n}\n\n.todo-status {\n    padding: 8px;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    border: 1px solid var(--gray);\n    cursor: pointer;\n}\n\n.todo-text {\n    flex: 1;\n    margin: 0px 10px 0px 0px;\n    padding: 5px;\n\n}\n\n.todo-text.edit {\n    border: none;\n    border-left: 2px solid lightblue;\n    outline-color: lightblue;\n}\n\n.remove-btn,\n.edit-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n    color: var(--gray);\n}\n\n.todo .fa-trash-can,\n.todo .fa-pen-to-square {\n    font-size: 1rem;\n    pointer-events: none;\n    cursor: not-allowed;\n\n}\n\n.remove-btn:hover,\n.edit-btn:hover {\n    color: var(--main);\n\n}\n\n@media  (max-width: 950px) {\n\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n\n    .wrapper{\n        min-width: 300px;\n\n        margin: 25px 20px;\n    }\n\n    .todo-form {\n        min-width: 400px;\n\n    }\n\n    }\n\n\n@media (max-width: 600px) {\n\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas: \n        \"header\"\n        \"nav\"\n        \"wrapper\";\n\n    }\n\n    .header-links {\n        margin: 0px 20px;\n    }\n\n\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    \n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n\n    .nav-links {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        height: 100%;\n        width: 200px;\n\n    }\n   .wrapper.collapse  {\n    transform: none;\n\n   }\n\n    .todo-form {\n        min-width: 90%;\n\n    }\n\n    .todo-list {\n        display: flex;\n        flex-direction: column;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLocalTodo": () => (/* binding */ addLocalTodo),
/* harmony export */   "getLocalTodos": () => (/* binding */ getLocalTodos),
/* harmony export */   "removeLocalTodo": () => (/* binding */ removeLocalTodo)
/* harmony export */ });

const getLocalTodos = () => {
    let todos 
        if(localStorage.getItem('todos') === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }    return todos            
    }



const addLocalTodo = (todo) => {
    let todos = getLocalTodos()
    todos.push(todo)
    
    return localStorage.setItem('todos', JSON.stringify(todos))
            
    }
    
const removeLocalTodo = (todoText) => {
    let todos = getLocalTodos()
    todos.forEach((todo, index) => {
                if(todo.name === todoText) {
                    todos.splice(index, 1)
                }
            })

    return localStorage.setItem('todos', JSON.stringify(todos))
    
    }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");



const Todo = (text) => {
  const name = text;
  const tasks = [];
  return { name, tasks };
};

const todoListApp = (function () {
  // propertiers
  const _form = document.querySelector("form");
  const _todoList = document.querySelector(".todo-list");
  const _todoInput = document.querySelector('input[name="todo"]');
  const _todosContainer = document.querySelector(".todos-container");
  const _menuBtn = document.querySelector(".burger-menu");
  const _navBar = document.querySelector("nav");
  const _navLinks = document.querySelector(".nav-links");
  const _wrapper = document.querySelector(".wrapper");

  // Display Todos in UI

  const _displayTodos = () => {
    const storedTodos = (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalTodos)();
    const todos = storedTodos;

    todos.forEach((todo) => {
      _addTodosUI(todo);
    });
  };

  const _addTodosUI = (todo) => {
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    const todoStatus = document.createElement("div");
    todoStatus.classList.add("todo-status");

    const todoText = document.createElement("p");
    todoText.textContent = todo.name;
    todoText.classList.add("todo-text");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

    newTodo.appendChild(todoStatus);
    newTodo.appendChild(todoText);
    newTodo.appendChild(removeBtn);
    newTodo.appendChild(editBtn);

    return _todoList.appendChild(newTodo);
  };

  // Create & add todo

  const _getTodoValue = (_todoInput) => {
    if (_todoInput.value == "") {
      console.log("empty");
      return false;
    } else {
      const todo = Todo(_todoInput.value);
      _todoInput.value = "";

      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addLocalTodo)(todo);

      return todo.name;
    }
  };

  const _appendNewTodoUI = (_todoInput) => {
    if (_todoInput.value == "") {
      return false;
    } else {
      const todo = Todo(_todoInput.value);
      _todoInput.value = "";

      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addLocalTodo)(todo);

      _addTodosUI(todo);
    }
  };

  const _submitTodo = (e) => {
    e.preventDefault();

    return _appendNewTodoUI(_todoInput);
  };

  // Remove todo

  const _removeTodo = (e) => {
    const todoText = e.target.parentNode.firstChild.nextSibling.textContent;

    if (e.target.classList.contains("remove-btn")) {
      e.target.parentNode.remove();
      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeLocalTodo)(todoText);
    }
  };

  // Edit todo

  const _editTodo = (e) => {
    const _todoInput = e.target.parentNode.firstChild;

    if (e.target.classList.contains("edit-btn")) {
      _todoInput.toggleAttribute("contenteditable");
      _todoInput.classList.toggle("edit");
    }

    _todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        _todoInput.toggleAttribute("contenteditable");
        _todoInput.classList.toggle("edit");
      }
    });
  };

  const _buttonsEvents = () => {
    _todosContainer.addEventListener("click", (e) => {
      _removeTodo(e);
      _editTodo(e);
    });
  };

  const start = () => {
    _form.addEventListener("submit", _submitTodo);
    _displayTodos();
    _buttonsEvents();

    _menuBtn.addEventListener("click", () => {
      _navBar.classList.toggle("collapse");
      _navLinks.classList.toggle("collapse");
      _wrapper.classList.toggle("collapse");
    });
  };

  return { start };
})();

todoListApp.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGNBQWMsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sT0FBTyxN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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBS1E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qix3RUFBYTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNLHVFQUFZOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTSx1RUFBWTs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDBFQUFlO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW46IHJnYmEoMjUwLCAxMjgsIDExNCwgMSk7XFxuICAgIC0tbWFpbi1ob3ZlcjogcmdiYSgyNTAsIDEyOCwgMTE0LCAuNSk7XFxuICAgIC0tbmF2LWJnOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbmF2LWJnLWhvdmVyOiAjRUVFRUVFO1xcbiAgICAtLWdyYXk6IHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXYgd3JhcHBlclxcXCJcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG8gNTBweDtcXG4gICAgcGFkZGluZzogNnB4IDBweDtcXG5cXG59XFxuXFxuLmhlYWRlci1saW5rcz4qIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZS1pY29uIHtcXG5cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcXG5cXG59XFxuXFxuLmhkLWxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NiwgMzEsIDE0LCAwLjUpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2LmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcblxcblxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAwcHggNTBweDtcXG5cXG59XFxuXFxuXFxuLm5hdi1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFxufVxcblxcbi5uYXYtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG5cXG5cXG5cXG5cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG5cXG59XFxuXFxuLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxufVxcblxcbmZvcm0+KiB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcblxcbn1cXG5cXG4uc3VibWl0LXRvZG8tYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbi8qIFRvZG8gc2VjdGlvbiAqL1xcblxcbi50b2RvLWxpc3QsXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDhweCAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG5cXG4udG9kby1zdGF0dXMge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbn1cXG5cXG4udG9kby10ZXh0LmVkaXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRibHVlO1xcbiAgICBvdXRsaW5lLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5yZW1vdmUtYnRuLFxcbi5lZGl0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi50b2RvIC5mYS10cmFzaC1jYW4sXFxuLnRvZG8gLmZhLXBlbi10by1zcXVhcmUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcblxcbn1cXG5cXG4ucmVtb3ZlLWJ0bjpob3ZlcixcXG4uZWRpdC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxuXFxufVxcblxcbkBtZWRpYSAgKG1heC13aWR0aDogOTUwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlcntcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICAgICAgICBtYXJnaW46IDI1cHggMjBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1mb3JtIHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgfVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgIFxcXCJ3cmFwcGVyXFxcIjtcXG5cXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWxpbmtzIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdG9wOiA0NXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMDBweCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBcXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcblxcbiAgICB9XFxuICAgLndyYXBwZXIuY29sbGFwc2UgIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcblxcbiAgIH1cXG5cXG4gICAgLnRvZG8tZm9ybSB7XFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXG5cXG4gICAgfVxcblxcbiAgICAudG9kby1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEM7OztBQUdKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSw4RkFBOEY7O0FBRWxHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCOztJQUVoQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7Ozs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUNBQXFDOztBQUV6Qzs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUVqQjs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHdCQUF3QjtJQUN4QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7O0FBRXZCOztBQUVBOztJQUVJLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUk7UUFDSSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxnQkFBZ0I7O1FBRWhCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjs7SUFFcEI7O0lBRUE7OztBQUdKOztJQUVJO1FBQ0ksMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQzs7O2lCQUdTOztJQUViOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsOEJBQThCO1FBQzlCLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0IsV0FBVztRQUNYLDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osWUFBWTs7SUFFaEI7R0FDRDtJQUNDLGVBQWU7O0dBRWhCOztJQUVDO1FBQ0ksY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogcmdiYSgyNTAsIDEyOCwgMTE0LCAxKTtcXG4gICAgLS1tYWluLWhvdmVyOiByZ2JhKDI1MCwgMTI4LCAxMTQsIC41KTtcXG4gICAgLS1uYXYtYmc6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1uYXYtYmctaG92ZXI6ICNFRUVFRUU7XFxuICAgIC0tZ3JheTogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcblxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lLWljb24ge1xcblxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcblxcbn1cXG5cXG4uaGQtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuXFxuXFxubmF2Pioge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDI1cHggMHB4IDBweCA1MHB4O1xcblxcbn1cXG5cXG5cXG4ubmF2LWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXG59XFxuXFxuLm5hdi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE1cHg7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcblxcblxcblxcblxcbi53cmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB3cmFwcGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNXB4IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxuXFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcblxcbn1cXG5cXG4ud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG59XFxuXFxuZm9ybT4qIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuXFxufVxcblxcbi5zdWJtaXQtdG9kby1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuXFxuLyogVG9kbyBzZWN0aW9uICovXFxuXFxuLnRvZG8tbGlzdCxcXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogOHB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcblxcbi50b2RvLXN0YXR1cyB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxufVxcblxcbi50b2RvLXRleHQuZWRpdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIG91dGxpbmUtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLnJlbW92ZS1idG4sXFxuLmVkaXQtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLmZhLXRyYXNoLWNhbixcXG4udG9kbyAuZmEtcGVuLXRvLXNxdWFyZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuXFxufVxcblxcbi5yZW1vdmUtYnRuOmhvdmVyLFxcbi5lZGl0LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG5cXG59XFxuXFxuQG1lZGlhICAobWF4LXdpZHRoOiA5NTBweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVye1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG5cXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWZvcm0ge1xcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXG5cXG4gICAgfVxcblxcbiAgICB9XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2XFxcIlxcbiAgICAgICAgXFxcIndyYXBwZXJcXFwiO1xcblxcbiAgICB9XFxuXFxuICAgIC5oZWFkZXItbGlua3Mge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgfVxcblxcblxcbiAgICBuYXYge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0b3A6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIFxcbiAgICBuYXYuY29sbGFwc2Uge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGlua3Mge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuXFxuICAgIH1cXG4gICAud3JhcHBlci5jb2xsYXBzZSAge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuXFxuICAgfVxcblxcbiAgICAudG9kby1mb3JtIHtcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcblxcbiAgICB9XFxuXFxuICAgIC50b2RvLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBjb25zdCBnZXRMb2NhbFRvZG9zID0gKCkgPT4ge1xuICAgIGxldCB0b2RvcyBcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRvZG9zID0gW11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSlcbiAgICAgICAgfSAgICByZXR1cm4gdG9kb3MgICAgICAgICAgICBcbiAgICB9XG5cblxuXG5leHBvcnQgY29uc3QgYWRkTG9jYWxUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgdG9kb3MgPSBnZXRMb2NhbFRvZG9zKClcbiAgICB0b2Rvcy5wdXNoKHRvZG8pXG4gICAgXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBcbmV4cG9ydCAgY29uc3QgcmVtb3ZlTG9jYWxUb2RvID0gKHRvZG9UZXh0KSA9PiB7XG4gICAgbGV0IHRvZG9zID0gZ2V0TG9jYWxUb2RvcygpXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0b2RvLm5hbWUgPT09IHRvZG9UZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICBcbiAgICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBnZXRMb2NhbFRvZG9zLFxuICBhZGRMb2NhbFRvZG8sXG4gIHJlbW92ZUxvY2FsVG9kbyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IFRvZG8gPSAodGV4dCkgPT4ge1xuICBjb25zdCBuYW1lID0gdGV4dDtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgbmFtZSwgdGFza3MgfTtcbn07XG5cbmNvbnN0IHRvZG9MaXN0QXBwID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gcHJvcGVydGllcnNcbiAgY29uc3QgX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgY29uc3QgX3RvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gIGNvbnN0IF90b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidG9kb1wiXScpO1xuICBjb25zdCBfdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgX21lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1tZW51XCIpO1xuICBjb25zdCBfbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgY29uc3QgX25hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlua3NcIik7XG4gIGNvbnN0IF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuXG4gIC8vIERpc3BsYXkgVG9kb3MgaW4gVUlcblxuICBjb25zdCBfZGlzcGxheVRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gZ2V0TG9jYWxUb2RvcygpO1xuICAgIGNvbnN0IHRvZG9zID0gc3RvcmVkVG9kb3M7XG5cbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBfYWRkVG9kb3NVSSh0b2RvKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfYWRkVG9kb3NVSSA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXNcIik7XG5cbiAgICBjb25zdCB0b2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9UZXh0LnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgIHRvZG9UZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRleHRcIik7XG5cbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWJ0blwiKTtcbiAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW5cIj48L2k+JztcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPic7XG5cbiAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHRvZG9TdGF0dXMpO1xuICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQodG9kb1RleHQpO1xuICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICBuZXdUb2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgcmV0dXJuIF90b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICAvLyBDcmVhdGUgJiBhZGQgdG9kb1xuXG4gIGNvbnN0IF9nZXRUb2RvVmFsdWUgPSAoX3RvZG9JbnB1dCkgPT4ge1xuICAgIGlmIChfdG9kb0lucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKF90b2RvSW5wdXQudmFsdWUpO1xuICAgICAgX3RvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgIGFkZExvY2FsVG9kbyh0b2RvKTtcblxuICAgICAgcmV0dXJuIHRvZG8ubmFtZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX2FwcGVuZE5ld1RvZG9VSSA9IChfdG9kb0lucHV0KSA9PiB7XG4gICAgaWYgKF90b2RvSW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RvID0gVG9kbyhfdG9kb0lucHV0LnZhbHVlKTtcbiAgICAgIF90b2RvSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICBhZGRMb2NhbFRvZG8odG9kbyk7XG5cbiAgICAgIF9hZGRUb2Rvc1VJKHRvZG8pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfc3VibWl0VG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmV0dXJuIF9hcHBlbmROZXdUb2RvVUkoX3RvZG9JbnB1dCk7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIHRvZG9cblxuICBjb25zdCBfcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgdG9kb1RleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWJ0blwiKSkge1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgIHJlbW92ZUxvY2FsVG9kbyh0b2RvVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVkaXQgdG9kb1xuXG4gIGNvbnN0IF9lZGl0VG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgX3RvZG9JbnB1dCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ0blwiKSkge1xuICAgICAgX3RvZG9JbnB1dC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICBfdG9kb0lucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0XCIpO1xuICAgIH1cblxuICAgIF90b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBfdG9kb0lucHV0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgX3RvZG9JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfYnV0dG9uc0V2ZW50cyA9ICgpID0+IHtcbiAgICBfdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBfcmVtb3ZlVG9kbyhlKTtcbiAgICAgIF9lZGl0VG9kbyhlKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIF9zdWJtaXRUb2RvKTtcbiAgICBfZGlzcGxheVRvZG9zKCk7XG4gICAgX2J1dHRvbnNFdmVudHMoKTtcblxuICAgIF9tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBfbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICAgIF9uYXZMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgICBfd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnQgfTtcbn0pKCk7XG5cbnRvZG9MaXN0QXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=