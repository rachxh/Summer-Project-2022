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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias error veritatis commodi qui quis soluta eaque minus, blanditiis aperiam, quisquam quo quas totam hic nam minima beatae, debitis consequatur ipsa deserunt quos earum est deleniti harum? Provident eum quas quasi veniam quae esse aliquam ea doloremque aperiam enim fugiat id ducimus cumque distinctio hic fuga cum laudantium magni, tempora quos itaque! In amet alias voluptatibus officiis eos saepe deserunt fugiat! Deserunt debitis rem officiis porro id dicta ratione quia sed?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " about-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non atque enim ad sit quos nostrum possimus excepturi, beatae magnam autem natus dicta eligendi neque quibusdam? Modi ea voluptate quisquam itaque nulla aperiam fugit nesciunt, fugiat molestias similique minima expedita ratione aspernatur reprehenderit accusamus eius corporis porro. Voluptas molestiae debitis velit sapiente odio ad blanditiis voluptatibus possimus expedita enim earum, voluptate ex. Illo, facere quod? Ullam molestias amet consequuntur corporis doloribus corrupti mollitia voluptatum! Porro voluptate, suscipit nostrum quisquam at amet.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "about-img",
    src: "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg",
    alt: "profile"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slogan-container text-center p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "mb-5"
  }, " Let's  keep your plants flourish!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");




var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "contact"
  }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "yourName",
    className: "col-form-label"
  }, "First Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control",
    type: "text",
    name: "firstName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "lastName",
    className: "col-form-label"
  }, "Last Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control",
    type: "text",
    name: "lastName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: "col-form-label"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control",
    type: "email",
    name: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "phone",
    className: "col-form-label"
  }, "Phone:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control",
    type: "phone",
    name: "phone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message",
    className: "col-form-label"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form-control",
    rows: "3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-success btn-contact"
  }, "Send Message")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "copyright\xA9 Team Scrums Up 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "position-absolute bottom-0 end-0 p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "bi bi-arrow-up-circle h1"
  }))));
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
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat inventore sit ipsum illo velit ex, quos quisquam nam veniam?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







