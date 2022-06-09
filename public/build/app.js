(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/Main.js":
/*!************************!*\
  !*** ./assets/Main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/pages/Home.jsx");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact */ "./assets/pages/Contact.jsx");
/* harmony import */ var _pages_AboutUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AboutUs */ "./assets/pages/AboutUs.jsx");
/* harmony import */ var _pages_MyPlants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/MyPlants */ "./assets/pages/MyPlants.jsx");
/* harmony import */ var _pages_PlantSingle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/PlantSingle */ "./assets/pages/PlantSingle.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Layout */ "./assets/components/Layout.jsx");
/* harmony import */ var _pages_FavSingle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/FavSingle */ "./assets/pages/FavSingle.jsx");











function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/catalogue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "plant/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PlantSingle__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "myFav/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_FavSingle__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    exact: true,
    path: "/myPlants",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_MyPlants__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "aboutUs",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AboutUs__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null)));

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./assets/Main.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/Layout.jsx":
/*!**************************************!*\
  !*** ./assets/components/Layout.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./assets/pages/AboutUs.jsx":
/*!**********************************!*\
  !*** ./assets/pages/AboutUs.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


 // import Contact from "./Contact";



var AboutUs = function AboutUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title-about mt-5 mb-5"
  }, "Here's our story")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " about-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "about-img",
    src: "https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_1280.png",
    alt: "profile"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mariia has always enjoyed having plants indoors. They instantly brighten up the room and create a feeling of home. Taking care of plants is in itself a very rewarding activity and provides a sense of emotional well-being. Although plant care can quickly become quite the opposite, when finding the right information takes way too much time and possible risks to beloved pets are stressing you out. And so the idea of having a beginner-friendly resource came up. Easy plant care guide with handy filters has all necessary information to allow your green friends thrive and your fluffy ones stay safe."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " about-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Rachel is web development student based in Helsinki who loves nature and greens. She likes to have plants and flowers at home, her favorite plant is Aloe Vera. Many of the plants I had at home didn't survive long. So I hope with the information we gather on this website, it can help a plant killer to become a long term plant keeper. Long live the plants!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "about-img",
    src: "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg",
    alt: "profile"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slogan-container text-center p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "mb-5"
  }, " Let's make your plants flourish!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-aboutus"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/contact",
    className: "nav-link link-color"
  }, "Get in touch"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);

/***/ }),

/***/ "./assets/pages/Contact.jsx":
/*!**********************************!*\
  !*** ./assets/pages/Contact.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FORM_ENDPOINT = "https://public.herotofu.com/v1/68ba9b40-e7cb-11ec-b069-efe5ca590096";

var Contact = function Contact() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var handleSubmit = function handleSubmit() {
    setTimeout(function () {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "alert alert-success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, "Thank you! We'll be in touch soon."));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h2", {
    className: "contact"
  }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("form", {
    action: FORM_ENDPOINT,
    onSubmit: handleSubmit,
    method: "POST" // target="_blank"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    htmlFor: "yourName",
    className: "col-form-label"
  }, "First Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "text",
    name: "firstName",
    id: "firstName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    htmlFor: "lastName",
    className: "col-form-label"
  }, "Last Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "text",
    name: "lastName",
    id: "lastName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    htmlFor: "email",
    className: "col-form-label"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "email",
    name: "email",
    id: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    htmlFor: "phone",
    className: "col-form-label"
  }, "Phone:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "phone",
    id: "phone",
    name: "phone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    htmlFor: "message",
    className: "col-form-label"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("textarea", {
    className: "form-control",
    rows: "3",
    name: "message",
    id: "message"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    type: "submit",
    className: "btn btn-success btn-contact",
    value: "Send Message"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./assets/pages/FavSingle.jsx":
/*!************************************!*\
  !*** ./assets/pages/FavSingle.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var FavSingle = function FavSingle() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      favPlant = _useState2[0],
      setFavPlant = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)().id),
      _useState4 = _slicedToArray(_useState3, 2),
      id = _useState4[0],
      setId = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_13___default().get("http://localhost:8007/api/favourite/".concat(id)).then(function (res) {
      setFavPlant(res.data);
      console.log('fav will be here', res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, favPlant.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
    src: favPlant.img,
    alt: "{item.name}"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \u2600\uFE0F Conditions: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, " ", favPlant.conditions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \uD83D\uDCA6 Water: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, favPlant.water), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \uD83C\uDF31 Difficulty: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, favPlant.difficulty, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
    className: "order-btn"
  }, "remove")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavSingle);

/***/ }),

/***/ "./assets/pages/Footer.jsx":
/*!*********************************!*\
  !*** ./assets/pages/Footer.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "p-2 bg-dark text-white text-center position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Copyright \xA9 Team Scrums Up 2022")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/pages/Header.jsx":
/*!*********************************!*\
  !*** ./assets/pages/Header.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");



var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark nav-color py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "nav-link logo"
  }, "PlantCare \uD83E\uDEB4", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "nav-link link-color"
  }, "Catalogue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/myPlants",
    className: "nav-link link-color"
  }, "My plants")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/aboutUs",
    className: "nav-link link-color"
  }, "About Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contact",
    className: "nav-link link-color"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://localhost:8007/login",
    className: "nav-link link-color"
  }, "Logout"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./assets/pages/Home.jsx":
/*!*******************************!*\
  !*** ./assets/pages/Home.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlantList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlantList */ "./assets/pages/PlantList.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");





