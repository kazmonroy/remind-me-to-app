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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n    flex: 1;\n}\n\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n    padding: 0;\n    font-size: .9rem;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    /* padding: 0px 0px 0px 10px; */\n    position: relative;\n   \n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n.save-edit-task-btn {\n    background-color: var(--main);\n    color: white;\n    border-radius: 4px;\n    padding: 4px 8px;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    bottom: 0px;\n    right: 0px;\n}\n\n.save-edit-task-btn i {\n    color: white;\n    padding-left: 4px;\n}\n\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\nhtml,\nbody {\n    min-height: 100vh;\n}\nbody {\n    font-size: .9rem;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n/* HEADER */\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n}\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n}\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n.home-icon {\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n}\n.hd-icon:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\n/* SIDE NAV BAR - PROJECTS TABS */\nnav {\n    grid-area: nav;\n    height: 100vh;\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n    transition: transform .3s ease-in-out;\n}\nnav.collapse {\n    transform: translateX(-250px);\n}\nnav>* {\n    cursor: pointer;\n}\n.main-tabs-container,\n.projects-tabs-container,\n.projects-title-tab {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n}\n.projects-title-tab {\n    margin-bottom: 15px;\n}\n.icon-project {\n    display: flex;\n    align-items: center;\n}\n.fa-circle {\n    font-size: .5rem;\n    color: var(--main);\n}\n.nav-tab>* {\n    pointer-events: none;\n}\n.nav-tab {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n}\n.nav-tab.active {\n    background-color: var(--nav-bg-hover);\n}\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n.nav-tab:hover {\n    background-color: var(--nav-bg-hover);\n}\n.btn {\n    border: none;\n    background-color: white;\n    font-family: inherit;\n    cursor: pointer;\n}\n.btn:hover {\n    color: var(--main);\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-project-form-container {\n    overflow: hidden;\n    margin-left: 50px;\n}\n\n.project-form {\n    display: flex;\n    align-items: center;\n}\n\n.project-form,\n.project-name-input {\n    background-color: var(--nav-bg);\n    overflow: hidden;\n}\n.add-project-btn {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--nav-bg);\n}\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n}\n.projects-tasks-display {\n    min-width: 600px;\n}\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\nform>* {\n    margin: 0px 5px;\n}\n\n.new-task-form {\n    border-bottom: 1px solid var(--main);\n}\n\ninput {\n    border: none;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n    flex: 1;\n}\n\ninput::placeholder {\n    font-size: .8rem;\n}\ninput:focus {\n    outline: none;\n}\n\n/* PROJECTS TASKS SECTION */\n\n.submit-new-task {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-new-task:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-task, .delete-project-btn, .save-btn {\n    cursor: pointer;\n    border: 1px solid var(--nav-bg-hover);\n    padding: 5px 10px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.add-task .fa-plus {\n    margin-right: 8px;\n}\n\n.add-task:hover, .save-btn:hover {\n    background-color: var(--main);\n    color: white;\n}\n\n.add-task:hover .fa-plus {\n    color: white;\n}\n\n\n.project-tasks-list,\n.header-links {\n    list-style: none;\n}\n\n.project-tasks-list {\n    margin: 0px 12px;\n}\n\n/* Tasks */\n.task {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 20px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n    cursor: pointer;\n}\n\n.task-text {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    cursor: pointer;\n}\n\n.task-text::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 1px;\n}\n\n\n.task-input {\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n}\n\n.edit-task-input {\n    flex: 1;\n    padding: 0;\n    font-size: .9rem;\n}\n\n.custom-checkbox {\n    --size: 12px;\n    position: absolute;\n    left: -20px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid var(--gray);\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 10px;\n    transform: scale(1);\n    transition: all .2s ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus+.custom-checkbox {\n    transform: scale(1.2);\n}\n\n[type=\"checkbox\"]:checked+label .custom-checkbox {\n    background: var(--main);\n    border-color: var(--main);\n    box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked+label {\n    opacity: .5;\n}\n\n.task-icons-container {\n    /* padding: 0px 0px 0px 10px; */\n    position: relative;\n   \n}\n\n.fa-plus {\n    font-size: 1rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n.task-btn {\n    cursor: pointer;\n    border: none;\n    background-color: white;\n    padding: 0px 5px;\n}\n\n.delete-task-btn {\n    margin: 0px 5px 0px 0px;\n}\n\n.task-btn > * {\n    pointer-events: none;\n    font-size: .9rem;\n    color: var(--gray)\n}\n\n.save-edit-task-btn {\n    background-color: var(--main);\n    color: white;\n    border-radius: 4px;\n    padding: 4px 8px;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    bottom: 0px;\n    right: 0px;\n}\n\n.save-edit-task-btn i {\n    color: white;\n    padding-left: 4px;\n}\n\n\n/* TASK EDITOR MODAL */\n\n.task-editor-modal {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 50%; \n    height: 50%;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-editor-modal.open {\n    display: flex;\n\n}\n\n\n\n/* .task-editor-modal.remove {\n    display: none;\n\n} */\n\n.task-editor {\n    background-color: #EEEEEE;\n    min-width: 50%;\n    min-height: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n}\n\n\n\n@media (max-width: 950px) {\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n    .wrapper {\n        min-width: 300px;\n        margin: 25px 20px;\n    }\n    .projects-tasks-display {\n        min-width: 400px;\n    }\n}\n\n@media (max-width: 600px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas:\n            \"header\"\n            \"nav\"\n            \"wrapper\";\n    }\n    .header-links {\n        margin: 0px 20px;\n    }\n    nav {\n        position: absolute;\n        width: 100%;\n        top: 45px;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n        transform: translateX(-1200px);\n        transition: all 0.4s ease-in-out;\n    }\n    nav.collapse {\n        transform: translateX(0px);\n        z-index: 1;\n    }\n    .main-tabs-container,\n    .projects-tabs-container,\n    .new-project-form-container,\n    .projects-title-tab {\n        background-color: var(--nav-bg);\n        margin: 0px;\n        padding: 25px 0px 0px 20px;\n        width: 200px;\n    }    \n    \n    .new-project-form-container {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper.collapse {\n        transform: none;\n    }\n\n    .projects-tasks-display {\n        min-width: 70%;\n       \n    }\n\n    .project-tasks-list {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
  const newProjectForm = document.querySelector('[data-new-project-form]');
  const projectNameInput = newProjectForm.querySelector(
    '[data-project-name-input]'
  );

  const projectsTabsContainer = document.querySelector(
    '[data-projects-tabs-container]'
  );

  const projectsTasksDisplay = document.querySelector(
    '[data-projects-tasks-display]'
  );
  const newTaskForm = document.querySelector('[data-new-task-form]');
  const projectTitle = document.querySelector('[data-project-name-title]');
  const projectTasksContainer = document.querySelector(
    '[data-project-tasks-container]'
  );
  const taskNameInput = newTaskForm.querySelector('[data-task-name-input]');
  const deleteProjectBtn = document.querySelector('[data-delete-project]');

  const menuIcon = document.querySelector('[data-burger-menu-icon]');
  const nav = document.querySelector('nav');
  const homeIcon = document.querySelector('[data-home-icon]');

  // LOCAL STORAGE

  const LOCAL_STORAGE_PROJECTS_LISTS_KEY = 'projects.list';
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'project.selectedID';

  let selectedProjectID = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  let projects = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)
  ) || [
    {
      id: '1728272822829',
      name: 'Today',
      tasks: [
        {
          id: '1728272822839',
          name: 'Be awesome',
          isComplete: false,
        },
      ],
    },

    {
      id: '1728272822929',
      name: 'Grocerys',
      tasks: [
        { id: '123', name: 'Potatoes', isComplete: false },
        { id: '456', name: 'Bananas', isComplete: true },
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

  menuIcon.addEventListener('click', (e) => {
    nav.classList.toggle('collapse');
  });

  nav.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('projects-section')) {
      nav.classList.remove('collapse');
    } else if (e.target.tagName.toLowerCase() === 'li') {
      nav.classList.remove('collapse');
    }
  });

  newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProject(projectNameInput);
  });

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewTask(taskNameInput);
  });

  projectsTabsContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedProjectID = e.target.dataset.projectId;
      saveAndRender();
    }
  });

  homeIcon.addEventListener('click', (e) => {
    selectedProjectID = projects[0].id;
    if (nav.classList.contains('collapse')) {
      nav.classList.remove('collapse');
    }

    saveAndRender();
  });

  projectTasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const button = e.target;
      const taskContainer = button.parentElement.parentElement;
      const currentProject = projects.find(
        (project) => project.id === selectedProjectID
      );

      if (button.classList.contains('delete-task-btn')) {
        deleteTask(e);
      } else if (button.classList.contains('edit-task-btn')) {
        editTask(e, taskContainer, button);
      } else if (button.classList.contains('save-edit-task-btn')) {
        saveEditTask(e, taskContainer, button, currentProject);
      }
    }

    checkTaskDone(e);
  });

  deleteProjectBtn.addEventListener('click', (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectID);
    selectedProjectID = null;

    saveAndRender();
  });

  // FEATURES

  const saveEditTask = (e, taskContainer, button, currentProject) => {
    const buttonsContainer = button.parentElement;
    const input = taskContainer.firstChild;

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('id', input.id);
    taskCheck.classList.add('task-input');
    taskCheck.dataset.taskId = input.id;
    taskCheck.checked = input.isComplete;

    const taskContent = document.createElement('label');
    taskContent.setAttribute('for', input.id);
    taskContent.setAttribute('id', input.id);
    taskContent.classList.add('task-text');
    taskContent.textContent = input.value;

    const customCheckBox = document.createElement('span');
    customCheckBox.classList.add('custom-checkbox');

    taskContent.appendChild(customCheckBox);

    input.remove();

    taskContainer.insertBefore(taskCheck, buttonsContainer);
    taskContainer.insertBefore(taskContent, buttonsContainer);

    button.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    button.classList.remove('save-edit-task-btn');
    button.classList.add('edit-task-btn');

    currentProject.tasks.forEach((task) => {
      if (task.id === input.id) {
        task.name = input.value;

        saveAndRender();
      }
    });
  };

  const editTask = (e, taskContainer, button) => {
    const input = taskContainer.firstChild;
    const label = taskContainer.firstChild.nextElementSibling;
    const deleteBtn = button.previousSibling;
    deleteBtn.textContent = '';

    // new input
    const editTaskInput = document.createElement('input');
    editTaskInput.setAttribute('type', 'text');
    editTaskInput.setAttribute('class', 'edit-task-input');
    editTaskInput.value = label.textContent;
    editTaskInput.id = label.id;

    taskContainer.insertBefore(editTaskInput, input);
    input.remove();
    label.remove();

    button.innerHTML = 'Save <i class="fa-solid fa-check"></i>';
    button.classList.remove('edit-task-btn');
    button.classList.add('save-edit-task-btn');
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

  const addNewProject = (projectNameInput) => {
    const projectName = projectNameInput.value;

    if (projectName === null || projectName === '') return;

    const newProject = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)(projectName);
    projects.push(newProject);
    saveAndRender();

    projectNameInput.value = '';
  };

  const addNewTask = (taskNameInput) => {
    const taskName = taskNameInput.value;
    if (taskName === null || taskName === '') return;

    const newTask = (0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Task)(taskName);

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.push(newTask);

    saveAndRender();
    taskNameInput.value = '';
  };

  const checkTaskDone = (e) => {
    if (e.target.hasAttribute('data-task-id')) {
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
      const newTabProject = document.createElement('li');
      newTabProject.classList.add('nav-tab');
      newTabProject.setAttribute('id', project.id);
      newTabProject.dataset.projectId = project.id;

      if (newTabProject.dataset.projectId === selectedProjectID) {
        newTabProject.classList.add('active');
      }

      const iconProject = document.createElement('div');
      iconProject.classList.add('icon-project');
      iconProject.innerHTML = '<i class="fa-solid fa-circle nav-icon"></i>';

      const projectName = document.createElement('p');
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
      projectsTasksDisplay.style.display = 'none';
      selectedProjectID = projects[0].id;

      saveAndRender();
    } else {
      projectsTasksDisplay.style.display = '';
      projectTitle.textContent = currentProjectInfo.name;
      clearElement(projectTasksContainer);
      renderTasks();
    }
  };

  const renderTasks = () => {
    const currentProjectInfo = findSelectedProject();

    currentProjectInfo.tasks.forEach((task) => {
      const newTask = document.createElement('li');
      newTask.classList.add('task');

      const taskCheck = document.createElement('input');
      taskCheck.setAttribute('type', 'checkbox');
      taskCheck.setAttribute('id', task.id);
      taskCheck.classList.add('task-input');
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.isComplete;

      const taskContent = document.createElement('label');
      taskContent.setAttribute('for', task.id);
      taskContent.setAttribute('id', task.id);
      taskContent.textContent = task.name;
      taskContent.classList.add('task-text');

      const customCheckBox = document.createElement('span');
      customCheckBox.classList.add('custom-checkbox');

      const iconsContainer = document.createElement('div');
      iconsContainer.classList.add('task-icons-container');

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('task-btn', 'delete-task-btn');
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can "></i>';

      const editBtn = document.createElement('button');
      editBtn.classList.add('task-btn', 'edit-task-btn');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsU0FBUyxxQ0FBcUMsNENBQTRDLG1DQUFtQyw4QkFBOEIsOEJBQThCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxRQUFRLHVCQUF1Qix3Q0FBd0Msb0JBQW9CLHVCQUF1QixtQ0FBbUMsdUNBQXVDLGlGQUFpRix3QkFBd0Isd0JBQXdCLG9DQUFvQyxtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLDBCQUEwQix3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixzQkFBc0IseUJBQXlCLHdCQUF3Qiw0QkFBNEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0Isa0JBQWtCLHlCQUF5Qiw4QkFBOEIsR0FBRyxjQUFjLHFHQUFxRyxHQUFHLGtCQUFrQiwrQ0FBK0MsR0FBRyw2Q0FBNkMscUJBQXFCLG9CQUFvQixzQ0FBc0MsdUJBQXVCLDRDQUE0QyxHQUFHLGdCQUFnQixvQ0FBb0MsR0FBRyxTQUFTLHNCQUFzQixHQUFHLHlFQUF5RSx1QkFBdUIsZ0NBQWdDLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLEdBQUcsY0FBYyx1QkFBdUIseUJBQXlCLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG1CQUFtQix5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLGFBQWEseUJBQXlCLHNCQUFzQixHQUFHLGtCQUFrQiw0Q0FBNEMsR0FBRyxRQUFRLG1CQUFtQiw4QkFBOEIsMkJBQTJCLHNCQUFzQixHQUFHLGNBQWMseUJBQXlCLEdBQUcsb0JBQW9CLG9CQUFvQixxQ0FBcUMsR0FBRyxpQ0FBaUMsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLEdBQUcseUNBQXlDLHNDQUFzQyx1QkFBdUIsR0FBRyxvQkFBb0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsc0NBQXNDLEdBQUcsWUFBWSx5QkFBeUIsdUJBQXVCLG9CQUFvQiw4QkFBOEIsd0JBQXdCLDRDQUE0QyxHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyxxQkFBcUIsb0NBQW9DLEdBQUcsUUFBUSx1QkFBdUIsb0JBQW9CLDBCQUEwQix1QkFBdUIsR0FBRyxVQUFVLHNCQUFzQixHQUFHLG9CQUFvQiwyQ0FBMkMsR0FBRyxXQUFXLG1CQUFtQixzQkFBc0IsMkJBQTJCLHdCQUF3QixzQkFBc0IsY0FBYyxHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLHNEQUFzRCxzQkFBc0IsbUJBQW1CLG1CQUFtQiw4QkFBOEIsR0FBRyw0QkFBNEIsNENBQTRDLHlCQUF5QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsK0NBQStDLHNCQUFzQiw0Q0FBNEMsd0JBQXdCLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNDQUFzQyxvQ0FBb0MsbUJBQW1CLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLDJDQUEyQyx1QkFBdUIsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcsd0JBQXdCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixtREFBbUQsc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMEJBQTBCLGNBQWMsc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsZUFBZSxjQUFjLGtCQUFrQixHQUFHLG1CQUFtQixpQkFBaUIseUJBQXlCLGtCQUFrQixHQUFHLHNCQUFzQixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxzQkFBc0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsNEJBQTRCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLHlCQUF5QixzQkFBc0IseUJBQXlCLDBCQUEwQixzQ0FBc0MsR0FBRywrRUFBK0UsNEJBQTRCLEdBQUcsd0RBQXdELDhCQUE4QixnQ0FBZ0MsMENBQTBDLEdBQUcsdUNBQXVDLGtCQUFrQixHQUFHLDJCQUEyQixvQ0FBb0MsMkJBQTJCLFFBQVEsY0FBYyxzQkFBc0IsdUJBQXVCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHlCQUF5QixHQUFHLGVBQWUsc0JBQXNCLG1CQUFtQiw4QkFBOEIsdUJBQXVCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLG1CQUFtQiwyQkFBMkIsdUJBQXVCLDJCQUEyQix5QkFBeUIsb0NBQW9DLG1CQUFtQix5QkFBeUIsdUJBQXVCLHlCQUF5QixvQkFBb0IsMEJBQTBCLGtCQUFrQixpQkFBaUIsR0FBRywyQkFBMkIsbUJBQW1CLHdCQUF3QixHQUFHLHFEQUFxRCxvQkFBb0IsMkNBQTJDLHNCQUFzQixrQkFBa0Isa0JBQWtCLDBCQUEwQiw4QkFBOEIsR0FBRyw2QkFBNkIsb0JBQW9CLEtBQUssc0NBQXNDLG9CQUFvQixNQUFNLG9CQUFvQixnQ0FBZ0MscUJBQXFCLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIseUJBQXlCLEdBQUcsbUNBQW1DLFlBQVksMkNBQTJDLE9BQU8sZ0JBQWdCLDJCQUEyQiw0QkFBNEIsT0FBTywrQkFBK0IsMkJBQTJCLE9BQU8sR0FBRywrQkFBK0IsWUFBWSxxQ0FBcUMsNENBQTRDLHFHQUFxRyxPQUFPLHFCQUFxQiwyQkFBMkIsT0FBTyxXQUFXLDZCQUE2QixzQkFBc0Isb0JBQW9CLHVCQUF1Qiw4Q0FBOEMseUNBQXlDLDJDQUEyQyxPQUFPLG9CQUFvQixxQ0FBcUMscUJBQXFCLE9BQU8sdUhBQXVILDBDQUEwQyxzQkFBc0IscUNBQXFDLHVCQUF1QixXQUFXLHlDQUF5Qyw0QkFBNEIsMkJBQTJCLE9BQU8sMkJBQTJCLDBCQUEwQixPQUFPLGlDQUFpQyx5QkFBeUIsZ0JBQWdCLDZCQUE2Qix3QkFBd0IsaUNBQWlDLE9BQU8sR0FBRyxPQUFPLHlGQUF5RixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxTQUFTLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZ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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUMwQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnREFBZ0Q7QUFDMUQsVUFBVSw4Q0FBOEM7QUFDeEQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsNkRBQU87QUFDOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMERBQUk7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gICAgLS1tYWluOiByZ2JhKDI1MCwgMTI4LCAxMTQsIDEpO1xcbiAgICAtLW1haW4taG92ZXI6IHJnYmEoMjUwLCAxMjgsIDExNCwgLjUpO1xcbiAgICAtLW5hdi1iZzogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW5hdi1iZy1ob3ZlcjogI0VFRUVFRTtcXG4gICAgLS1ncmF5OiByZ2IoODMsIDgzLCA4Myk7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcbn1cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG4uaGQtaWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbi8qIFNJREUgTkFWIEJBUiAtIFBST0pFQ1RTIFRBQlMgKi9cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxubmF2LmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbi10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGFicy1jb250YWluZXIsXFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XFxufVxcbi5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uaWNvbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuLm5hdi10YWI+KiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmF2LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubmF2LXRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4ubmF2LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTVweDtcXG59XFxuLm5hdi10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSxcXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxufVxcbi53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcbmZvcm0ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5mb3JtPioge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBQUk9KRUNUUyBUQVNLUyBTRUNUSU9OICovXFxuXFxuLnN1Ym1pdC1uZXctdGFzayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LW5ldy10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLCAuZGVsZXRlLXByb2plY3QtYnRuLCAuc2F2ZS1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayAuZmEtcGx1cyB7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5zYXZlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciAuZmEtcGx1cyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCxcXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgIG1hcmdpbjogMHB4IDEycHg7XFxufVxcblxcbi8qIFRhc2tzICovXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcblxcbi50YXNrLWlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmVkaXQtdGFzay1pbnB1dCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cysuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnRhc2staWNvbnMtY29udGFpbmVyIHtcXG4gICAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTBweDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIFxcbn1cXG5cXG4uZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcXG59XFxuXFxuLnRhc2stYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnRuIHtcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XFxufVxcblxcbi50YXNrLWJ0biA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpXFxufVxcblxcbi5zYXZlLWVkaXQtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcbi5zYXZlLWVkaXQtdGFzay1idG4gaSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcblxcbi8qIFRBU0sgRURJVE9SIE1PREFMICovXFxuXFxuLnRhc2stZWRpdG9yLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVkaXRvci1tb2RhbC5vcGVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuXFxuXFxuLyogLnRhc2stZWRpdG9yLW1vZGFsLnJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxufSAqL1xcblxcbi50YXNrLWVkaXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICB9XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXJnaW46IDI1cHggMjBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJuYXZcXFwiXFxuICAgICAgICAgICAgXFxcIndyYXBwZXJcXFwiO1xcbiAgICB9XFxuICAgIC5oZWFkZXItbGlua3Mge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgfVxcbiAgICBuYXYge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0b3A6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIG5hdi5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgLm1haW4tdGFicy1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyLFxcbiAgICAucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9ICAgIFxcbiAgICBcXG4gICAgLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlci5jb2xsYXBzZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhc2tzLWRpc3BsYXkge1xcbiAgICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQzs7O0FBR0o7QUFDQSxXQUFXO0FBQ1g7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw4RkFBOEY7QUFDbEc7QUFDQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSw2QkFBNkI7QUFD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O1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLG1DQUFtQztRQUNuQyw4QkFBOEI7UUFDOUIsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsVUFBVTtJQUNkO0lBQ0E7Ozs7UUFJSSwrQkFBK0I7UUFDL0IsV0FBVztRQUNYLDBCQUEwQjtRQUMxQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjOztJQUVsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOnJvb3Qge1xcbiAgICAtLW1haW46IHJnYmEoMjUwLCAxMjgsIDExNCwgMSk7XFxuICAgIC0tbWFpbi1ob3ZlcjogcmdiYSgyNTAsIDEyOCwgMTE0LCAuNSk7XFxuICAgIC0tbmF2LWJnOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbmF2LWJnLWhvdmVyOiAjRUVFRUVFO1xcbiAgICAtLWdyYXk6IHJnYig4MywgODMsIDgzKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2IHdyYXBwZXJcXFwiXFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvIDUwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAwcHg7XFxufVxcbi5oZWFkZXItbGlua3M+KiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuLmJ1cmdlciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvbWUtaWNvbiB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAxJSk7XFxufVxcbi5oZC1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDMxLCAxNCwgMC41KTtcXG59XFxuXFxuLyogU0lERSBOQVYgQkFSIC0gUFJPSkVDVFMgVEFCUyAqL1xcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5uYXYuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxubmF2Pioge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLXRhYnMtY29udGFpbmVyLFxcbi5wcm9qZWN0cy10YWJzLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtdGl0bGUtdGFiIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAwcHggNTBweDtcXG59XFxuLnByb2plY3RzLXRpdGxlLXRhYiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5pY29uLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtY2lyY2xlIHtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG4ubmF2LXRhYj4qIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uYXYtdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5uYXYtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbn1cXG4ubmF2LXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1ob3Zlcik7XFxufVxcbi5idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB3cmFwcGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNXB4IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuZm9ybSB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxufVxcbmZvcm0+KiB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbik7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFBST0pFQ1RTIFRBU0tTIFNFQ1RJT04gKi9cXG5cXG4uc3VibWl0LW5ldy10YXNrIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtbmV3LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5kZWxldGUtcHJvamVjdC1idG4sIC5zYXZlLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIC5mYS1wbHVzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciwgLnNhdmUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIC5mYS1wbHVzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0LFxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgbWFyZ2luOiAwcHggMTJweDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW5hdi1iZy1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWlucHV0IHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMjBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzKy5jdXN0b20tY2hlY2tib3gge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDJweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4udGFzay1pY29ucy1jb250YWluZXIge1xcbiAgICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4OyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxufVxcblxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4udGFzay1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXG59XFxuXFxuLnRhc2stYnRuID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSlcXG59XFxuXFxuLnNhdmUtZWRpdC10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLnNhdmUtZWRpdC10YXNrLWJ0biBpIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuXFxuLyogVEFTSyBFRElUT1IgTU9EQUwgKi9cXG5cXG4udGFzay1lZGl0b3ItbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWRpdG9yLW1vZGFsLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG5cXG5cXG4vKiAudGFzay1lZGl0b3ItbW9kYWwucmVtb3ZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG59ICovXFxuXFxuLnRhc2stZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMjVweCAyMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy10YXNrcy1kaXNwbGF5IHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNTBweCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRvcDogNDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgbmF2LmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcbiAgICAubWFpbi10YWJzLWNvbnRhaW5lcixcXG4gICAgLnByb2plY3RzLXRhYnMtY29udGFpbmVyLFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIsXFxuICAgIC5wcm9qZWN0cy10aXRsZS10YWIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH0gICAgXFxuICAgIFxcbiAgICAubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtdGFza3MtZGlzcGxheSB7XFxuICAgICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWU7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHJldHVybiB7IGlkLCBuYW1lLCB0YXNrcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0YXNrTmFtZSkge1xuICBjb25zdCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgY29uc3QgbmFtZSA9IHRhc2tOYW1lO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgcmV0dXJuIHsgaWQsIG5hbWUsIGlzQ29tcGxldGUgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG5jb25zdCB0b2RvQXBwID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1mb3JtXScpO1xuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gbmV3UHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtcHJvamVjdC1uYW1lLWlucHV0XSdcbiAgKTtcblxuICBjb25zdCBwcm9qZWN0c1RhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdbZGF0YS1wcm9qZWN0cy10YWJzLWNvbnRhaW5lcl0nXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNUYXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdbZGF0YS1wcm9qZWN0cy10YXNrcy1kaXNwbGF5XSdcbiAgKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1mb3JtXScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LW5hbWUtdGl0bGVdJyk7XG4gIGNvbnN0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ1tkYXRhLXByb2plY3QtdGFza3MtY29udGFpbmVyXSdcbiAgKTtcbiAgY29uc3QgdGFza05hbWVJbnB1dCA9IG5ld1Rhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stbmFtZS1pbnB1dF0nKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlbGV0ZS1wcm9qZWN0XScpO1xuXG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnVyZ2VyLW1lbnUtaWNvbl0nKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaG9tZS1pY29uXScpO1xuXG4gIC8vIExPQ0FMIFNUT1JBR0VcblxuICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0xJU1RTX0tFWSA9ICdwcm9qZWN0cy5saXN0JztcbiAgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9ICdwcm9qZWN0LnNlbGVjdGVkSUQnO1xuXG4gIGxldCBzZWxlY3RlZFByb2plY3RJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbiAgKTtcblxuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfTElTVFNfS0VZKVxuICApIHx8IFtcbiAgICB7XG4gICAgICBpZDogJzE3MjgyNzI4MjI4MjknLFxuICAgICAgbmFtZTogJ1RvZGF5JyxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzE3MjgyNzI4MjI4MzknLFxuICAgICAgICAgIG5hbWU6ICdCZSBhd2Vzb21lJyxcbiAgICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAnMTcyODI3MjgyMjkyOScsXG4gICAgICBuYW1lOiAnR3JvY2VyeXMnLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAgeyBpZDogJzEyMycsIG5hbWU6ICdQb3RhdG9lcycsIGlzQ29tcGxldGU6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6ICc0NTYnLCBuYW1lOiAnQmFuYW5hcycsIGlzQ29tcGxldGU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19MSVNUU19LRVksXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0cylcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSxcbiAgICAgIHNlbGVjdGVkUHJvamVjdElEXG4gICAgKTtcbiAgfTtcblxuICAvLyBFVkVOVCBMSVNURU5FUlNcblxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG4gIH0pO1xuXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RzLXNlY3Rpb24nKSkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZUlucHV0KTtcbiAgfSk7XG5cbiAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3VGFzayh0YXNrTmFtZUlucHV0KTtcbiAgfSk7XG5cbiAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RJRCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgaG9tZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdElEID0gcHJvamVjdHNbMF0uaWQ7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlJykpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgIH1cblxuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgcHJvamVjdFRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElEXG4gICAgICApO1xuXG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2stYnRuJykpIHtcbiAgICAgICAgZGVsZXRlVGFzayhlKTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10YXNrLWJ0bicpKSB7XG4gICAgICAgIGVkaXRUYXNrKGUsIHRhc2tDb250YWluZXIsIGJ1dHRvbik7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NhdmUtZWRpdC10YXNrLWJ0bicpKSB7XG4gICAgICAgIHNhdmVFZGl0VGFzayhlLCB0YXNrQ29udGFpbmVyLCBidXR0b24sIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Rhc2tEb25lKGUpO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SUQpO1xuICAgIHNlbGVjdGVkUHJvamVjdElEID0gbnVsbDtcblxuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgLy8gRkVBVFVSRVNcblxuICBjb25zdCBzYXZlRWRpdFRhc2sgPSAoZSwgdGFza0NvbnRhaW5lciwgYnV0dG9uLCBjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBpbnB1dCA9IHRhc2tDb250YWluZXIuZmlyc3RDaGlsZDtcblxuICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXQuaWQpO1xuICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XG4gICAgdGFza0NoZWNrLmRhdGFzZXQudGFza0lkID0gaW5wdXQuaWQ7XG4gICAgdGFza0NoZWNrLmNoZWNrZWQgPSBpbnB1dC5pc0NvbXBsZXRlO1xuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpO1xuICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dC5pZCk7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gICAgdGFza0NvbnRlbnQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IGN1c3RvbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGN1c3RvbUNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1jaGVja2JveCcpO1xuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tCb3gpO1xuXG4gICAgaW5wdXQucmVtb3ZlKCk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrQ2hlY2ssIGJ1dHRvbnNDb250YWluZXIpO1xuICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tDb250ZW50LCBidXR0b25zQ29udGFpbmVyKTtcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIj48L2k+JztcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2F2ZS1lZGl0LXRhc2stYnRuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay1idG4nKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpbnB1dC5pZCkge1xuICAgICAgICB0YXNrLm5hbWUgPSBpbnB1dC52YWx1ZTtcblxuICAgICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoZSwgdGFza0NvbnRhaW5lciwgYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGJ1dHRvbi5wcmV2aW91c1NpYmxpbmc7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvLyBuZXcgaW5wdXRcbiAgICBjb25zdCBlZGl0VGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZWRpdFRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtdGFzay1pbnB1dCcpO1xuICAgIGVkaXRUYXNrSW5wdXQudmFsdWUgPSBsYWJlbC50ZXh0Q29udGVudDtcbiAgICBlZGl0VGFza0lucHV0LmlkID0gbGFiZWwuaWQ7XG5cbiAgICB0YXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0lucHV0LCBpbnB1dCk7XG4gICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgbGFiZWwucmVtb3ZlKCk7XG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ1NhdmUgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVja1wiPjwvaT4nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LXRhc2stYnRuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NhdmUtZWRpdC10YXNrLWJ0bicpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVFZGl0VGFza0xvY2FsU3RvcmFnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tDb250YWluZXIuaWQpIHtcbiAgICAgICAgdGFzay5uYW1lID0gdGFza0NvbnRhaW5lci50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lSW5wdXQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG5cbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3VGFzayA9ICh0YXNrTmFtZUlucHV0KSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgIGlmICh0YXNrTmFtZSA9PT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gJycpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgfTtcblxuICBjb25zdCBjaGVja1Rhc2tEb25lID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXRhc2staWQnKSkge1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmQoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkVGFzay5pc0NvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgZGVsZXRlVGFza1VJKGUpO1xuICAgIGRlbGV0ZVRhc2tMb2NhbFN0b3JhZ2UoZSk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tVSSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tMb2NhbFN0b3JhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElEXG4gICAgKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gc2VsZWN0ZWRUYXNrLmlkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUFuZFJlbmRlciA9ICgpID0+IHtcbiAgICByZW5kZXJVSSgpO1xuICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJVSSA9ICgpID0+IHtcbiAgICBjbGVhckVsZW1lbnQocHJvamVjdHNUYWJzQ29udGFpbmVyKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RJbmZvKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgbmV3VGFiUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBuZXdUYWJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWInKTtcbiAgICAgIG5ld1RhYlByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3QuaWQpO1xuICAgICAgbmV3VGFiUHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgIGlmIChuZXdUYWJQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID09PSBzZWxlY3RlZFByb2plY3RJRCkge1xuICAgICAgICBuZXdUYWJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpY29uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnaWNvbi1wcm9qZWN0Jyk7XG4gICAgICBpY29uUHJvamVjdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUgbmF2LWljb25cIj48L2k+JztcblxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgbmV3VGFiUHJvamVjdC5hcHBlbmRDaGlsZChpY29uUHJvamVjdCk7XG4gICAgICBuZXdUYWJQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgcHJvamVjdHNUYWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RhYlByb2plY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmZvID0gcHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJRFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudFByb2plY3RJbmZvO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGlmIChzZWxlY3RlZFByb2plY3RJRCA9PT0gbnVsbCB8fCBjdXJyZW50UHJvamVjdEluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNlbGVjdGVkUHJvamVjdElEID0gcHJvamVjdHNbMF0uaWQ7XG5cbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNUYXNrc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RJbmZvLm5hbWU7XG4gICAgICBjbGVhckVsZW1lbnQocHJvamVjdFRhc2tzQ29udGFpbmVyKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5mbyA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGN1cnJlbnRQcm9qZWN0SW5mby50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrLmlkKTtcbiAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XG4gICAgICB0YXNrQ2hlY2suZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgICAgdGFza0NoZWNrLmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGU7XG5cbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGFzay5pZCk7XG4gICAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XG4gICAgICB0YXNrQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGN1c3RvbUNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1jaGVja2JveCcpO1xuXG4gICAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pY29ucy1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1idG4nLCAnZGVsZXRlLXRhc2stYnRuJyk7XG4gICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIFwiPjwvaT4nO1xuXG4gICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJywgJ2VkaXQtdGFzay1idG4nKTtcbiAgICAgIGVkaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPic7XG5cbiAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrQm94KTtcbiAgICAgIGljb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICBpY29uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG5cbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaWNvbnNDb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICByZW5kZXJVSSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0IH07XG59KSgpO1xuXG50b2RvQXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=