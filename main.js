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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    padding: 0px 0px 0px 10px;\n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    padding: 0px 0px 0px 10px;\n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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

  const menuIcon = document.querySelector("[data-burger-menu-icon]");
  const nav = document.querySelector("nav");
  const homeIcon = document.querySelector("[data-home-icon]");

  // LOCAL STORAGE

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
          id: "1728272822839",
          name: "Be awesome",
          isComplete: false,
        },
      ],
    },

    {
      id: "1728272822929",
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

  // EVENT LISTENERS

  menuIcon.addEventListener("click", (e) => {
    nav.classList.toggle("collapse");
  });

  nav.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.classList.contains("projects-section")) {
      nav.classList.remove("collapse");
    } else if (e.target.tagName.toLowerCase() === "li") {
      nav.classList.remove("collapse");
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

  homeIcon.addEventListener("click", (e) => {
    selectedProjectID = projects[0].id;
    if (nav.classList.contains("collapse")) {
      nav.classList.remove("collapse");
    }

    saveAndRender();
  });

  projectTasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "button") {
      const button = e.target;
      const taskContainer = button.parentElement.parentElement;
      const currentProject = projects.find(
        (project) => project.id === selectedProjectID
      );

      if (button.classList.contains("delete-task-btn")) {
        deleteTask(e);
      } else if (button.classList.contains("edit-task-btn")) {
        editTask(e, taskContainer, button);
      } else if (button.classList.contains("save-edit-task-btn")) {
        saveEditTask(e, taskContainer, button, currentProject);
      }
    }

    checkTaskDone(e);
  });

  // FEATURES

  const saveEditTask = (e, taskContainer, button, currentProject) => {
    const buttonsContainer = button.parentElement;
    const input = taskContainer.firstChild;

    currentProject.tasks.forEach((task) => {
      const taskCheck = document.createElement("input");
      taskCheck.setAttribute("type", "checkbox");
      taskCheck.setAttribute("id", task.id);
      taskCheck.classList.add("task-input");
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.isComplete;

      const taskContent = document.createElement("label");
      taskContent.setAttribute("for", task.id);
      taskContent.setAttribute("id", task.id);
      taskContent.classList.add("task-text");
      taskContent.textContent = input.value;

      const customCheckBox = document.createElement("span");
      customCheckBox.classList.add("custom-checkbox");

      taskContent.appendChild(customCheckBox);

      input.remove();

      taskContainer.insertBefore(taskCheck, buttonsContainer);
      taskContainer.insertBefore(taskContent, buttonsContainer);

      button.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
      button.classList.remove("save-edit-task-btn");
      button.classList.add("edit-task-btn");

      saveEditTaskLocalStorage(e);

      saveAndRender();
    });
  };

  const editTask = (e, taskContainer, button) => {
    const input = taskContainer.firstChild;
    const label = taskContainer.firstChild.nextElementSibling;

    // new input
    const editTaskInput = document.createElement("input");
    editTaskInput.setAttribute("type", "text");
    editTaskInput.setAttribute("class", "edit-task-input");
    editTaskInput.value = label.textContent;

    taskContainer.insertBefore(editTaskInput, input);
    input.remove();
    label.remove();

    button.innerHTML = '<i class="fa-solid fa-check"></i>';
    button.classList.remove("edit-task-btn");
    button.classList.add("save-edit-task-btn");
  };

  const saveEditTaskLocalStorage = (e) => {
    const taskContainer = e.target.parentElement.parentElement.children[1];

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.forEach((task, index) => {
      if (task.id === taskContainer.id) {
        task.name = taskContainer.textContent;
      }
    });
  };

  deleteProjectBtn.addEventListener("click", (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectID);
    selectedProjectID = null;

    saveAndRender();
  });

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
    if (e.target.hasAttribute("data-task-id")) {
      const currentProject = findSelectedProject();

      const selectedTask = currentProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.isComplete = e.target.checked;
      saveAndRender();
    }
  };

  const deleteTask = (e) => {
    deleteTaskUI(e);
    deleteTaskLocalStorage(e);
    saveAndRender();
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
      selectedProjectID = projects[0].id;

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
      taskCheck.classList.add("task-input");
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.isComplete;

      const taskContent = document.createElement("label");
      taskContent.setAttribute("for", task.id);
      taskContent.setAttribute("id", task.id);
      taskContent.textContent = task.name;
      taskContent.classList.add("task-text");

      const customCheckBox = document.createElement("span");
      customCheckBox.classList.add("custom-checkbox");

      const iconsContainer = document.createElement("div");
      iconsContainer.classList.add("task-icons-container");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("task-btn", "delete-task-btn");
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can "></i>';

      const editBtn = document.createElement("button");
      editBtn.classList.add("task-btn", "edit-task-btn");
      editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

      taskContent.appendChild(customCheckBox);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsUUFB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QUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDZEQUFPO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDBEQUFJOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogcmdiYSgyNTAsIDEyOCwgMTE0LCAxKTtcXG4gICAgLS1tYWluLWhvdmVyOiByZ2JhKDI1MCwgMTI4LCAxMTQsIC41KTtcXG4gICAgLS1uYXYtYmc6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1uYXYtYmctaG92ZXI6ICNFRUVFRUU7XFxuICAgIC0tZ3JheTogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXYgd3JhcHBlclxcXCJcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG8gNTBweDtcXG4gICAgcGFkZGluZzogNnB4IDBweDtcXG59XFxuLmhlYWRlci1saW5rcz4qIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uaG9tZS1pY29uIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcXG59XFxuLmhkLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NiwgMzEsIDE0LCAwLjUpO1xcbn1cXG5cXG4vKiBTSURFIE5BViBCQVIgLSBQUk9KRUNUUyBUQUJTICovXFxubmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbm5hdi5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5uYXY+KiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4tdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDI1cHggMHB4IDBweCA1MHB4O1xcbn1cXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmljb24tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mYS1jaXJjbGUge1xcbiAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcbi5uYXYtdGFiPioge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm5hdi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5hdi10YWIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLm5hdi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE1cHg7XFxufVxcbi5uYXYtdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLndyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IHdyYXBwZXI7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDI1cHggNTBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG4ud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5mb3JtIHtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG59XFxuZm9ybT4qIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogUFJPSkVDVFMgVEFTS1MgU0VDVElPTiAqL1xcblxcbi5zdWJtaXQtbmV3LXRhc2sge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1uZXctdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzaywgLmRlbGV0ZS1wcm9qZWN0LWJ0biwgLnNhdmUtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sgLmZhLXBsdXMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLCAuc2F2ZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIgLmZhLXBsdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi5wcm9qZWN0LXRhc2tzLWxpc3QsXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICBtYXJnaW46IDBweCAxMnB4O1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG5cXG4udGFzay1pbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5lZGl0LXRhc2staW5wdXQge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0yMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMrLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi50YXNrLWljb25zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XFxufVxcblxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4udGFzay1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXG59XFxuXFxuLnRhc2stYnRuID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSlcXG59XFxuXFxuLyogVEFTSyBFRElUT1IgTU9EQUwgKi9cXG5cXG4udGFzay1lZGl0b3ItbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWRpdG9yLW1vZGFsLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG5cXG5cXG4vKiAudGFzay1lZGl0b3ItbW9kYWwucmVtb3ZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG59ICovXFxuXFxuLnRhc2stZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRvcDogNDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcbiAgICAubWFpbi10YWJzLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH0gICAgXFxuICAgIFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDOzs7QUFHSjtBQUNBLFdBQVc7QUFDWDtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhGQUE4RjtBQUNsRztBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVB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QUEwQjtRQUMxQixVQUFVO0lBQ2Q7SUFDQTs7OztRQUlJLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7O0lBRWxCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogcmdiYSgyNTAsIDEyOCwgMTE0LCAxKTtcXG4gICAgLS1tYWluLWhvdmVyOiByZ2JhKDI1MCwgMTI4LCAxMTQsIC41KTtcXG4gICAgLS1uYXYtYmc6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1uYXYtYmctaG92ZXI6ICNFRUVFRUU7XFxuICAgIC0tZ3JheTogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXYgd3JhcHBlclxcXCJcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG8gNTBweDtcXG4gICAgcGFkZGluZzogNnB4IDBweDtcXG59XFxuLmhlYWRlci1saW5rcz4qIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uaG9tZS1pY29uIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcXG59XFxuLmhkLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NiwgMzEsIDE0LCAwLjUpO1xcbn1cXG5cXG4vKiBTSURFIE5BViBCQVIgLSBQUk9KRUNUUyBUQUJTICovXFxubmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbm5hdi5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5uYXY+KiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4tdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDI1cHggMHB4IDBweCA1MHB4O1xcbn1cXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmljb24tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mYS1jaXJjbGUge1xcbiAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcbi5uYXYtdGFiPioge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm5hdi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5hdi10YWIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLm5hdi1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE1cHg7XFxufVxcbi5uYXYtdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLndyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IHdyYXBwZXI7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDI1cHggNTBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG4ud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5mb3JtIHtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG59XFxuZm9ybT4qIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogUFJPSkVDVFMgVEFTS1MgU0VDVElPTiAqL1xcblxcbi5zdWJtaXQtbmV3LXRhc2sge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1uZXctdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzaywgLmRlbGV0ZS1wcm9qZWN0LWJ0biwgLnNhdmUtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sgLmZhLXBsdXMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLCAuc2F2ZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIgLmZhLXBsdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi5wcm9qZWN0LXRhc2tzLWxpc3QsXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICBtYXJnaW46IDBweCAxMnB4O1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG5cXG4udGFzay1pbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5lZGl0LXRhc2staW5wdXQge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0yMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMrLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi50YXNrLWljb25zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XFxufVxcblxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4udGFzay1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXG59XFxuXFxuLnRhc2stYnRuID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSlcXG59XFxuXFxuLyogVEFTSyBFRElUT1IgTU9EQUwgKi9cXG5cXG4udGFzay1lZGl0b3ItbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWRpdG9yLW1vZGFsLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG5cXG5cXG4vKiAudGFzay1lZGl0b3ItbW9kYWwucmVtb3ZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG59ICovXFxuXFxuLnRhc2stZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRvcDogNDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcbiAgICAubWFpbi10YWJzLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH0gICAgXFxuICAgIFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWU7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHJldHVybiB7IGlkLCBuYW1lLCB0YXNrcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0YXNrTmFtZSkge1xuICBjb25zdCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgY29uc3QgbmFtZSA9IHRhc2tOYW1lO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgcmV0dXJuIHsgaWQsIG5hbWUsIGlzQ29tcGxldGUgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHMuanNcIjtcblxuY29uc3QgdG9kb0FwcCA9ICgoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gbmV3UHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLXByb2plY3QtbmFtZS1pbnB1dF1cIlxuICApO1xuXG4gIGNvbnN0IHByb2plY3RzVGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1wcm9qZWN0cy10YWJzLWNvbnRhaW5lcl1cIlxuICApO1xuXG4gIGNvbnN0IHByb2plY3RzVGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLXByb2plY3RzLXRhc2tzLWRpc3BsYXldXCJcbiAgKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LW5hbWUtdGl0bGVdXCIpO1xuICBjb25zdCBwcm9qZWN0VGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdC10YXNrcy1jb250YWluZXJdXCJcbiAgKTtcbiAgY29uc3QgdGFza05hbWVJbnB1dCA9IG5ld1Rhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLW5hbWUtaW5wdXRdXCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS1wcm9qZWN0XVwiKTtcblxuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1idXJnZXItbWVudS1pY29uXVwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgY29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaG9tZS1pY29uXVwiKTtcblxuICAvLyBMT0NBTCBTVE9SQUdFXG5cbiAgY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19MSVNUU19LRVkgPSBcInByb2plY3RzLmxpc3RcIjtcbiAgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwicHJvamVjdC5zZWxlY3RlZElEXCI7XG5cbiAgbGV0IHNlbGVjdGVkUHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxuICApO1xuXG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19MSVNUU19LRVkpXG4gICkgfHwgW1xuICAgIHtcbiAgICAgIGlkOiBcIjE3MjgyNzI4MjI4MjlcIixcbiAgICAgIG5hbWU6IFwiVG9kYXlcIixcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIxNzI4MjcyODIyODM5XCIsXG4gICAgICAgICAgbmFtZTogXCJCZSBhd2Vzb21lXCIsXG4gICAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogXCIxNzI4MjcyODIyOTI5XCIsXG4gICAgICBuYW1lOiBcIkdyb2NlcnlzXCIsXG4gICAgICB0YXNrczogW1xuICAgICAgICB7IGlkOiBcIjEyM1wiLCBuYW1lOiBcIlBvdGF0b2VzXCIsIGlzQ29tcGxldGU6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IFwiNDU2XCIsIG5hbWU6IFwiQmFuYW5hc1wiLCBpc0NvbXBsZXRlOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc2F2ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfTElTVFNfS0VZLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gICAgICBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG4gIH07XG5cbiAgLy8gRVZFTlQgTElTVEVORVJTXG5cbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgfSk7XG5cbiAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdHMtc2VjdGlvblwiKSkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZVwiKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lSW5wdXQpO1xuICB9KTtcblxuICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Rhc2sodGFza05hbWVJbnB1dCk7XG4gIH0pO1xuXG4gIHByb2plY3RzVGFic0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElEID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9KTtcblxuICBob21lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzZWxlY3RlZFByb2plY3RJRCA9IHByb2plY3RzWzBdLmlkO1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VcIikpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VcIik7XG4gICAgfVxuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBwcm9qZWN0VGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJidXR0b25cIikge1xuICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElEXG4gICAgICApO1xuXG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10YXNrLWJ0blwiKSkge1xuICAgICAgICBkZWxldGVUYXNrKGUpO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC10YXNrLWJ0blwiKSkge1xuICAgICAgICBlZGl0VGFzayhlLCB0YXNrQ29udGFpbmVyLCBidXR0b24pO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2F2ZS1lZGl0LXRhc2stYnRuXCIpKSB7XG4gICAgICAgIHNhdmVFZGl0VGFzayhlLCB0YXNrQ29udGFpbmVyLCBidXR0b24sIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Rhc2tEb25lKGUpO1xuICB9KTtcblxuICAvLyBGRUFUVVJFU1xuXG4gIGNvbnN0IHNhdmVFZGl0VGFzayA9IChlLCB0YXNrQ29udGFpbmVyLCBidXR0b24sIGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0ID0gdGFza0NvbnRhaW5lci5maXJzdENoaWxkO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiKTtcbiAgICAgIHRhc2tDaGVjay5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgICB0YXNrQ2hlY2suY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZTtcblxuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGFzay5pZCk7XG4gICAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIik7XG4gICAgICB0YXNrQ29udGVudC50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY3VzdG9tQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jaGVja2JveFwiKTtcblxuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tCb3gpO1xuXG4gICAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFza0NoZWNrLCBidXR0b25zQ29udGFpbmVyKTtcbiAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tDb250ZW50LCBidXR0b25zQ29udGFpbmVyKTtcblxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT4nO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzYXZlLWVkaXQtdGFzay1idG5cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1idG5cIik7XG5cbiAgICAgIHNhdmVFZGl0VGFza0xvY2FsU3RvcmFnZShlKTtcblxuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKGUsIHRhc2tDb250YWluZXIsIGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGFza0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0NvbnRhaW5lci5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZztcblxuICAgIC8vIG5ldyBpbnB1dFxuICAgIGNvbnN0IGVkaXRUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBlZGl0VGFza0lucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC10YXNrLWlucHV0XCIpO1xuICAgIGVkaXRUYXNrSW5wdXQudmFsdWUgPSBsYWJlbC50ZXh0Q29udGVudDtcblxuICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrSW5wdXQsIGlucHV0KTtcbiAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICBsYWJlbC5yZW1vdmUoKTtcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVja1wiPjwvaT4nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC10YXNrLWJ0blwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmUtZWRpdC10YXNrLWJ0blwiKTtcbiAgfTtcblxuICBjb25zdCBzYXZlRWRpdFRhc2tMb2NhbFN0b3JhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrQ29udGFpbmVyLmlkKSB7XG4gICAgICAgIHRhc2submFtZSA9IHRhc2tDb250YWluZXIudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SUQpO1xuICAgIHNlbGVjdGVkUHJvamVjdElEID0gbnVsbDtcblxuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZUlucHV0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG5cbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUYXNrID0gKHRhc2tOYW1lSW5wdXQpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgaWYgKHRhc2tOYW1lID09PSBudWxsIHx8IHRhc2tOYW1lID09PSBcIlwiKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBjaGVja1Rhc2tEb25lID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gY3VycmVudFByb2plY3QudGFza3MuZmluZChcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRUYXNrLmlzQ29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICBkZWxldGVUYXNrVUkoZSk7XG4gICAgZGVsZXRlVGFza0xvY2FsU3RvcmFnZShlKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFza1VJID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFza0xvY2FsU3RvcmFnZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBzZWxlY3RlZFRhc2suaWQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzYXZlQW5kUmVuZGVyID0gKCkgPT4ge1xuICAgIHJlbmRlclVJKCk7XG4gICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclVJID0gKCkgPT4ge1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0c1RhYnNDb250YWluZXIpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdEluZm8oKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBuZXdUYWJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3VGFiUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibmF2LXRhYlwiKTtcbiAgICAgIG5ld1RhYlByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgICBuZXdUYWJQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuICAgICAgaWYgKG5ld1RhYlByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPT09IHNlbGVjdGVkUHJvamVjdElEKSB7XG4gICAgICAgIG5ld1RhYlByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWNvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImljb24tcHJvamVjdFwiKTtcbiAgICAgIGljb25Qcm9qZWN0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZSBuYXYtaWNvblwiPjwvaT4nO1xuXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgIG5ld1RhYlByb2plY3QuYXBwZW5kQ2hpbGQoaWNvblByb2plY3QpO1xuICAgICAgbmV3VGFiUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgIHByb2plY3RzVGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYWJQcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0SW5mbztcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZm8gPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SUQgPT09IG51bGwgfHwgY3VycmVudFByb2plY3RJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2plY3RzVGFza3NEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElEID0gcHJvamVjdHNbMF0uaWQ7XG5cbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdEluZm8ubmFtZTtcbiAgICAgIGNsZWFyRWxlbWVudChwcm9qZWN0VGFza3NDb250YWluZXIpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmZvID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgY3VycmVudFByb2plY3RJbmZvLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVjay5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay10ZXh0XCIpO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY3VzdG9tQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jaGVja2JveFwiKTtcblxuICAgICAgY29uc3QgaWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2staWNvbnMtY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiLCBcImRlbGV0ZS10YXNrLWJ0blwiKTtcbiAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gXCI+PC9pPic7XG5cbiAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIiwgXCJlZGl0LXRhc2stYnRuXCIpO1xuICAgICAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIj48L2k+JztcblxuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tCb3gpO1xuICAgICAgaWNvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgIGljb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tDaGVjayk7XG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcblxuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChpY29uc0NvbnRhaW5lcik7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHJlbmRlclVJKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnQgfTtcbn0pKCk7XG5cbnRvZG9BcHAuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==