var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "text-light p-5 text-center text-sm-start banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-sm-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "banner-title"
  }, "Take care of your plants "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead my-4 "
  }, "Plant killers & Plant nurturers, this site is for you! --Select and add your favorite plants!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "img-fluid w-50 d-none d-sm-block",
    src: "https://cdn.pixabay.com/photo/2019/04/10/12/32/house-plants-4116992__480.png",
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlantList__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/pages/LikeCard.jsx":
/*!***********************************!*\
  !*** ./assets/pages/LikeCard.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");





var LikeCard = function LikeCard(props) {
  //     var gapi = window.gapi
  //     var CLIENT_ID = "244899854192-vkuvg34746lqksam54c9a0qs2a7mfcs6.apps.googleusercontent.com"
  //     var API_KEY = "AIzaSyAMcXmDgaVLLe9cCT4kAzPqm-AVs5TTnZo"
  //     var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  //     var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  //     const addCalendarEvent = () => {
  //       gapi.load('client:auth2', () => {
  //         console.log('loaded client')
  //         gapi.client.init({
  //           apiKey: API_KEY,
  //           clientId: CLIENT_ID,
  //           discoveryDocs: DISCOVERY_DOCS,
  //           scope: SCOPES,
  //         })
  //         gapi.client.load('calendar', 'v3', () => console.log('bam!'))
  //         gapi.auth2.getAuthInstance().signIn()
  //         .then(() => {
  //           var event = {
  //             'summary': 'Water the plant!',
  //             'location': 'Home',
  //             'description': 'Water the plant',
  //             'start': {
  //               'dateTime': 'isoStartDate',
  //               'timeZone': 'timeZone'
  //             },
  //             'end': {
  //               'dateTime': 'isoEndDate',
  //               'timeZone': 'timeZone'
  //             },
  //             'recurrence': [
  //               'RRULE:FREQ=DAILY;COUNT=2'
  //             ],
  //             'attendees': [
  //               {'email': 'lpage@example.com'},
  //               {'email': 'sbrin@example.com'}
  //             ],
  //             'reminders': {
  //               'useDefault': false,
  //               'overrides': [
  //                 {'method': 'email', 'minutes': 24 * 60},
  //                 {'method': 'popup', 'minutes': 10}
  //               ]
  //             }
  //           }
  //           var request = gapi.client.calendar.events.insert({
  //             'calendarId': 'primary',
  //             'resource': event,
  //           })
  //           request.execute(event => {
  //             console.log(event)
  //             window.open(event.htmlLink)
  //           })
  //           // get events
  //           gapi.client.calendar.events.list({
  //             'calendarId': 'primary',
  //             'timeMin': (new Date()).toISOString(),
  //             'showDeleted': false,
  //             'singleEvents': true,
  //             'maxResults': 10,
  //             'orderBy': 'startTime'
  //           }).then(response => {
  //             const events = response.result.items
  //             console.log('EVENTS: ', events)
  //           })
  //         })
  //       })
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/myFav/".concat(props.id),
    className: "card-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "plant-img",
    src: props.img,
    alt: props.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "fav-card-name"
  }, props.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn-delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTrashAlt, null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeCard);

/***/ }),

/***/ "./assets/pages/MyPlants.jsx":
/*!***********************************!*\
  !*** ./assets/pages/MyPlants.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _LikeCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LikeCard */ "./assets/pages/LikeCard.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var sortIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__.FontAwesomeIcon, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faArrowDownAZ
});

var MyPlants = function MyPlants() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      myPlants = _useState2[0],
      setMyPlants = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      orderedAZ = _useState6[0],
      setOrderedAZ = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isPetFriendly = _useState8[0],
      setIsPetFriendly = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      filterPlants = _useState10[0],
      setFilterPlants = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_19___default().get("http://localhost:8007/api/favourite").then(function (res) {
      setMyPlants(res.data);
      setFilterPlants(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);

  var updateSearch = function updateSearch(e) {
    setSearch(e.target.value);
  };

  var handleSort = function handleSort() {
    var sortedPlants = _toConsumableArray(myPlants);

    if (orderedAZ === 0 || orderedAZ === 2) {
      setFilterPlants(sortedPlants.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }));
      setOrderedAZ(1);
    } else {
      setFilterPlants(sortedPlants.sort(function (a, b) {
        return a.name > b.name ? -1 : 1;
      }));
      setOrderedAZ(2);
    }
  };

  var handleCare = function handleCare(e) {
    var newPlants = _toConsumableArray(myPlants);

    switch (orderedAZ) {
      case 1:
        break;

      case 2:
        setFilterPlants(newPlants.sort(function (a, b) {
          return a.name > b.name ? 1 : -1;
        }));
        break;

      case 3:
        setFilterPlants(newPlants.sort(function (a, b) {
          return a.name > b.name ? -1 : 1;
        }));
        break;
    }

    if (e.target.value !== 'Difficulty:') {
      var careValue = parseInt(e.target.value);
      newPlants = newPlants.filter(function (plant) {
        return plant.difficulty === careValue;
      });
    }

    setFilterPlants(newPlants);
  };

  var handlePetFriendly = function handlePetFriendly() {
    var newPlants = _toConsumableArray(myPlants);

    if (isPetFriendly) {
      setFilterPlants(newPlants.filter(function (myPlant) {
        return myPlant.pets;
      }));
      setIsPetFriendly(false);
    } else {
      setFilterPlants(newPlants);
      setIsPetFriendly(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "My favorite plants \uD83D\uDC95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    className: "search-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    className: "search-bar",
    value: search,
    placeholder: "Search for Plants",
    onChange: updateSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("select", {
    name: "care-level",
    onChange: function onChange(e) {
      return handleCare(e);
    },
    className: "care-level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", null, "Difficulty:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "1"
  }, "Easy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "2"
  }, "Medium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "3"
  }, "Difficult")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "pet-btn",
    onClick: handlePetFriendly
  }, "\uD83D\uDC3E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "order-btn",
    onClick: handleSort
  }, sortIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "plant-list"
  }, filterPlants.filter(function (myPlant) {
    return myPlant.name.toLowerCase().includes(search.toLowerCase());
  }).map(function (myPlant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_LikeCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: myPlant.id,
      id: myPlant.id,
      name: myPlant.name,
      img: myPlant.img
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_22__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPlants);

/***/ }),

/***/ "./assets/pages/PlantCard.jsx":
/*!************************************!*\
  !*** ./assets/pages/PlantCard.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




var PlantCard = function PlantCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/plant/".concat(props.id),
    className: "card-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "plant-img",
    src: props.img,
    alt: props.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "card-name"
  }, props.name)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlantCard);

/***/ }),

