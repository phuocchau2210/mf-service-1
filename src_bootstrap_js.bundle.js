"use strict";
(self["webpackChunkservice_1"] = self["webpackChunkservice_1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _filterUniComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterUniComponent */ "./src/filterUniComponent.js");



// Bootstrap CSS

// Bootstrap Bundle JS


var renderElemement = document.getElementById("service-1-app");
var mountFilterUni = function mountFilterUni(el) {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filterUniComponent__WEBPACK_IMPORTED_MODULE_4__.FilterUniComponent, null), el);
};
if (renderElemement) {
  mountFilterUni(renderElemement);
}

// export { mountFilterUni };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountFilterUni);

/***/ }),

/***/ "./src/filterUniComponent.js":
/*!***********************************!*\
  !*** ./src/filterUniComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterUniComponent: () => (/* binding */ FilterUniComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_uniReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/uniReducer */ "./src/store/uniReducer.js");
/* harmony import */ var redux_micro_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-micro-frontend */ "./node_modules/redux-micro-frontend/index.js");
/* harmony import */ var _store_select_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/select.actions */ "./src/store/select.actions.js");





var FilterUniComponent = function FilterUniComponent(props) {
  var globalStore = redux_micro_frontend__WEBPACK_IMPORTED_MODULE_2__.GlobalStore.Get();
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(_store_uniReducer__WEBPACK_IMPORTED_MODULE_1__.UniReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  globalStore.RegisterStore("Service1", store, [redux_micro_frontend__WEBPACK_IMPORTED_MODULE_2__.GlobalStore.AllowAll]);
  var changeSelection = function changeSelection(event) {
    globalStore.DispatchAction("Service1", (0,_store_select_actions__WEBPACK_IMPORTED_MODULE_3__.SelectUniversity)(event.target.value));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Form:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "",
    id: "",
    onChange: function onChange(e) {
      return changeSelection(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "",
    disabled: true,
    selected: true,
    hidden: true
  }, "Select University"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "A"
  }, "University A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "B"
  }, "University B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "C"
  }, "University C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-primary"
  }, "Primary (from bootstrap)"));
};


/***/ }),

/***/ "./src/store/select.actions.js":
/*!*************************************!*\
  !*** ./src/store/select.actions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectUniversity: () => (/* binding */ SelectUniversity)
/* harmony export */ });
var SelectUniversity = function SelectUniversity(uni) {
  console.log("action: ", uni);
  return {
    type: "SELECT_UNIVERSITY",
    payload: uni
  };
};

/***/ }),

/***/ "./src/store/uniReducer.js":
/*!*********************************!*\
  !*** ./src/store/uniReducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniReducer: () => (/* binding */ UniReducer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialState = {
  select: ""
};
var UniReducer = function UniReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.type === "SELECT_UNIVERSITY") {
    return _objectSpread(_objectSpread({}, state), {}, {
      select: action.payload
    });
  }
  return state;
};

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.bundle.js.map