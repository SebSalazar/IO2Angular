(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div style=\"font-family: Comic Sans MS;\" class=\"container\">\n  <div *ngIf=\"!nombre; else juego\">\n    <app-titulo></app-titulo>\n    <div *ngIf=\"!palabras; else elseBlock\">\n      <h4>{{tituloForm}}</h4>\n      <hr>\n      <div>\n        <h5>Espero que hubieras estudiado, tendras que resolver los siguientes ahorcados para llegar al final </h5>\n        <p>Iremos por pasos tendras que ganar los 5 juegos de ahorcado!</p>\n      </div>\n      <form (ngSubmit)=\"guardar(forma)\" #forma=\"ngForm\" novalidate=\"\">\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">Palabra 1</label>\n            <p>El metodo de Karush-Kuhn-Tucker determina un optimo _____</p>\n            <div class=\"form-group row\">\n              <label class=\"col-2 col-form-label\">&nbsp;</label>\n              <div class=\"input-group col-md-8\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cambio(1)\" >\n                  Jugar\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">Palabra 2</label>\n            <p>Es un software especializado para solucionar problemas de PNLC _____</p>\n            <div class=\"form-group row\">\n              <label class=\"col-2 col-form-label\">&nbsp;</label>\n              <div class=\"input-group col-md-8\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cambio(2)\">\n                  Jugar\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Palabra 3</label>\n          <p>Las restricciones lineales generan un espacio de solucion _____</p>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"input-group col-md-8\">\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cambio(3)\">\n                Jugar\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Palabra 4</label>\n          <p>La funcion es concava para _____</p>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"input-group col-md-8\">\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cambio(4)\">\n                Jugar\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Palabra 5</label>\n          <p>En el metodo de lagrange se hallan las  _____ parciales</p>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"input-group col-md-8\">\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cambio(5)\">\n                Jugar\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <ng-template #elseBlock>\n      <div>\n        <h4>{{tituloFormNombre}}</h4>\n        <hr>\n        <form #otroForm (ngSubmit)=\"usuario(forma)\" #forma=\"ngForm\" novalidate=\"\">\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">Nombre</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Nombre de usuario\" name=\"nombreUsuario\"\n                [(ngModel)]=\"nombreUsuario\" required>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"input-group col-md-8\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                Siguiente\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-template>\n  </div>\n  <ng-template #juego>\n    <app-titulo></app-titulo>\n    <div class=\"row\">\n      <div class=\"col-md-3\" id=\"c\">\n          <div>\n            <div>\n              <br>\n              <h2> Acciones</h2>\n            </div>\n            <div>\n              <br>\n              <button (click)='nuevoJuego()' class=\"btn btn-primary\">\n                Nuevo juego\n              </button>\n            </div>\n            <div>\n              <br>\n              <div class=\"col-md-6\">\n                <input class=\"form-control\" type=\"text\" name=\"letra\" [(ngModel)]=\"letra\" size=\"1\">\n              </div>\n            </div>\n            <div>\n              <br>\n              <button type=\"button\" (click)='enviarLetra(letra);' class=\"btn btn-primary\">\n                Enviar letra\n              </button>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-4\" id=\"a\">\n        <app-estadisticas [error]=\"mostrar\" [acierto]=\"match\" [usadas]=\"usadas\"></app-estadisticas>\n      </div>\n      <div class=\"col-md-4\" id=\"b\">\n        <app-figura [figura]=\"mostrar\" [palabraMostrar]=\"adivinar\"></app-figura>\n      </div>\n    </div>\n    <app-mensajes [mensaje]=\"mensaje\"></app-mensajes>\n    <div>\n        <h6 align=\"center\">Grupo 2: PNLC - Desarrollado por Sebastian Salazar</h6>\n    </div>\n  </ng-template>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadisticas/estadisticas.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadisticas/estadisticas.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<h2>Estadísticas</h2>\n<br>\n<h3>Aciertos: {{acierto}}</h3>\n<br>\n<h3>Desaciertos: {{error}}</h3>\n<br>\n<h3>Total de jugadas: {{acierto + error}}</h3>\n<br><br><br>\n<h3>Usadas:\n<div class=\"row\">\n   <div *ngFor=\"let usada of usadas\">\n    &nbsp; {{usada}}\n   </div>\n</div>\n</h3>\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figura/figura.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/figura/figura.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img style=\"width:350px; height:350px;\" src=\"assets/img/{{figura}}.png\" class=\"ahorcado-img\">\n<div><br>\n    <h3 align=\"center\">{{palabraMostrar}}</h3>\n    <br>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Site footer -->\n<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <h6>Informacion</h6>\n        <p class=\"text-justify\">Pagina desarrollada en Angular por Sebastian Salazar - 20172020016</p>\n        <p class=\"text-justify\">Contacto:<a href=\"#\"> salazars804@gmail.com</a></p>\n      </div>\n\n      <div class=\"col-xs-6 col-md-3\">\n        <h6>Tematicas</h6>\n        <ul class=\"footer-links\">\n          <li><a href=\"#\">PNLS</a></li>\n          <li><a href=\"#\">PNLC</a></li>\n          <li><a href=\"#\">PNLF</a></li>\n          <li><a href=\"#\">About</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-xs-6 col-md-3\">\n        <h6>Videos de las tematicas</h6>\n        <ul class=\"footer-links\">\n          <iframe class=\"embed-responsive-item\" src=\"https://www.infobae.com/new-resizer/qo8D6WRUnyLucrSa76XPgTpse54=/420x236/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/D6C4XHO2RRFFJPNGPS5X6HRF2Q.gif\"></iframe>\n          <iframe class=\"embed-responsive-item\" src=\"https://media.tenor.com/images/904bd2466bc3d54df7b10e6be7776bc9/tenor.gif\"></iframe>\n        </ul>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <p class=\"copyright-text\">Copyright &copy; 2020 - Footer por\n          <a href=\"#\">Scanfcode</a>.\n        </p>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"social-icons\">\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n          <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensajes/mensajes.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensajes/mensajes.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"p\">\n  <h4>Mensajes: </h4>\n  <h4 align=\"center\">{{mensaje}}</h4>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a><img src=\"src/assets/img/Logo_UD.png\" class=\"navbar-brand\" style=\"height: 50px; width: 50px;\" href=\"#\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" href=\"#\">Ultimos temas de PNLC</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Tematicas\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" routerLinkActive=\"active\">\n          <a class=\"dropdown-item\" href=\"#\">PNLS</a>\n          <a class=\"dropdown-item\" href=\"#\">PNLC</a>\n          <a class=\"dropdown-item\" href=\"#\"> PNLS</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Mas temas..</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Politicas</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar juego\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Buscar</button>\n    </form>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/titulo/titulo.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/titulo/titulo.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"centro col-md-12\" id=\"bordes\">\n  <br>\n  <h3 style=\"font-family: Comic Sans MS;\">JUEGO DEL AHORCADO</h3>\n  <h4 style=\"font-family: Comic Sans MS;\">I0 2 - PNLC</h4>\n  <br>\n</div>\n<br>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#a,\n#b,\n#c {\n  float: left;\n  border: 1px solid;\n  margin: 15px;\n}\n\nsection {\n  width: 75%;\n  margin: 0 auto;\n  display:flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhLFxuI2IsXG4jYyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6ZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PNLC';
        this.cont = 0;
        this.palabras = false;
        this.nombre = false;
        this.tituloForm = 'Ingresa 5 palabras';
        this.tituloFormNombre = 'Ingresa tu nombre';
        this.nombreUsuario = "";
        this.auxNombre = "";
        this.seleccionada = "";
        this.letra = "";
        this.mostrar = 0;
        this.match = 0;
        this.adivinar = "";
        this.resultado = '';
        this.mensaje = '';
        this.final = false;
        this.usadas = [];
        this.palabrasArray = {
            palabra1: 'local',
            palabra2: 'cplex',
            palabra3: 'convexo',
            palabra4: 'maximizar',
            palabra5: 'derivadas'
        };
    }
    AppComponent.prototype.guardar = function (forma) {
        var arrayPalabras = [this.palabrasArray.palabra1.toUpperCase(), this.palabrasArray.palabra2.toUpperCase(), this.palabrasArray.palabra3.toUpperCase(), this.palabrasArray.palabra4.toUpperCase(), this.palabrasArray.palabra5.toUpperCase()];
        var pos = Math.floor(Math.random() * 4);
        this.palabras = true;
        if (this.cont === 1) {
            this.seleccionada = arrayPalabras[0];
        }
        else if (this.cont === 2) {
            this.seleccionada = arrayPalabras[1];
        }
        else if (this.cont === 3) {
            this.seleccionada = arrayPalabras[2];
        }
        else if (this.cont === 4) {
            this.seleccionada = arrayPalabras[3];
        }
        else if (this.cont === 5) {
            this.seleccionada = arrayPalabras[4];
        }
        /*console.log(this.seleccionada);*/
        forma.reset();
    };
    AppComponent.prototype.usuario = function (forma) {
        /*console.log(this.nombreUsuario);*/
        console.log(this.seleccionada);
        this.adivinar = '_ '.repeat(this.seleccionada.length);
        this.nombre = true;
        this.auxNombre = this.nombreUsuario;
        forma.reset();
    };
    AppComponent.prototype.nuevoJuego = function () {
        this.palabras = false;
        this.nombre = false;
        this.mensaje = "";
        this.final = false;
        this.mostrar = 0;
        this.match = 0;
        this.letra = "";
        this.usadas = [];
    };
    AppComponent.prototype.enviarLetra = function (letra) {
        var letraUp = letra.toUpperCase();
        console.log(letraUp);
        if (this.usadas.indexOf(letraUp) >= 0) {
            console.log("hola");
            this.letra = "";
            alert("repetida");
        }
        else {
            this.usadas.push(letraUp);
            console.log(this.usadas);
            this.verificarLetra(letraUp);
        }
    };
    AppComponent.prototype.verificarLetra = function (letra) {
        if (this.final == false) {
            if (this.seleccionada.indexOf(letra) >= 0) {
                this.match++;
            }
            else {
                this.mostrar++;
            }
            this.mostrarArray = this.adivinar.split(' ');
            for (var i = 0; i < this.seleccionada.length; i++) {
                if (this.seleccionada[i] === letra) {
                    this.mostrarArray[i] = letra;
                }
            }
            this.adivinar = this.mostrarArray.join(' ');
            this.letra = '';
            this.ganador();
        }
    };
    AppComponent.prototype.ganador = function () {
        var aux = this.adivinar.split(' ');
        this.resultado = aux.join('');
        if (this.resultado == this.seleccionada) {
            this.mensaje = "Ganaste ".concat(this.auxNombre).concat("!");
            console.log(this.auxNombre);
            this.final = true;
        }
        if (this.mostrar > 9) {
            this.mensaje = this.auxNombre.concat(", inténtalo de nuevo!");
            this.final = true;
        }
    };
    AppComponent.prototype.cambio = function (xd) {
        this.cont = xd;
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_figura_figura_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/figura/figura.component */ "./src/app/components/figura/figura.component.ts");
/* harmony import */ var _components_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/estadisticas/estadisticas.component */ "./src/app/components/estadisticas/estadisticas.component.ts");
/* harmony import */ var _components_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/titulo/titulo.component */ "./src/app/components/titulo/titulo.component.ts");
/* harmony import */ var _components_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mensajes/mensajes.component */ "./src/app/components/mensajes/mensajes.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_figura_figura_component__WEBPACK_IMPORTED_MODULE_5__["FiguraComponent"],
                _components_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_6__["EstadisticasComponent"],
                _components_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_7__["TituloComponent"],
                _components_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_8__["MensajesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/estadisticas/estadisticas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/estadisticas/estadisticas.component.ts ***!
  \*******************************************************************/
/*! exports provided: EstadisticasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasComponent", function() { return EstadisticasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var EstadisticasComponent = /** @class */ (function () {
    function EstadisticasComponent() {
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('acierto'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EstadisticasComponent.prototype, "acierto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('error'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EstadisticasComponent.prototype, "error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('usadas'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EstadisticasComponent.prototype, "usadas", void 0);
    EstadisticasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estadisticas',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./estadisticas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadisticas/estadisticas.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EstadisticasComponent);
    return EstadisticasComponent;
}());



/***/ }),

/***/ "./src/app/components/figura/figura.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/figura/figura.component.ts ***!
  \*******************************************************/
/*! exports provided: FiguraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguraComponent", function() { return FiguraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FiguraComponent = /** @class */ (function () {
    function FiguraComponent() {
    }
    FiguraComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('figura'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FiguraComponent.prototype, "figura", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('palabraMostrar'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FiguraComponent.prototype, "palabraMostrar", void 0);
    FiguraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-figura',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./figura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/figura/figura.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FiguraComponent);
    return FiguraComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-footer {\r\n  background-color: #26272b;\r\n  background-image: url(https://storage.googleapis.com/www-paredro-com/uploads/2017/01/1c1e2847469925.587bc907beca4.gif);\r\n  padding: 45px 0 20px;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: #737373;\r\n}\r\n.site-footer hr {\r\n  border-top-color: #bbb;\r\n  opacity: 0.5;\r\n}\r\n.site-footer hr.small {\r\n  margin: 20px 0;\r\n}\r\n.site-footer h6 {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  margin-top: 5px;\r\n  letter-spacing: 2px;\r\n}\r\n.site-footer a {\r\n  color: #737373;\r\n}\r\n.site-footer a:hover {\r\n  color: #3366cc;\r\n  text-decoration: none;\r\n}\r\n.footer-links {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.footer-links li {\r\n  display: block;\r\n}\r\n.footer-links a {\r\n  color: #737373;\r\n}\r\n.footer-links a:active,\r\n.footer-links a:focus,\r\n.footer-links a:hover {\r\n  color: #3366cc;\r\n  text-decoration: none;\r\n}\r\n.footer-links.inline li {\r\n  display: inline-block;\r\n}\r\n.site-footer .social-icons {\r\n  text-align: right;\r\n}\r\n.site-footer .social-icons a {\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-left: 6px;\r\n  margin-right: 0;\r\n  border-radius: 100%;\r\n  background-color: #33353d;\r\n}\r\n.copyright-text {\r\n  margin: 0;\r\n}\r\n@media (max-width: 991px) {\r\n  .site-footer [class^=\"col-\"] {\r\n    margin-bottom: 30px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .site-footer {\r\n    padding-bottom: 0;\r\n  }\r\n  .site-footer .copyright-text,\r\n  .site-footer .social-icons {\r\n    text-align: center;\r\n  }\r\n}\r\n.social-icons {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.social-icons li {\r\n  display: inline-block;\r\n  margin-bottom: 4px;\r\n}\r\n.social-icons li.title {\r\n  margin-right: 15px;\r\n  text-transform: uppercase;\r\n  color: #96a2b2;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n}\r\n.social-icons a {\r\n  background-color: #eceeef;\r\n  color: #818a91;\r\n  font-size: 16px;\r\n  display: inline-block;\r\n  line-height: 44px;\r\n  width: 44px;\r\n  height: 44px;\r\n  text-align: center;\r\n  margin-right: 8px;\r\n  border-radius: 100%;\r\n  transition: all 0.2s linear;\r\n}\r\n.social-icons a:active,\r\n.social-icons a:focus,\r\n.social-icons a:hover {\r\n  color: #fff;\r\n  background-color: #29aafe;\r\n}\r\n.social-icons.size-sm a {\r\n  line-height: 34px;\r\n  height: 34px;\r\n  width: 34px;\r\n  font-size: 14px;\r\n}\r\n.social-icons a.facebook:hover {\r\n  background-color: #3b5998;\r\n}\r\n.social-icons a.twitter:hover {\r\n  background-color: #00aced;\r\n}\r\n.social-icons a.linkedin:hover {\r\n  background-color: #007bb6;\r\n}\r\n.social-icons a.dribbble:hover {\r\n  background-color: #ea4c89;\r\n}\r\n@media (max-width: 767px) {\r\n  .social-icons li.title {\r\n    display: block;\r\n    margin-right: 0;\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsc0hBQXNIO0VBQ3RILG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQiwyQkFBMkI7QUFDN0I7QUFDQTs7O0VBR0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjcyYjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3d3dy1wYXJlZHJvLWNvbS91cGxvYWRzLzIwMTcvMDEvMWMxZTI4NDc0Njk5MjUuNTg3YmM5MDdiZWNhNC5naWYpO1xyXG4gIHBhZGRpbmc6IDQ1cHggMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzczNzM3MztcclxufVxyXG4uc2l0ZS1mb290ZXIgaHIge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNiYmI7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5zaXRlLWZvb3RlciBoci5zbWFsbCB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLnNpdGUtZm9vdGVyIGg2IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4uc2l0ZS1mb290ZXIgYSB7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbn1cclxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzM2NmNjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9vdGVyLWxpbmtzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZm9vdGVyLWxpbmtzIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZm9vdGVyLWxpbmtzIGEge1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG59XHJcbi5mb290ZXItbGlua3MgYTphY3RpdmUsXHJcbi5mb290ZXItbGlua3MgYTpmb2N1cyxcclxuLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcclxuICBjb2xvcjogIzMzNjZjYztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzUzZDtcclxufVxyXG4uY29weXJpZ2h0LXRleHQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNpdGUtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LFxyXG4gIC5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLnNvY2lhbC1pY29ucyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc29jaWFsLWljb25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjOTZhMmIyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcclxuICBjb2xvcjogIzgxOGE5MTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsXHJcbi5zb2NpYWwtaWNvbnMgYTpmb2N1cyxcclxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhYWZlO1xyXG59XHJcbi5zb2NpYWwtaWNvbnMuc2l6ZS1zbSBhIHtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcclxufVxyXG4uc29jaWFsLWljb25zIGEubGlua2VkaW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjY7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0Yzg5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mensajes/mensajes.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mensajes/mensajes.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#p {\n    border: 1px solid;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW5zYWplcy9tZW5zYWplcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW5zYWplcy9tZW5zYWplcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Age1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/mensajes/mensajes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mensajes/mensajes.component.ts ***!
  \***********************************************************/
/*! exports provided: MensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesComponent", function() { return MensajesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MensajesComponent = /** @class */ (function () {
    function MensajesComponent() {
    }
    MensajesComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mensaje'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MensajesComponent.prototype, "mensaje", void 0);
    MensajesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensajes',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mensajes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensajes/mensajes.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mensajes.component.css */ "./src/app/components/mensajes/mensajes.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MensajesComponent);
    return MensajesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/titulo/titulo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/titulo/titulo.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.centro {\n    text-align: center;\n}\n\n#bordes{\n    border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXR1bG8vdGl0dWxvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpdHVsby90aXR1bG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jZW50cm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2JvcmRlc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/titulo/titulo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/titulo/titulo.component.ts ***!
  \*******************************************************/
/*! exports provided: TituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloComponent", function() { return TituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TituloComponent = /** @class */ (function () {
    function TituloComponent() {
    }
    TituloComponent.prototype.ngOnInit = function () {
    };
    TituloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-titulo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./titulo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/titulo/titulo.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./titulo.component.css */ "./src/app/components/titulo/titulo.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TituloComponent);
    return TituloComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kaosk\Documents\Universidad\AngularACM\AhorcadoIO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map