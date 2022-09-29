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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n    transform: scale(.7);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\ninput {\n    border: none;\n    font-size: 1.4rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n.task-btn {\n    border: none;\n    background-color: white;\n    cursor: pointer;\n    margin: 0px 5px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: 1.2rem;\n    color: var(--gray)\n}\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }\n\n    .projects-tabs-container {\n        min-height: 100vh;\n    }\n    .wrapper.collapse {\n        transform: none;\n    }\n    .projects-tasks-display {\n        min-width: 90%;\n    }\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n    transform: scale(.7);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\ninput {\n    border: none;\n    font-size: 1.4rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n.task-btn {\n    border: none;\n    background-color: white;\n    cursor: pointer;\n    margin: 0px 5px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: 1.2rem;\n    color: var(--gray)\n}\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }\n\n    .projects-tabs-container {\n        min-height: 100vh;\n    }\n    .wrapper.collapse {\n        transform: none;\n    }\n    .projects-tasks-display {\n        min-width: 90%;\n    }\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
function Project(projectName) {
  const id = Date.now().toString();
  const name = projectName;
  const tasks = [];
  return { id, name, tasks };
}

function Task(taskName) {
  const id = Date.now().toString();
  const name = taskName;
  const isComplete = false;

  return { id, name, isComplete };
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
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");



const todoApp = (() => {
  const newProjectForm = document.querySelector("[data-new-project-form]");
  const projectNameInput = newProjectForm.querySelector(
    "[data-project-name-input]"
  );

  const projectsTabsContainer = document.querySelector(
    "[data-projects-tabs-container]"
  );

  const projectsTasksDisplay = document.querySelector(
    "[data-projects-tasks-display]"
  );
  const newTaskForm = document.querySelector("[data-new-task-form]");
  const projectTitle = document.querySelector("[data-project-name-title]");
  const projectTasksContainer = document.querySelector(
    "[data-project-tasks-container]"
  );
  const taskNameInput = newTaskForm.querySelector("[data-task-name-input]");
  const deleteProjectBtn = document.querySelector("[data-delete-project]");
  const deleteCompletedTasksBTn = document.querySelector(
    "[data-delete-completed-tasks]"
  );

  const menuIcon = document.querySelector("[data-burger-menu-icon]");
  const nav = document.querySelector("nav");
  const todayTab = document.querySelector("[data-today-tab]");
  const todayTabTitle = document.querySelector("[data-today-title]");

  // LOCAL STORAGE

  const LOCAL_STORAGE_PROJECTS_LISTS_KEY = "projects.list";
  const LOCAL_STORAGE_TODAY_TAB_KEY = "today";
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedID";

  let selectedProjectID = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  let todayTasks =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODAY_TAB_KEY)) || [];
  let projects =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)) || [];

  const saveLocalStorage = () => {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS_LISTS_KEY,
      JSON.stringify(projects)
    );
    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
      selectedProjectID
    );

    localStorage.setItem(
      LOCAL_STORAGE_TODAY_TAB_KEY,
      JSON.stringify(todayTasks)
    );
  };

  // EVENT LISTENERS

  todayTab.addEventListener("click", (e) => {
    const todayInfo = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)("Today");

    selectedProjectID = todayInfo.id;

    if (selectedProjectID === null) {
      projectsTasksDisplay.style.display = "none";
    } else {
      projectsTasksDisplay.style.display = "";
      projectTitle.textContent = todayInfo.name;
      clearElement(projectTasksContainer);
    }
  });

  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewProject(projectNameInput);
  });

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTask(taskNameInput);
  });

  projectsTabsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectID = e.target.dataset.projectId;
      saveAndRender();
    }
  });

  projectTasksContainer.addEventListener("click", (e) => {
    checkTaskDone(e);
    deleteTask(e);
  });

  deleteProjectBtn.addEventListener("click", (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectID);
    selectedProjectID = null;

    saveAndRender();
  });

  deleteCompletedTasksBTn.addEventListener("click", (e) => {
    const currentProject = findSelectedProject();

    currentProject.tasks = currentProject.tasks.filter(
      (task) => !task.isComplete
    );

    saveAndRender();
  });

  menuIcon.addEventListener("click", (e) => {
    console.log("hi");
    nav.classList.toggle("collapse");
  });

  // FUNCTIONALITIES

  const addNewProject = (projectNameInput) => {
    const projectName = projectNameInput.value;

    if (projectName === null || projectName === "") return;

    const newProject = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectName);
    projects.push(newProject);
    saveAndRender();

    projectNameInput.value = "";
  };

  const addNewTask = (taskNameInput) => {
    const taskName = taskNameInput.value;
    if (taskName === null || taskName === "") return;

    const newTask = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Task)(taskName);

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.push(newTask);
    saveAndRender();

    taskNameInput.value = "";
  };

  const checkTaskDone = (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const currentProject = findSelectedProject();

      const selectedTask = currentProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.isComplete = e.target.checked;

      saveAndRender();
    }
  };

  const deleteTask = (e) => {
    const deleteBtn = e.target.classList.contains("delete-task-btn");
    if (deleteBtn) {
      deleteTaskUI(e);
      deleteTaskLocalStorage(e);
      saveAndRender();
    }
  };

  const deleteTaskUI = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  const deleteTaskLocalStorage = (e) => {
    const selectedTask = e.target.parentElement.parentElement.firstChild;

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.forEach((task, index) => {
      if (task.id === selectedTask.id) {
        currentProject.tasks.splice(index, 1);
      }
    });
  };

  const saveAndRender = () => {
    renderUI();
    saveLocalStorage();
  };

  const renderUI = () => {
    clearElement(projectsTabsContainer);
    renderProjects();
    renderProjectInfo();
    // renderTodayTab();
  };

  const renderProjects = () => {
    projects.forEach((project) => {
      const newTabProject = document.createElement("li");
      newTabProject.classList.add("nav-tab");
      newTabProject.setAttribute("id", project.id);
      newTabProject.dataset.projectId = project.id;
      if (newTabProject.dataset.projectId === selectedProjectID) {
        newTabProject.classList.add("active");
      }

      const iconProject = document.createElement("div");
      iconProject.classList.add("icon-project");
      iconProject.innerHTML = '<i class="fa-solid fa-circle nav-icon"></i>';

      const projectName = document.createElement("p");
      projectName.textContent = project.name;

      newTabProject.appendChild(iconProject);
      newTabProject.appendChild(projectName);

      projectsTabsContainer.appendChild(newTabProject);
    });
  };

  const findSelectedProject = () => {
    const currentProjectInfo = projects.find(
      (project) => project.id === selectedProjectID
    );

    return currentProjectInfo;
  };

  const renderProjectInfo = () => {
    const currentProjectInfo = findSelectedProject();

    if (selectedProjectID === null || currentProjectInfo === undefined) {
      projectsTasksDisplay.style.display = "none";
    } else {
      projectsTasksDisplay.style.display = "";
      projectTitle.textContent = currentProjectInfo.name;
      clearElement(projectTasksContainer);
      renderTasks();
    }
  };

  const renderTasks = () => {
    const currentProjectInfo = findSelectedProject();

    currentProjectInfo.tasks.forEach((task) => {
      const newTask = document.createElement("li");
      newTask.classList.add("task");

      const taskCheck = document.createElement("input");
      taskCheck.setAttribute("type", "checkbox");
      taskCheck.setAttribute("id", task.id);
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.isComplete;

      const taskContent = document.createElement("label");
      taskContent.setAttribute("for", task.id);
      taskContent.setAttribute("id", task.id);
      taskContent.textContent = task.name;
      taskContent.classList.add("task-text");

      const customCheckBox = document.createElement("span");
      customCheckBox.classList.add("custom-checkbox");

      taskContent.appendChild(customCheckBox);

      const iconsContainer = document.createElement("div");

      iconsContainer.classList.add("task-icons-container");

      const deleteBtn = document.createElement("button");

      deleteBtn.classList.add("task-btn", "delete-task-btn");
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can "></i>';

      const editBtn = document.createElement("button");

      editBtn.classList.add("task-btn", "edit-task-btn");
      editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square "></i>';

      iconsContainer.appendChild(deleteBtn);
      iconsContainer.appendChild(editBtn);

      newTask.appendChild(taskCheck);
      newTask.appendChild(taskContent);
      newTask.appendChild(iconsContainer);

      return projectTasksContainer.appendChild(newTask);
    });
  };

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const start = () => {
    renderUI();
  };

  return { start };
})();

