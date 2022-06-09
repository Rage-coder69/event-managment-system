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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxHQUFHLENBQUNDLE1BQU07QUFFVixFQUFFLEVBSkYsS0FJeUMsRUFBRSxFQUUxQyxNQUFNLENBQUM7SUFDSixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7UUFDakJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7SUFDcEMsQ0FBQztJQUNEQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtBQUMxQixDQUFDO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5sZXQgcHJpc21hXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gICAgfVxyXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                // You need to provide your own logic here that takes the credentials\n                // submitted and returns either a object representing a users or value\n                // that is false/null if the credentials are invalid.\n                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n                // You can also use the `req` object to obtain additional parameters\n                // (i.e., the request IP address)\n                //console.log(credentials);\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n                    where: {\n                        email: req.body.email\n                    }\n                });\n                // console.log(await bcrypt.compare(req.body.password, user.password), \"bcrypt\");\n                // If no error and we have users data, return it\n                if (user && await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(req.body.password, user.password)) {\n                    delete user.password;\n                    return user;\n                }\n                // Return null if users data could not be retrieved\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            // we store the user info in the token\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        session: async ({ token , session  })=>{\n            // we store the user info in the session if the token has a user\n            if (token) {\n                session.user = token.user;\n            }\n            return session;\n        }\n    },\n    secret: \"test\",\n    pages: {\n        signIn: '/login',\n        error: '/login'\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2lDO0FBQ3pCO0FBQ1g7QUFHN0IsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUNyQixFQUFpRDtJQUNqREksU0FBUyxFQUFFLENBQUM7UUFDUkgsc0VBQW1CLENBQUMsQ0FBQztZQUNqQkksSUFBSSxFQUFHLENBQWE7a0JBQ2RDLFNBQVMsRUFBQ0MsV0FBVyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFDL0IsRUFBcUU7Z0JBQ3JFLEVBQXNFO2dCQUN0RSxFQUFxRDtnQkFDckQsRUFBc0U7Z0JBQ3RFLEVBQW9FO2dCQUNwRSxFQUFpQztnQkFDakMsRUFBMkI7Z0JBQzNCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1AsbUVBQXNCLENBQUMsQ0FBQztvQkFDdkNTLEtBQUssRUFBRyxDQUFDO3dCQUNMQyxLQUFLLEVBQUdKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRCxLQUFLO29CQUMxQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsRUFBaUY7Z0JBQ2pGLEVBQWdEO2dCQUNoRCxFQUFFLEVBQUNILElBQUksSUFBSSxLQUFLLENBQUNOLHVEQUFjLENBQUNLLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFBUSxHQUFFLENBQUM7b0JBQy9ELE1BQU0sQ0FBQ04sSUFBSSxDQUFDTSxRQUFRO29CQUNwQixNQUFNLENBQUNOLElBQUk7Z0JBQ2YsQ0FBQztnQkFDRCxFQUFtRDtnQkFDbkQsTUFBTSxDQUFDLElBQUk7WUFDZixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRE8sU0FBUyxFQUFFLENBQUM7UUFDUkMsR0FBRyxTQUFVLENBQUMsQ0FBQ0MsS0FBSyxHQUFFVCxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDOUIsRUFBc0M7WUFDdEMsRUFBRSxFQUFDQSxJQUFJLEVBQUMsQ0FBQztnQkFDTFMsS0FBSyxDQUFDVCxJQUFJLEdBQUdBLElBQUk7WUFDckIsQ0FBQztZQUNELE1BQU0sQ0FBQ1MsS0FBSztRQUNoQixDQUFDO1FBQ0RDLE9BQU8sU0FBVSxDQUFDLENBQUNELEtBQUssR0FBRUMsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO1lBQ3JDLEVBQWdFO1lBQ2hFLEVBQUUsRUFBQ0QsS0FBSyxFQUFDLENBQUM7Z0JBQ05DLE9BQU8sQ0FBQ1YsSUFBSSxHQUFHUyxLQUFLLENBQUNULElBQUk7WUFDN0IsQ0FBQztZQUNELE1BQU0sQ0FBQ1UsT0FBTztRQUNsQixDQUFDO0lBRUwsQ0FBQztJQUNEQyxNQUFNLEVBQUcsQ0FBTTtJQUNmQyxLQUFLLEVBQUcsQ0FBQztRQUNMQyxNQUFNLEVBQUUsQ0FBUTtRQUNoQkMsS0FBSyxFQUFFLENBQVE7SUFDbkIsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBZb3UgbmVlZCB0byBwcm92aWRlIHlvdXIgb3duIGxvZ2ljIGhlcmUgdGhhdCB0YWtlcyB0aGUgY3JlZGVudGlhbHNcclxuICAgICAgICAgICAgICAgIC8vIHN1Ym1pdHRlZCBhbmQgcmV0dXJucyBlaXRoZXIgYSBvYmplY3QgcmVwcmVzZW50aW5nIGEgdXNlcnMgb3IgdmFsdWVcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgZmFsc2UvbnVsbCBpZiB0aGUgY3JlZGVudGlhbHMgYXJlIGludmFsaWQuXHJcbiAgICAgICAgICAgICAgICAvLyBlLmcuIHJldHVybiB7IGlkOiAxLCBuYW1lOiAnSiBTbWl0aCcsIGVtYWlsOiAnanNtaXRoQGV4YW1wbGUuY29tJyB9XHJcbiAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gdXNlIHRoZSBgcmVxYCBvYmplY3QgdG8gb2J0YWluIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4sIHRoZSByZXF1ZXN0IElQIGFkZHJlc3MpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgOiByZXEuYm9keS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhd2FpdCBiY3J5cHQuY29tcGFyZShyZXEuYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCksIFwiYmNyeXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXJyb3IgYW5kIHdlIGhhdmUgdXNlcnMgZGF0YSwgcmV0dXJuIGl0XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyICYmIGF3YWl0IGJjcnlwdC5jb21wYXJlKHJlcS5ib2R5LnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVzZXIucGFzc3dvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbnVsbCBpZiB1c2VycyBkYXRhIGNvdWxkIG5vdCBiZSByZXRyaWV2ZWRcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBqd3QgOiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHdlIHN0b3JlIHRoZSB1c2VyIGluZm8gaW4gdGhlIHRva2VuXHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vzc2lvbiA6IGFzeW5jICh7IHRva2VuLCBzZXNzaW9uIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gd2Ugc3RvcmUgdGhlIHVzZXIgaW5mbyBpbiB0aGUgc2Vzc2lvbiBpZiB0aGUgdG9rZW4gaGFzIGEgdXNlclxyXG4gICAgICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuICAgIHNlY3JldCA6IFwidGVzdFwiLCAvLyBmb3IgbWFraW5nIHRoZSB0b2tlbiBzZWN1cmVcclxuICAgIHBhZ2VzIDoge1xyXG4gICAgICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgICAgICAgZXJyb3I6ICcvbG9naW4nLFxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJib2R5IiwiY29tcGFyZSIsInBhc3N3b3JkIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwic2VjcmV0IiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();