/***/ "./assets/pages/PlantList.jsx":
/*!************************************!*\
  !*** ./assets/pages/PlantList.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _PlantCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PlantCard */ "./assets/pages/PlantCard.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var sortIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeIcon, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faArrowDownAZ
});

var PlantList = function PlantList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      plants = _useState2[0],
      setPlants = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      orderedAZ = _useState6[0],
      setOrderedAZ = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isPetFriendly = _useState8[0],
      setIsPetFriendly = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      filterPlants = _useState10[0],
      setFilterPlants = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_19___default().get("http://localhost:8007/api/plants").then(function (res) {
      setPlants(res.data);
      setFilterPlants(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);

  var updateSearch = function updateSearch(e) {
    setSearch(e.target.value);
  };

  var handleSort = function handleSort() {
    var sortedPlants = _toConsumableArray(plants);

    if (orderedAZ === 0 || orderedAZ === 2) {
      setFilterPlants(sortedPlants.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }));
      setOrderedAZ(1);
    } else {
      setFilterPlants(sortedPlants.sort(function (a, b) {
        return a.name > b.name ? -1 : 1;
      }));
      setOrderedAZ(2);
    }
  };

  var handleCare = function handleCare(e) {
    var newPlants = _toConsumableArray(plants);

    switch (orderedAZ) {
      case 1:
        break;

      case 2:
        setFilterPlants(newPlants.sort(function (a, b) {
          return a.name > b.name ? 1 : -1;
        }));
        break;

      case 3:
        setFilterPlants(newPlants.sort(function (a, b) {
          return a.name > b.name ? -1 : 1;
        }));
        break;
    }

    if (e.target.value !== 'Difficulty:') {
      var careValue = parseInt(e.target.value);
      newPlants = newPlants.filter(function (plant) {
        return plant.difficulty === careValue;
      });
    }

    setFilterPlants(newPlants);
  };

  var handlePetFriendly = function handlePetFriendly() {
    var newPlants = _toConsumableArray(plants);

    if (isPetFriendly) {
      setFilterPlants(newPlants.filter(function (plant) {
        return plant.pets;
      }));
      setIsPetFriendly(false);
    } else {
      setFilterPlants(newPlants);
      setIsPetFriendly(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    className: "search-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    className: "search-bar",
    value: search,
    placeholder: "Search for Plants",
    onChange: updateSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("select", {
    name: "care-level",
    onChange: function onChange(e) {
      return handleCare(e);
    },
    className: "care-level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", null, "Difficulty:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "1"
  }, "Easy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "2"
  }, "Medium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    value: "3"
  }, "Difficult")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "pet-btn",
    onClick: handlePetFriendly
  }, "\uD83D\uDC3E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "order-btn",
    onClick: handleSort
  }, sortIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "plant-list"
  }, filterPlants.filter(function (plant) {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  }).map(function (plant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_PlantCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: plant.id,
      id: plant.id,
      name: plant.name,
      img: plant.img
    });
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlantList);

/***/ }),

