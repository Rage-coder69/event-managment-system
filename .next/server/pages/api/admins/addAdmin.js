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
exports.id = "pages/api/admins/addAdmin";
exports.ids = ["pages/api/admins/addAdmin"];
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

/***/ "(api)/./pages/api/admins/addAdmin.js":
/*!**************************************!*\
  !*** ./pages/api/admins/addAdmin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n//Todo : secure admin route\nasync function handler(req, res) {\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session) {\n        try {\n            const { name , email , password , role  } = req.body;\n            const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                where: {\n                    email: email\n                }\n            });\n            if (data) {\n                return res.json({\n                    message: \"Email already exists! Try a different One.\"\n                });\n            }\n            if (!data) {\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                    data: {\n                        name: name,\n                        email: email,\n                        password: password,\n                        role: role\n                    }\n                });\n                return res.json({\n                    message: \"Account Created Successfully\"\n                });\n            }\n        } catch (e) {\n            return res.json({\n                error: e.message\n            });\n        }\n    } else {\n        return res.json({\n            message: \"Not Authenticated!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW5zL2FkZEFkbWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxFQUE2RTtBQUNyQztBQUNFO0FBQzFDLEVBQTJCO0FBRVosZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHSiwyREFBVSxDQUFDLENBQUNFO1FBQUFBLEdBQUc7SUFBQSxDQUFDO0lBQ2hDLEVBQUUsRUFBQ0UsT0FBTyxFQUFDLENBQUM7UUFDUixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUVDLElBQUksRUFBQyxDQUFDLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtZQUNoRCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNYLG1FQUFzQixDQUFDLENBQUM7Z0JBQ3ZDYyxLQUFLLEVBQUcsQ0FBQztvQkFDTFAsS0FBSyxFQUFHQSxLQUFLO2dCQUNqQixDQUFDO1lBQ0wsQ0FBQztZQUNELEVBQUUsRUFBQ0ksSUFBSSxFQUFDLENBQUM7Z0JBQ0wsTUFBTSxDQUFDUCxHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO29CQUNiQyxPQUFPLEVBQUcsQ0FBNEM7Z0JBQzFELENBQUM7WUFDTCxDQUFDO1lBQ0QsRUFBRSxHQUFFTCxJQUFJLEVBQUMsQ0FBQztnQkFDTixLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNaLCtEQUFrQixDQUFDLENBQUM7b0JBQ25DVyxJQUFJLEVBQUcsQ0FBQzt3QkFDSkwsSUFBSSxFQUFHQSxJQUFJO3dCQUNYQyxLQUFLLEVBQUdBLEtBQUs7d0JBQ2JDLFFBQVEsRUFBR0EsUUFBUTt3QkFDbkJDLElBQUksRUFBR0EsSUFBSTtvQkFDZixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxDQUFDTCxHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO29CQUNiQyxPQUFPLEVBQUcsQ0FBOEI7Z0JBQzVDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUVFLENBQUMsRUFBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDZCxHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO2dCQUNiSSxLQUFLLEVBQUdELENBQUMsQ0FBQ0YsT0FBTztZQUNyQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFBSSxDQUFDO1FBQ0YsTUFBTSxDQUFDWixHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO1lBQ2JDLE9BQU8sRUFBRyxDQUFvQjtRQUNsQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvYWRtaW5zL2FkZEFkbWluLmpzP2E3OWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuLy9Ub2RvIDogc2VjdXJlIGFkbWluIHJvdXRlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbih7cmVxfSk7XHJcbiAgICBpZihzZXNzaW9uKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogXCJFbWFpbCBhbHJlYWR5IGV4aXN0cyEgVHJ5IGEgZGlmZmVyZW50IE9uZS5cIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGUgOiByb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBcIkFjY291bnQgQ3JlYXRlZCBTdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZSA6IFwiTm90IEF1dGhlbnRpY2F0ZWQhXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiYm9keSIsImRhdGEiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwianNvbiIsIm1lc3NhZ2UiLCJjcmVhdGUiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admins/addAdmin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admins/addAdmin.js"));
module.exports = __webpack_exports__;

})();