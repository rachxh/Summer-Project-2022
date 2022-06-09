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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);













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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)().id),
      _useState4 = _slicedToArray(_useState3, 2),
      id = _useState4[0],
      setId = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_13___default().get("http://localhost:8007/api/favourite/".concat(id)).then(function (res) {
      setFavPlant(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);

  var handleDelete = function handleDelete(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
      icon: "danger",
      title: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please delete it"
    }).then(function (result) {
      if (result.isConfirmed) {
        axios__WEBPACK_IMPORTED_MODULE_13___default()["delete"]("http://localhost:8007/api/favourite/".concat(id)).then(function (response) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
            icon: "success",
            title: "Plant deleted successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          setFavPlant();
        })["catch"](function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
            icon: "error",
            title: "An error occurred!",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, favPlant.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
    src: favPlant.img,
    alt: favPlant.name
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
  }, favPlant.difficulty, " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Copyright \xA9 Team Scrums Up 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Images courtesy", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.ikea.com/",
    className: "link"
  }, "IKEA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Used for educational purpose")));
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
    className: "btn-delete",
    onClick: function onClick() {
      return props.onClick(props.id);
    }
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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_24__);



















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
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__.faArrowDownAZ
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
    return getMyPlants();
  }, []);

  var getMyPlants = function getMyPlants() {
    axios__WEBPACK_IMPORTED_MODULE_19___default().get("http://localhost:8007/api/favourite").then(function (res) {
      setMyPlants(res.data);
      setFilterPlants(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  };

  var updateSearch = function updateSearch(e) {
    setSearch(e.target.value);
  };

  var handleDelete = function handleDelete(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_24___default().fire({
      icon: "danger",
      title: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please delete it"
    }).then(function (result) {
      if (result.isConfirmed) {
        axios__WEBPACK_IMPORTED_MODULE_19___default()["delete"]("http://localhost:8007/api/favourite/".concat(id)).then(function (response) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_24___default().fire({
            icon: "success",
            title: "Plant deleted successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          getMyPlants();
        })["catch"](function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_24___default().fire({
            icon: "error",
            title: "An error occurred!",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
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
      img: myPlant.img,
      onClick: function onClick(id) {
        return handleDelete(id);
      }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_fortawesome_re-36f733"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRUEsaUVBQWVwRyxXQUFmOzs7Ozs7Ozs7Ozs7QUN0RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQWJvdXRVcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9GYXZTaW5nbGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvTGlrZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9NeVBsYW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50U2luZ2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vcGFnZXMvQ29udGFjdFwiO1xuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vcGFnZXMvQWJvdXRVc1wiO1xuaW1wb3J0IE15UGxhbnRzIGZyb20gXCIuL3BhZ2VzL015UGxhbnRzXCI7XG5pbXBvcnQgUGxhbnRTaW5nbGUgZnJvbSBcIi4vcGFnZXMvUGxhbnRTaW5nbGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBGYXZTaW5nbGUgZnJvbSBcIi4vcGFnZXMvRmF2U2luZ2xlXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2F0YWxvZ3VlXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJwbGFudC86aWRcIiBlbGVtZW50PXs8UGxhbnRTaW5nbGUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJteUZhdi86aWRcIiBlbGVtZW50PXs8RmF2U2luZ2xlIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL215UGxhbnRzXCIgZWxlbWVudD17PE15UGxhbnRzIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYWJvdXRVc1wiIGVsZW1lbnQ9ezxBYm91dFVzIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgXCIuL01haW5cIjsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPGRpdiA+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuLy8gaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLWFib3V0IG10LTUgbWItNVwiPkhlcmUncyBvdXIgc3Rvcnk8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYm91dC1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXQtaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzA1LzIzLzAwLzIxL3dvbWFuLTYyNzQ4NzlfMTI4MC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTWFyaWlhIGhhcyBhbHdheXMgZW5qb3llZCBoYXZpbmcgcGxhbnRzIGluZG9vcnMuIFRoZXkgaW5zdGFudGx5XG4gICAgICAgICAgICAgICAgYnJpZ2h0ZW4gdXAgdGhlIHJvb20gYW5kIGNyZWF0ZSBhIGZlZWxpbmcgb2YgaG9tZS4gVGFraW5nIGNhcmVcbiAgICAgICAgICAgICAgICBvZiBwbGFudHMgaXMgaW4gaXRzZWxmIGEgdmVyeSByZXdhcmRpbmcgYWN0aXZpdHkgYW5kIHByb3ZpZGVzIGFcbiAgICAgICAgICAgICAgICBzZW5zZSBvZiBlbW90aW9uYWwgd2VsbC1iZWluZy4gQWx0aG91Z2ggcGxhbnQgY2FyZSBjYW4gcXVpY2tseVxuICAgICAgICAgICAgICAgIGJlY29tZSBxdWl0ZSB0aGUgb3Bwb3NpdGUsIHdoZW4gZmluZGluZyB0aGUgcmlnaHQgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICB0YWtlcyB3YXkgdG9vIG11Y2ggdGltZSBhbmQgcG9zc2libGUgcmlza3MgdG8gYmVsb3ZlZCBwZXRzIGFyZVxuICAgICAgICAgICAgICAgIHN0cmVzc2luZyB5b3Ugb3V0LiBBbmQgc28gdGhlIGlkZWEgb2YgaGF2aW5nIGEgYmVnaW5uZXItZnJpZW5kbHlcbiAgICAgICAgICAgICAgICByZXNvdXJjZSBjYW1lIHVwLiBFYXN5IHBsYW50IGNhcmUgZ3VpZGUgd2l0aCBoYW5keSBmaWx0ZXJzIGhhc1xuICAgICAgICAgICAgICAgIGFsbCBuZWNlc3NhcnkgaW5mb3JtYXRpb24gdG8gYWxsb3cgeW91ciBncmVlbiBmcmllbmRzIHRocml2ZSBhbmRcbiAgICAgICAgICAgICAgICB5b3VyIGZsdWZmeSBvbmVzIHN0YXkgc2FmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYm91dC1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUmFjaGVsIGlzIHdlYiBkZXZlbG9wbWVudCBzdHVkZW50IGJhc2VkIGluIEhlbHNpbmtpIHdobyBsb3Zlc1xuICAgICAgICAgICAgICAgIG5hdHVyZSBhbmQgZ3JlZW5zLiBTaGUgbGlrZXMgdG8gaGF2ZSBwbGFudHMgYW5kIGZsb3dlcnMgYXQgaG9tZSxcbiAgICAgICAgICAgICAgICBoZXIgZmF2b3JpdGUgcGxhbnQgaXMgQWxvZSBWZXJhLiBNYW55IG9mIHRoZSBwbGFudHMgSSBoYWQgYXRcbiAgICAgICAgICAgICAgICBob21lIGRpZG4ndCBzdXJ2aXZlIGxvbmcuIFNvIEkgaG9wZSB3aXRoIHRoZSBpbmZvcm1hdGlvbiB3ZVxuICAgICAgICAgICAgICAgIGdhdGhlciBvbiB0aGlzIHdlYnNpdGUsIGl0IGNhbiBoZWxwIGEgcGxhbnQga2lsbGVyIHRvIGJlY29tZSBhXG4gICAgICAgICAgICAgICAgbG9uZyB0ZXJtIHBsYW50IGtlZXBlci4gTG9uZyBsaXZlIHRoZSBwbGFudHMhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8wNS8wNC8xNS8yNC93b21hbi00MTc4MzAyX18zNDAuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbG9nYW4tY29udGFpbmVyIHRleHQtY2VudGVyIHAtNVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNVwiPiBMZXQncyBtYWtlIHlvdXIgcGxhbnRzIGZsb3VyaXNoITwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWFib3V0dXNcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIj5cbiAgICAgICAgICAgIEdldCBpbiB0b3VjaFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IEZPUk1fRU5EUE9JTlQgPVxuICBcImh0dHBzOi8vcHVibGljLmhlcm90b2Z1LmNvbS92MS82OGJhOWI0MC1lN2NiLTExZWMtYjA2OS1lZmU1Y2E1OTAwOTZcIjtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgaWYgKHN1Ym1pdHRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPHA+VGhhbmsgeW91ISBXZSdsbCBiZSBpbiB0b3VjaCBzb29uLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250YWN0XCI+Q29udGFjdCB1czwvaDI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgYWN0aW9uPXtGT1JNX0VORFBPSU5UfVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgLy8gdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ5b3VyTmFtZVwiIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEZpcnN0IE5hbWU6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIFBob25lOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBNZXNzYWdlOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWNvbnRhY3RcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIlNlbmQgTWVzc2FnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5cbmNvbnN0IEZhdlNpbmdsZSA9ICgpID0+IHtcblxuICBjb25zdCBbZmF2UGxhbnQsIHNldEZhdlBsYW50XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9mYXZvdXJpdGUvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRGYXZQbGFudChyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIGljb246IFwiZGFuZ2VyXCIsXG4gICAgICB0aXRsZTogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBwbGVhc2UgZGVsZXRlIGl0XCIsXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9mYXZvdXJpdGUvJHtpZH1gKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlBsYW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRGYXZQbGFudCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJBbiBlcnJvciBvY2N1cnJlZCFcIixcbiAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPntmYXZQbGFudC5uYW1lfTwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jYXJkXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2ZhdlBsYW50LmltZ30gYWx0PXtmYXZQbGFudC5uYW1lfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC10ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDimIDvuI8gQ29uZGl0aW9uczogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+IHtmYXZQbGFudC5jb25kaXRpb25zfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IPCfkqYgV2F0ZXI6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPntmYXZQbGFudC53YXRlcn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDwn4yxIERpZmZpY3VsdHk6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPntmYXZQbGFudC5kaWZmaWN1bHR5fSA8L3A+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJvcmRlci1idG5cIiAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGZhdlBsYW50LmlkKX0gPlxuICAgICAgICAgICAgIHJlbW92ZVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYXZTaW5nbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtMiBiZy1kYXJrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgVGVhbSBTY3J1bXMgVXAgMjAyMjwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW1hZ2VzIGNvdXJ0ZXN5XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmlrZWEuY29tL1wiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgICAgIElLRUFcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+VXNlZCBmb3IgZWR1Y2F0aW9uYWwgcHVycG9zZTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIG5hdi1jb2xvciBweS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBsb2dvXCI+XG4gICAgICAgICAgUGxhbnRDYXJlIPCfqrR7XCIgXCJ9XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdk1lbnVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdk1lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIENhdGFsb2d1ZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215UGxhbnRzXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIE15IHBsYW50c1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0VXNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwMDcvbG9naW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGFudExpc3QgZnJvbSBcIi4vUGxhbnRMaXN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1saWdodCBwLTUgdGV4dC1jZW50ZXIgdGV4dC1zbS1zdGFydCBiYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGVcIj5UYWtlIGNhcmUgb2YgeW91ciBwbGFudHMgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBteS00IFwiPlxuICAgICAgICAgICAgICBQbGFudCBraWxsZXJzICYgUGxhbnQgbnVydHVyZXJzLCB0aGlzIHNpdGUgaXMgZm9yIHlvdSEgXG4gICAgICAgICAgICAgIC0tU2VsZWN0IGFuZCBhZGQgeW91ciBmYXZvcml0ZSBwbGFudHMhIFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHctNTAgZC1ub25lIGQtc20tYmxvY2tcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzA0LzEwLzEyLzMyL2hvdXNlLXBsYW50cy00MTE2OTkyX180ODAucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxQbGFudExpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBGYVRyYXNoQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cblxuY29uc3QgTGlrZUNhcmQgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8TGluayB0bz17YC9teUZhdi8ke3Byb3BzLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGxhbnQtaW1nXCIgc3JjPXtwcm9wcy5pbWd9IGFsdD17cHJvcHMubmFtZX0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYXYtY2FyZC1uYW1lXCI+e3Byb3BzLm5hbWV9PC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMuaWQpfT5cbiAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWtlQ2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGlrZUNhcmQgZnJvbSBcIi4vTGlrZUNhcmRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dEb3duQVogfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5cbmNvbnN0IHNvcnRJY29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93RG93bkFafSAvPjtcblxuY29uc3QgTXlQbGFudHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtteVBsYW50cywgc2V0TXlQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcmRlcmVkQVosIHNldE9yZGVyZWRBWl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzUGV0RnJpZW5kbHksc2V0SXNQZXRGcmllbmRseV0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW2ZpbHRlclBsYW50cywgc2V0RmlsdGVyUGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gZ2V0TXlQbGFudHMoKSwgW10pO1xuXG4gIGNvbnN0IGdldE15UGxhbnRzID0gKCkgPT4geyBcbiAgYXhpb3NcbiAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9mYXZvdXJpdGVcIilcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRNeVBsYW50cyhyZXMuZGF0YSk7XG4gICAgICBzZXRGaWx0ZXJQbGFudHMocmVzLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gIH07XG4gXG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIGljb246IFwiZGFuZ2VyXCIsXG4gICAgICB0aXRsZTogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBwbGVhc2UgZGVsZXRlIGl0XCIsXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9mYXZvdXJpdGUvJHtpZH1gKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlBsYW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRNeVBsYW50cygpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkIVwiLFxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbmNvbnN0IGhhbmRsZVNvcnQgPSAoKSA9PiB7XG5jb25zdCBzb3J0ZWRQbGFudHMgPSBbLi4ubXlQbGFudHNdO1xuaWYgKG9yZGVyZWRBWiA9PT0gMCB8fCBvcmRlcmVkQVogPT09IDIpIHtcbiAgc2V0RmlsdGVyUGxhbnRzKFxuICAgIHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcbiAgKTtcbiAgc2V0T3JkZXJlZEFaKDEpO1xufSBlbHNlIHtcbiAgc2V0RmlsdGVyUGxhbnRzKFxuICAgIHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxKSlcbiAgKTtcbiAgc2V0T3JkZXJlZEFaKDIpO1xufVxufTtcblxuY29uc3QgaGFuZGxlQ2FyZSA9IGUgPT4ge1xubGV0IG5ld1BsYW50cyA9IFsuLi5teVBsYW50c107XG5cbnN3aXRjaCAob3JkZXJlZEFaKSB7XG4gIGNhc2UgMTpcbiAgICBicmVhaztcbiAgY2FzZSAyOlxuICAgIHNldEZpbHRlclBsYW50cyhcbiAgICAgIG5ld1BsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcbiAgICApO1xuICAgIGJyZWFrO1xuICBjYXNlIDM6XG4gICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuICAgICk7XG4gICAgYnJlYWs7XG59XG5cbmlmIChlLnRhcmdldC52YWx1ZSAhPT0gJ0RpZmZpY3VsdHk6Jykge1xuICBsZXQgY2FyZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICBuZXdQbGFudHMgPSBuZXdQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50LmRpZmZpY3VsdHkgPT09IGNhcmVWYWx1ZSk7XG59XG5cbnNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xufTtcblxuY29uc3QgaGFuZGxlUGV0RnJpZW5kbHkgPSAoKSA9PiB7XG5jb25zdCBuZXdQbGFudHMgPSBbLi4ubXlQbGFudHNdO1xuaWYgKGlzUGV0RnJpZW5kbHkpIHtcbiAgc2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cy5maWx0ZXIobXlQbGFudCA9PiBteVBsYW50LnBldHMpKTtcbiAgc2V0SXNQZXRGcmllbmRseShmYWxzZSk7XG59IGVsc2Uge1xuICBzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzKTtcbiAgc2V0SXNQZXRGcmllbmRseSh0cnVlKTtcbn1cbn07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkZXIgLz5cbiAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY29udGFpbmVyXCI+XG4gICAgICA8aDE+TXkgZmF2b3JpdGUgcGxhbnRzIPCfkpU8L2gxPlxuICAgICAgXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgUGxhbnRzXCJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnMnPlxuXHRcdFx0ey8qIENhcmUgTGV2ZWwgc2VsZWN0b3IgKi99XG5cdFx0XHQ8c2VsZWN0IG5hbWU9J2NhcmUtbGV2ZWwnIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNhcmUoZSl9IGNsYXNzTmFtZT0nY2FyZS1sZXZlbCc+XG5cdFx0XHRcdDxvcHRpb24+RGlmZmljdWx0eTo8L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMSc+RWFzeTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJz5NZWRpdW08L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMyc+RGlmZmljdWx0PC9vcHRpb24+XG5cdFx0XHQ8L3NlbGVjdD5cblxuXHRcdFx0ey8qIFBldCBGcmllbmRseSBQbGFudHMgT25seSAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdwZXQtYnRuJyBvbkNsaWNrPXtoYW5kbGVQZXRGcmllbmRseX0+XG5cdFx0XHRcdCDwn5C+IFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdHsvKiBBbHBoYWJldGljYWwgT3JkZXIgKi99XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nb3JkZXItYnRuJyBvbkNsaWNrPXtoYW5kbGVTb3J0fT5cblx0XHRcdFx0e3NvcnRJY29ufVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblxue1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW50LWxpc3RcIj5cbiAgICAgICAgICB7ZmlsdGVyUGxhbnRzXG4gICAgICAgICAgICAuZmlsdGVyKChteVBsYW50KSA9PlxuICAgICAgICAgICAgICBteVBsYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKG15UGxhbnQpID0+IChcbiAgICAgICAgICAgICAgPExpa2VDYXJkXG4gICAgICAgICAgICAgIGtleT17bXlQbGFudC5pZH1cbiAgICAgICAgICAgICAgaWQ9e215UGxhbnQuaWR9XG4gICAgICAgICAgICAgIG5hbWU9e215UGxhbnQubmFtZX1cbiAgICAgICAgICAgICAgaW1nPXtteVBsYW50LmltZ31cbiAgICAgICAgICAgICAgb25DbGljaz17aWQgPT4gaGFuZGxlRGVsZXRlKGlkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlQbGFudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgUGxhbnRDYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICA8TGluayB0bz17YC9wbGFudC8ke3Byb3BzLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGxhbnQtaW1nXCIgc3JjPXtwcm9wcy5pbWd9IGFsdD17cHJvcHMubmFtZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtbmFtZVwiPntwcm9wcy5uYW1lfTwvcD5cbiAgICBcbiAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50Q2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUGxhbnRDYXJkIGZyb20gXCIuL1BsYW50Q2FyZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dEb3duQVogfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmNvbnN0IHNvcnRJY29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93RG93bkFafSAvPjtcblxuY29uc3QgUGxhbnRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbcGxhbnRzLCBzZXRQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcmRlcmVkQVosIHNldE9yZGVyZWRBWl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzUGV0RnJpZW5kbHksc2V0SXNQZXRGcmllbmRseV0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW2ZpbHRlclBsYW50cywgc2V0RmlsdGVyUGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9wbGFudHNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0UGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTb3J0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNvcnRlZFBsYW50cyA9IFsuLi5wbGFudHNdO1xuXHRcdGlmIChvcmRlcmVkQVogPT09IDAgfHwgb3JkZXJlZEFaID09PSAyKSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMoXG5cdFx0XHRcdHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcblx0XHRcdCk7XG5cdFx0XHRzZXRPcmRlcmVkQVooMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhcblx0XHRcdFx0c29ydGVkUGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuXHRcdFx0KTtcblx0XHRcdHNldE9yZGVyZWRBWigyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2FyZSA9IGUgPT4ge1xuICAgIGxldCBuZXdQbGFudHMgPSBbLi4ucGxhbnRzXTtcblxuICAgIHN3aXRjaCAob3JkZXJlZEFaKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgICAgIG5ld1BsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxKSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnRGlmZmljdWx0eTonKSB7XG4gICAgICBsZXQgY2FyZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbmV3UGxhbnRzID0gbmV3UGxhbnRzLmZpbHRlcihwbGFudCA9PiBwbGFudC5kaWZmaWN1bHR5ID09PSBjYXJlVmFsdWUpO1xuICAgIH1cblxuICAgIHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xuXHR9O1xuXG4gICAgY29uc3QgaGFuZGxlUGV0RnJpZW5kbHkgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3UGxhbnRzID0gWy4uLnBsYW50c107XG5cdFx0aWYgKGlzUGV0RnJpZW5kbHkpIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50LnBldHMpKTtcblx0XHRcdHNldElzUGV0RnJpZW5kbHkoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzKTtcblx0XHRcdHNldElzUGV0RnJpZW5kbHkodHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBQbGFudHNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVycyc+XG5cdFx0XHR7LyogQ2FyZSBMZXZlbCBzZWxlY3RvciAqL31cblx0XHRcdDxzZWxlY3QgbmFtZT0nY2FyZS1sZXZlbCcgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2FyZShlKX0gY2xhc3NOYW1lPSdjYXJlLWxldmVsJz5cblx0XHRcdFx0PG9wdGlvbj5EaWZmaWN1bHR5Ojwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScxJz5FYXN5PC9vcHRpb24+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JzInPk1lZGl1bTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz5EaWZmaWN1bHQ8L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXG5cdFx0XHR7LyogUGV0IEZyaWVuZGx5IFBsYW50cyBPbmx5ICovfVxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3BldC1idG4nIG9uQ2xpY2s9e2hhbmRsZVBldEZyaWVuZGx5fT5cblx0XHRcdFx0IPCfkL4gXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0ey8qIEFscGhhYmV0aWNhbCBPcmRlciAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdvcmRlci1idG4nIG9uQ2xpY2s9e2hhbmRsZVNvcnR9PlxuXHRcdFx0XHR7c29ydEljb259XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuICAgICAge1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW50LWxpc3RcIj5cbiAgICAgICAgICB7ZmlsdGVyUGxhbnRzXG4gICAgICAgICAgICAuZmlsdGVyKChwbGFudCkgPT5cbiAgICAgICAgICAgICAgcGxhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocGxhbnQpID0+IChcbiAgICAgICAgICAgICAgPFBsYW50Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17cGxhbnQuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3BsYW50LmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgaW1nPXtwbGFudC5pbWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBQbGFudFNpbmdsZSA9ICgpID0+IHtcblxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpO1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvcGxhbnRzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0SXRlbShyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBhZGRMaWtlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvciAobGV0IGtleSBpbiBpdGVtKVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG5cbiAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZWAsIGJvZHlGb3JtRGF0YSlcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNwLWltZ1wiIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC10ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDimIDvuI8gQ29uZGl0aW9uczogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+IHtpdGVtLmNvbmRpdGlvbnN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+SpiBXYXRlcjogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2l0ZW0ud2F0ZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+MsSBEaWZmaWN1bHR5OiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj57aXRlbS5kaWZmaWN1bHR5fSA8L3A+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJsaWtlLWJ0blwiIG9uQ2xpY2s9e2FkZExpa2V9PlxuICAgICAgICAgICAgICBTYXZlIOKdpO+4j1xuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsaWtlLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZExpa2V9ICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyAnaW5kaWFucmVkJyA6ICcnLFxuICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZSA/ICd3aGl0ZScgOiAnJyxcbiAgICAgICAgfX0+XG48c3ZnIGNsYXNzTmFtZT1cImhlYXJ0LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PHBhdGggZD1cIk05MS42IDEzQTI4LjcgMjguNyAwIDAgMCA1MSAxM2wtMSAxLTEtMUEyOC43IDI4LjcgMCAwIDAgOC40IDUzLjhsMSAxTDUwIDk1LjNsNDAuNS00MC42IDEtMWEyOC42IDI4LjYgMCAwIDAgMC00MC42elwiLz48L3N2Zz5cbiAgTGlrZVxuPC9idXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnRTaW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiQ29udGFjdCIsIkFib3V0VXMiLCJNeVBsYW50cyIsIlBsYW50U2luZ2xlIiwiTGF5b3V0IiwiRmF2U2luZ2xlIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNoaWxkcmVuIiwiSGVhZGVyIiwiRm9vdGVyIiwiTGluayIsInVzZVN0YXRlIiwiRk9STV9FTkRQT0lOVCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJheGlvcyIsIlN3YWwiLCJmYXZQbGFudCIsInNldEZhdlBsYW50IiwiaWQiLCJzZXRJZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRGVsZXRlIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJyZXNwb25zZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJuYW1lIiwiaW1nIiwiY29uZGl0aW9ucyIsIndhdGVyIiwiZGlmZmljdWx0eSIsIlBsYW50TGlzdCIsIkZhVHJhc2hBbHQiLCJMaWtlQ2FyZCIsInByb3BzIiwib25DbGljayIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dEb3duQVoiLCJzb3J0SWNvbiIsIm15UGxhbnRzIiwic2V0TXlQbGFudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJvcmRlcmVkQVoiLCJzZXRPcmRlcmVkQVoiLCJpc1BldEZyaWVuZGx5Iiwic2V0SXNQZXRGcmllbmRseSIsImZpbHRlclBsYW50cyIsInNldEZpbHRlclBsYW50cyIsImdldE15UGxhbnRzIiwidXBkYXRlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU29ydCIsInNvcnRlZFBsYW50cyIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNhcmUiLCJuZXdQbGFudHMiLCJjYXJlVmFsdWUiLCJwYXJzZUludCIsImZpbHRlciIsInBsYW50IiwiaGFuZGxlUGV0RnJpZW5kbHkiLCJteVBsYW50IiwicGV0cyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJQbGFudENhcmQiLCJwbGFudHMiLCJzZXRQbGFudHMiLCJpdGVtIiwic2V0SXRlbSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJhZGRMaWtlIiwicHJldmVudERlZmF1bHQiLCJib2R5Rm9ybURhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsInBvc3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=