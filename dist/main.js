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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n    transform: scale(.7);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\ninput {\n    border: none;\n    font-size: 1.4rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n.task-btn {\n    border: none;\n    background-color: white;\n    cursor: pointer;\n    margin: 0px 5px;\n}.task-btn > * {\n    pointer-events: none;\n    font-size: 1.2rem;\n    color: var(--gray)\n}.project-tasks-list,\n.header-links {\n    list-style: none;\n}.project-tasks-list {\n    margin: 0px 12px;\n}/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 90%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n    transform: scale(.7);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\ninput {\n    border: none;\n    font-size: 1.4rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n.task-btn {\n    border: none;\n    background-color: white;\n    cursor: pointer;\n    margin: 0px 5px;\n}.task-btn > * {\n    pointer-events: none;\n    font-size: 1.2rem;\n    color: var(--gray)\n}.project-tasks-list,\n.header-links {\n    list-style: none;\n}.project-tasks-list {\n    margin: 0px 12px;\n}/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 90%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "getSelectedProjectID": () => (/* binding */ getSelectedProjectID),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage)
/* harmony export */ });
const LOCAL_STORAGE_PROJECTS_LISTS_KEY = "projects.list";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedID";

let selectedProjectID = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

let projects = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)
) || [
  {
    id: "1728272822829",
    name: "Today",
    tasks: [
      {
        id: "012",
        name: "Be awesome",
        isComplete: false,
      },
    ],
  },

  {
    id: "1728272822839",
    name: "Grocerys",
    tasks: [
      { id: "123", name: "Potatoes", isComplete: false },
      { id: "456", name: "Bananas", isComplete: true },
    ],
  },
];

const saveLocalStorage = () => {
  localStorage.setItem(
    LOCAL_STORAGE_PROJECTS_LISTS_KEY,
    JSON.stringify(projects)
  );
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectID
  );
};

