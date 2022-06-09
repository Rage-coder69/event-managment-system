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
exports.id = "pages/api/guest/deleteGuestCount";
exports.ids = ["pages/api/guest/deleteGuestCount"];
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

/***/ "(api)/./pages/api/guest/deleteGuestCount.js":
/*!*********************************************!*\
  !*** ./pages/api/guest/deleteGuestCount.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (session) {\n        try {\n            const { id  } = req.body;\n            let guest = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].guest[\"delete\"]({\n                where: {\n                    id: id\n                }\n            });\n            if (guest) {\n                return res.json({\n                    message: \"Guest count deleted successfully!\"\n                });\n            } else {\n                return res.json({\n                    message: \"Error deleting guest count!\"\n                });\n            }\n        } catch (e) {\n            return res.json({\n                message: e.message\n            });\n        }\n    } else {\n        return res.json({\n            message: \"Not Authenticated!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3Vlc3QvZGVsZXRlR3Vlc3RDb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ0o7QUFFekIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsMkRBQVUsQ0FBQyxDQUFDO1FBQUNHLEdBQUc7SUFBQyxDQUFDO0lBQ3hDLEVBQUUsRUFBQ0UsT0FBTyxFQUFDLENBQUM7UUFDUixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxFQUFFLEdBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ1AsbUVBQW1CLENBQUMsQ0FBQztnQkFDbkNTLEtBQUssRUFBRyxDQUFDO29CQUNMSixFQUFFLEVBQUdBLEVBQUU7Z0JBQ1gsQ0FBQztZQUNMLENBQUM7WUFDRCxFQUFFLEVBQUNFLEtBQUssRUFBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQ0osR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztvQkFDYkMsT0FBTyxFQUFHLENBQW1DO2dCQUNqRCxDQUFDO1lBQ0wsQ0FBQyxNQUNHLENBQUM7Z0JBQ0QsTUFBTSxDQUFDUixHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO29CQUNiQyxPQUFPLEVBQUcsQ0FBNkI7Z0JBQzNDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUVDLENBQUMsRUFBRSxDQUFDO1lBQ1IsTUFBTSxDQUFDVCxHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO2dCQUNiQyxPQUFPLEVBQUdDLENBQUMsQ0FBQ0QsT0FBTztZQUN2QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFDSSxDQUFDO1FBQ0YsTUFBTSxDQUFDUixHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO1lBQ2JDLE9BQU8sRUFBRyxDQUFvQjtRQUNsQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvZ3Vlc3QvZGVsZXRlR3Vlc3RDb3VudC5qcz8yZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICAgIGlmKHNlc3Npb24pe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgbGV0IGd1ZXN0ID0gYXdhaXQgcHJpc21hLmd1ZXN0LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZCA6IGlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihndWVzdCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBcIkd1ZXN0IGNvdW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IFwiRXJyb3IgZGVsZXRpbmcgZ3Vlc3QgY291bnQhXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogZS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZSA6IFwiTm90IEF1dGhlbnRpY2F0ZWQhXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiaWQiLCJib2R5IiwiZ3Vlc3QiLCJkZWxldGUiLCJ3aGVyZSIsImpzb24iLCJtZXNzYWdlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/guest/deleteGuestCount.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/guest/deleteGuestCount.js"));
module.exports = __webpack_exports__;

})();