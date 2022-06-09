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
exports.id = "pages/api/events/deleteEvent";
exports.ids = ["pages/api/events/deleteEvent"];
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

/***/ "(api)/./pages/api/events/deleteEvent.js":
/*!*****************************************!*\
  !*** ./pages/api/events/deleteEvent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    try {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req\n        });\n        if (session) {\n            try {\n                const { id  } = req.body;\n                let event_foods = _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event_foods.deleteMany({\n                    where: {\n                        eventId: id\n                    }\n                });\n                let event_equipment = _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event_equipment.deleteMany({\n                    where: {\n                        eventId: id\n                    }\n                });\n                let event = _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events[\"delete\"]({\n                    where: {\n                        id\n                    }\n                });\n                let transaction = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$transaction([\n                    event_foods,\n                    event_equipment,\n                    event\n                ]);\n                if (await transaction.length > 0) {\n                    return res.json({\n                        message: \"Event deleted Successfully!\"\n                    });\n                }\n            } catch (e) {\n                return res.json({\n                    message: e.message\n                });\n            }\n        } else {\n            return res.json({\n                message: \"Not Authenticated!\"\n            });\n        }\n    } catch (e) {\n        return res.json({\n            error: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2RlbGV0ZUV2ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDSjtBQUV6QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsR0FBRyxDQUFDLENBQUM7UUFDRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNMLDJEQUFVLENBQUMsQ0FBQztZQUFDRyxHQUFHO1FBQUMsQ0FBQztRQUN4QyxFQUFFLEVBQUNFLE9BQU8sRUFBQyxDQUFDO1lBQ1IsR0FBRyxDQUFDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLENBQUNDLENBQUFBLEVBQUUsR0FBQyxHQUFHSCxHQUFHLENBQUNJLElBQUk7Z0JBQ3JCLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHUCwwRUFBNkIsQ0FBQyxDQUFDO29CQUM3Q1MsS0FBSyxFQUFFLENBQUM7d0JBQ0pDLE9BQU8sRUFBRUwsRUFBRTtvQkFDZixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsR0FBRyxDQUFDTSxlQUFlLEdBQUdYLDhFQUFpQyxDQUFDLENBQUM7b0JBQ3JEUyxLQUFLLEVBQUUsQ0FBQzt3QkFDSkMsT0FBTyxFQUFFTCxFQUFFO29CQUNmLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxHQUFHLENBQUNPLEtBQUssR0FBR1osb0VBQW9CLENBQUMsQ0FBQztvQkFDOUJTLEtBQUssRUFBRyxDQUFDO3dCQUNMSixFQUFFO29CQUNOLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxHQUFHLENBQUNVLFdBQVcsR0FBRyxLQUFLLENBQUNmLGdFQUFtQixDQUFDLENBQUM7b0JBQ3pDTyxXQUFXO29CQUNYSSxlQUFlO29CQUNmQyxLQUFLO2dCQUNULENBQUM7Z0JBQ0QsRUFBRSxFQUFFLEtBQUssQ0FBQ0csV0FBVyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDZSxJQUFJLENBQUMsQ0FBQzt3QkFDYkMsT0FBTyxFQUFHLENBQTZCO29CQUMzQyxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLE1BQUssRUFBRUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxDQUFDakIsR0FBRyxDQUFDZSxJQUFJLENBQUMsQ0FBQztvQkFDYkMsT0FBTyxFQUFHQyxDQUFDLENBQUNELE9BQU87Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUNJLENBQUM7WUFDRixNQUFNLENBQUNoQixHQUFHLENBQUNlLElBQUksQ0FBQyxDQUFDO2dCQUNiQyxPQUFPLEVBQUcsQ0FBb0I7WUFDbEMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLE1BQUssRUFBRUMsQ0FBQyxFQUFDLENBQUM7UUFDUCxNQUFNLENBQUNqQixHQUFHLENBQUNlLElBQUksQ0FBQyxDQUFDO1lBQ2JHLEtBQUssRUFBR0QsQ0FBQyxDQUFDRCxPQUFPO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9ldmVudHMvZGVsZXRlRXZlbnQuanM/OTU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICAgICAgICBpZihzZXNzaW9uKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudF9mb29kcyA9IHByaXNtYS5ldmVudF9mb29kcy5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X2VxdWlwbWVudCA9IHByaXNtYS5ldmVudF9lcXVpcG1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHByaXNtYS5ldmVudHMuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50X2Zvb2RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50X2VxdWlwbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBldmVudFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXdhaXQgdHJhbnNhY3Rpb24ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IFwiRXZlbnQgZGVsZXRlZCBTdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogXCJOb3QgQXV0aGVudGljYXRlZCFcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yIDogZS5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJpZCIsImJvZHkiLCJldmVudF9mb29kcyIsImRlbGV0ZU1hbnkiLCJ3aGVyZSIsImV2ZW50SWQiLCJldmVudF9lcXVpcG1lbnQiLCJldmVudCIsImV2ZW50cyIsImRlbGV0ZSIsInRyYW5zYWN0aW9uIiwiJHRyYW5zYWN0aW9uIiwibGVuZ3RoIiwianNvbiIsIm1lc3NhZ2UiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/deleteEvent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/deleteEvent.js"));
module.exports = __webpack_exports__;

})();