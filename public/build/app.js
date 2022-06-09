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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsUUFBZjtJQUF3QixHQUFHLEVBQUU4QyxJQUFJLENBQUM3QyxHQUFsQztJQUF1QyxHQUFHLEVBQUM7RUFBM0MsRUFERixlQUVFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBRyxTQUFTLEVBQUM7RUFBYixnQ0FERixlQUVFO0lBQUcsU0FBUyxFQUFDO0VBQWIsUUFBOEI2QyxJQUFJLENBQUM1QyxVQUFuQyxDQUZGLGVBR0U7SUFBRyxTQUFTLEVBQUM7RUFBYiwyQkFIRixlQUlFO0lBQUcsU0FBUyxFQUFDO0VBQWIsR0FBNkI0QyxJQUFJLENBQUMzQyxLQUFsQyxDQUpGLGVBS0U7SUFBRyxTQUFTLEVBQUM7RUFBYixnQ0FMRixlQU1FO0lBQUcsU0FBUyxFQUFDO0VBQWIsR0FBNkIyQyxJQUFJLENBQUMxQyxVQUFsQyxNQU5GLGVBVUU7SUFBUSxJQUFJLEVBQUMsUUFBYjtJQUFzQixFQUFFLEVBQUMsYUFBekI7SUFBdUMsT0FBTyxFQUFFOEMsT0FBaEQ7SUFBMEQsS0FBSyxFQUFFO01BQ25FTyxlQUFlLEVBQUVULFFBQVEsR0FBRyxXQUFILEdBQWlCLEVBRHlCO01BRW5FVSxLQUFLLEVBQUVWLFFBQVEsR0FBRyxPQUFILEdBQWE7SUFGdUM7RUFBakUsZ0JBSVo7SUFBSyxTQUFTLEVBQUMsWUFBZjtJQUE0QixLQUFLLEVBQUMsNEJBQWxDO0lBQStELE9BQU8sRUFBQztFQUF2RSxnQkFBcUY7SUFBTSxDQUFDLEVBQUM7RUFBUixFQUFyRixDQUpZLFNBVkYsQ0FGRixDQUhGLENBRkYsZUE2QkUsNERBQUMsZ0RBQUQsT0E3QkYsQ0FERjtBQWlDRCxDQS9ERDs7QUFpRUEsaUVBQWVyRixXQUFmOzs7Ozs7Ozs7Ozs7QUN2RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQWJvdXRVcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9GYXZTaW5nbGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvTGlrZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9NeVBsYW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50U2luZ2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL3BhZ2VzL0NvbnRhY3RcIjtcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL3BhZ2VzL0Fib3V0VXNcIjtcbmltcG9ydCBNeVBsYW50cyBmcm9tIFwiLi9wYWdlcy9NeVBsYW50c1wiO1xuaW1wb3J0IFBsYW50U2luZ2xlIGZyb20gXCIuL3BhZ2VzL1BsYW50U2luZ2xlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgRmF2U2luZ2xlIGZyb20gXCIuL3BhZ2VzL0ZhdlNpbmdsZVwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhdGFsb2d1ZVwiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGxhbnQvOmlkXCIgZWxlbWVudD17PFBsYW50U2luZ2xlIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibXlGYXYvOmlkXCIgZWxlbWVudD17PEZhdlNpbmdsZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9teVBsYW50c1wiIGVsZW1lbnQ9ezxNeVBsYW50cyAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cImFib3V0VXNcIiBlbGVtZW50PXs8QWJvdXRVcyAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYWluIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IFwiLi9NYWluXCI7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxkaXYgPntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbi8vIGltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1hYm91dCBtdC01IG1iLTVcIj5IZXJlJ3Mgb3VyIHN0b3J5PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJvdXQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wNS8yMy8wMC8yMS93b21hbi02Mjc0ODc5XzEyODAucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE1hcmlpYSBoYXMgYWx3YXlzIGVuam95ZWQgaGF2aW5nIHBsYW50cyBpbmRvb3JzLiBUaGV5IGluc3RhbnRseVxuICAgICAgICAgICAgICAgIGJyaWdodGVuIHVwIHRoZSByb29tIGFuZCBjcmVhdGUgYSBmZWVsaW5nIG9mIGhvbWUuIFRha2luZyBjYXJlXG4gICAgICAgICAgICAgICAgb2YgcGxhbnRzIGlzIGluIGl0c2VsZiBhIHZlcnkgcmV3YXJkaW5nIGFjdGl2aXR5IGFuZCBwcm92aWRlcyBhXG4gICAgICAgICAgICAgICAgc2Vuc2Ugb2YgZW1vdGlvbmFsIHdlbGwtYmVpbmcuIEFsdGhvdWdoIHBsYW50IGNhcmUgY2FuIHF1aWNrbHlcbiAgICAgICAgICAgICAgICBiZWNvbWUgcXVpdGUgdGhlIG9wcG9zaXRlLCB3aGVuIGZpbmRpbmcgdGhlIHJpZ2h0IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgdGFrZXMgd2F5IHRvbyBtdWNoIHRpbWUgYW5kIHBvc3NpYmxlIHJpc2tzIHRvIGJlbG92ZWQgcGV0cyBhcmVcbiAgICAgICAgICAgICAgICBzdHJlc3NpbmcgeW91IG91dC4gQW5kIHNvIHRoZSBpZGVhIG9mIGhhdmluZyBhIGJlZ2lubmVyLWZyaWVuZGx5XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgY2FtZSB1cC4gRWFzeSBwbGFudCBjYXJlIGd1aWRlIHdpdGggaGFuZHkgZmlsdGVycyBoYXNcbiAgICAgICAgICAgICAgICBhbGwgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHRvIGFsbG93IHlvdXIgZ3JlZW4gZnJpZW5kcyB0aHJpdmUgYW5kXG4gICAgICAgICAgICAgICAgeW91ciBmbHVmZnkgb25lcyBzdGF5IHNhZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJvdXQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFJhY2hlbCBpcyB3ZWIgZGV2ZWxvcG1lbnQgc3R1ZGVudCBiYXNlZCBpbiBIZWxzaW5raSB3aG8gbG92ZXNcbiAgICAgICAgICAgICAgICBuYXR1cmUgYW5kIGdyZWVucy4gU2hlIGxpa2VzIHRvIGhhdmUgcGxhbnRzIGFuZCBmbG93ZXJzIGF0IGhvbWUsXG4gICAgICAgICAgICAgICAgaGVyIGZhdm9yaXRlIHBsYW50IGlzIEFsb2UgVmVyYS4gTWFueSBvZiB0aGUgcGxhbnRzIEkgaGFkIGF0XG4gICAgICAgICAgICAgICAgaG9tZSBkaWRuJ3Qgc3Vydml2ZSBsb25nLiBTbyBJIGhvcGUgd2l0aCB0aGUgaW5mb3JtYXRpb24gd2VcbiAgICAgICAgICAgICAgICBnYXRoZXIgb24gdGhpcyB3ZWJzaXRlLCBpdCBjYW4gaGVscCBhIHBsYW50IGtpbGxlciB0byBiZWNvbWUgYVxuICAgICAgICAgICAgICAgIGxvbmcgdGVybSBwbGFudCBrZWVwZXIuIExvbmcgbGl2ZSB0aGUgcGxhbnRzIVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1pbWdcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDUvMDQvMTUvMjQvd29tYW4tNDE3ODMwMl9fMzQwLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xvZ2FuLWNvbnRhaW5lciB0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTVcIj4gTGV0J3MgbWFrZSB5b3VyIHBsYW50cyBmbG91cmlzaCE8L2gxPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hYm91dHVzXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICBHZXQgaW4gdG91Y2hcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBGT1JNX0VORFBPSU5UID1cbiAgXCJodHRwczovL3B1YmxpYy5oZXJvdG9mdS5jb20vdjEvNjhiYTliNDAtZTdjYi0xMWVjLWIwNjktZWZlNWNhNTkwMDk2XCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGlmIChzdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgIDxwPlRoYW5rIHlvdSEgV2UnbGwgYmUgaW4gdG91Y2ggc29vbi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29udGFjdFwiPkNvbnRhY3QgdXM8L2gyPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGFjdGlvbj17Rk9STV9FTkRQT0lOVH1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgIC8vIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwieW91ck5hbWVcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBGaXJzdCBOYW1lOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBQaG9uZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBob25lXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgTWVzc2FnZTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1jb250YWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJTZW5kIE1lc3NhZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgRmF2U2luZ2xlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtmYXZQbGFudCwgc2V0RmF2UGxhbnRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZS8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEZhdlBsYW50KHJlcy5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhdiB3aWxsIGJlIGhlcmUnLCByZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT57ZmF2UGxhbnQubmFtZX08L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY2FyZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmYXZQbGFudC5pbWd9IGFsdD1cIntpdGVtLm5hbWV9XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLXRleHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IOKYgO+4jyBDb25kaXRpb25zOiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj4ge2ZhdlBsYW50LmNvbmRpdGlvbnN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+SpiBXYXRlcjogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2ZhdlBsYW50LndhdGVyfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IPCfjLEgRGlmZmljdWx0eTogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2ZhdlBsYW50LmRpZmZpY3VsdHl9IDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3JkZXItYnRuXCIgPlxuICAgICAgICAgICAgIHJlbW92ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhdlNpbmdsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicC0yIGJnLWRhcmsgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyBUZWFtIFNjcnVtcyBVcCAyMDIyPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbWFnZXMgY291cnRlc3lcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaWtlYS5jb20vXCIgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgSUtFQVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5Vc2VkIGZvciBlZHVjYXRpb25hbCBwdXJwb3NlPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgbmF2LWNvbG9yIHB5LTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxvZ29cIj5cbiAgICAgICAgICBQbGFudENhcmUg8J+qtHtcIiBcIn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2TWVudVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2TWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1zLWF1dG9cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgQ2F0YWxvZ3VlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXlQbGFudHNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgTXkgcGxhbnRzXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRVc1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIj5cbiAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9sb2dpblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsYW50TGlzdCBmcm9tIFwiLi9QbGFudExpc3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IHAtNSB0ZXh0LWNlbnRlciB0ZXh0LXNtLXN0YXJ0IGJhbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZVwiPlRha2UgY2FyZSBvZiB5b3VyIHBsYW50cyA8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIG15LTQgXCI+XG4gICAgICAgICAgICAgIFBsYW50IGtpbGxlcnMgJiBQbGFudCBudXJ0dXJlcnMsIHRoaXMgc2l0ZSBpcyBmb3IgeW91ISBcbiAgICAgICAgICAgICAgLS1TZWxlY3QgYW5kIGFkZCB5b3VyIGZhdm9yaXRlIHBsYW50cyEgXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgdy01MCBkLW5vbmUgZC1zbS1ibG9ja1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDQvMTAvMTIvMzIvaG91c2UtcGxhbnRzLTQxMTY5OTJfXzQ4MC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFBsYW50TGlzdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtGYVRyYXNoQWx0fSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cblxuXG5jb25zdCBMaWtlQ2FyZCA9IChwcm9wcykgPT4ge1xuXG4vLyAgICAgdmFyIGdhcGkgPSB3aW5kb3cuZ2FwaVxuLy8gICAgIHZhciBDTElFTlRfSUQgPSBcIjI0NDg5OTg1NDE5Mi12a3V2ZzM0NzQ2bHFrc2FtNTRjOWEwcXMyYTdtZmNzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4vLyAgICAgdmFyIEFQSV9LRVkgPSBcIkFJemFTeUFNY1htRGdhVkxMZTljQ1Q0a0F6UHFtLUFWczVUVG5ab1wiXG4vLyAgICAgdmFyIERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZGlzY292ZXJ5L3YxL2FwaXMvY2FsZW5kYXIvdjMvcmVzdFwiXVxuLy8gICAgIHZhciBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2FsZW5kYXIuZXZlbnRzXCJcbiAgXG4vLyAgICAgY29uc3QgYWRkQ2FsZW5kYXJFdmVudCA9ICgpID0+IHtcbi8vICAgICAgIGdhcGkubG9hZCgnY2xpZW50OmF1dGgyJywgKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIGNsaWVudCcpXG4gIFxuLy8gICAgICAgICBnYXBpLmNsaWVudC5pbml0KHtcbi8vICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXG4vLyAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcbi8vICAgICAgICAgICBkaXNjb3ZlcnlEb2NzOiBESVNDT1ZFUllfRE9DUyxcbi8vICAgICAgICAgICBzY29wZTogU0NPUEVTLFxuLy8gICAgICAgICB9KVxuICBcbi8vICAgICAgICAgZ2FwaS5jbGllbnQubG9hZCgnY2FsZW5kYXInLCAndjMnLCAoKSA9PiBjb25zb2xlLmxvZygnYmFtIScpKVxuICBcbi8vICAgICAgICAgZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKVxuLy8gICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgXG4vLyAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuLy8gICAgICAgICAgICAgJ3N1bW1hcnknOiAnV2F0ZXIgdGhlIHBsYW50IScsXG4vLyAgICAgICAgICAgICAnbG9jYXRpb24nOiAnSG9tZScsXG4vLyAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2F0ZXIgdGhlIHBsYW50Jyxcbi8vICAgICAgICAgICAgICdzdGFydCc6IHtcbi8vICAgICAgICAgICAgICAgJ2RhdGVUaW1lJzogJ2lzb1N0YXJ0RGF0ZScsXG4vLyAgICAgICAgICAgICAgICd0aW1lWm9uZSc6ICd0aW1lWm9uZSdcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAnZW5kJzoge1xuLy8gICAgICAgICAgICAgICAnZGF0ZVRpbWUnOiAnaXNvRW5kRGF0ZScsXG4vLyAgICAgICAgICAgICAgICd0aW1lWm9uZSc6ICd0aW1lWm9uZSdcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAncmVjdXJyZW5jZSc6IFtcbi8vICAgICAgICAgICAgICAgJ1JSVUxFOkZSRVE9REFJTFk7Q09VTlQ9Midcbi8vICAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgICAnYXR0ZW5kZWVzJzogW1xuLy8gICAgICAgICAgICAgICB7J2VtYWlsJzogJ2xwYWdlQGV4YW1wbGUuY29tJ30sXG4vLyAgICAgICAgICAgICAgIHsnZW1haWwnOiAnc2JyaW5AZXhhbXBsZS5jb20nfVxuLy8gICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgICdyZW1pbmRlcnMnOiB7XG4vLyAgICAgICAgICAgICAgICd1c2VEZWZhdWx0JzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICdvdmVycmlkZXMnOiBbXG4vLyAgICAgICAgICAgICAgICAgeydtZXRob2QnOiAnZW1haWwnLCAnbWludXRlcyc6IDI0ICogNjB9LFxuLy8gICAgICAgICAgICAgICAgIHsnbWV0aG9kJzogJ3BvcHVwJywgJ21pbnV0ZXMnOiAxMH1cbi8vICAgICAgICAgICAgICAgXVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbiAgXG4vLyAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBnYXBpLmNsaWVudC5jYWxlbmRhci5ldmVudHMuaW5zZXJ0KHtcbi8vICAgICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuLy8gICAgICAgICAgICAgJ3Jlc291cmNlJzogZXZlbnQsXG4vLyAgICAgICAgICAgfSlcbiAgXG4vLyAgICAgICAgICAgcmVxdWVzdC5leGVjdXRlKGV2ZW50ID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuLy8gICAgICAgICAgICAgd2luZG93Lm9wZW4oZXZlbnQuaHRtbExpbmspXG4vLyAgICAgICAgICAgfSlcbiAgICAgICAgICBcblxuLy8gICAgICAgICAgIC8vIGdldCBldmVudHNcbi8vICAgICAgICAgICBnYXBpLmNsaWVudC5jYWxlbmRhci5ldmVudHMubGlzdCh7XG4vLyAgICAgICAgICAgICAnY2FsZW5kYXJJZCc6ICdwcmltYXJ5Jyxcbi8vICAgICAgICAgICAgICd0aW1lTWluJzogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksXG4vLyAgICAgICAgICAgICAnc2hvd0RlbGV0ZWQnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICdzaW5nbGVFdmVudHMnOiB0cnVlLFxuLy8gICAgICAgICAgICAgJ21heFJlc3VsdHMnOiAxMCxcbi8vICAgICAgICAgICAgICdvcmRlckJ5JzogJ3N0YXJ0VGltZSdcbi8vICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IHJlc3BvbnNlLnJlc3VsdC5pdGVtc1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VWRU5UUzogJywgZXZlbnRzKVxuLy8gICAgICAgICAgIH0pXG4gICAgIFxuICAgICAgXG4gIFxuLy8gICAgICAgICB9KVxuLy8gICAgICAgfSlcbi8vIH1cbiAgcmV0dXJuIChcbjw+XG4gIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICA8TGluayB0bz17YC9teUZhdi8ke3Byb3BzLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGxhbnQtaW1nXCIgc3JjPXtwcm9wcy5pbWd9IGFsdD17cHJvcHMubmFtZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZhdi1jYXJkLW5hbWVcIj57cHJvcHMubmFtZX08L3A+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgIHsvKiA8YnV0dG9uICBjbGFzc05hbWU9XCJidG4tcmVtaW5kZXJcIj5TZXQgcmVtaW5kZXIg8J+XkzwvYnV0dG9uPiAqL31cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWRlbGV0ZVwiID5cbiAgICAgIDxGYVRyYXNoQWx0IC8+XG5cdCA8L2J1dHRvbj5cbiAgICAgXG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlrZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpa2VDYXJkIGZyb20gXCIuL0xpa2VDYXJkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93RG93bkFaIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuY29uc3Qgc29ydEljb24gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dEb3duQVp9IC8+O1xuXG5jb25zdCBNeVBsYW50cyA9ICgpID0+IHtcbiAgY29uc3QgW215UGxhbnRzLCBzZXRNeVBsYW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29yZGVyZWRBWiwgc2V0T3JkZXJlZEFaXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNQZXRGcmllbmRseSxzZXRJc1BldEZyaWVuZGx5XSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbZmlsdGVyUGxhbnRzLCBzZXRGaWx0ZXJQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZVwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNeVBsYW50cyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEZpbHRlclBsYW50cyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG4gIH07XG5cbmNvbnN0IGhhbmRsZVNvcnQgPSAoKSA9PiB7XG5jb25zdCBzb3J0ZWRQbGFudHMgPSBbLi4ubXlQbGFudHNdO1xuaWYgKG9yZGVyZWRBWiA9PT0gMCB8fCBvcmRlcmVkQVogPT09IDIpIHtcbiAgc2V0RmlsdGVyUGxhbnRzKFxuICAgIHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcbiAgKTtcbiAgc2V0T3JkZXJlZEFaKDEpO1xufSBlbHNlIHtcbiAgc2V0RmlsdGVyUGxhbnRzKFxuICAgIHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxKSlcbiAgKTtcbiAgc2V0T3JkZXJlZEFaKDIpO1xufVxufTtcblxuY29uc3QgaGFuZGxlQ2FyZSA9IGUgPT4ge1xubGV0IG5ld1BsYW50cyA9IFsuLi5teVBsYW50c107XG5cbnN3aXRjaCAob3JkZXJlZEFaKSB7XG4gIGNhc2UgMTpcbiAgICBicmVhaztcbiAgY2FzZSAyOlxuICAgIHNldEZpbHRlclBsYW50cyhcbiAgICAgIG5ld1BsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcbiAgICApO1xuICAgIGJyZWFrO1xuICBjYXNlIDM6XG4gICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuICAgICk7XG4gICAgYnJlYWs7XG59XG5cbmlmIChlLnRhcmdldC52YWx1ZSAhPT0gJ0RpZmZpY3VsdHk6Jykge1xuICBsZXQgY2FyZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICBuZXdQbGFudHMgPSBuZXdQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50LmRpZmZpY3VsdHkgPT09IGNhcmVWYWx1ZSk7XG59XG5cbnNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xufTtcblxuY29uc3QgaGFuZGxlUGV0RnJpZW5kbHkgPSAoKSA9PiB7XG5jb25zdCBuZXdQbGFudHMgPSBbLi4ubXlQbGFudHNdO1xuaWYgKGlzUGV0RnJpZW5kbHkpIHtcbiAgc2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cy5maWx0ZXIobXlQbGFudCA9PiBteVBsYW50LnBldHMpKTtcbiAgc2V0SXNQZXRGcmllbmRseShmYWxzZSk7XG59IGVsc2Uge1xuICBzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzKTtcbiAgc2V0SXNQZXRGcmllbmRseSh0cnVlKTtcbn1cbn07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkZXIgLz5cbiAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY29udGFpbmVyXCI+XG4gICAgICA8aDE+TXkgZmF2b3JpdGUgcGxhbnRzIPCfkpU8L2gxPlxuICAgICAgXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgUGxhbnRzXCJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnMnPlxuXHRcdFx0ey8qIENhcmUgTGV2ZWwgc2VsZWN0b3IgKi99XG5cdFx0XHQ8c2VsZWN0IG5hbWU9J2NhcmUtbGV2ZWwnIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNhcmUoZSl9IGNsYXNzTmFtZT0nY2FyZS1sZXZlbCc+XG5cdFx0XHRcdDxvcHRpb24+RGlmZmljdWx0eTo8L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMSc+RWFzeTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJz5NZWRpdW08L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMyc+RGlmZmljdWx0PC9vcHRpb24+XG5cdFx0XHQ8L3NlbGVjdD5cblxuXHRcdFx0ey8qIFBldCBGcmllbmRseSBQbGFudHMgT25seSAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdwZXQtYnRuJyBvbkNsaWNrPXtoYW5kbGVQZXRGcmllbmRseX0+XG5cdFx0XHRcdCDwn5C+IFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdHsvKiBBbHBoYWJldGljYWwgT3JkZXIgKi99XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nb3JkZXItYnRuJyBvbkNsaWNrPXtoYW5kbGVTb3J0fT5cblx0XHRcdFx0e3NvcnRJY29ufVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG4gICAgICBcbiAgICAgIHsvKiB7XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbnQtbGlzdFwiPlxuICAgICAge1xuICAgICAgbXlQbGFudHMubWFwKChteVBsYW50KSA9PiAoXG4gICAgICAgIDxMaWtlQ2FyZFxuICAgICAgICAgIGtleT17bXlQbGFudC5pZH1cbiAgICAgICAgICBpZD17bXlQbGFudC5pZH1cbiAgICAgICAgICBuYW1lPXtteVBsYW50Lm5hbWV9XG4gICAgICAgICAgaW1nPXtteVBsYW50LmltZ31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB9ICovfVxuXG57XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbnQtbGlzdFwiPlxuICAgICAgICAgIHtmaWx0ZXJQbGFudHNcbiAgICAgICAgICAgIC5maWx0ZXIoKG15UGxhbnQpID0+XG4gICAgICAgICAgICAgIG15UGxhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgobXlQbGFudCkgPT4gKFxuICAgICAgICAgICAgICA8TGlrZUNhcmRcbiAgICAgICAgICAgICAga2V5PXtteVBsYW50LmlkfVxuICAgICAgICAgICAgICBpZD17bXlQbGFudC5pZH1cbiAgICAgICAgICAgICAgbmFtZT17bXlQbGFudC5uYW1lfVxuICAgICAgICAgICAgICBpbWc9e215UGxhbnQuaW1nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVBsYW50cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBQbGFudENhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgPlxuICAgIDxMaW5rIHRvPXtgL3BsYW50LyR7cHJvcHMuaWR9YH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJwbGFudC1pbWdcIiBzcmM9e3Byb3BzLmltZ30gYWx0PXtwcm9wcy5uYW1lfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1uYW1lXCI+e3Byb3BzLm5hbWV9PC9wPlxuICAgIFxuICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQbGFudENhcmQgZnJvbSBcIi4vUGxhbnRDYXJkXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBcnJvd0Rvd25BWiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuY29uc3Qgc29ydEljb24gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dEb3duQVp9IC8+O1xuXG5jb25zdCBQbGFudExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtwbGFudHMsIHNldFBsYW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29yZGVyZWRBWiwgc2V0T3JkZXJlZEFaXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNQZXRGcmllbmRseSxzZXRJc1BldEZyaWVuZGx5XSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbZmlsdGVyUGxhbnRzLCBzZXRGaWx0ZXJQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL3BsYW50c1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRQbGFudHMocmVzLmRhdGEpO1xuICAgICAgICBzZXRGaWx0ZXJQbGFudHMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc29ydGVkUGxhbnRzID0gWy4uLnBsYW50c107XG5cdFx0aWYgKG9yZGVyZWRBWiA9PT0gMCB8fCBvcmRlcmVkQVogPT09IDIpIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhcblx0XHRcdFx0c29ydGVkUGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpKVxuXHRcdFx0KTtcblx0XHRcdHNldE9yZGVyZWRBWigxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0RmlsdGVyUGxhbnRzKFxuXHRcdFx0XHRzb3J0ZWRQbGFudHMuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSA/IC0xIDogMSkpXG5cdFx0XHQpO1xuXHRcdFx0c2V0T3JkZXJlZEFaKDIpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDYXJlID0gZSA9PiB7XG4gICAgbGV0IG5ld1BsYW50cyA9IFsuLi5wbGFudHNdO1xuXG4gICAgc3dpdGNoIChvcmRlcmVkQVopIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHNldEZpbHRlclBsYW50cyhcbiAgICAgICAgICBuZXdQbGFudHMuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSA/IDEgOiAtMSkpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICdEaWZmaWN1bHR5OicpIHtcbiAgICAgIGxldCBjYXJlVmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBuZXdQbGFudHMgPSBuZXdQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50LmRpZmZpY3VsdHkgPT09IGNhcmVWYWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cyk7XG5cdH07XG5cbiAgICBjb25zdCBoYW5kbGVQZXRGcmllbmRseSA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdQbGFudHMgPSBbLi4ucGxhbnRzXTtcblx0XHRpZiAoaXNQZXRGcmllbmRseSkge1xuXHRcdFx0c2V0RmlsdGVyUGxhbnRzKG5ld1BsYW50cy5maWx0ZXIocGxhbnQgPT4gcGxhbnQucGV0cykpO1xuXHRcdFx0c2V0SXNQZXRGcmllbmRseShmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xuXHRcdFx0c2V0SXNQZXRGcmllbmRseSh0cnVlKTtcblx0XHR9XG5cdH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIFBsYW50c1wiXG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzJz5cblx0XHRcdHsvKiBDYXJlIExldmVsIHNlbGVjdG9yICovfVxuXHRcdFx0PHNlbGVjdCBuYW1lPSdjYXJlLWxldmVsJyBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDYXJlKGUpfSBjbGFzc05hbWU9J2NhcmUtbGV2ZWwnPlxuXHRcdFx0XHQ8b3B0aW9uPkRpZmZpY3VsdHk6PC9vcHRpb24+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JzEnPkVhc3k8L29wdGlvbj5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMic+TWVkaXVtPC9vcHRpb24+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JzMnPkRpZmZpY3VsdDwvb3B0aW9uPlxuXHRcdFx0PC9zZWxlY3Q+XG5cblx0XHRcdHsvKiBQZXQgRnJpZW5kbHkgUGxhbnRzIE9ubHkgKi99XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ncGV0LWJ0bicgb25DbGljaz17aGFuZGxlUGV0RnJpZW5kbHl9PlxuXHRcdFx0XHQg8J+QviBcblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHR7LyogQWxwaGFiZXRpY2FsIE9yZGVyICovfVxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J29yZGVyLWJ0bicgb25DbGljaz17aGFuZGxlU29ydH0+XG5cdFx0XHRcdHtzb3J0SWNvbn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG4gICAgICB7XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbnQtbGlzdFwiPlxuICAgICAgICAgIHtmaWx0ZXJQbGFudHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHBsYW50KSA9PlxuICAgICAgICAgICAgICBwbGFudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChwbGFudCkgPT4gKFxuICAgICAgICAgICAgICA8UGxhbnRDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtwbGFudC5pZH1cbiAgICAgICAgICAgICAgICBpZD17cGxhbnQuaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17cGxhbnQubmFtZX1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYW50LmltZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50TGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IFBsYW50U2luZ2xlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZCk7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9wbGFudHMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRJdGVtKHJlcy5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgYWRkTGlrZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gaXRlbSlcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoa2V5LCBpdGVtW2tleV0pO1xuXG4gICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9mYXZvdXJpdGVgLCBib2R5Rm9ybURhdGEpXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT57aXRlbS5uYW1lfTwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcC1pbWdcIiBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtdGV4dFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g4piA77iPIENvbmRpdGlvbnM6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPiB7aXRlbS5jb25kaXRpb25zfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IPCfkqYgV2F0ZXI6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPntpdGVtLndhdGVyfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IPCfjLEgRGlmZmljdWx0eTogPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhbnQtZGV0YWlsXCI+e2l0ZW0uZGlmZmljdWx0eX0gPC9wPlxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwibGlrZS1idG5cIiBvbkNsaWNrPXthZGRMaWtlfT5cbiAgICAgICAgICAgICAgU2F2ZSDinaTvuI9cbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibGlrZS1idXR0b25cIiBvbkNsaWNrPXthZGRMaWtlfSAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlID8gJ2luZGlhbnJlZCcgOiAnJyxcbiAgICAgICAgICBjb2xvcjogaXNBY3RpdmUgPyAnd2hpdGUnIDogJycsXG4gICAgICAgIH19PlxuPHN2ZyBjbGFzc05hbWU9XCJoZWFydC1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxwYXRoIGQ9XCJNOTEuNiAxM0EyOC43IDI4LjcgMCAwIDAgNTEgMTNsLTEgMS0xLTFBMjguNyAyOC43IDAgMCAwIDguNCA1My44bDEgMUw1MCA5NS4zbDQwLjUtNDAuNiAxLTFhMjguNiAyOC42IDAgMCAwIDAtNDAuNnpcIi8+PC9zdmc+XG4gIExpa2VcbjwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50U2luZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSG9tZSIsIkNvbnRhY3QiLCJBYm91dFVzIiwiTXlQbGFudHMiLCJQbGFudFNpbmdsZSIsIkxheW91dCIsIkZhdlNpbmdsZSIsIk1haW4iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjaGlsZHJlbiIsIkhlYWRlciIsIkZvb3RlciIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkZPUk1fRU5EUE9JTlQiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiYXhpb3MiLCJmYXZQbGFudCIsInNldEZhdlBsYW50IiwiaWQiLCJzZXRJZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibmFtZSIsImltZyIsImNvbmRpdGlvbnMiLCJ3YXRlciIsImRpZmZpY3VsdHkiLCJQbGFudExpc3QiLCJGYVRyYXNoQWx0IiwiTGlrZUNhcmQiLCJwcm9wcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dEb3duQVoiLCJzb3J0SWNvbiIsIm15UGxhbnRzIiwic2V0TXlQbGFudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJvcmRlcmVkQVoiLCJzZXRPcmRlcmVkQVoiLCJpc1BldEZyaWVuZGx5Iiwic2V0SXNQZXRGcmllbmRseSIsImZpbHRlclBsYW50cyIsInNldEZpbHRlclBsYW50cyIsInVwZGF0ZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNvcnQiLCJzb3J0ZWRQbGFudHMiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVDYXJlIiwibmV3UGxhbnRzIiwiY2FyZVZhbHVlIiwicGFyc2VJbnQiLCJmaWx0ZXIiLCJwbGFudCIsImhhbmRsZVBldEZyaWVuZGx5IiwibXlQbGFudCIsInBldHMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwiUGxhbnRDYXJkIiwicGxhbnRzIiwic2V0UGxhbnRzIiwiaXRlbSIsInNldEl0ZW0iLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiYWRkTGlrZSIsInByZXZlbnREZWZhdWx0IiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJwb3N0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9