todoApp.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsU0FBUyxxQ0FBcUMsNENBQTRDLG1DQUFtQyw4QkFBOEIsOEJBQThCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxRQUFRLHVCQUF1Qiw0Q0FBNEMsb0JBQW9CLHVCQUF1QixtQ0FBbUMsdUNBQXVDLGlGQUFpRiwwQkFBMEIsd0JBQXdCLG9DQUFvQyxtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLDBCQUEwQix3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixzQkFBc0IseUJBQXlCLHdCQUF3Qiw0QkFBNEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0Isa0JBQWtCLHlCQUF5Qiw4QkFBOEIsR0FBRyxjQUFjLHFHQUFxRyxHQUFHLGtCQUFrQiwrQ0FBK0MsR0FBRyw2Q0FBNkMscUJBQXFCLG9CQUFvQixzQ0FBc0MsdUJBQXVCLDRDQUE0QyxHQUFHLGdCQUFnQixvQ0FBb0MsR0FBRyxTQUFTLHNCQUFzQixHQUFHLHlFQUF5RSx1QkFBdUIsZ0NBQWdDLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLEdBQUcsY0FBYyx1QkFBdUIseUJBQXlCLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG1CQUFtQix5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLGFBQWEseUJBQXlCLHNCQUFzQixHQUFHLGtCQUFrQiw0Q0FBNEMsR0FBRyxRQUFRLG1CQUFtQiw4QkFBOEIsMkJBQTJCLHNCQUFzQixHQUFHLGNBQWMseUJBQXlCLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMsR0FBRywrQkFBK0IsdUJBQXVCLHdCQUF3QixHQUFHLHVDQUF1QyxzQ0FBc0MsdUJBQXVCLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0IsbUJBQW1CLHNDQUFzQywyQkFBMkIsR0FBRyxZQUFZLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsNENBQTRDLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFHLHFCQUFxQixvQ0FBb0MsR0FBRyxRQUFRLHVCQUF1QixvQkFBb0IsMEJBQTBCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsU0FBUyxtQkFBbUIsd0JBQXdCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHNCQUFzQixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLG9EQUFvRCxzQkFBc0IsbUJBQW1CLG1CQUFtQiw4QkFBOEIsR0FBRywwQkFBMEIsNENBQTRDLHlCQUF5QixHQUFHLFlBQVksd0JBQXdCLHVCQUF1Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQix5QkFBeUIsR0FBRyxhQUFhLG1CQUFtQiw4QkFBOEIsc0JBQXNCLHNCQUFzQixHQUFHLG1CQUFtQiwyQkFBMkIsd0JBQXdCLDJCQUEyQix5Q0FBeUMsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHdCQUF3QixvQkFBb0IsMEJBQTBCLG1CQUFtQix1QkFBdUIsbURBQW1ELHNCQUFzQixHQUFHLGNBQWMseUJBQXlCLG9CQUFvQiwwQkFBMEIsY0FBYyxzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLHlCQUF5QixlQUFlLGNBQWMsa0JBQWtCLEdBQUcsdUJBQXVCLGlCQUFpQix5QkFBeUIsR0FBRyxvQkFBb0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsNEJBQTRCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLHlCQUF5QixzQkFBc0IseUJBQXlCLDBCQUEwQixzQ0FBc0MsR0FBRyw2RUFBNkUsNEJBQTRCLEdBQUcsc0RBQXNELDhCQUE4QixnQ0FBZ0MsMENBQTBDLEdBQUcscUNBQXFDLGtCQUFrQixHQUFHLCtCQUErQixZQUFZLDJDQUEyQyxPQUFPLGdCQUFnQiwyQkFBMkIsNEJBQTRCLE9BQU8sK0JBQStCLDJCQUEyQixPQUFPLEdBQUcsNkJBQTZCLFlBQVkscUNBQXFDLDRDQUE0QyxxR0FBcUcsT0FBTyxxQkFBcUIsMkJBQTJCLE9BQU8sV0FBVyw2QkFBNkIsc0JBQXNCLG9CQUFvQix1QkFBdUIsOENBQThDLHlDQUF5QywyQ0FBMkMsT0FBTyxvQkFBb0IscUNBQXFDLHFCQUFxQixPQUFPLHVIQUF1SCwwQ0FBMEMsc0JBQXNCLHFDQUFxQyx1QkFBdUIsT0FBTyxrQ0FBa0MsNEJBQTRCLE9BQU8seUJBQXlCLDBCQUEwQixPQUFPLCtCQUErQix5QkFBeUIsT0FBTywyQkFBMkIsd0JBQXdCLGlDQUFpQyxPQUFPLEdBQUcsT0FBTyx5RkFBeUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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ZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOnJvb3Qge1xcbiAgICAtLW1haW46IHJnYmEoMjUwLCAxMjgsIDExNCwgMSk7XFxuICAgIC0tbWFpbi1ob3ZlcjogcmdiYSgyNTAsIDEyOCwgMTE0LCAuNSk7XFxuICAgIC0tbmF2LWJnOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbmF2LWJnLWhvdmVyOiAjRUVFRUVFO1xcbiAgICAtLWdyYXk6IHJnYig4MywgODMsIDgzKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcbn1cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG4uaGQtaWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbi8qIFNJREUgTkFWIEJBUiAtIFBST0pFQ1RTIFRBQlMgKi9cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxubmF2LmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbi10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XFxufVxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uaWNvbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLm5hdi10YWI+KiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmF2LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubmF2LXRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4ubmF2LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTVweDtcXG59XFxuLm5hdi10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtLFxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxufVxcbi53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbmZvcm0ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5mb3JtPioge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogUFJPSkVDVFMgVEFTS1MgU0VDVElPTiAqL1xcbi5zdWJtaXQtbmV3LXRhc2sge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnN1Ym1pdC1uZXctdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLnRhc2stYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWJ0biA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KVxcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0LFxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgbWFyZ2luOiAwcHggMTJweDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay10ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cysuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRvcDogNDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcbiAgICAubWFpbi10YWJzLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB9XFxuICAgIC53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICAucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEM7OztBQUdKOztBQUVBLFdBQVc7QUFDWDtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhGQUE4RjtBQUNsRztBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakM7OztxQkFHYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osbUNBQW1DO1FBQ25DLDhCQUE4QjtRQUM5QixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7SUFDQTs7OztRQUlJLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOnJvb3Qge1xcbiAgICAtLW1haW46IHJnYmEoMjUwLCAxMjgsIDExNCwgMSk7XFxuICAgIC0tbWFpbi1ob3ZlcjogcmdiYSgyNTAsIDEyOCwgMTE0LCAuNSk7XFxuICAgIC0tbmF2LWJnOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbmF2LWJnLWhvdmVyOiAjRUVFRUVFO1xcbiAgICAtLWdyYXk6IHJnYig4MywgODMsIDgzKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcbn1cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG4uaGQtaWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbi8qIFNJREUgTkFWIEJBUiAtIFBST0pFQ1RTIFRBQlMgKi9cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxubmF2LmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbi10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XFxufVxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uaWNvbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLm5hdi10YWI+KiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmF2LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubmF2LXRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4ubmF2LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTVweDtcXG59XFxuLm5hdi10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtLFxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxufVxcbi53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbmZvcm0ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5mb3JtPioge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogUFJPSkVDVFMgVEFTS1MgU0VDVElPTiAqL1xcbi5zdWJtaXQtbmV3LXRhc2sge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnN1Ym1pdC1uZXctdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLnRhc2stYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWJ0biA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KVxcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0LFxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgbWFyZ2luOiAwcHggMTJweDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay10ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cysuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRvcDogNDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcbiAgICAubWFpbi10YWJzLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB9XFxuICAgIC53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICAucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgaWQsIG5hbWUsIHRhc2tzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRhc2tOYW1lKSB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICBjb25zdCBuYW1lID0gdGFza05hbWU7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTtcblxuICByZXR1cm4geyBpZCwgbmFtZSwgaXNDb21wbGV0ZSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCB0b2RvQXBwID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdQcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdC1uYW1lLWlucHV0XVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLXByb2plY3RzLXRhYnMtY29udGFpbmVyXVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdHMtdGFza3MtZGlzcGxheV1cIlxuICApO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1mb3JtXVwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtbmFtZS10aXRsZV1cIik7XG4gIGNvbnN0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcl1cIlxuICApO1xuICBjb25zdCB0YXNrTmFtZUlucHV0ID0gbmV3VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stbmFtZS1pbnB1dF1cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXByb2plY3RdXCIpO1xuICBjb25zdCBkZWxldGVDb21wbGV0ZWRUYXNrc0JUbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1kZWxldGUtY29tcGxldGVkLXRhc2tzXVwiXG4gICk7XG5cbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYnVyZ2VyLW1lbnUtaWNvbl1cIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gIGNvbnN0IHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZGF5LXRhYl1cIik7XG4gIGNvbnN0IHRvZGF5VGFiVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kYXktdGl0bGVdXCIpO1xuXG4gIC8vIExPQ0FMIFNUT1JBR0VcblxuICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0xJU1RTX0tFWSA9IFwicHJvamVjdHMubGlzdFwiO1xuICBjb25zdCBMT0NBTF9TVE9SQUdFX1RPREFZX1RBQl9LRVkgPSBcInRvZGF5XCI7XG4gIGNvbnN0IExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVkgPSBcInByb2plY3Quc2VsZWN0ZWRJRFwiO1xuXG4gIGxldCBzZWxlY3RlZFByb2plY3RJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbiAgKTtcblxuICBsZXQgdG9kYXlUYXNrcyA9XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1RPREFZX1RBQl9LRVkpKSB8fCBbXTtcbiAgbGV0IHByb2plY3RzID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfTElTVFNfS0VZKSkgfHwgW107XG5cbiAgY29uc3Qgc2F2ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfTElTVFNfS0VZLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gICAgICBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIExPQ0FMX1NUT1JBR0VfVE9EQVlfVEFCX0tFWSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRvZGF5VGFza3MpXG4gICAgKTtcbiAgfTtcblxuICAvLyBFVkVOVCBMSVNURU5FUlNcblxuICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0b2RheUluZm8gPSBQcm9qZWN0KFwiVG9kYXlcIik7XG5cbiAgICBzZWxlY3RlZFByb2plY3RJRCA9IHRvZGF5SW5mby5pZDtcblxuICAgIGlmIChzZWxlY3RlZFByb2plY3RJRCA9PT0gbnVsbCkge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c1Rhc2tzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvZGF5SW5mby5uYW1lO1xuICAgICAgY2xlYXJFbGVtZW50KHByb2plY3RUYXNrc0NvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWVJbnB1dCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3VGFzayh0YXNrTmFtZUlucHV0KTtcbiAgfSk7XG5cbiAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByb2plY3RUYXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjaGVja1Rhc2tEb25lKGUpO1xuICAgIGRlbGV0ZVRhc2soZSk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElEKTtcbiAgICBzZWxlY3RlZFByb2plY3RJRCA9IG51bGw7XG5cbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZUNvbXBsZXRlZFRhc2tzQlRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gIXRhc2suaXNDb21wbGV0ZVxuICAgICk7XG5cbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgfSk7XG5cbiAgLy8gRlVOQ1RJT05BTElUSUVTXG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZUlucHV0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG5cbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUYXNrID0gKHRhc2tOYW1lSW5wdXQpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgaWYgKHRhc2tOYW1lID09PSBudWxsIHx8IHRhc2tOYW1lID09PSBcIlwiKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG5cbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBjaGVja1Rhc2tEb25lID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBjdXJyZW50UHJvamVjdC50YXNrcy5maW5kKFxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZFRhc2suaXNDb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRhc2stYnRuXCIpO1xuICAgIGlmIChkZWxldGVCdG4pIHtcbiAgICAgIGRlbGV0ZVRhc2tVSShlKTtcbiAgICAgIGRlbGV0ZVRhc2tMb2NhbFN0b3JhZ2UoZSk7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tVSSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tMb2NhbFN0b3JhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElEXG4gICAgKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gc2VsZWN0ZWRUYXNrLmlkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUFuZFJlbmRlciA9ICgpID0+IHtcbiAgICByZW5kZXJVSSgpO1xuICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJVSSA9ICgpID0+IHtcbiAgICBjbGVhckVsZW1lbnQocHJvamVjdHNUYWJzQ29udGFpbmVyKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RJbmZvKCk7XG4gICAgLy8gcmVuZGVyVG9kYXlUYWIoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBuZXdUYWJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3VGFiUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibmF2LXRhYlwiKTtcbiAgICAgIG5ld1RhYlByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgICBuZXdUYWJQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgIGlmIChuZXdUYWJQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID09PSBzZWxlY3RlZFByb2plY3RJRCkge1xuICAgICAgICBuZXdUYWJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGljb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGljb25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJpY29uLXByb2plY3RcIik7XG4gICAgICBpY29uUHJvamVjdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUgbmF2LWljb25cIj48L2k+JztcblxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICBuZXdUYWJQcm9qZWN0LmFwcGVuZENoaWxkKGljb25Qcm9qZWN0KTtcbiAgICAgIG5ld1RhYlByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICBwcm9qZWN0c1RhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFiUHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZm8gPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElEXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdEluZm87XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmZvID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdElEID09PSBudWxsIHx8IGN1cnJlbnRQcm9qZWN0SW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9qZWN0c1Rhc2tzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzVGFza3NEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RJbmZvLm5hbWU7XG4gICAgICBjbGVhckVsZW1lbnQocHJvamVjdFRhc2tzQ29udGFpbmVyKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0SW5mby50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDaGVjay5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgICB0YXNrQ2hlY2suY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZTtcblxuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGFzay5pZCk7XG4gICAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDb250ZW50LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dFwiKTtcblxuICAgICAgY29uc3QgY3VzdG9tQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGN1c3RvbUNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tY2hlY2tib3hcIik7XG5cbiAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrQm94KTtcblxuICAgICAgY29uc3QgaWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBpY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29ucy1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIiwgXCJkZWxldGUtdGFzay1idG5cIik7XG4gICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIFwiPjwvaT4nO1xuXG4gICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIiwgXCJlZGl0LXRhc2stYnRuXCIpO1xuICAgICAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgXCI+PC9pPic7XG5cbiAgICAgIGljb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICBpY29uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGljb25zQ29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgcmVuZGVyVUkoKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydCB9O1xufSkoKTtcblxudG9kb0FwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9