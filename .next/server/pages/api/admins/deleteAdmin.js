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
exports.id = "pages/api/admins/deleteAdmin";
exports.ids = ["pages/api/admins/deleteAdmin"];
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

/***/ "(api)/./pages/api/admins/deleteAdmin.js":
/*!*****************************************!*\
  !*** ./pages/api/admins/deleteAdmin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (session) {\n        try {\n            const { id  } = req.body;\n            let admin = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user[\"delete\"]({\n                where: {\n                    id: id\n                }\n            });\n            if (admin) {\n                return res.json({\n                    message: \"Account deleted Successfully!\"\n                });\n            }\n        } catch (e) {\n            return res.json({\n                error: e.message\n            });\n        }\n    } else {\n        return res.json({\n            message: \"Not Authenticated!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW5zL2RlbGV0ZUFkbWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDSjtBQUV6QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDTCwyREFBVSxDQUFDLENBQUM7UUFBQ0csR0FBRztJQUFDLENBQUM7SUFDeEMsRUFBRSxFQUFDRSxPQUFPLEVBQUMsQ0FBQztRQUNSLEdBQUcsQ0FBQyxDQUFDO1lBQ0QsS0FBSyxDQUFDLENBQUNDLENBQUFBLEVBQUUsR0FBQyxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDckIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDUCxrRUFBa0IsQ0FBQyxDQUFDO2dCQUNsQ1UsS0FBSyxFQUFHLENBQUM7b0JBQ0xMLEVBQUUsRUFBR0EsRUFBRTtnQkFDWCxDQUFDO1lBQ0wsQ0FBQztZQUNELEVBQUUsRUFBQ0UsS0FBSyxFQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDSixHQUFHLENBQUNRLElBQUksQ0FBQyxDQUFDO29CQUNiQyxPQUFPLEVBQUcsQ0FBK0I7Z0JBQzdDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUVDLENBQUMsRUFBRSxDQUFDO1lBQ1IsTUFBTSxDQUFDVixHQUFHLENBQUNRLElBQUksQ0FBQyxDQUFDO2dCQUNiRyxLQUFLLEVBQUdELENBQUMsQ0FBQ0QsT0FBTztZQUNyQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFDSSxDQUFDO1FBQ0YsTUFBTSxDQUFDVCxHQUFHLENBQUNRLElBQUksQ0FBQyxDQUFDO1lBQ2JDLE9BQU8sRUFBRyxDQUFvQjtRQUNsQyxDQUFDO0lBQ0wsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvYWRtaW5zL2RlbGV0ZUFkbWluLmpzPzgwYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICAgICAgICBpZihzZXNzaW9uKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgICAgIGxldCBhZG1pbiA9IGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKGFkbWluKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogXCJBY2NvdW50IGRlbGV0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IFwiTm90IEF1dGhlbnRpY2F0ZWQhXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImlkIiwiYm9keSIsImFkbWluIiwidXNlciIsImRlbGV0ZSIsIndoZXJlIiwianNvbiIsIm1lc3NhZ2UiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admins/deleteAdmin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admins/deleteAdmin.js"));
module.exports = __webpack_exports__;

})();