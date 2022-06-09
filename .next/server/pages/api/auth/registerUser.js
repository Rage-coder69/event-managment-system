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
exports.id = "pages/api/auth/registerUser";
exports.ids = ["pages/api/auth/registerUser"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxHQUFHLENBQUNDLE1BQU07QUFFVixFQUFFLEVBSkYsS0FJeUMsRUFBRSxFQUUxQyxNQUFNLENBQUM7SUFDSixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7UUFDakJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7SUFDcEMsQ0FBQztJQUNEQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtBQUMxQixDQUFDO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5sZXQgcHJpc21hXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gICAgfVxyXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/registerUser.js":
/*!****************************************!*\
  !*** ./pages/api/auth/registerUser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    try {\n        const { name , email , password  } = req.body;\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email: email\n            }\n        });\n        if (data) {\n            return res.json({\n                error: \"Email already exists! Try a different one.\"\n            });\n        }\n        if (!data) {\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name: name,\n                    email: email,\n                    password: password\n                }\n            });\n            return res.json({\n                user: user,\n                message: \"User created successfully!\"\n            });\n        }\n    } catch (e) {\n        return res.json({\n            error: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3RlclVzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxFQUE2RTtBQUNyQztBQUV6QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQzFDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsbUVBQXNCLENBQUMsQ0FBQztZQUN6Q1csS0FBSyxFQUFHLENBQUM7Z0JBQ1BOLEtBQUssRUFBR0EsS0FBSztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxFQUFDRyxJQUFJLEVBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDUyxJQUFJLENBQUMsQ0FBQztnQkFDZkMsS0FBSyxFQUFHLENBQTRDO1lBQ3RELENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxHQUFFTCxJQUFJLEVBQUMsQ0FBQztZQUNSLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1QsK0RBQWtCLENBQUMsQ0FBQztnQkFDckNRLElBQUksRUFBRyxDQUFDO29CQUNOSixJQUFJLEVBQUdBLElBQUk7b0JBQ1hDLEtBQUssRUFBR0EsS0FBSztvQkFDYkMsUUFBUSxFQUFHQSxRQUFRO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQ0gsR0FBRyxDQUFDUyxJQUFJLENBQUMsQ0FBQztnQkFDZkgsSUFBSSxFQUFHQSxJQUFJO2dCQUNYTSxPQUFPLEVBQUcsQ0FBNEI7WUFDeEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLE1BQUssRUFBRUMsQ0FBQyxFQUFDLENBQUM7UUFDVCxNQUFNLENBQUNiLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7WUFDZkMsS0FBSyxFQUFHRyxDQUFDLENBQUNELE9BQU87UUFDbkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXJVc2VyLmpzPzI5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlIDoge1xyXG4gICAgICAgIGVtYWlsIDogZW1haWxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICBlcnJvciA6IFwiRW1haWwgYWxyZWFkeSBleGlzdHMhIFRyeSBhIGRpZmZlcmVudCBvbmUuXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZighZGF0YSl7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICBuYW1lIDogbmFtZSxcclxuICAgICAgICAgIGVtYWlsIDogZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICB1c2VyIDogdXNlcixcclxuICAgICAgICBtZXNzYWdlIDogXCJVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfWNhdGNoIChlKXtcclxuICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgIGVycm9yIDogZS5tZXNzYWdlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJkYXRhIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iLCJlcnJvciIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/registerUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/registerUser.js"));
module.exports = __webpack_exports__;

})();