var LikeCard = function LikeCard(props) {
  var gapi = window.gapi;
  var CLIENT_ID = "244899854192-vkuvg34746lqksam54c9a0qs2a7mfcs6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyAMcXmDgaVLLe9cCT4kAzPqm-AVs5TTnZo";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  var addCalendarEvent = function addCalendarEvent() {
    gapi.load('client:auth2', function () {
      console.log('loaded client');
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      });
      gapi.client.load('calendar', 'v3', function () {
        return console.log('bam!');
      });
      gapi.auth2.getAuthInstance().signIn().then(function () {
        var event = {
          'summary': 'Water the plant!',
          'location': 'Home',
          'description': 'Water the plant',
          'start': {
            'dateTime': 'isoStartDate',
            'timeZone': 'timeZone'
          },
          'end': {
            'dateTime': 'isoEndDate',
            'timeZone': 'timeZone'
          },
          'recurrence': ['RRULE:FREQ=DAILY;COUNT=2'],
          'attendees': [{
            'email': 'lpage@example.com'
          }, {
            'email': 'sbrin@example.com'
          }],
          'reminders': {
            'useDefault': false,
            'overrides': [{
              'method': 'email',
              'minutes': 24 * 60
            }, {
              'method': 'popup',
              'minutes': 10
            }]
          }
        };
        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });
        request.execute(function (event) {
          console.log(event);
          window.open(event.htmlLink);
        }); // get events

        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': new Date().toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function (response) {
          var events = response.result.items;
          console.log('EVENTS: ', events);
        });
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/myFav/".concat(props.id),
    className: "card-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    className: "plant-img",
    src: props.img,
    alt: props.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "fav-card-name"
  }, props.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    onClick: addCalendarEvent,
    className: "btn-reminder"
  }, "Set reminder \uD83D\uDDD3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btn-delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrashAlt, null))));
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LikeCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LikeCard */ "./assets/pages/LikeCard.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Header */ "./assets/pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Footer */ "./assets/pages/Footer.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MyPlants = function MyPlants() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      myPlants = _useState2[0],
      setMyPlants = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_14___default().get("http://localhost:8007/api/favourite").then(function (res) {
      setMyPlants(res.data);
    })["catch"](function (error) {
      console.error(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h1", null, "My favorite plants \uD83D\uDC95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "plant-list"
  }, myPlants.map(function (myPlant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_LikeCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: myPlant.id,
      id: myPlant.id,
      name: myPlant.name,
      img: myPlant.img
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
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
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "sp-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
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
    className: "order-btn",
    onClick: addLike
  }, "Save \u2764\uFE0F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_fortawesome_re-ec1940"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBNkIwRSxJQUFJLENBQUN6RSxVQUFsQyxNQU5GLGVBT0U7SUFBUSxTQUFTLEVBQUMsV0FBbEI7SUFBOEIsT0FBTyxFQUFFMkU7RUFBdkMsdUJBUEYsQ0FGRixDQUhGLENBRkYsZUFxQkUsNERBQUMsZ0RBQUQsT0FyQkYsQ0FERjtBQXlCRCxDQW5ERDs7QUFxREEsaUVBQWUvRyxXQUFmOzs7Ozs7Ozs7Ozs7QUMzREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQWJvdXRVcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9GYXZTaW5nbGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvTGlrZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9NeVBsYW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1BsYW50U2luZ2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vcGFnZXMvQ29udGFjdFwiO1xuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vcGFnZXMvQWJvdXRVc1wiO1xuaW1wb3J0IE15UGxhbnRzIGZyb20gXCIuL3BhZ2VzL015UGxhbnRzXCI7XG5pbXBvcnQgUGxhbnRTaW5nbGUgZnJvbSBcIi4vcGFnZXMvUGxhbnRTaW5nbGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBGYXZTaW5nbGUgZnJvbSBcIi4vcGFnZXMvRmF2U2luZ2xlXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2F0YWxvZ3VlXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJwbGFudC86aWRcIiBlbGVtZW50PXs8UGxhbnRTaW5nbGUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJteUZhdi86aWRcIiBlbGVtZW50PXs8RmF2U2luZ2xlIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL215UGxhbnRzXCIgZWxlbWVudD17PE15UGxhbnRzIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYWJvdXRVc1wiIGVsZW1lbnQ9ezxBYm91dFVzIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgXCIuL01haW5cIjsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPGRpdiA+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuLy8gaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdj4gXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1hYm91dCBtdC01IG1iLTVcIj5IZXJlJ3Mgb3VyIHN0b3J5PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWNvbnRhaW5lclwiPlxuICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFib3V0LWNhcmRcIj5cbiAgICAgICAgPGRpdiAgPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhYm91dC1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzA1LzIzLzAwLzIxL3dvbWFuLTYyNzQ4NzlfMTI4MC5wbmdcIiBhbHQ9XCJwcm9maWxlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGV4dFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBlcnJvciB2ZXJpdGF0aXMgY29tbW9kaSBxdWkgcXVpcyBzb2x1dGEgZWFxdWUgbWludXMsIGJsYW5kaXRpaXMgYXBlcmlhbSwgcXVpc3F1YW0gcXVvIHF1YXMgdG90YW0gaGljIG5hbSBtaW5pbWEgYmVhdGFlLCBkZWJpdGlzIGNvbnNlcXVhdHVyIGlwc2EgZGVzZXJ1bnQgcXVvcyBlYXJ1bSBlc3QgZGVsZW5pdGkgaGFydW0/IFByb3ZpZGVudCBldW0gcXVhcyBxdWFzaSB2ZW5pYW0gcXVhZSBlc3NlIGFsaXF1YW0gZWEgZG9sb3JlbXF1ZSBhcGVyaWFtIGVuaW0gZnVnaWF0IGlkIGR1Y2ltdXMgY3VtcXVlIGRpc3RpbmN0aW8gaGljIGZ1Z2EgY3VtIGxhdWRhbnRpdW0gbWFnbmksIHRlbXBvcmEgcXVvcyBpdGFxdWUhIEluIGFtZXQgYWxpYXMgdm9sdXB0YXRpYnVzIG9mZmljaWlzIGVvcyBzYWVwZSBkZXNlcnVudCBmdWdpYXQhIERlc2VydW50IGRlYml0aXMgcmVtIG9mZmljaWlzIHBvcnJvIGlkIGRpY3RhIHJhdGlvbmUgcXVpYSBzZWQ/XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8L2Rpdj4gIFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFib3V0LWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGV4dFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOb24gYXRxdWUgZW5pbSBhZCBzaXQgcXVvcyBub3N0cnVtIHBvc3NpbXVzIGV4Y2VwdHVyaSwgYmVhdGFlIG1hZ25hbSBhdXRlbSBuYXR1cyBkaWN0YSBlbGlnZW5kaSBuZXF1ZSBxdWlidXNkYW0/IE1vZGkgZWEgdm9sdXB0YXRlIHF1aXNxdWFtIGl0YXF1ZSBudWxsYSBhcGVyaWFtIGZ1Z2l0IG5lc2NpdW50LCBmdWdpYXQgbW9sZXN0aWFzIHNpbWlsaXF1ZSBtaW5pbWEgZXhwZWRpdGEgcmF0aW9uZSBhc3Blcm5hdHVyIHJlcHJlaGVuZGVyaXQgYWNjdXNhbXVzIGVpdXMgY29ycG9yaXMgcG9ycm8uIFZvbHVwdGFzIG1vbGVzdGlhZSBkZWJpdGlzIHZlbGl0IHNhcGllbnRlIG9kaW8gYWQgYmxhbmRpdGlpcyB2b2x1cHRhdGlidXMgcG9zc2ltdXMgZXhwZWRpdGEgZW5pbSBlYXJ1bSwgdm9sdXB0YXRlIGV4LiBJbGxvLCBmYWNlcmUgcXVvZD8gVWxsYW0gbW9sZXN0aWFzIGFtZXQgY29uc2VxdXVudHVyIGNvcnBvcmlzIGRvbG9yaWJ1cyBjb3JydXB0aSBtb2xsaXRpYSB2b2x1cHRhdHVtISBQb3JybyB2b2x1cHRhdGUsIHN1c2NpcGl0IG5vc3RydW0gcXVpc3F1YW0gYXQgYW1ldC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9XCJhYm91dC1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzA1LzA0LzE1LzI0L3dvbWFuLTQxNzgzMDJfXzM0MC5qcGdcIiBhbHQ9XCJwcm9maWxlXCIgLz5cbiAgICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PiAgICBcbjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cInNsb2dhbi1jb250YWluZXIgdGV4dC1jZW50ZXIgcC01XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01XCI+IExldCdzICBrZWVwXG4gICAgICAgIHlvdXIgcGxhbnRzIGZsb3VyaXNoITwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWFib3V0dXNcIj4gPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIiA+R2V0IGluIHRvdWNoPC9MaW5rPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuXG48Rm9vdGVyIC8+XG4gIFxuXG4gICAgPC8+XG4gICkgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250YWN0XCI+Q29udGFjdCB1czwvaDI+XG48Zm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInlvdXJOYW1lXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5GaXJzdCBOYW1lOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJmaXJzdE5hbWVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCIgY2xhc3NOYW1lPVwiY29sLWZvcm0tbGFiZWxcIj5MYXN0IE5hbWU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAgbmFtZT1cImxhc3ROYW1lXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1mb3JtLWxhYmVsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPlBob25lOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwaG9uZVwiICBuYW1lPVwicGhvbmVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb2wtZm9ybS1sYWJlbFwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIzXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1jb250YWN0XCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuICApXG4gIDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBGYXZTaW5nbGUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2ZhdlBsYW50LCBzZXRGYXZQbGFudF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvZmF2b3VyaXRlLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0RmF2UGxhbnQocmVzLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmF2IHdpbGwgYmUgaGVyZScsIHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPntmYXZQbGFudC5uYW1lfTwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1jYXJkXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2ZhdlBsYW50LmltZ30gYWx0PVwie2l0ZW0ubmFtZX1cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtdGV4dFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g4piA77iPIENvbmRpdGlvbnM6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPiB7ZmF2UGxhbnQuY29uZGl0aW9uc308L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDwn5KmIFdhdGVyOiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj57ZmF2UGxhbnQud2F0ZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Atc3VidGl0bGVcIj4g8J+MsSBEaWZmaWN1bHR5OiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj57ZmF2UGxhbnQuZGlmZmljdWx0eX0gPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcmRlci1idG5cIiA+XG4gICAgICAgICAgICAgcmVtb3ZlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2U2luZ2xlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJwLTIgYmctZGFyayB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPHA+Y29weXJpZ2h0JmNvcHk7IFRlYW0gU2NydW1zIFVwIDIwMjI8L3A+XG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIGJvdHRvbS0wIGVuZC0wIHAtNVwiPiBcbiAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LXVwLWNpcmNsZSBoMVwiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIG5hdi1jb2xvciBweS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBsb2dvXCI+XG4gICAgICAgICAgUGxhbnRDYXJlIPCfqrR7XCIgXCJ9XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdk1lbnVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdk1lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIENhdGFsb2d1ZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215UGxhbnRzXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIE15IHBsYW50c1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0VXNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBsaW5rLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbGluay1jb2xvclwiPlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwMDcvbG9naW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGxpbmstY29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGFudExpc3QgZnJvbSBcIi4vUGxhbnRMaXN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1saWdodCBwLTUgdGV4dC1jZW50ZXIgdGV4dC1zbS1zdGFydCBiYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGVcIj5UYWtlIGNhcmUgb2YgeW91ciBwbGFudHMgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBteS00IFwiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnRcbiAgICAgICAgICAgICAgICBxdWFlcmF0IGludmVudG9yZSBzaXQgaXBzdW0gaWxsbyB2ZWxpdCBleCwgcXVvcyBxdWlzcXVhbSBuYW1cbiAgICAgICAgICAgICAgICB2ZW5pYW0/XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgdy01MCBkLW5vbmUgZC1zbS1ibG9ja1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDQvMTAvMTIvMzIvaG91c2UtcGxhbnRzLTQxMTY5OTJfXzQ4MC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFBsYW50TGlzdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtGYVRyYXNoQWx0fSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cblxuY29uc3QgTGlrZUNhcmQgPSAocHJvcHMpID0+IHtcblxuICAgIHZhciBnYXBpID0gd2luZG93LmdhcGlcbiAgICB2YXIgQ0xJRU5UX0lEID0gXCIyNDQ4OTk4NTQxOTItdmt1dmczNDc0Nmxxa3NhbTU0YzlhMHFzMmE3bWZjczYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgIHZhciBBUElfS0VZID0gXCJBSXphU3lBTWNYbURnYVZMTGU5Y0NUNGtBelBxbS1BVnM1VFRuWm9cIlxuICAgIHZhciBESVNDT1ZFUllfRE9DUyA9IFtcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2NhbGVuZGFyL3YzL3Jlc3RcIl1cbiAgICB2YXIgU0NPUEVTID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NhbGVuZGFyLmV2ZW50c1wiXG4gIFxuICAgIGNvbnN0IGFkZENhbGVuZGFyRXZlbnQgPSAoKSA9PiB7XG4gICAgICBnYXBpLmxvYWQoJ2NsaWVudDphdXRoMicsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBjbGllbnQnKVxuICBcbiAgICAgICAgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICAgICAgYXBpS2V5OiBBUElfS0VZLFxuICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXG4gICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXG4gICAgICAgICAgc2NvcGU6IFNDT1BFUyxcbiAgICAgICAgfSlcbiAgXG4gICAgICAgIGdhcGkuY2xpZW50LmxvYWQoJ2NhbGVuZGFyJywgJ3YzJywgKCkgPT4gY29uc29sZS5sb2coJ2JhbSEnKSlcbiAgXG4gICAgICAgIGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICdzdW1tYXJ5JzogJ1dhdGVyIHRoZSBwbGFudCEnLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJzogJ0hvbWUnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1dhdGVyIHRoZSBwbGFudCcsXG4gICAgICAgICAgICAnc3RhcnQnOiB7XG4gICAgICAgICAgICAgICdkYXRlVGltZSc6ICdpc29TdGFydERhdGUnLFxuICAgICAgICAgICAgICAndGltZVpvbmUnOiAndGltZVpvbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2VuZCc6IHtcbiAgICAgICAgICAgICAgJ2RhdGVUaW1lJzogJ2lzb0VuZERhdGUnLFxuICAgICAgICAgICAgICAndGltZVpvbmUnOiAndGltZVpvbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlY3VycmVuY2UnOiBbXG4gICAgICAgICAgICAgICdSUlVMRTpGUkVRPURBSUxZO0NPVU5UPTInXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2F0dGVuZGVlcyc6IFtcbiAgICAgICAgICAgICAgeydlbWFpbCc6ICdscGFnZUBleGFtcGxlLmNvbSd9LFxuICAgICAgICAgICAgICB7J2VtYWlsJzogJ3NicmluQGV4YW1wbGUuY29tJ31cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAncmVtaW5kZXJzJzoge1xuICAgICAgICAgICAgICAndXNlRGVmYXVsdCc6IGZhbHNlLFxuICAgICAgICAgICAgICAnb3ZlcnJpZGVzJzogW1xuICAgICAgICAgICAgICAgIHsnbWV0aG9kJzogJ2VtYWlsJywgJ21pbnV0ZXMnOiAyNCAqIDYwfSxcbiAgICAgICAgICAgICAgICB7J21ldGhvZCc6ICdwb3B1cCcsICdtaW51dGVzJzogMTB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHZhciByZXF1ZXN0ID0gZ2FwaS5jbGllbnQuY2FsZW5kYXIuZXZlbnRzLmluc2VydCh7XG4gICAgICAgICAgICAnY2FsZW5kYXJJZCc6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50LFxuICAgICAgICAgIH0pXG4gIFxuICAgICAgICAgIHJlcXVlc3QuZXhlY3V0ZShldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGV2ZW50Lmh0bWxMaW5rKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG5cbiAgICAgICAgICAvLyBnZXQgZXZlbnRzXG4gICAgICAgICAgZ2FwaS5jbGllbnQuY2FsZW5kYXIuZXZlbnRzLmxpc3Qoe1xuICAgICAgICAgICAgJ2NhbGVuZGFySWQnOiAncHJpbWFyeScsXG4gICAgICAgICAgICAndGltZU1pbic6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgJ3Nob3dEZWxldGVkJzogZmFsc2UsXG4gICAgICAgICAgICAnc2luZ2xlRXZlbnRzJzogdHJ1ZSxcbiAgICAgICAgICAgICdtYXhSZXN1bHRzJzogMTAsXG4gICAgICAgICAgICAnb3JkZXJCeSc6ICdzdGFydFRpbWUnXG4gICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSByZXNwb25zZS5yZXN1bHQuaXRlbXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFVkVOVFM6ICcsIGV2ZW50cylcbiAgICAgICAgICB9KVxuICAgICBcbiAgICAgIFxuICBcbiAgICAgICAgfSlcbiAgICAgIH0pXG59XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiA+XG4gICAgPExpbmsgdG89e2AvbXlGYXYvJHtwcm9wcy5pZH1gfSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiA+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInBsYW50LWltZ1wiIHNyYz17cHJvcHMuaW1nfSBhbHQ9e3Byb3BzLm5hbWV9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmYXYtY2FyZC1uYW1lXCI+e3Byb3BzLm5hbWV9PC9wPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENhbGVuZGFyRXZlbnR9IGNsYXNzTmFtZT1cImJ0bi1yZW1pbmRlclwiPlNldCByZW1pbmRlciDwn5eTPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1kZWxldGVcIiA+XG4gICAgICA8RmFUcmFzaEFsdCAvPlxuXHQgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VDYXJkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaWtlQ2FyZCBmcm9tIFwiLi9MaWtlQ2FyZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cblxuY29uc3QgTXlQbGFudHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtteVBsYW50cywgc2V0TXlQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDcvYXBpL2Zhdm91cml0ZVwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNeVBsYW50cyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkZXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWNvbnRhaW5lclwiPlxuICAgICAgPGgxPk15IGZhdm9yaXRlIHBsYW50cyDwn5KVPC9oMT5cbiAgICAgIHtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1saXN0XCI+XG4gICAgICB7bXlQbGFudHMubWFwKChteVBsYW50KSA9PiAoXG4gICAgICAgIDxMaWtlQ2FyZFxuICAgICAgICAgIGtleT17bXlQbGFudC5pZH1cbiAgICAgICAgICBpZD17bXlQbGFudC5pZH1cbiAgICAgICAgICBuYW1lPXtteVBsYW50Lm5hbWV9XG4gICAgICAgICAgaW1nPXtteVBsYW50LmltZ31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB9XG5cbiAgICA8L2Rpdj5cblxuICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlQbGFudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgUGxhbnRDYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICA8TGluayB0bz17YC9wbGFudC8ke3Byb3BzLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGxhbnQtaW1nXCIgc3JjPXtwcm9wcy5pbWd9IGFsdD17cHJvcHMubmFtZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtbmFtZVwiPntwcm9wcy5uYW1lfTwvcD5cbiAgICBcbiAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50Q2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUGxhbnRDYXJkIGZyb20gXCIuL1BsYW50Q2FyZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQXJyb3dEb3duQVogfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmNvbnN0IHNvcnRJY29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93RG93bkFafSAvPjtcblxuY29uc3QgUGxhbnRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbcGxhbnRzLCBzZXRQbGFudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcmRlcmVkQVosIHNldE9yZGVyZWRBWl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzUGV0RnJpZW5kbHksc2V0SXNQZXRGcmllbmRseV0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW2ZpbHRlclBsYW50cywgc2V0RmlsdGVyUGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDA3L2FwaS9wbGFudHNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0UGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTb3J0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNvcnRlZFBsYW50cyA9IFsuLi5wbGFudHNdO1xuXHRcdGlmIChvcmRlcmVkQVogPT09IDAgfHwgb3JkZXJlZEFaID09PSAyKSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMoXG5cdFx0XHRcdHNvcnRlZFBsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSlcblx0XHRcdCk7XG5cdFx0XHRzZXRPcmRlcmVkQVooMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhcblx0XHRcdFx0c29ydGVkUGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDEpKVxuXHRcdFx0KTtcblx0XHRcdHNldE9yZGVyZWRBWigyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2FyZSA9IGUgPT4ge1xuICAgIGxldCBuZXdQbGFudHMgPSBbLi4ucGxhbnRzXTtcblxuICAgIHN3aXRjaCAob3JkZXJlZEFaKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzZXRGaWx0ZXJQbGFudHMoXG4gICAgICAgICAgbmV3UGxhbnRzLnNvcnQoKGEsIGIpID0+IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc2V0RmlsdGVyUGxhbnRzKFxuICAgICAgICAgIG5ld1BsYW50cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxKSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnRGlmZmljdWx0eTonKSB7XG4gICAgICBsZXQgY2FyZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbmV3UGxhbnRzID0gbmV3UGxhbnRzLmZpbHRlcihwbGFudCA9PiBwbGFudC5kaWZmaWN1bHR5ID09PSBjYXJlVmFsdWUpO1xuICAgIH1cblxuICAgIHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMpO1xuXHR9O1xuXG4gICAgY29uc3QgaGFuZGxlUGV0RnJpZW5kbHkgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3UGxhbnRzID0gWy4uLnBsYW50c107XG5cdFx0aWYgKGlzUGV0RnJpZW5kbHkpIHtcblx0XHRcdHNldEZpbHRlclBsYW50cyhuZXdQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50LnBldHMpKTtcblx0XHRcdHNldElzUGV0RnJpZW5kbHkoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRGaWx0ZXJQbGFudHMobmV3UGxhbnRzKTtcblx0XHRcdHNldElzUGV0RnJpZW5kbHkodHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBQbGFudHNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVycyc+XG5cdFx0XHR7LyogQ2FyZSBMZXZlbCBzZWxlY3RvciAqL31cblx0XHRcdDxzZWxlY3QgbmFtZT0nY2FyZS1sZXZlbCcgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2FyZShlKX0gY2xhc3NOYW1lPSdjYXJlLWxldmVsJz5cblx0XHRcdFx0PG9wdGlvbj5EaWZmaWN1bHR5Ojwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScxJz5FYXN5PC9vcHRpb24+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JzInPk1lZGl1bTwvb3B0aW9uPlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz5EaWZmaWN1bHQ8L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXG5cdFx0XHR7LyogUGV0IEZyaWVuZGx5IFBsYW50cyBPbmx5ICovfVxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3BldC1idG4nIG9uQ2xpY2s9e2hhbmRsZVBldEZyaWVuZGx5fT5cblx0XHRcdFx0IPCfkL4gXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0ey8qIEFscGhhYmV0aWNhbCBPcmRlciAqL31cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdvcmRlci1idG4nIG9uQ2xpY2s9e2hhbmRsZVNvcnR9PlxuXHRcdFx0XHR7c29ydEljb259XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuICAgICAge1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW50LWxpc3RcIj5cbiAgICAgICAgICB7ZmlsdGVyUGxhbnRzXG4gICAgICAgICAgICAuZmlsdGVyKChwbGFudCkgPT5cbiAgICAgICAgICAgICAgcGxhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocGxhbnQpID0+IChcbiAgICAgICAgICAgICAgPFBsYW50Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17cGxhbnQuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3BsYW50LmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgaW1nPXtwbGFudC5pbWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBQbGFudFNpbmdsZSA9ICgpID0+IHtcblxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvcGxhbnRzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0SXRlbShyZXMuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIGNvbnN0IGFkZExpa2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgYm9keUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9yIChsZXQga2V5IGluIGl0ZW0pXG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKGtleSwgaXRlbVtrZXldKTtcblxuICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNy9hcGkvZmF2b3VyaXRlYCwgYm9keUZvcm1EYXRhKX1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtY2FyZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLXRleHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwLXN1YnRpdGxlXCI+IOKYgO+4jyBDb25kaXRpb25zOiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj4ge2l0ZW0uY29uZGl0aW9uc308L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDwn5KmIFdhdGVyOiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGFudC1kZXRhaWxcIj57aXRlbS53YXRlcn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcC1zdWJ0aXRsZVwiPiDwn4yxIERpZmZpY3VsdHk6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYW50LWRldGFpbFwiPntpdGVtLmRpZmZpY3VsdHl9IDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3JkZXItYnRuXCIgb25DbGljaz17YWRkTGlrZX0+XG4gICAgICAgICAgICAgIFNhdmUg4p2k77iPXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnRTaW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiQ29udGFjdCIsIkFib3V0VXMiLCJNeVBsYW50cyIsIlBsYW50U2luZ2xlIiwiTGF5b3V0IiwiRmF2U2luZ2xlIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNoaWxkcmVuIiwiSGVhZGVyIiwiRm9vdGVyIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiYXhpb3MiLCJmYXZQbGFudCIsInNldEZhdlBsYW50IiwiaWQiLCJzZXRJZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibmFtZSIsImltZyIsImNvbmRpdGlvbnMiLCJ3YXRlciIsImRpZmZpY3VsdHkiLCJQbGFudExpc3QiLCJGYVRyYXNoQWx0IiwiTGlrZUNhcmQiLCJwcm9wcyIsImdhcGkiLCJ3aW5kb3ciLCJDTElFTlRfSUQiLCJBUElfS0VZIiwiRElTQ09WRVJZX0RPQ1MiLCJTQ09QRVMiLCJhZGRDYWxlbmRhckV2ZW50IiwibG9hZCIsImNsaWVudCIsImluaXQiLCJhcGlLZXkiLCJjbGllbnRJZCIsImRpc2NvdmVyeURvY3MiLCJzY29wZSIsImF1dGgyIiwiZ2V0QXV0aEluc3RhbmNlIiwic2lnbkluIiwiZXZlbnQiLCJyZXF1ZXN0IiwiY2FsZW5kYXIiLCJldmVudHMiLCJpbnNlcnQiLCJleGVjdXRlIiwib3BlbiIsImh0bWxMaW5rIiwibGlzdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlc3BvbnNlIiwicmVzdWx0IiwiaXRlbXMiLCJteVBsYW50cyIsInNldE15UGxhbnRzIiwibWFwIiwibXlQbGFudCIsIlBsYW50Q2FyZCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dEb3duQVoiLCJzb3J0SWNvbiIsInBsYW50cyIsInNldFBsYW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsIm9yZGVyZWRBWiIsInNldE9yZGVyZWRBWiIsImlzUGV0RnJpZW5kbHkiLCJzZXRJc1BldEZyaWVuZGx5IiwiZmlsdGVyUGxhbnRzIiwic2V0RmlsdGVyUGxhbnRzIiwidXBkYXRlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU29ydCIsInNvcnRlZFBsYW50cyIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNhcmUiLCJuZXdQbGFudHMiLCJjYXJlVmFsdWUiLCJwYXJzZUludCIsImZpbHRlciIsInBsYW50IiwiaGFuZGxlUGV0RnJpZW5kbHkiLCJwZXRzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIml0ZW0iLCJzZXRJdGVtIiwiYWRkTGlrZSIsInByZXZlbnREZWZhdWx0IiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==