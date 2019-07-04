webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
var _jsxFileName = "/home/kimjonguk/zerocho-NodeBird/ch1/front/pages/index.js";



var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: "넛지"
    },
    content: "이새기 뭐라는지 하나도 모르겠네",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MDNfMTkg/MDAxNDk5MDU5MDAyNzUw.Sfl9pMVF4t05vyKTIaZNopbUlEhYJSqWu_QlmihW-Lsg.HAS5NsYee9lAZDbrbZvaIm0iz70gCqZliVyGa6TnHfUg.JPEG.dlgydnjs2004/16790130_1762078090786540_944302028073467904_n.jpg?type=w800"
  }]
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, dummy.isLoggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), dummy.mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home); // <Form encType="multipart/from-data" /> 이미지업로드를 위함

/***/ })

})
//# sourceMappingURL=index.js.d68775934819accebc3f.hot-update.js.map