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
exports.id = "pages/users/transactionComplete";
exports.ids = ["pages/users/transactionComplete"];
exports.modules = {

/***/ "./pages/users/transactionComplete.js":
/*!********************************************!*\
  !*** ./pages/users/transactionComplete.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TransactionComplete)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction TransactionComplete(props) {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const data1 = JSON.parse(sessionStorage.getItem('info'));\n        const handleEvents = async ()=>{\n            await fetch(\"/api/events/addEvent\", {\n                method: 'POST',\n                body: JSON.stringify(data1)\n            }).then((res)=>res.json()\n            ).then((data)=>{\n                setLoading(false);\n                sessionStorage.removeItem('info');\n                console.log(data);\n            });\n        };\n        handleEvents();\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n            component: \"div\",\n            sx: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {\n                color: \"primary\",\n                size: \"3rem\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Web Projects\\\\Event Management System\\\\app\\\\pages\\\\users\\\\transactionComplete.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Web Projects\\\\Event Management System\\\\app\\\\pages\\\\users\\\\transactionComplete.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n            component: \"div\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    variant: \"h4\",\n                    color: \"primary\",\n                    sx: {\n                        marginY: \"1rem\"\n                    },\n                    align: \"center\",\n                    children: \"Event Registered Successfully\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Web Projects\\\\Event Management System\\\\app\\\\pages\\\\users\\\\transactionComplete.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    variant: \"h5\",\n                    color: \"primary\",\n                    sx: {\n                        marginY: \"1rem\"\n                    },\n                    align: \"center\",\n                    children: \"You will be redirected to your dashboard after closing this window\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Web Projects\\\\Event Management System\\\\app\\\\pages\\\\users\\\\transactionComplete.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Web Projects\\\\Event Management System\\\\app\\\\pages\\\\users\\\\transactionComplete.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy90cmFuc2FjdGlvbkNvbXBsZXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1g7QUFDRjtBQUNjO0FBQ0g7QUFHL0IsUUFBUSxDQUFDTyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFFaEQsS0FBSyxNQUFHQyxPQUFPLE1BQUVDLFVBQVUsTUFBS1IsK0NBQVEsQ0FBQyxJQUFJO0lBRTdDRCxnREFBUyxLQUFPLENBQUM7UUFDYixLQUFLLENBQUNVLEtBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLENBQU07UUFDckQsS0FBSyxDQUFDQyxZQUFZLGFBQWUsQ0FBQztZQUM5QixLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFzQix1QkFBRSxDQUFDO2dCQUNqQ0MsTUFBTSxFQUFFLENBQU07Z0JBQ2RDLElBQUksRUFBRVAsSUFBSSxDQUFDUSxTQUFTLENBQUNULEtBQUk7WUFDN0IsQ0FBQyxFQUFFVSxJQUFJLEVBQUNDLEdBQUcsR0FBSUEsR0FBRyxDQUFDQyxJQUFJO2NBQ2xCRixJQUFJLEVBQUNWLElBQUksR0FBSSxDQUFDO2dCQUNYRCxVQUFVLENBQUMsS0FBSztnQkFDaEJJLGNBQWMsQ0FBQ1UsVUFBVSxDQUFDLENBQU07Z0JBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsSUFBSTtZQUNwQixDQUFDO1FBQ1QsQ0FBQztRQUNESyxZQUFZO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxFQUFFLEVBQUNQLE9BQU8sRUFBRSxDQUFDO1FBQ1QsTUFBTSw2RUFDREwsMERBQUc7WUFBQ3VCLFNBQVMsRUFBRSxDQUFLO1lBQUVDLEVBQUUsRUFBRSxDQUFDO2dCQUFDQyxPQUFPLEVBQUcsQ0FBTTtnQkFBRUMsY0FBYyxFQUFHLENBQVE7Z0JBQUVDLFVBQVUsRUFBRyxDQUFRO1lBQUMsQ0FBQztrR0FDNUZ6QiwyREFBZ0I7Z0JBQUMwQixLQUFLLEVBQUUsQ0FBUztnQkFBRUMsSUFBSSxFQUFFLENBQU07Ozs7Ozs7Ozs7O0lBRzVELENBQUMsTUFBSyxDQUFDO1FBQ0gsTUFBTSw2RUFDRDdCLDBEQUFHO1lBQUN1QixTQUFTLEVBQUUsQ0FBSzs7NEZBQ2hCdEIsaUVBQVU7b0JBQUM2QixPQUFPLEVBQUUsQ0FBSTtvQkFBRUYsS0FBSyxFQUFFLENBQVM7b0JBQUVKLEVBQUUsRUFBRSxDQUFDO3dCQUFDTyxPQUFPLEVBQUcsQ0FBTTtvQkFBQyxDQUFDO29CQUFFQyxLQUFLLEVBQUUsQ0FBUTs4QkFBRSxDQUE2Qjs7Ozs7OzRGQUNwSC9CLGlFQUFVO29CQUFDNkIsT0FBTyxFQUFFLENBQUk7b0JBQUVGLEtBQUssRUFBRSxDQUFTO29CQUFFSixFQUFFLEVBQUUsQ0FBQzt3QkFBQ08sT0FBTyxFQUFHLENBQU07b0JBQUMsQ0FBQztvQkFBRUMsS0FBSyxFQUFFLENBQVE7OEJBQUUsQ0FBa0U7Ozs7Ozs7Ozs7OztJQUd0SyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL3VzZXJzL3RyYW5zYWN0aW9uQ29tcGxldGUuanM/MDNjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQge0NpcmN1bGFyUHJvZ3Jlc3N9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25Db21wbGV0ZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbmZvJykpXHJcbiAgICAgICAgY29uc3QgaGFuZGxlRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvZXZlbnRzL2FkZEV2ZW50XCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2luZm8nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUV2ZW50cygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD17XCJkaXZcIn0gc3g9e3sgZGlzcGxheSA6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudCA6IFwiY2VudGVyXCIsIGFsaWduSXRlbXMgOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9e1wicHJpbWFyeVwifSBzaXplPXtcIjNyZW1cIn0vPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICApO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PXtcImRpdlwifT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e1wiaDRcIn0gY29sb3I9e1wicHJpbWFyeVwifSBzeD17eyBtYXJnaW5ZIDogXCIxcmVtXCIgfX0gYWxpZ249e1wiY2VudGVyXCJ9PkV2ZW50IFJlZ2lzdGVyZWQgU3VjY2Vzc2Z1bGx5PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17XCJoNVwifSBjb2xvcj17XCJwcmltYXJ5XCJ9IHN4PXt7IG1hcmdpblkgOiBcIjFyZW1cIiB9fSBhbGlnbj17XCJjZW50ZXJcIn0+WW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB5b3VyIGRhc2hib2FyZCBhZnRlciBjbG9zaW5nIHRoaXMgd2luZG93PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlRyYW5zYWN0aW9uQ29tcGxldGUiLCJwcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUV2ZW50cyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsInNpemUiLCJ2YXJpYW50IiwibWFyZ2luWSIsImFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/transactionComplete.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/transactionComplete.js"));
module.exports = __webpack_exports__;

})();