const getSelectedProjectID = () => {
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedID";
  let selectedProjectID = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  return selectedProjectID;
};


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
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");




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
  const homeIcon = document.querySelector("[data-home-icon]");

  let selectedProjectID = (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.getSelectedProjectID)();

  // EVENT LISTENERS

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

  homeIcon.addEventListener("click", (e) => {
    selectedProjectID = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects[0].id;
    saveAndRender();
  });

  projectTasksContainer.addEventListener("click", (e) => {
    checkTaskDone(e);
    deleteTask(e);
  });

  deleteProjectBtn.addEventListener("click", (e) => {
    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project) => project.id !== selectedProjectID);
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
    nav.classList.toggle("collapse");
  });

  // FUNCTIONALITIES

  const addNewProject = (projectNameInput) => {
    const projectName = projectNameInput.value;

    if (projectName === null || projectName === "") return;

    const newProject = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectName);
    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProject);
    saveAndRender();

    projectNameInput.value = "";
  };

  const addNewTask = (taskNameInput) => {
    const taskName = taskNameInput.value;
    if (taskName === null || taskName === "") return;

    const newTask = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Task)(taskName);

    const currentProject = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.find(
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

    const currentProject = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.find(
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
    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveLocalStorage)();
  };

  const renderUI = () => {
    clearElement(projectsTabsContainer);
    renderProjects();
    renderProjectInfo();
  };

  const renderProjects = () => {
    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
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
    const currentProjectInfo = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects.find(
      (project) => project.id === selectedProjectID
    );

    return currentProjectInfo;
  };

  const renderProjectInfo = () => {
    const currentProjectInfo = findSelectedProject();

    if (selectedProjectID === null || currentProjectInfo === undefined) {
      projectsTasksDisplay.style.display = "none";

      selectedProjectID = _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.projects[0].id;
      saveAndRender();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsTUFBTSxXQUFXLFlBQVksV0FBVyxZQUFZLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gICAgLS1tYWluOiByZ2JhKDI1MCwgMTI4LCAxMTQsIDEpO1xcbiAgICAtLW1haW4taG92ZXI6IHJnYmEoMjUwLCAxMjgsIDExNCwgLjUpO1xcbiAgICAtLW5hdi1iZzogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW5hdi1iZy1ob3ZlcjogI0VFRUVFRTtcXG4gICAgLS1ncmF5OiByZ2IoODMsIDgzLCA4Myk7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXYgd3JhcHBlclxcXCJcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG8gNTBweDtcXG4gICAgcGFkZGluZzogNnB4IDBweDtcXG59XFxuLmhlYWRlci1saW5rcz4qIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uaG9tZS1pY29uIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcXG59XFxuLmhkLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NiwgMzEsIDE0LCAwLjUpO1xcbn0vKiBTSURFIE5BViBCQVIgLSBQUk9KRUNUUyBUQUJTICovXFxubmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbm5hdi5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5uYXY+KiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4tdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDI1cHggMHB4IDBweCA1MHB4O1xcbn1cXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmljb24tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mYS1jaXJjbGUge1xcbiAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcbi5uYXYtdGFiPioge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm5hdi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5hdi10YWIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLm5hdi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE1cHg7XFxufVxcbi5uYXYtdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuLnByb2plY3QtZm9ybSxcXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcXG59XFxuLndyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IHdyYXBwZXI7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDI1cHggNTBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG4ud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5mb3JtIHtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG59XFxuZm9ybT4qIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFBST0pFQ1RTIFRBU0tTIFNFQ1RJT04gKi9cXG4uc3VibWl0LW5ldy10YXNrIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5zdWJtaXQtbmV3LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcbi50YXNrLWJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbn0udGFzay1idG4gPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSlcXG59LnByb2plY3QtdGFza3MtbGlzdCxcXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59LnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgIG1hcmdpbjogMHB4IDEycHg7XFxufS8qIFRhc2tzICovXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0yMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMrLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICB9XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXJnaW46IDI1cHggMjBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJuYXZcXFwiXFxuICAgICAgICAgICAgXFxcIndyYXBwZXJcXFwiO1xcbiAgICB9XFxuICAgIC5oZWFkZXItbGlua3Mge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgfVxcbiAgICBuYXYge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0b3A6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIG5hdi5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgLm1haW4tdGFicy1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyLFxcbiAgICAucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9ICAgIFxcbiAgICBcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICAgICAgbWluLXdpZHRoOiA5MCU7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQzs7O0FBR0o7QUFDQSxXQUFXO0FBQ1g7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNC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QUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakM7OztxQkFHYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osbUNBQW1DO1FBQ25DLDhCQUE4QjtRQUM5QixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7SUFDQTs7OztRQUlJLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7O0lBRWxCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogcmdiYSgyNTAsIDEyOCwgMTE0LCAxKTtcXG4gICAgLS1tYWluLWhvdmVyOiByZ2JhKDI1MCwgMTI4LCAxMTQsIC41KTtcXG4gICAgLS1uYXYtYmc6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1uYXYtYmctaG92ZXI6ICNFRUVFRUU7XFxuICAgIC0tZ3JheTogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2IHdyYXBwZXJcXFwiXFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvIDUwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAwcHg7XFxufVxcbi5oZWFkZXItbGlua3M+KiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuLmJ1cmdlciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvbWUtaWNvbiB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAxJSk7XFxufVxcbi5oZC1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDMxLCAxNCwgMC41KTtcXG59LyogU0lERSBOQVYgQkFSIC0gUFJPSkVDVFMgVEFCUyAqL1xcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5uYXYuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxubmF2Pioge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAwcHggNTBweDtcXG59XFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5pY29uLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtY2lyY2xlIHtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG4ubmF2LXRhYj4qIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uYXYtdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5uYXYtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbn1cXG4ubmF2LXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0sXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB3cmFwcGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNXB4IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuZm9ybSB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxufVxcbmZvcm0+KiB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59XFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBQUk9KRUNUUyBUQVNLUyBTRUNUSU9OICovXFxuLnN1Ym1pdC1uZXctdGFzayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uc3VibWl0LW5ldy10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG4udGFzay1idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59LnRhc2stYnRuID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpXFxufS5wcm9qZWN0LXRhc2tzLWxpc3QsXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufS5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICBtYXJnaW46IDBweCAxMnB4O1xcbn0vKiBUYXNrcyAqL1xcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay10ZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLXRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMjBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzKy5jdXN0b20tY2hlY2tib3gge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDJweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgfVxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luOiAyNXB4IDIwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCA1MHB4IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgICAgICBcXFwibmF2XFxcIlxcbiAgICAgICAgICAgIFxcXCJ3cmFwcGVyXFxcIjtcXG4gICAgfVxcbiAgICAuaGVhZGVyLWxpbmtzIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuICAgIH1cXG4gICAgbmF2IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdG9wOiA0NXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMDBweCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBuYXYuY29sbGFwc2Uge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgIC5tYWluLXRhYnMtY29udGFpbmVyLFxcbiAgICAucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuICAgIC5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjBweDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfSAgICBcXG4gICAgXFxuICAgIC5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19MSVNUU19LRVkgPSBcInByb2plY3RzLmxpc3RcIjtcbmNvbnN0IExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVkgPSBcInByb2plY3Quc2VsZWN0ZWRJRFwiO1xuXG5sZXQgc2VsZWN0ZWRQcm9qZWN0SUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxuKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UoXG4gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfTElTVFNfS0VZKVxuKSB8fCBbXG4gIHtcbiAgICBpZDogXCIxNzI4MjcyODIyODI5XCIsXG4gICAgbmFtZTogXCJUb2RheVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjAxMlwiLFxuICAgICAgICBuYW1lOiBcIkJlIGF3ZXNvbWVcIixcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAge1xuICAgIGlkOiBcIjE3MjgyNzI4MjI4MzlcIixcbiAgICBuYW1lOiBcIkdyb2NlcnlzXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHsgaWQ6IFwiMTIzXCIsIG5hbWU6IFwiUG90YXRvZXNcIiwgaXNDb21wbGV0ZTogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IFwiNDU2XCIsIG5hbWU6IFwiQmFuYW5hc1wiLCBpc0NvbXBsZXRlOiB0cnVlIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0xJU1RTX0tFWSxcbiAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0cylcbiAgKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSxcbiAgICBzZWxlY3RlZFByb2plY3RJRFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvamVjdElEID0gKCkgPT4ge1xuICBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJwcm9qZWN0LnNlbGVjdGVkSURcIjtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxuICApO1xuXG4gIHJldHVybiBzZWxlY3RlZFByb2plY3RJRDtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgY29uc3QgbmFtZSA9IHByb2plY3ROYW1lO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICByZXR1cm4geyBpZCwgbmFtZSwgdGFza3MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGFza05hbWUpIHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5hbWUgPSB0YXNrTmFtZTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIHJldHVybiB7IGlkLCBuYW1lLCBpc0NvbXBsZXRlIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQge1xuICBzYXZlTG9jYWxTdG9yYWdlLFxuICBwcm9qZWN0cyxcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0SUQsXG59IGZyb20gXCIuL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qc1wiO1xuXG5jb25zdCB0b2RvQXBwID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdQcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdC1uYW1lLWlucHV0XVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLXByb2plY3RzLXRhYnMtY29udGFpbmVyXVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdHMtdGFza3MtZGlzcGxheV1cIlxuICApO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1mb3JtXVwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtbmFtZS10aXRsZV1cIik7XG4gIGNvbnN0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcl1cIlxuICApO1xuICBjb25zdCB0YXNrTmFtZUlucHV0ID0gbmV3VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stbmFtZS1pbnB1dF1cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXByb2plY3RdXCIpO1xuICBjb25zdCBkZWxldGVDb21wbGV0ZWRUYXNrc0JUbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1kZWxldGUtY29tcGxldGVkLXRhc2tzXVwiXG4gICk7XG5cbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYnVyZ2VyLW1lbnUtaWNvbl1cIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWhvbWUtaWNvbl1cIik7XG5cbiAgbGV0IHNlbGVjdGVkUHJvamVjdElEID0gZ2V0U2VsZWN0ZWRQcm9qZWN0SUQoKTtcblxuICAvLyBFVkVOVCBMSVNURU5FUlNcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWVJbnB1dCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3VGFzayh0YXNrTmFtZUlucHV0KTtcbiAgfSk7XG5cbiAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhvbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdElEID0gcHJvamVjdHNbMF0uaWQ7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBwcm9qZWN0VGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2hlY2tUYXNrRG9uZShlKTtcbiAgICBkZWxldGVUYXNrKGUpO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBzZWxlY3RlZFByb2plY3RJRCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBudWxsO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBkZWxldGVDb21wbGV0ZWRUYXNrc0JUbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzID0gY3VycmVudFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+ICF0YXNrLmlzQ29tcGxldGVcbiAgICApO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICB9KTtcblxuICAvLyBGVU5DVElPTkFMSVRJRVNcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lSW5wdXQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcblxuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Rhc2sgPSAodGFza05hbWVJbnB1dCkgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT09IG51bGwgfHwgdGFza05hbWUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tUYXNrRG9uZSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gY3VycmVudFByb2plY3QudGFza3MuZmluZChcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRUYXNrLmlzQ29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuXG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10YXNrLWJ0blwiKTtcbiAgICBpZiAoZGVsZXRlQnRuKSB7XG4gICAgICBkZWxldGVUYXNrVUkoZSk7XG4gICAgICBkZWxldGVUYXNrTG9jYWxTdG9yYWdlKGUpO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrVUkgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrTG9jYWxTdG9yYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHNlbGVjdGVkVGFzay5pZCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVBbmRSZW5kZXIgPSAoKSA9PiB7XG4gICAgcmVuZGVyVUkoKTtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVUkgPSAoKSA9PiB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzVGFic0NvbnRhaW5lcik7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0SW5mbygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RhYlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdUYWJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtdGFiXCIpO1xuICAgICAgbmV3VGFiUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgIG5ld1RhYlByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgaWYgKG5ld1RhYlByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPT09IHNlbGVjdGVkUHJvamVjdElEKSB7XG4gICAgICAgIG5ld1RhYlByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWNvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImljb24tcHJvamVjdFwiKTtcbiAgICAgIGljb25Qcm9qZWN0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZSBuYXYtaWNvblwiPjwvaT4nO1xuXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgIG5ld1RhYlByb2plY3QuYXBwZW5kQ2hpbGQoaWNvblByb2plY3QpO1xuICAgICAgbmV3VGFiUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgIHByb2plY3RzVGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYWJQcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0SW5mbztcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZm8gPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SUQgPT09IG51bGwgfHwgY3VycmVudFByb2plY3RJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2plY3RzVGFza3NEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBwcm9qZWN0c1swXS5pZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdEluZm8ubmFtZTtcbiAgICAgIGNsZWFyRWxlbWVudChwcm9qZWN0VGFza3NDb250YWluZXIpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmZvID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgY3VycmVudFByb2plY3RJbmZvLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NoZWNrLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVjay5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay10ZXh0XCIpO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY3VzdG9tQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jaGVja2JveFwiKTtcblxuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tCb3gpO1xuXG4gICAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGljb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25zLWNvbnRhaW5lclwiKTtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiLCBcImRlbGV0ZS10YXNrLWJ0blwiKTtcbiAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gXCI+PC9pPic7XG5cbiAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiLCBcImVkaXQtdGFzay1idG5cIik7XG4gICAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSBcIj48L2k+JztcblxuICAgICAgaWNvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgIGljb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tDaGVjayk7XG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaWNvbnNDb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICByZW5kZXJVSSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0IH07XG59KSgpO1xuXG50b2RvQXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=