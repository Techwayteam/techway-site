/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=MessageCircle!=!./node_modules/lucide-react/dist/esm/lucide-react.js":
/*!******************************************************************************************************!*\
  !*** __barrel_optimize__?names=MessageCircle!=!./node_modules/lucide-react/dist/esm/lucide-react.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageCircle: () => (/* reexport safe */ _icons_message_circle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _icons_message_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/message-circle.js */ \"./node_modules/lucide-react/dist/esm/icons/message-circle.js\");\n/**\n * @license lucide-react v0.526.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1NZXNzYWdlQ2lyY2xlIT0hLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2x1Y2lkZS1yZWFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h3YXktc2l0ZS8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vbHVjaWRlLXJlYWN0LmpzPzEyMzciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI2LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovIFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXNzYWdlQ2lyY2xlIH0gZnJvbSBcIi4vaWNvbnMvbWVzc2FnZS1jaXJjbGUuanNcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=MessageCircle!=!./node_modules/lucide-react/dist/esm/lucide-react.js\n");

/***/ }),

/***/ "./components/WhatsAppButton.tsx":
/*!***************************************!*\
  !*** ./components/WhatsAppButton.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MessageCircle_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MessageCircle!=!lucide-react */ \"__barrel_optimize__?names=MessageCircle!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/contact */ \"./data/contact.ts\");\n\n\n\n\nconst WhatsAppButton = ({ message = \"Ol\\xe1! Vi o site de voc\\xeas e quero meu novo funcion\\xe1rio digital\" })=>{\n    const href = (0,_data_contact__WEBPACK_IMPORTED_MODULE_2__.getWhatsAppUrl)(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: \"fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600\",\n        \"aria-label\": \"Conversar no WhatsApp\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageCircle_lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageCircle, {\n            className: \"w-6 h-6\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Documentos\\\\Techway\\\\techway-site\\\\components\\\\WhatsAppButton.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Documentos\\\\Techway\\\\techway-site\\\\components\\\\WhatsAppButton.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatsAppButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1doYXRzQXBwQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNtQjtBQUNJO0FBTWhELE1BQU1HLGlCQUFnRCxDQUFDLEVBQUVDLFVBQVUsdUVBQThELEVBQUU7SUFDakksTUFBTUMsT0FBT0gsNkRBQWNBLENBQUNFO0lBQzVCLHFCQUNFLDhEQUFDRTtRQUNDRCxNQUFNQTtRQUNORSxRQUFPO1FBQ1BDLEtBQUk7UUFDSkMsV0FBVTtRQUNWQyxjQUFXO2tCQUVYLDRFQUFDVCw0RkFBYUE7WUFBQ1EsV0FBVTs7Ozs7Ozs7Ozs7QUFHL0I7QUFFQSxpRUFBZU4sY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h3YXktc2l0ZS8uL2NvbXBvbmVudHMvV2hhdHNBcHBCdXR0b24udHN4PzI0OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZXNzYWdlQ2lyY2xlIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5pbXBvcnQgeyBnZXRXaGF0c0FwcFVybCB9IGZyb20gJy4uL2RhdGEvY29udGFjdCdcclxuXHJcbmludGVyZmFjZSBXaGF0c0FwcEJ1dHRvblByb3BzIHtcclxuICBtZXNzYWdlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFdoYXRzQXBwQnV0dG9uOiBSZWFjdC5GQzxXaGF0c0FwcEJ1dHRvblByb3BzPiA9ICh7IG1lc3NhZ2UgPSAnT2zDoSEgVmkgbyBzaXRlIGRlIHZvY8OqcyBlIHF1ZXJvIG1ldSBub3ZvIGZ1bmNpb27DoXJpbyBkaWdpdGFsJyB9KSA9PiB7XHJcbiAgY29uc3QgaHJlZiA9IGdldFdoYXRzQXBwVXJsKG1lc3NhZ2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBwLTQgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyB6LTUwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWdyZWVuLTYwMFwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJDb252ZXJzYXIgbm8gV2hhdHNBcHBcIlxyXG4gICAgPlxyXG4gICAgICA8TWVzc2FnZUNpcmNsZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwQnV0dG9uXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lc3NhZ2VDaXJjbGUiLCJnZXRXaGF0c0FwcFVybCIsIldoYXRzQXBwQnV0dG9uIiwibWVzc2FnZSIsImhyZWYiLCJhIiwidGFyZ2V0IiwicmVsIiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WhatsAppButton.tsx\n");

/***/ }),

/***/ "./data/contact.ts":
/*!*************************!*\
  !*** ./data/contact.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WHATSAPP_PHONE_NUMBER: () => (/* binding */ WHATSAPP_PHONE_NUMBER),\n/* harmony export */   getWhatsAppUrl: () => (/* binding */ getWhatsAppUrl)\n/* harmony export */ });\nconst WHATSAPP_PHONE_NUMBER = \"5521991673541\";\nconst getWhatsAppUrl = (message)=>`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRhY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSx3QkFBd0IsZ0JBQWU7QUFFN0MsTUFBTUMsaUJBQWlCLENBQUNDLFVBQzdCLENBQUMsY0FBYyxFQUFFRixzQkFBc0IsTUFBTSxFQUFFRyxtQkFBbUJELFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h3YXktc2l0ZS8uL2RhdGEvY29udGFjdC50cz84Njk0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBXSEFUU0FQUF9QSE9ORV9OVU1CRVIgPSAnNTUyMTk5MTY3MzU0MSdcblxuZXhwb3J0IGNvbnN0IGdldFdoYXRzQXBwVXJsID0gKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyA9PlxuICBgaHR0cHM6Ly93YS5tZS8ke1dIQVRTQVBQX1BIT05FX05VTUJFUn0/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKX1gXG4iXSwibmFtZXMiOlsiV0hBVFNBUFBfUEhPTkVfTlVNQkVSIiwiZ2V0V2hhdHNBcHBVcmwiLCJtZXNzYWdlIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/contact.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WhatsAppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WhatsAppButton */ \"./components/WhatsAppButton.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Documentos\\\\Techway\\\\techway-site\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WhatsAppButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Documentos\\\\Techway\\\\techway-site\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhCO0FBQzJCO0FBRTFDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0U7OzBCQUNFLDhEQUFDRDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCxrRUFBY0E7Ozs7Ozs7QUFHckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNod2F5LXNpdGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBXaGF0c0FwcEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1doYXRzQXBwQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFdoYXRzQXBwQnV0dG9uIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIldoYXRzQXBwQnV0dG9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/lucide-react"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();