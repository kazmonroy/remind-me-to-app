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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n    padding: 0;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    padding: 0px 0px 0px 10px;\n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n    padding: 0;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    padding: 0px 0px 0px 10px;\n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxTQUFTLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sbURBQW1ELGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsU0FBUyxxQ0FBcUMsNENBQTRD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VUFBVSw4Q0FBOEM7QUFDeEQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw2REFBTztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwREFBSTs7QUFFeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOnJvb3Qge1xcbiAgICAtLW1haW46IHJnYmEoMjUwLCAxMjgsIDExNCwgMSk7XFxuICAgIC0tbWFpbi1ob3ZlcjogcmdiYSgyNTAsIDEyOCwgMTE0LCAuNSk7XFxuICAgIC0tbmF2LWJnOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbmF2LWJnLWhvdmVyOiAjRUVFRUVFO1xcbiAgICAtLWdyYXk6IHJnYig4MywgODMsIDgzKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2IHdyYXBwZXJcXFwiXFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvIDUwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAwcHg7XFxufVxcbi5oZWFkZXItbGlua3M+KiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuLmJ1cmdlciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvbWUtaWNvbiB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAxJSk7XFxufVxcbi5oZC1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDMxLCAxNCwgMC41KTtcXG59XFxuXFxuLyogU0lERSBOQVYgQkFSIC0gUFJPSkVDVFMgVEFCUyAqL1xcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5uYXYuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxubmF2Pioge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAwcHggNTBweDtcXG59XFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5pY29uLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtY2lyY2xlIHtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG4ubmF2LXRhYj4qIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uYXYtdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5uYXYtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbn1cXG4ubmF2LXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB3cmFwcGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNXB4IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuZm9ybSB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxufVxcbmZvcm0+KiB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbik7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFBST0pFQ1RTIFRBU0tTIFNFQ1RJT04gKi9cXG5cXG4uc3VibWl0LW5ldy10YXNrIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtbmV3LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5kZWxldGUtcHJvamVjdC1idG4sIC5zYXZlLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIC5mYS1wbHVzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciwgLnNhdmUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIC5mYS1wbHVzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0LFxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgbWFyZ2luOiAwcHggMTJweDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWlucHV0IHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMjBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzKy5jdXN0b20tY2hlY2tib3gge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDJweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4udGFzay1pY29ucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuXFxuLnRhc2stYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnRuIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XFxufVxcblxcbi50YXNrLWJ0biA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpXFxufVxcblxcbi8qIFRBU0sgRURJVE9SIE1PREFMICovXFxuXFxuLnRhc2stZWRpdG9yLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVkaXRvci1tb2RhbC5vcGVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuXFxuXFxuLyogLnRhc2stZWRpdG9yLW1vZGFsLnJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufSAqL1xcblxcbi50YXNrLWVkaXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICB9XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXJnaW46IDI1cHggMjBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJuYXZcXFwiXFxuICAgICAgICAgICAgXFxcIndyYXBwZXJcXFwiO1xcbiAgICB9XFxuICAgIC5oZWFkZXItbGlua3Mge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgfVxcbiAgICBuYXYge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0b3A6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIG5hdi5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgLm1haW4tdGFicy1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyLFxcbiAgICAucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9ICAgIFxcbiAgICBcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQzs7O0FBR0o7QUFDQSxXQUFXO0FBQ1g7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw4RkFBOEY7QUFDbEc7QUFDQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7OztBQUlBOzs7R0FHRzs7QUFFSDtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQzs7O3FCQUdhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsOEJBQThCO1FBQzlCLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtJQUNBOzs7O1FBSUksK0JBQStCO1FBQy9CLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gICAgLS1tYWluOiByZ2JhKDI1MCwgMTI4LCAxMTQsIDEpO1xcbiAgICAtLW1haW4taG92ZXI6IHJnYmEoMjUwLCAxMjgsIDExNCwgLjUpO1xcbiAgICAtLW5hdi1iZzogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW5hdi1iZy1ob3ZlcjogI0VFRUVFRTtcXG4gICAgLS1ncmF5OiByZ2IoODMsIDgzLCA4Myk7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcbn1cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG4uaGQtaWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbi8qIFNJREUgTkFWIEJBUiAtIFBST0pFQ1RTIFRBQlMgKi9cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxubmF2LmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbi10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XFxufVxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uaWNvbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLm5hdi10YWI+KiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmF2LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubmF2LXRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4ubmF2LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTVweDtcXG59XFxuLm5hdi10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSxcXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxufVxcbi53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbmZvcm0ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5mb3JtPioge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBQUk9KRUNUUyBUQVNLUyBTRUNUSU9OICovXFxuXFxuLnN1Ym1pdC1uZXctdGFzayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LW5ldy10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLCAuZGVsZXRlLXByb2plY3QtYnRuLCAuc2F2ZS1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayAuZmEtcGx1cyB7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5zYXZlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciAuZmEtcGx1cyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCxcXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgIG1hcmdpbjogMHB4IDEycHg7XFxufVxcblxcbi8qIFRhc2tzICovXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcblxcbi50YXNrLWlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmVkaXQtdGFzay1pbnB1dCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cysuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnRhc2staWNvbnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcXG59XFxuXFxuLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbi50YXNrLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ0biB7XFxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcbn1cXG5cXG4udGFzay1idG4gPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KVxcbn1cXG5cXG4vKiBUQVNLIEVESVRPUiBNT0RBTCAqL1xcblxcbi50YXNrLWVkaXRvci1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lZGl0b3ItbW9kYWwub3BlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcblxcblxcbi8qIC50YXNrLWVkaXRvci1tb2RhbC5yZW1vdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn0gKi9cXG5cXG4udGFzay1lZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogMzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgfVxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luOiAyNXB4IDIwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCA1MHB4IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgICAgICBcXFwibmF2XFxcIlxcbiAgICAgICAgICAgIFxcXCJ3cmFwcGVyXFxcIjtcXG4gICAgfVxcbiAgICAuaGVhZGVyLWxpbmtzIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuICAgIH1cXG4gICAgbmF2IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdG9wOiA0NXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMDBweCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBuYXYuY29sbGFwc2Uge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgIC5tYWluLXRhYnMtY29udGFpbmVyLFxcbiAgICAucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuICAgIC5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjBweDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfSAgICBcXG4gICAgXFxuICAgIC5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgaWQsIG5hbWUsIHRhc2tzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRhc2tOYW1lKSB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICBjb25zdCBuYW1lID0gdGFza05hbWU7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTtcblxuICByZXR1cm4geyBpZCwgbmFtZSwgaXNDb21wbGV0ZSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCB0b2RvQXBwID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdQcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdC1uYW1lLWlucHV0XVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLXByb2plY3RzLXRhYnMtY29udGFpbmVyXVwiXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtcHJvamVjdHMtdGFza3MtZGlzcGxheV1cIlxuICApO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1mb3JtXVwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtbmFtZS10aXRsZV1cIik7XG4gIGNvbnN0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcl1cIlxuICApO1xuICBjb25zdCB0YXNrTmFtZUlucHV0ID0gbmV3VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stbmFtZS1pbnB1dF1cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXByb2plY3RdXCIpO1xuXG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWJ1cmdlci1tZW51LWljb25dXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1ob21lLWljb25dXCIpO1xuXG4gIC8vIExPQ0FMIFNUT1JBR0VcblxuICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0xJU1RTX0tFWSA9IFwicHJvamVjdHMubGlzdFwiO1xuICBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJwcm9qZWN0LnNlbGVjdGVkSURcIjtcblxuICBsZXQgc2VsZWN0ZWRQcm9qZWN0SUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZXG4gICk7XG5cbiAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0xJU1RTX0tFWSlcbiAgKSB8fCBbXG4gICAge1xuICAgICAgaWQ6IFwiMTcyODI3MjgyMjgyOVwiLFxuICAgICAgbmFtZTogXCJUb2RheVwiLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjE3MjgyNzI4MjI4MzlcIixcbiAgICAgICAgICBuYW1lOiBcIkJlIGF3ZXNvbWVcIixcbiAgICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiBcIjE3MjgyNzI4MjI5MjlcIixcbiAgICAgIG5hbWU6IFwiR3JvY2VyeXNcIixcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHsgaWQ6IFwiMTIzXCIsIG5hbWU6IFwiUG90YXRvZXNcIiwgaXNDb21wbGV0ZTogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogXCI0NTZcIiwgbmFtZTogXCJCYW5hbmFzXCIsIGlzQ29tcGxldGU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19MSVNUU19LRVksXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0cylcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSxcbiAgICAgIHNlbGVjdGVkUHJvamVjdElEXG4gICAgKTtcbiAgfTtcblxuICAvLyBFVkVOVCBMSVNURU5FUlNcblxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICB9KTtcblxuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0cy1zZWN0aW9uXCIpKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlXCIpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VcIik7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWVJbnB1dCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3VGFzayh0YXNrTmFtZUlucHV0KTtcbiAgfSk7XG5cbiAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhvbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdElEID0gcHJvamVjdHNbMF0uaWQ7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2xsYXBzZVwiKSkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZVwiKTtcbiAgICB9XG5cbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIHByb2plY3RUYXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJ1dHRvblwiKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SURcbiAgICAgICk7XG5cbiAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRhc2stYnRuXCIpKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LXRhc2stYnRuXCIpKSB7XG4gICAgICAgIGVkaXRUYXNrKGUsIHRhc2tDb250YWluZXIsIGJ1dHRvbik7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWVkaXQtdGFzay1idG5cIikpIHtcbiAgICAgICAgc2F2ZUVkaXRUYXNrKGUsIHRhc2tDb250YWluZXIsIGJ1dHRvbiwgY3VycmVudFByb2plY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVGFza0RvbmUoZSk7XG4gIH0pO1xuXG4gIC8vIEZFQVRVUkVTXG5cbiAgY29uc3Qgc2F2ZUVkaXRUYXNrID0gKGUsIHRhc2tDb250YWluZXIsIGJ1dHRvbiwgY3VycmVudFByb2plY3QpID0+IHtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXQgPSB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVjay5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dFwiKTtcbiAgICAgIHRhc2tDb250ZW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG5cbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjdXN0b21DaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWNoZWNrYm94XCIpO1xuXG4gICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChjdXN0b21DaGVja0JveCk7XG5cbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuXG4gICAgICB0YXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrQ2hlY2ssIGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFza0NvbnRlbnQsIGJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPic7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtZWRpdC10YXNrLWJ0blwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWJ0blwiKTtcblxuICAgICAgc2F2ZUVkaXRUYXNrTG9jYWxTdG9yYWdlKGUpO1xuXG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoZSwgdGFza0NvbnRhaW5lciwgYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgLy8gbmV3IGlucHV0XG4gICAgY29uc3QgZWRpdFRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0VGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGVkaXRUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LXRhc2staW5wdXRcIik7XG4gICAgZWRpdFRhc2tJbnB1dC52YWx1ZSA9IGxhYmVsLnRleHRDb250ZW50O1xuXG4gICAgdGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tJbnB1dCwgaW5wdXQpO1xuICAgIGlucHV0LnJlbW92ZSgpO1xuICAgIGxhYmVsLnJlbW92ZSgpO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrXCI+PC9pPic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0LXRhc2stYnRuXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1lZGl0LXRhc2stYnRuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVFZGl0VGFza0xvY2FsU3RvcmFnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tDb250YWluZXIuaWQpIHtcbiAgICAgICAgdGFzay5uYW1lID0gdGFza0NvbnRhaW5lci50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBzZWxlY3RlZFByb2plY3RJRCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBudWxsO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lSW5wdXQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcblxuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Rhc2sgPSAodGFza05hbWVJbnB1dCkgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT09IG51bGwgfHwgdGFza05hbWUgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrVGFza0RvbmUgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBjdXJyZW50UHJvamVjdC50YXNrcy5maW5kKFxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZFRhc2suaXNDb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGRlbGV0ZVRhc2tVSShlKTtcbiAgICBkZWxldGVUYXNrTG9jYWxTdG9yYWdlKGUpO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrVUkgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrTG9jYWxTdG9yYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHNlbGVjdGVkVGFzay5pZCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVBbmRSZW5kZXIgPSAoKSA9PiB7XG4gICAgcmVuZGVyVUkoKTtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVUkgPSAoKSA9PiB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzVGFic0NvbnRhaW5lcik7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0SW5mbygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RhYlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdUYWJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtdGFiXCIpO1xuICAgICAgbmV3VGFiUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgIG5ld1RhYlByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgICBpZiAobmV3VGFiUHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SUQpIHtcbiAgICAgICAgbmV3VGFiUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpY29uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpY29uUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaWNvbi1wcm9qZWN0XCIpO1xuICAgICAgaWNvblByb2plY3QuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlIG5hdi1pY29uXCI+PC9pPic7XG5cbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgbmV3VGFiUHJvamVjdC5hcHBlbmRDaGlsZChpY29uUHJvamVjdCk7XG4gICAgICBuZXdUYWJQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RhYlByb2plY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmZvID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudFByb2plY3RJbmZvO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGlmIChzZWxlY3RlZFByb2plY3RJRCA9PT0gbnVsbCB8fCBjdXJyZW50UHJvamVjdEluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SUQgPSBwcm9qZWN0c1swXS5pZDtcblxuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c1Rhc2tzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0SW5mby5uYW1lO1xuICAgICAgY2xlYXJFbGVtZW50KHByb2plY3RUYXNrc0NvbnRhaW5lcik7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZm8gPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICBjdXJyZW50UHJvamVjdEluZm8udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgICB0YXNrQ2hlY2suZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgICAgdGFza0NoZWNrLmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGU7XG5cbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgdGFza0NvbnRlbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRhc2suaWQpO1xuICAgICAgdGFza0NvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICB0YXNrQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIik7XG5cbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjdXN0b21DaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWNoZWNrYm94XCIpO1xuXG4gICAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29ucy1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIsIFwiZGVsZXRlLXRhc2stYnRuXCIpO1xuICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBcIj48L2k+JztcblxuICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiLCBcImVkaXQtdGFzay1idG5cIik7XG4gICAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT4nO1xuXG4gICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChjdXN0b21DaGVja0JveCk7XG4gICAgICBpY29uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgaWNvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0NoZWNrKTtcbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGljb25zQ29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgcmVuZGVyVUkoKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydCB9O1xufSkoKTtcblxudG9kb0FwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9