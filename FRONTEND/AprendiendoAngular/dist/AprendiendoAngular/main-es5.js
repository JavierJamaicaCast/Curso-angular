function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-slider></app-slider>\r\n\r\n<div class=\"center\">\r\n  <section id=\"content\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n  </section>\r\n  <app-sidebar></app-sidebar>\r\n</div>\r\n<app-footer></app-footer>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>blog works!</p>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<footer id=\"footer\">\n  <div class=\"center\">\n    <p>&copy; Máster en frameworks para JavaScript de victorroblesweb.es</p>\n  </div>\n</footer>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html": (
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html ***!
    \*******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormularioFormularioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>formulario works!</p>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header id=\"header\">\n    <div class=\"center\">\n        <!-- LOGO -->\n        <div id=\"logo\">\n            <img src=\"assets/images/angular.svg\" class=\"app-logo\" alt=\"Logotipo\" />\n            <span id=\"brand\">\n                <strong>Curso</strong>Angular\n            </span>\n        </div>\n        \n        <!-- MENU -->\n        <nav id=\"menu\">\n            <ul>\n                <li>\n                    <a href=\"index.html\">Inicio</a>\n                </li>\n                <li>\n                    <a href=\"blog.html\">Blog</a>\n                </li>\n                <li>\n                    <a href=\"formulario.html\">Formulario</a>\n                </li>\n                <li>\n                    <a href=\"#\">Pagina 1</a>\n                </li>\n                <li>\n                    <a href=\"#\">Pagina 2</a>\n                </li>                            \n            </ul>\n        </nav>\n\n        <!--LIMPIAR FLOTADOS-->\n        <div class=\"clearfix\"></div>\n    </div>\n</header>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>home works!</p>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-componente/mi-componente.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-componente/mi-componente.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMiComponenteMiComponenteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>{{ titulo }}</h1>\r\n<p>{{ comentario }}</p>\r\n<p>{{ year }}</p>\r\n<p>{{ year }}</p>\r\n<hr />\r\n<button (click)=\"ocultarPeliculas()\">Ocultar peliculas</button>\r\n<div *ngIf=\"mostrarPeliculas\">\r\n  <app-peliculas></app-peliculas>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina/pagina.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina/pagina.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaginaPaginaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>pagina works!</p>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/peliculas/peliculas.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/peliculas/peliculas.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPeliculasPeliculasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>{{titulo}}</h1>\n<button (click)=\"cambiarTitulo()\">Pulsame</button>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/pruebas/pruebas.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pruebas/pruebas.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPruebasPruebasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>pruebas works!</p>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<aside id=\"sidebar\">\n    <div id=\"nav-blog\" class=\"sidebar-item\">\n        <h3>Puedes hacer esto</h3>\n        <a href=\"#\" class=\"btn btn-success\">Crear artículo</a>\n    </div>\n\n    <div id=\"search\" class=\"sidebar-item\">\n            <h3>Buscador</h3>\n            <p>Encuentra el artículo que buscas</p>\n            <form>\n                <input type=\"text\" name=\"search\" />\n                <input type=\"submit\" name=\"submit\" value=\"Buscar\" class=\"btn\" />\n            </form>\n    </div>\n</aside>\n\n<div class=\"clearfix\"></div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div id=\"slider\" class=\"slider-big\">\n    <h1>Bienvenido al Curso de Angular con Víctor Robles de victorroblesweb.es</h1>\n    <a href=\"#\" class=\"btn-white\">Ir al blog</a>\n</div>";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'AprendiendoAngular';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app.routing */"./src/app/app.routing.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _components_mi_componente_mi_componente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/mi-componente/mi-componente.component */"./src/app/components/mi-componente/mi-componente.component.ts");
    /* harmony import */
    var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/peliculas/peliculas.component */"./src/app/components/peliculas/peliculas.component.ts");
    /* harmony import */
    var _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/pruebas/pruebas.component */"./src/app/components/pruebas/pruebas.component.ts");
    /* harmony import */
    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/header/header.component */"./src/app/components/header/header.component.ts");
    /* harmony import */
    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/slider/slider.component */"./src/app/components/slider/slider.component.ts");
    /* harmony import */
    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/sidebar/sidebar.component */"./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/footer/footer.component */"./src/app/components/footer/footer.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/blog/blog.component */"./src/app/components/blog/blog.component.ts");
    /* harmony import */
    var _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/formulario/formulario.component */"./src/app/components/formulario/formulario.component.ts");
    /* harmony import */
    var _components_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/pagina/pagina.component */"./src/app/components/pagina/pagina.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_mi_componente_mi_componente_component__WEBPACK_IMPORTED_MODULE_5__["MiComponente"], _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_6__["PeliculasComponent"], _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_7__["PruebasComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["FormularioComponent"], _components_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_15__["PaginaComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]],
      providers: [_app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingProviders"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/app.routing.ts": (
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/
  /*! exports provided: appRoutingProviders, routing */
  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function () {
      return appRoutingProviders;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/blog/blog.component */"./src/app/components/blog/blog.component.ts");
    /* harmony import */
    var _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/formulario/formulario.component */"./src/app/components/formulario/formulario.component.ts");
    /* harmony import */
    var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/peliculas/peliculas.component */"./src/app/components/peliculas/peliculas.component.ts");
    /* harmony import */
    var _components_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/pagina/pagina.component */"./src/app/components/pagina/pagina.component.ts");

    //Importar componentes a los cuales quiero hacer una pagina exclusiva

    // Array de rutas
    var appRoutes = [{
      path: "",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "blog",
      component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
    }, {
      path: "formulario",
      component: _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"]
    }, {
      path: "peliculas",
      component: _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasComponent"]
    }, {
      path: "pagina-de-pruebas",
      component: _components_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_6__["PaginaComponent"]
    }];
    // Exportar el modulo de rutas
    var appRoutingProviders = [];
    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);

    /***/
  }),
  /***/"./src/app/components/blog/blog.component.css": (
  /*!****************************************************!*\
    !*** ./src/app/components/blog/blog.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/components/blog/blog.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/blog/blog.component.ts ***!
    \***************************************************/
  /*! exports provided: BlogComponent */
  /***/
  function srcAppComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }
      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return BlogComponent;
    }();
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./blog.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./blog.component.css */"./src/app/components/blog/blog.component.css"))["default"]]
    })], BlogComponent);

    /***/
  }),
  /***/"./src/app/components/footer/footer.component.css": (
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/components/footer/footer.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.css */"./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);

    /***/
  }),
  /***/"./src/app/components/formulario/formulario.component.css": (
  /*!****************************************************************!*\
    !*** ./src/app/components/formulario/formulario.component.css ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFormularioFormularioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/components/formulario/formulario.component.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/components/formulario/formulario.component.ts ***!
    \***************************************************************/
  /*! exports provided: FormularioComponent */
  /***/
  function srcAppComponentsFormularioFormularioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormularioComponent", function () {
      return FormularioComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FormularioComponent = /*#__PURE__*/function () {
      function FormularioComponent() {
        _classCallCheck(this, FormularioComponent);
      }
      _createClass(FormularioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FormularioComponent;
    }();
    FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formulario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./formulario.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./formulario.component.css */"./src/app/components/formulario/formulario.component.css"))["default"]]
    })], FormularioComponent);

    /***/
  }),
  /***/"./src/app/components/header/header.component.css": (
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/components/header/header.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HeaderComponent;
    }();
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.css */"./src/app/components/header/header.component.css"))["default"]]
    })], HeaderComponent);

    /***/
  }),
  /***/"./src/app/components/home/home.component.css": (
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/components/home/home.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.css */"./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);

    /***/
  }),
  /***/"./src/app/components/mi-componente/mi-componente.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/mi-componente/mi-componente.component.ts ***!
    \*********************************************************************/
  /*! exports provided: MiComponente */
  /***/
  function srcAppComponentsMiComponenteMiComponenteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MiComponente", function () {
      return MiComponente;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MiComponente = /*#__PURE__*/function () {
      function MiComponente() {
        _classCallCheck(this, MiComponente);
        this.mostrarPeliculas = true;
        this.titulo = "Hola mundo soy mi componente";
        this.comentario = "Comentario del componente";
        this.year = 2112;
        console.log("Componente mi-componente cargado");
        console.log(this.titulo, this.comentario, this.year);
      }
      _createClass(MiComponente, [{
        key: "ocultarPeliculas",
        value: function ocultarPeliculas() {
          this.mostrarPeliculas = false;
        }
      }]);
      return MiComponente;
    }();
    MiComponente = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "mi-componente",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./mi-componente.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-componente/mi-componente.component.html"))["default"]
    })], MiComponente);

    /***/
  }),
  /***/"./src/app/components/pagina/pagina.component.css": (
  /*!********************************************************!*\
    !*** ./src/app/components/pagina/pagina.component.css ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsPaginaPaginaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hL3BhZ2luYS5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/components/pagina/pagina.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/pagina/pagina.component.ts ***!
    \*******************************************************/
  /*! exports provided: PaginaComponent */
  /***/
  function srcAppComponentsPaginaPaginaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaginaComponent", function () {
      return PaginaComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PaginaComponent = /*#__PURE__*/function () {
      function PaginaComponent() {
        _classCallCheck(this, PaginaComponent);
      }
      _createClass(PaginaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return PaginaComponent;
    }();
    PaginaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagina',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./pagina.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina/pagina.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./pagina.component.css */"./src/app/components/pagina/pagina.component.css"))["default"]]
    })], PaginaComponent);

    /***/
  }),
  /***/"./src/app/components/peliculas/peliculas.component.css": (
  /*!**************************************************************!*\
    !*** ./src/app/components/peliculas/peliculas.component.css ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsPeliculasPeliculasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVsaWN1bGFzL3BlbGljdWxhcy5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/components/peliculas/peliculas.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/components/peliculas/peliculas.component.ts ***!
    \*************************************************************/
  /*! exports provided: PeliculasComponent */
  /***/
  function srcAppComponentsPeliculasPeliculasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function () {
      return PeliculasComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PeliculasComponent = /*#__PURE__*/function () {
      function PeliculasComponent() {
        _classCallCheck(this, PeliculasComponent);
        this.titulo = "Componente peliculas";
        console.log("constructor lanzado");
      }
      _createClass(PeliculasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Evento oninit lanzado");
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          console.log("Docheck lanzado");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("El componente se va a eliminar");
        }
      }, {
        key: "cambiarTitulo",
        value: function cambiarTitulo() {
          this.titulo = "Titulo cambiado";
        }
      }]);
      return PeliculasComponent;
    }();
    PeliculasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-peliculas",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./peliculas.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/peliculas/peliculas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./peliculas.component.css */"./src/app/components/peliculas/peliculas.component.css"))["default"]]
    })], PeliculasComponent);

    /***/
  }),
  /***/"./src/app/components/pruebas/pruebas.component.css": (
  /*!**********************************************************!*\
    !*** ./src/app/components/pruebas/pruebas.component.css ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsPruebasPruebasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJ1ZWJhcy9wcnVlYmFzLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/components/pruebas/pruebas.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/pruebas/pruebas.component.ts ***!
    \*********************************************************/
  /*! exports provided: PruebasComponent */
  /***/
  function srcAppComponentsPruebasPruebasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PruebasComponent", function () {
      return PruebasComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PruebasComponent = /*#__PURE__*/function () {
      function PruebasComponent() {
        _classCallCheck(this, PruebasComponent);
      }
      _createClass(PruebasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return PruebasComponent;
    }();
    PruebasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pruebas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./pruebas.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/pruebas/pruebas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./pruebas.component.css */"./src/app/components/pruebas/pruebas.component.css"))["default"]]
    })], PruebasComponent);

    /***/
  }),
  /***/"./src/app/components/sidebar/sidebar.component.css": (
  /*!**********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.css ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/components/sidebar/sidebar.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/
  /*! exports provided: SidebarComponent */
  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }
      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return SidebarComponent;
    }();
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sidebar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sidebar.component.css */"./src/app/components/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);

    /***/
  }),
  /***/"./src/app/components/slider/slider.component.css": (
  /*!********************************************************!*\
    !*** ./src/app/components/slider/slider.component.css ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsSliderSliderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/components/slider/slider.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/slider/slider.component.ts ***!
    \*******************************************************/
  /*! exports provided: SliderComponent */
  /***/
  function srcAppComponentsSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }
      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return SliderComponent;
    }();
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./slider.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./slider.component.css */"./src/app/components/slider/slider.component.css"))["default"]]
    })], SliderComponent);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\javie\Documents\Proyectos\E process med\Aprendizaje\Curso angular\FRONTEND\AprendiendoAngular\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map