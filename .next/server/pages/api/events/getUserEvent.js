"use strict";
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
exports.id = "pages/api/events/getUserEvent";
exports.ids = ["pages/api/events/getUserEvent"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxHQUFHLENBQUNDLE1BQU07QUFFVixFQUFFLEVBSkYsS0FJeUMsRUFBRSxFQUUxQyxNQUFNLENBQUM7SUFDSixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7UUFDakJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7SUFDcEMsQ0FBQztJQUNEQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtBQUMxQixDQUFDO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5sZXQgcHJpc21hXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gICAgfVxyXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/events/getUserEvent.js":
/*!******************************************!*\
  !*** ./pages/api/events/getUserEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session) {\n        try {\n            const events = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events.findMany({\n                where: {\n                    userId: session.user.id\n                },\n                include: {\n                    event_foods: true,\n                    event_equipment: true\n                }\n            });\n            return res.json({\n                events\n            });\n        } catch (e) {\n            return res.json({\n                error: e.message\n            });\n        }\n    } else {\n        return res.json({\n            error: 'Not Authenticated!'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2dldFVzZXJFdmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0k7QUFFN0IsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ0osMkRBQVUsQ0FBQyxDQUFDO1FBQUNFLEdBQUc7SUFBQyxDQUFDO0lBQ3hDLEVBQUUsRUFBQ0UsT0FBTyxFQUFDLENBQUM7UUFDUixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ04sbUVBQXNCLENBQUMsQ0FBQztnQkFDekNRLEtBQUssRUFBRyxDQUFDO29CQUNMQyxNQUFNLEVBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxFQUFFO2dCQUM1QixDQUFDO2dCQUNEQyxPQUFPLEVBQUcsQ0FBQztvQkFDUEMsV0FBVyxFQUFHLElBQUk7b0JBQ2xCQyxlQUFlLEVBQUcsSUFBSTtnQkFDMUIsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUNWLEdBQUcsQ0FBQ1csSUFBSSxDQUFDLENBQUM7Z0JBQ2JULE1BQU07WUFDVixDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUVVLENBQUMsRUFBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDWixHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO2dCQUNiRSxLQUFLLEVBQUdELENBQUMsQ0FBQ0UsT0FBTztZQUNyQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFDRyxDQUFDO1FBQ0QsTUFBTSxDQUFDZCxHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO1lBQ2JFLEtBQUssRUFBRyxDQUFvQjtRQUNoQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvZXZlbnRzL2dldFVzZXJFdmVudC5qcz8xMTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICAgIGlmKHNlc3Npb24pe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHByaXNtYS5ldmVudHMuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkIDogc2Vzc2lvbi51c2VyLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudF9mb29kcyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRfZXF1aXBtZW50IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yIDogJ05vdCBBdXRoZW50aWNhdGVkISdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJldmVudHMiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwidXNlciIsImlkIiwiaW5jbHVkZSIsImV2ZW50X2Zvb2RzIiwiZXZlbnRfZXF1aXBtZW50IiwianNvbiIsImUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/getUserEvent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/getUserEvent.js"));
module.exports = __webpack_exports__;

})();