/***/ "./assets/pages/PlantSingle.jsx":
/*!**************************************!*\
  !*** ./assets/pages/PlantSingle.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PlantSingle = function PlantSingle() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)().id),
      _useState4 = _slicedToArray(_useState3, 2),
      id = _useState4[0],
      setId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      isActive = _useState6[0],
      setIsActive = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_13___default().get("http://localhost:8007/api/plants/".concat(id)).then(function (res) {
      setItem(res.data);
      console.log(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);

  var addLike = function addLike(e) {
    e.preventDefault();
    var bodyFormData = new FormData();

    for (var key in item) {
      bodyFormData.append(key, item[key]);
    }

    axios__WEBPACK_IMPORTED_MODULE_13___default().post("http://localhost:8007/api/favourite", bodyFormData);
    setIsActive(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
    className: "sp-img",
    src: item.img,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \u2600\uFE0F Conditions: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, " ", item.conditions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \uD83D\uDCA6 Water: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, item.water), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "sp-subtitle"
  }, " \uD83C\uDF31 Difficulty: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
    className: "plant-detail"
  }, item.difficulty, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
    type: "button",
    id: "like-button",
    onClick: addLike,
    style: {
      backgroundColor: isActive ? 'indianred' : '',
      color: isActive ? 'white' : ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("svg", {
    className: "heart-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("path", {
    d: "M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"
  })), "Like")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlantSingle);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_fortawesome_re-367b40"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFFRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUcsU0FBUyxFQUFDO0VBQWIsZ0NBREYsZUFFRTtJQUFHLFNBQVMsRUFBQztFQUFiLFFBQThCNkMsSUFBSSxDQUFDNUMsVUFBbkMsQ0FGRixlQUdFO0lBQUcsU0FBUyxFQUFDO0VBQWIsMkJBSEYsZUFJRTtJQUFHLFNBQVMsRUFBQztFQUFiLEdBQTZCNEMsSUFBSSxDQUFDM0MsS0FBbEMsQ0FKRixlQUtFO0lBQUcsU0FBUyxFQUFDO0VBQWIsZ0NBTEYsZUFNRTtJQUFHLFNBQVMsRUFBQztFQUFiLEdBQTZCMkMsSUFBSSxDQUFDMUMsVUFBbEMsTUFORixlQVVFO0lBQVEsSUFBSSxFQUFDLFFBQWI7SUFBc0IsRUFBRSxFQUFDLGFBQXpCO0lBQXVDLE9BQU8sRUFBRThDLE9BQWhEO0lBQTBELEtBQUssRUFBRTtNQUNuRU8sZUFBZSxFQUFFVCxRQUFRLEdBQUcsV0FBSCxHQUFpQixFQUR5QjtNQUVuRVUsS0FBSyxFQUFFVixRQUFRLEdBQUcsT0FBSCxHQUFhO0lBRnVDO0VBQWpFLGdCQUlaO0lBQUssU0FBUyxFQUFDLFlBQWY7SUFBNEIsS0FBSyxFQUFDLDRCQUFsQztJQUErRCxPQUFPLEVBQUM7RUFBdkUsZ0JBQXFGO0lBQU0sQ0FBQyxFQUFDO0VBQVIsRUFBckYsQ0FKWSxTQVZGLENBRkYsQ0FIRixDQUZGLGVBNkJFLDREQUFDLGdEQUFELE9BN0JGLENBREY7QUFpQ0QsQ0EvREQ7O0FBaUVBLGlFQUFlckYsV0FBZjs7Ozs7Ozs7Ozs7O0FDdkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0Fib3V0VXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Db250YWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvRmF2U2luZ2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xpa2VDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvTXlQbGFudHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9QbGFudENhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9QbGFudExpc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9QbGFudFNpbmdsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL3BhZ2VzL0NvbnRhY3RcIjtcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL3BhZ2VzL0Fib3V0VXNcIjtcbmltcG9ydCBNeVBsYW50cyBmcm9tIFwiLi9wYWdlcy9NeVBsYW50c1wiO1xuaW1wb3J0IFBsYW50U2luZ2xlIGZyb20gXCIuL3BhZ2VzL1BsYW50U2luZ2xlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgRmF2U2luZ2xlIGZyb20gXCIuL3BhZ2VzL0ZhdlNpbmdsZVwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhdGFsb2d1ZVwiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGxhbnQvOmlkXCIgZWxlbWVudD17PFBsYW50U2luZ2xlIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibXlGYXYvOmlkXCIgZWxlbWVudD17PEZhdlNpbmdsZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9teVBsYW50c1wiIGVsZW1lbnQ9ezxNeVBsYW50cyAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cImFib3V0VXNcIiBlbGVtZW50PXs8QWJvdXRVcyAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYWluIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IFwiLi9NYWluXCI7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxkaXYgPntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbi8vIGltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1hYm91dCBtdC01IG1iLTVcIj5IZXJlJ3Mgb3VyIHN0b3J5PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJvdXQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wNS8yMy8wMC8yMS93b21hbi02Mjc0ODc5XzEyODAucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE1hcmlpYSBoYXMgYWx3YXlzIGVuam95ZWQgaGF2aW5nIHBsYW50cyBpbmRvb3JzLiBUaGV5IGluc3RhbnRseVxuICAgICAgICAgICAgICAgIGJyaWdodGVuIHVwIHRoZSByb29tIGFuZCBjcmVhdGUgYSBmZWVsaW5nIG9mIGhvbWUuIFRha2luZyBjYXJlXG4gICAgICAgICAgICAgICAgb2YgcGxhbnRzIGlzIGluIGl0c2VsZiBhIHZlcnkgcmV3YXJkaW5nIGFjdGl2aXR5IGFuZCBwcm92aWRlcyBhXG4gICAgICAgICAgICAgICAgc2Vuc2Ugb2YgZW1vdGlvbmFsIHdlbGwtYmVpbmcuIEFsdGhvdWdoIHBsYW50IGNhcmUgY2FuIHF1aWNrbHlcbiAgICAgICAgICAgICAgICBiZWNvbWUgcXVpdGUgdGhlIG9wcG9zaXRlLCB3aGVuIGZpbmRpbmcgdGhlIHJpZ2h0IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgdGFrZXMgd2F5IHRvbyBtdWNoIHRpbWUgYW5kIHBvc3NpYmxlIHJpc2tzIHRvIGJlbG92ZWQgcGV0cyBhcmVcbiAgICAgICAgICAgICAgICBzdHJlc3NpbmcgeW91IG91dC4gQW5kIHNvIHRoZSBpZGVhIG9mIGhhdmluZyBhIGJlZ2lubmVyLWZyaWVuZGx5XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgY2FtZSB1cC4gRWFzeSBwbGFudCBjYXJlIGd1aWRlIHdpdGggaGFuZHkgZmlsdGVycyBoYXNcbiAgICAgICAgICAgICAgICBhbGwgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHRvIGFsbG93IHlvdXIgZ3JlZW4gZnJpZW5kcyB0aHJpdmUgYW5kXG4gICAgICAgICAgICAgICAgeW91ciBmbHVmZnkgb25lcyBzdGF5IHNhZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJvdXQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFJhY2hlbCBpcyB3ZWIgZGV2ZWxvcG1lbnQgc3R1ZGVudCBiYXNlZCBpbiBIZWxzaW5raSB3aG8gbG92ZXNcbiAgICAgICAgICAgICAgICBuYXR1cmUgYW5kIGdyZWVucy4gU2hlIGxpa2VzIHRvIGhhdmUgcGxhbnRzIGFuZCBmbG93ZXJzIGF0IGhvbWUsXG4gICAgICAgICAgICAgICAgaGVyIGZhdm9yaXRlIHBsYW50IGlzIEFsb2UgVmVyYS4gTWFueSBvZiB0aGUgcGxhbnRzIEkgaGFkIGF0XG4gICAgICAgICAgICAgICAgaG9tZSBkaWRuJ3Qgc3Vydml2ZSBsb25nLiBTbyBJIGhvcGUgd2l0aCB0aGUgaW5mb3JtYXRpb24gd2VcbiAgICAgICAgICAgICAgICBnYXRoZXIgb24gdGhpcyB3ZWJzaXRlLCBpdCBjYW4gaGVscCBhIHBsYW50IGtpbGxlciB0byBiZWNvbWUgYVxuICAgICAgICAgICAgICAgIGxvbmcgdGVybSBwbGFudCBrZWVwZXIuIExvbmcgbGl2ZSB0aGUgcGxhbnRzIVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1pbWdcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDUvMDQvMTUvMjQvd29tYW4tNDE3ODMwMl9fMzQwLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xvZ2FuLWNvbnRhaW5lciB0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTVcIj4gTGV0J3MgbWFrZSB5b3VyIHBsYW50cyBmbG91cmlzaCE8L2gxPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hYm91dHVzXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICBHZXQgaW4gdG91Y2hcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBGT1JNX0VORFBPSU5UID1cbiAgXCJodHRwczovL3B1YmxpYy5oZXJvdG9mdS5jb20vdjEvNjhiYTliNDAtZTdjYi0xMWVjLWIwNjktZWZlNWNhNTkwMDk2XCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGlmIChzdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgIDxwPlRoYW5rIHlvdSEgV2UnbGwgYmUgaW4gdG91Y2ggc29vbi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29udGFjdFwiPkNvbnRhY3QgdXM8L2gyPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGFjdGlvbj17Rk9STV9FTkRQT0lOVH1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgIC8vIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwieW91ck5hbWVcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBGaXJzdCBOYW1lOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBQaG9uZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBob25lXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgTWVzc2FnZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1jb250YWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJTZW5kIE1lc3NhZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgRmF2U2luZ2xlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtmYXZQbGFudCwgc2V0RmF2UGxhbnRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZS8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEZhdlBsYW50KHJlcy5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhdiB3aWxsIGJlIGhlcmUnLCByZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT57ZmF2UGxhbnQubmFtZX08L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY2FyZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmYXZQbGFudC5pbWd9IGFsdD1cIntpdGVtLm5hbWV9XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLXRleHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IOKYgO+4jyBDb25kaXRpb25zOiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj4ge2ZhdlBsYW50LmNvbmRpdGlvbnN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+SpiBXYXRlcjogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2ZhdlBsYW50LndhdGVyfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IPCfjLEgRGlmZmljdWx0eTogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2ZhdlBsYW50LmRpZmZpY3VsdHl9IDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3JkZXItYnRuXCIgPlxuICAgICAgICAgICAgIHJlbW92ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhdlNpbmdsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicC0yIGJnLWRhcmsgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyBUZWFtIFNjcnVtcyBVcCAyMDIyPC9wPlxuICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSBib3R0b20tMCBlbmQtMCBwLTVcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy11cC1jaXJjbGUgaDFcIj48L2k+XG4gICAgICAgIDwvYT4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBuYXYtY29sb3IgcHktM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbG9nb1wiPlxuICAgICAgICAgIFBsYW50Q2FyZSDwn6q0e1wiIFwifVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZNZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZNZW51XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXMtYXV0b1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIj5cbiAgICAgICAgICAgICAgICBDYXRhbG9ndWVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9teVBsYW50c1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIj5cbiAgICAgICAgICAgICAgICBNeSBwbGFudHNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFVzXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo4MDA3L2xvZ2luXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxhbnRMaXN0IGZyb20gXCIuL1BsYW50TGlzdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtbGlnaHQgcC01IHRleHQtY2VudGVyIHRleHQtc20tc3RhcnQgYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+VGFrZSBjYXJlIG9mIHlvdXIgcGxhbnRzIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbXktNCBcIj5cbiAgICAgICAgICAgICAgUGxhbnQga2lsbGVycyAmIFBsYW50IG51cnR1cmVycywgdGhpcyBzaXRlIGlzIGZvciB5b3UhIFxuICAgICAgICAgICAgICAtLVNlbGVjdCBhbmQgYWRkIHlvdXIgZmF2b3JpdGUgcGxhbnRzISBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCB3LTUwIGQtbm9uZSBkLXNtLWJsb2NrXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8wNC8xMC8xMi8zMi9ob3VzZS1wbGFudHMtNDExNjk5Ml9fNDgwLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8UGxhbnRMaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0ZhVHJhc2hBbHR9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuXG5cbmNvbnN0IExpa2VDYXJkID0gKHByb3BzKSA9PiB7XG5cbi8vICAgICB2YXIgZ2FwaSA9IHdpbmRvdy5nYXBpXG4vLyAgICAgdmFyIENMSUVOVF9JRCA9IFwiMjQ0ODk5ODU0MTkyLXZrdXZnMzQ3NDZscWtzYW01NGM5YTBxczJhN21mY3M2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbi8vICAgICB2YXIgQVBJX0tFWSA9IFwiQUl6YVN5QU1jWG1EZ2FWTExlOWNDVDRrQXpQcW0tQVZzNVRUblpvXCJcbi8vICAgICB2YXIgRElTQ09WRVJZX0RPQ1MgPSBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9jYWxlbmRhci92My9yZXN0XCJdXG4vLyAgICAgdmFyIFNDT1BFUyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jYWxlbmRhci5ldmVudHNcIlxuICBcbi8vICAgICBjb25zdCBhZGRDYWxlbmRhckV2ZW50ID0gKCkgPT4ge1xuLy8gICAgICAgZ2FwaS5sb2FkKCdjbGllbnQ6YXV0aDInLCAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgY2xpZW50JylcbiAgXG4vLyAgICAgICAgIGdhcGkuY2xpZW50LmluaXQoe1xuLy8gICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcbi8vICAgICAgICAgICBjbGllbnRJZDogQ0xJRU5UX0lELFxuLy8gICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxuLy8gICAgICAgICAgIHNjb3BlOiBTQ09QRVMsXG4vLyAgICAgICAgIH0pXG4gIFxuLy8gICAgICAgICBnYXBpLmNsaWVudC5sb2FkKCdjYWxlbmRhcicsICd2MycsICgpID0+IGNvbnNvbGUubG9nKCdiYW0hJykpXG4gIFxuLy8gICAgICAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpXG4vLyAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBcbi8vICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4vLyAgICAgICAgICAgICAnc3VtbWFyeSc6ICdXYXRlciB0aGUgcGxhbnQhJyxcbi8vICAgICAgICAgICAgICdsb2NhdGlvbic6ICdIb21lJyxcbi8vICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXYXRlciB0aGUgcGxhbnQnLFxuLy8gICAgICAgICAgICAgJ3N0YXJ0Jzoge1xuLy8gICAgICAgICAgICAgICAnZGF0ZVRpbWUnOiAnaXNvU3RhcnREYXRlJyxcbi8vICAgICAgICAgICAgICAgJ3RpbWVab25lJzogJ3RpbWVab25lJ1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICdlbmQnOiB7XG4vLyAgICAgICAgICAgICAgICdkYXRlVGltZSc6ICdpc29FbmREYXRlJyxcbi8vICAgICAgICAgICAgICAgJ3RpbWVab25lJzogJ3RpbWVab25lJ1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICdyZWN1cnJlbmNlJzogW1xuLy8gICAgICAgICAgICAgICAnUlJVTEU6RlJFUT1EQUlMWTtDT1VOVD0yJ1xuLy8gICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgICdhdHRlbmRlZXMnOiBbXG4vLyAgICAgICAgICAgICAgIHsnZW1haWwnOiAnbHBhZ2VAZXhhbXBsZS5jb20nfSxcbi8vICAgICAgICAgICAgICAgeydlbWFpbCc6ICdzYnJpbkBleGFtcGxlLmNvbSd9XG4vLyAgICAgICAgICAgICBdLFxuLy8gICAgICAgICAgICAgJ3JlbWluZGVycyc6IHtcbi8vICAgICAgICAgICAgICAgJ3VzZURlZmF1bHQnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgJ292ZXJyaWRlcyc6IFtcbi8vICAgICAgICAgICAgICAgICB7J21ldGhvZCc6ICdlbWFpbCcsICdtaW51dGVzJzogMjQgKiA2MH0sXG4vLyAgICAgICAgICAgICAgICAgeydtZXRob2QnOiAncG9wdXAnLCAnbWludXRlcyc6IDEwfVxuLy8gICAgICAgICAgICAgICBdXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuICBcbi8vICAgICAgICAgICB2YXIgcmVxdWVzdCA9IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy5pbnNlcnQoe1xuLy8gICAgICAgICAgICAgJ2NhbGVuZGFySWQnOiAncHJpbWFyeScsXG4vLyAgICAgICAgICAgICAncmVzb3VyY2UnOiBldmVudCxcbi8vICAgICAgICAgICB9KVxuICBcbi8vICAgICAgICAgICByZXF1ZXN0LmV4ZWN1dGUoZXZlbnQgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4vLyAgICAgICAgICAgICB3aW5kb3cub3BlbihldmVudC5odG1sTGluaylcbi8vICAgICAgICAgICB9KVxuICAgICAgICAgIFxuXG4vLyAgICAgICAgICAgLy8gZ2V0IGV2ZW50c1xuLy8gICAgICAgICAgIGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy5saXN0KHtcbi8vICAgICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuLy8gICAgICAgICAgICAgJ3RpbWVNaW4nOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSxcbi8vICAgICAgICAgICAgICdzaG93RGVsZXRlZCc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgJ3NpbmdsZUV2ZW50cyc6IHRydWUsXG4vLyAgICAgICAgICAgICAnbWF4UmVzdWx0cyc6IDEwLFxuLy8gICAgICAgICAgICAgJ29yZGVyQnknOiAnc3RhcnRUaW1lJ1xuLy8gICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gcmVzcG9uc2UucmVzdWx0Lml0ZW1zXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVZFTlRTOiAnLCBldmVudHMpXG4vLyAgICAgICAgICAgfSlcbiAgICAgXG4gICAgICBcbiAgXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9KVxuLy8gfVxuICByZXR1cm4gKFxuPD5cbiAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgPlxuICAgIDxMaW5rIHRvPXtgL215RmF2LyR7cHJvcHMuaWR9YH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJwbGFudC1pbWdcIiBzcmM9e3Byb3BzLmltZ30gYWx0PXtwcm9wcy5uYW1lfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmF2LWNhcmQtbmFtZVwiPntwcm9wcy5uYW1lfTwvcD5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgey8qIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0bi1yZW1pbmRlclwiPlNldCByZW1pbmRlciDwn5eTPC9idXR0b24+ICovfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZGVsZXRlXCIgPlxuICAgICAgPEZhVHJhc2hBbHQgLz5cblx0IDwvYnV0dG9uPlxuICAgICBcbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWtlQ2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGlrZUNhcmQgZnJvbSBcIi4vTGlrZUNhcmRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dEb3duQVogfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5jb25zdCBzb3J0SWNvbiA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0Rvd25BWn0gLz47XG5cbmNvbnN0IE15UGxhbnRzID0gKCkgPT4ge1xuICBjb25zdCBbbXlQbGFudHMsIHNldE15UGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3JkZXJlZEFaLCBzZXRPcmRlcmVkQVpdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BldEZyaWVuZGx5LHNldElzUGV0RnJpZW5kbHldID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtmaWx0ZXJQbGFudHMsIHNldEZpbHRlclBsYW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvZmF2b3VyaXRlXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldE15UGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cbiAgfTtcblxuY29uc3QgaGFuZGxlU29ydCA9ICgpID0+IHtcbmNvbnN0IHNvcnRlZFBsYW50cyA9IFsuLi5teVBsYW50c107XG5pZiAob3JkZXJlZEFaID09PSAwIHx8IG9yZGVyZWRBWiA9PT0gMikge1xuICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgc29ydGVkUGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpKVxuICApO1xuICBzZXRPcmRlcmVkQVooMSk7XG59IGVsc2Uge1xuICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgc29ydGVkUGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuICApO1xuICBzZXRPcmRlcmVkQVooMik7XG59XG59O1xuXG5jb25zdCBoYW5kbGVDYXJlID0gZSA9PiB7XG5sZXQgbmV3UGxhbnRzID0gWy4uLm15UGxhbnRzXTtcblxuc3dpdGNoIChvcmRlcmVkQVopIHtcbiAgY2FzZSAxOlxuICAgIGJyZWFrO1xuICBjYXNlIDI6XG4gICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpKVxuICAgICk7XG4gICAgYnJlYWs7XG4gIGNhc2UgMzpcbiAgICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgICBuZXdQbGFudHMuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSA/IC0xIDogMSkpXG4gICAgKTtcbiAgICBicmVhaztcbn1cblxuaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnRGlmZmljdWx0eTonKSB7XG4gIGxldCBjYXJlVmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gIG5ld1BsYW50cyA9IG5ld1BsYW50cy5maWx0ZXIocGxhbnQgPT4gcGxhbnQuZGlmZmljdWx0eSA9PT0gY2FyZVZhbHVlKTtcbn1cblxuc2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cyk7XG59O1xuXG5jb25zdCBoYW5kbGVQZXRGcmllbmRseSA9ICgpID0+IHtcbmNvbnN0IG5ld1BsYW50cyA9IFsuLi5teVBsYW50c107XG5pZiAoaXNQZXRGcmllbmRseSkge1xuICBzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzLmZpbHRlcihteVBsYW50ID0+IG15UGxhbnQucGV0cykpO1xuICBzZXRJc1BldEZyaWVuZGx5KGZhbHNlKTtcbn0gZWxzZSB7XG4gIHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xuICBzZXRJc1BldEZyaWVuZGx5KHRydWUpO1xufVxufTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWRlciAvPlxuICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jb250YWluZXJcIj5cbiAgICAgIDxoMT5NeSBmYXZvcml0ZSBwbGFudHMg8J+SlTwvaDE+XG4gICAgICBcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBQbGFudHNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVycyc+XG5cdFx0XHR7LyogQ2FyZSBMZXZlbCBzZWxlY3RvciAqL31cblx0XHRcdDxzZWxlY3QgbmFtZT0nY2FyZS1sZXZlbCcgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2FyZShlKX0gY2xhc3NOYW1lPSdjYXJlLWxldmVsJz5cblx0XHRcdFx0PG9wdGlvbj5EaWZmaWN1bHR5Ojwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScxJz5FYXN5PC9vcHRpb24+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JzInPk1lZGl1bTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz5EaWZmaWN1bHQ8L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXG5cdFx0XHR7LyogUGV0IEZyaWVuZGx5IFBsYW50cyBPbmx5ICovfVxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3BldC1idG4nIG9uQ2xpY2s9e2hhbmRsZVBldEZyaWVuZGx5fT5cblx0XHRcdFx0IPCfkL4gXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0ey8qIEFscGhhYmV0aWNhbCBPcmRlciAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdvcmRlci1idG4nIG9uQ2xpY2s9e2hhbmRsZVNvcnR9PlxuXHRcdFx0XHR7c29ydEljb259XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cbiAgICAgIFxuICAgICAgey8qIHtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1saXN0XCI+XG4gICAgICB7XG4gICAgICBteVBsYW50cy5tYXAoKG15UGxhbnQpID0+IChcbiAgICAgICAgPExpa2VDYXJkXG4gICAgICAgICAga2V5PXtteVBsYW50LmlkfVxuICAgICAgICAgIGlkPXtteVBsYW50LmlkfVxuICAgICAgICAgIG5hbWU9e215UGxhbnQubmFtZX1cbiAgICAgICAgICBpbWc9e215UGxhbnQuaW1nfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIH0gKi99XG5cbntcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1saXN0XCI+XG4gICAgICAgICAge2ZpbHRlclBsYW50c1xuICAgICAgICAgICAgLmZpbHRlcigobXlQbGFudCkgPT5cbiAgICAgICAgICAgICAgbXlQbGFudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChteVBsYW50KSA9PiAoXG4gICAgICAgICAgICAgIDxMaWtlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e215UGxhbnQuaWR9XG4gICAgICAgICAgICAgIGlkPXtteVBsYW50LmlkfVxuICAgICAgICAgICAgICBuYW1lPXtteVBsYW50Lm5hbWV9XG4gICAgICAgICAgICAgIGltZz17bXlQbGFudC5pbWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15UGxhbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IFBsYW50Q2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiA+XG4gICAgPExpbmsgdG89e2AvcGxhbnQvJHtwcm9wcy5pZH1gfSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiA+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInBsYW50LWltZ1wiIHNyYz17cHJvcHMuaW1nfSBhbHQ9e3Byb3BzLm5hbWV9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLW5hbWVcIj57cHJvcHMubmFtZX08L3A+XG4gICAgXG4gICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFBsYW50Q2FyZCBmcm9tIFwiLi9QbGFudENhcmRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93RG93bkFaIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuXG5jb25zdCBzb3J0SWNvbiA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0Rvd25BWn0gLz47XG5cbmNvbnN0IFBsYW50TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW3BsYW50cywgc2V0UGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3JkZXJlZEFaLCBzZXRPcmRlcmVkQVpdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BldEZyaWVuZGx5LHNldElzUGV0RnJpZW5kbHldID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtmaWx0ZXJQbGFudHMsIHNldEZpbHRlclBsYW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvcGxhbnRzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFBsYW50cyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEZpbHRlclBsYW50cyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9ICgpID0+IHtcblx0XHRjb25zdCBzb3J0ZWRQbGFudHMgPSBbLi4ucGxhbnRzXTtcblx0XHRpZiAob3JkZXJlZEFaID09PSAwIHx8IG9yZGVyZWRBWiA9PT0gMikge1xuXHRcdFx0c2V0RmlsdGVyUGxhbnRzKFxuXHRcdFx0XHRzb3J0ZWRQbGFudHMuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSA/IDEgOiAtMSkpXG5cdFx0XHQpO1xuXHRcdFx0c2V0T3JkZXJlZEFaKDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMoXG5cdFx0XHRcdHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxKSlcblx0XHRcdCk7XG5cdFx0XHRzZXRPcmRlcmVkQVooMik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNhcmUgPSBlID0+IHtcbiAgICBsZXQgbmV3UGxhbnRzID0gWy4uLnBsYW50c107XG5cbiAgICBzd2l0Y2ggKG9yZGVyZWRBWikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgICAgIG5ld1BsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHNldEZpbHRlclBsYW50cyhcbiAgICAgICAgICBuZXdQbGFudHMuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSA/IC0xIDogMSkpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJ0RpZmZpY3VsdHk6Jykge1xuICAgICAgbGV0IGNhcmVWYWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIG5ld1BsYW50cyA9IG5ld1BsYW50cy5maWx0ZXIocGxhbnQgPT4gcGxhbnQuZGlmZmljdWx0eSA9PT0gY2FyZVZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzKTtcblx0fTtcblxuICAgIGNvbnN0IGhhbmRsZVBldEZyaWVuZGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1BsYW50cyA9IFsuLi5wbGFudHNdO1xuXHRcdGlmIChpc1BldEZyaWVuZGx5KSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzLmZpbHRlcihwbGFudCA9PiBwbGFudC5wZXRzKSk7XG5cdFx0XHRzZXRJc1BldEZyaWVuZGx5KGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cyk7XG5cdFx0XHRzZXRJc1BldEZyaWVuZGx5KHRydWUpO1xuXHRcdH1cblx0fTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgUGxhbnRzXCJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnMnPlxuXHRcdFx0ey8qIENhcmUgTGV2ZWwgc2VsZWN0b3IgKi99XG5cdFx0XHQ8c2VsZWN0IG5hbWU9J2NhcmUtbGV2ZWwnIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNhcmUoZSl9IGNsYXNzTmFtZT0nY2FyZS1sZXZlbCc+XG5cdFx0XHRcdDxvcHRpb24+RGlmZmljdWx0eTo8L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMSc+RWFzeTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJz5NZWRpdW08L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMyc+RGlmZmljdWx0PC9vcHRpb24+XG5cdFx0XHQ8L3NlbGVjdD5cblxuXHRcdFx0ey8qIFBldCBGcmllbmRseSBQbGFudHMgT25seSAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdwZXQtYnRuJyBvbkNsaWNrPXtoYW5kbGVQZXRGcmllbmRseX0+XG5cdFx0XHRcdCDwn5C+IFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdHsvKiBBbHBoYWJldGljYWwgT3JkZXIgKi99XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nb3JkZXItYnRuJyBvbkNsaWNrPXtoYW5kbGVTb3J0fT5cblx0XHRcdFx0e3NvcnRJY29ufVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cbiAgICAgIHtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1saXN0XCI+XG4gICAgICAgICAge2ZpbHRlclBsYW50c1xuICAgICAgICAgICAgLmZpbHRlcigocGxhbnQpID0+XG4gICAgICAgICAgICAgIHBsYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKHBsYW50KSA9PiAoXG4gICAgICAgICAgICAgIDxQbGFudENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e3BsYW50LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtwbGFudC5pZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtwbGFudC5uYW1lfVxuICAgICAgICAgICAgICAgIGltZz17cGxhbnQuaW1nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnRMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgUGxhbnRTaW5nbGUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL3BsYW50cy8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEl0ZW0ocmVzLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBhZGRMaWtlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvciAobGV0IGtleSBpbiBpdGVtKVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG5cbiAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZWAsIGJvZHlGb3JtRGF0YSlcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNwLWltZ1wiIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC10ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDimIDvuI8gQ29uZGl0aW9uczogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+IHtpdGVtLmNvbmRpdGlvbnN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+SpiBXYXRlcjogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2l0ZW0ud2F0ZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+MsSBEaWZmaWN1bHR5OiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj57aXRlbS5kaWZmaWN1bHR5fSA8L3A+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJsaWtlLWJ0blwiIG9uQ2xpY2s9e2FkZExpa2V9PlxuICAgICAgICAgICAgICBTYXZlIOKdpO+4j1xuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsaWtlLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZExpa2V9ICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyAnaW5kaWFucmVkJyA6ICcnLFxuICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZSA/ICd3aGl0ZScgOiAnJyxcbiAgICAgICAgfX0+XG48c3ZnIGNsYXNzTmFtZT1cImhlYXJ0LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PHBhdGggZD1cIk05MS42IDEzQTI4LjcgMjguNyAwIDAgMCA1MSAxM2wtMSAxLTEtMUEyOC43IDI4LjcgMCAwIDAgOC40IDUzLjhsMSAxTDUwIDk1LjNsNDAuNS00MC42IDEtMWEyOC42IDI4LjYgMCAwIDAgMC00MC42elwiLz48L3N2Zz5cbiAgTGlrZVxuPC9idXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnRTaW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiQ29udGFjdCIsIkFib3V0VXMiLCJNeVBsYW50cyIsIlBsYW50U2luZ2xlIiwiTGF5b3V0IiwiRmF2U2luZ2xlIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNoaWxkcmVuIiwiSGVhZGVyIiwiRm9vdGVyIiwiTGluayIsInVzZVN0YXRlIiwiRk9STV9FTkRQT0lOVCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJheGlvcyIsImZhdlBsYW50Iiwic2V0RmF2UGxhbnQiLCJpZCIsInNldElkIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJuYW1lIiwiaW1nIiwiY29uZGl0aW9ucyIsIndhdGVyIiwiZGlmZmljdWx0eSIsIlBsYW50TGlzdCIsIkZhVHJhc2hBbHQiLCJMaWtlQ2FyZCIsInByb3BzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd0Rvd25BWiIsInNvcnRJY29uIiwibXlQbGFudHMiLCJzZXRNeVBsYW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsIm9yZGVyZWRBWiIsInNldE9yZGVyZWRBWiIsImlzUGV0RnJpZW5kbHkiLCJzZXRJc1BldEZyaWVuZGx5IiwiZmlsdGVyUGxhbnRzIiwic2V0RmlsdGVyUGxhbnRzIiwidXBkYXRlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU29ydCIsInNvcnRlZFBsYW50cyIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNhcmUiLCJuZXdQbGFudHMiLCJjYXJlVmFsdWUiLCJwYXJzZUludCIsImZpbHRlciIsInBsYW50IiwiaGFuZGxlUGV0RnJpZW5kbHkiLCJteVBsYW50IiwicGV0cyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJQbGFudENhcmQiLCJwbGFudHMiLCJzZXRQbGFudHMiLCJpdGVtIiwic2V0SXRlbSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJhZGRMaWtlIiwicHJldmVudERlZmF1bHQiLCJib2R5Rm9ybURhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsInBvc3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=