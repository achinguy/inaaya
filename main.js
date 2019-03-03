(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Introduction-->\n     <section id=\"about\" class=\"introduction scrollto\" *ngIf=\"intro\">\n\n      <div class=\"row clearfix\">\n\n          <div class=\"col-3\">\n              <div class=\"section-heading\">\n                  <h3>{{intro.tagline}}</h3>\n                  <h2 class=\"section-title\">{{intro.title}}</h2>\n                  <p class=\"section-subtitle\">{{intro.description}}</p>\n              </div>\n\n          </div>\n\n          <div class=\"col-2-3\" *ngIf=\"features\">\n              <div *ngFor=\"let feature of features\">\n                <app-feature-block [feature]=\"feature\"></app-feature-block>\n          </div>\n          </div>\n\n      </div>\n\n\n  </section>\n  <!--End of Introduction-->\n"

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(config) {
        this.config = config;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'intro');
        this.getBlockData('features');
    };
    AboutPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.intro = data;
            console.log(_this.intro);
        });
    };
    AboutPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.features = data;
            console.log(_this.features);
        });
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
/* harmony import */ var _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-block/feature-block.component */ "./src/app/about/feature-block/feature-block.component.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]
            ],
            declarations: [_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"], _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_3__["FeatureBlockComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.html":
/*!******************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Icon Block-->\n<div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\" >\n    <!--Icon-->\n    <div class=\"icon\">\n        <i class=\"fa fa-{{feature.icon}} fa-2x\"></i>\n    </div>\n    <!--Icon Block Description-->\n    <div class=\"icon-block-description\">\n        <h4>{{feature.title}}</h4>\n        <p>{{feature.description}}</p>\n    </div>\n</div>\n<!--End of Icon Block-->\n"

/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.ts ***!
  \****************************************************************/
/*! exports provided: FeatureBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureBlockComponent", function() { return FeatureBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureBlockComponent = /** @class */ (function () {
    function FeatureBlockComponent() {
    }
    FeatureBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureBlockComponent.prototype, "feature", void 0);
    FeatureBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-block',
            template: __webpack_require__(/*! ./feature-block.component.html */ "./src/app/about/feature-block/feature-block.component.html"),
            styles: [__webpack_require__(/*! ./feature-block.component.css */ "./src/app/about/feature-block/feature-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureBlockComponent);
    return FeatureBlockComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _routegaurd_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routegaurd.service */ "./src/app/routegaurd.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'About', loadChildren: function () { return _about_about_module__WEBPACK_IMPORTED_MODULE_18__["AboutModule"]; } },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'Signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"], outlet: 'popup' },
    { path: 'Home', loadChildren: function () { return _home_home_module__WEBPACK_IMPORTED_MODULE_17__["HomeModule"]; } },
    { path: 'Services', loadChildren: function () { return _services_services_module__WEBPACK_IMPORTED_MODULE_19__["ServicesModule"]; } },
    { path: 'Testimonials', component: _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__["TestimonialComponent"] },
    { path: 'Gallery', loadChildren: function () { return _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_20__["GalleryModule"]; } },
    { path: 'Clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"] },
    { path: 'subscribe', component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__["SubscribeComponent"], outlet: 'popup' },
    { path: 'Dashboard', loadChildren: function () { return _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["UserDashBoardModule"]; }, canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_9__["RoutegaurdService"]] },
    { path: 'Blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_9__["RoutegaurdService"]] },
    { path: 'article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"] },
    { path: 'article-edit/:id', component: _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_13__["ArticleEditComponent"], canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_9__["RoutegaurdService"]] },
    { path: 'article-create', component: _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_14__["ArticleCreateComponent"], canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_9__["RoutegaurdService"]] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n    <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n    <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n    <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n    <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n\n<div id=\"wrapper\">\n    <!--Main Content Area-->\n    <main id=\"content\">\n      <app-navigation></app-navigation>\n        <router-outlet></router-outlet>\n      <app-footer></app-footer>\n      <router-outlet name=\"popup\"></router-outlet>\n    </main>\n    <!--End Main Content Area-->\n\n\n\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!!jquery__WEBPACK_IMPORTED_MODULE_1__["prototype"].enllax) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).enllax();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pager.service */ "./src/app/pager.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navmenu/navmenu.component */ "./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
/* harmony import */ var _clients_client_try_client_try_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./clients/client-try/client-try.component */ "./src/app/clients/client-try/client-try.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_5__["TestimonialComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_9__["SocialComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__["PaginationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"],
                _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_25__["ArticleEditComponent"],
                _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_26__["ArticleCreateComponent"],
                _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_27__["NavmenuComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_29__["SubscribeComponent"],
                _clients_client_try_client_try_component__WEBPACK_IMPORTED_MODULE_34__["ClientTryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_28__["UserDashBoardModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_30__["HomeModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_31__["AboutModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_32__["ServicesModule"],
                _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_33__["GalleryModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot({
                    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkedOptions"],
                        useValue: {
                            gfm: true,
                            tables: true,
                            breaks: false,
                            pedantic: false,
                            sanitize: false,
                            smartLists: true,
                            smartypants: false,
                        },
                    },
                }),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_23__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_24__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"], _pager_service__WEBPACK_IMPORTED_MODULE_18__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-create/article-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/article-create/article-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 10%;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n#preview {\n    min-height: 450px;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n"

/***/ }),

/***/ "./src/app/article-create/article-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/article-create/article-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n      <div class=\"col-3 container\">\n\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n          <h4 class=\"text-center\"><i class=\"ion-log-in\"></i> Create New Post</h4>\n\n          <form [formGroup]=\"postCreateForm\" (ngSubmit)=\"addPost(postCreateForm.value)\">\n            <!-- <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" name=\"id\" placeholder=\"Id\" formControlName=\"id\">\n              <span class=\"ion-at form-control-icon\"></span>\n            </div> -->\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"title\" placeholder=\"Title\" formControlName=\"title\">\n                <span class=\"ion-at form-control-icon\"></span>\n            </div>\n            <div class=\"form-group\" hidden>\n              <input type=\"text\" class=\"form-control input-lg\" name=\"author\" placeholder=\"Author\" formControlName=\"author\">\n              <span class=\"ion-at form-control-icon\"></span>\n            </div>\n            <div class=\"form-group\" hidden>\n                <input type=\"text\" class=\"form-control input-lg\" name=\"publishdate\" placeholder=\"Publishdate\" formControlName=\"publishdate\">\n                <span class=\"ion-at form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                  <textarea rows=\"10\" class=\"form-control input-lg\" name=\"excert\" placeholder=\"Post\" formControlName=\"excert\"></textarea>\n                  <span class=\"ion-at form-control-icon\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-lg\" name=\"image\" placeholder=\"Image\" formControlName=\"image\">\n                    <span class=\"ion-at form-control-icon\"></span>\n                  </div>\n\n            <button type=\"submit\" class=\"btn btn-block btn-success\"> Save</button>\n\n          </form>\n\n        </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-2-3\">\n\n        <div class=\"panel\">\n        <div class=\"panel-body\">\n          <div markdown [data]=\"postCreateForm.value.excert\" id=\"preview\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    </div>\n  <section>\n"

/***/ }),

/***/ "./src/app/article-create/article-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-create/article-create.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCreateComponent", function() { return ArticleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleCreateComponent = /** @class */ (function () {
    function ArticleCreateComponent(fb, auth, route, router, config, location) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.config = config;
        this.location = location;
    }
    ArticleCreateComponent.prototype.ngOnInit = function () {
        this.postCreateForm = this.fb.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'author': [this.getAuthor(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'publishdate': [Date.now(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'excert': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ArticleCreateComponent.prototype.addPost = function (formData) {
        var _this = this;
        this.config.addPost(formData).subscribe(function (post) { return _this.router.navigate(["article/" + post['id']]); });
    };
    ArticleCreateComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleCreateComponent.prototype.getAuthor = function () {
        return this.auth.getUser()['id'];
    };
    ArticleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-create',
            template: __webpack_require__(/*! ./article-create.component.html */ "./src/app/article-create/article-create.component.html"),
            styles: [__webpack_require__(/*! ./article-create.component.css */ "./src/app/article-create/article-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ArticleCreateComponent);
    return ArticleCreateComponent;
}());



/***/ }),

/***/ "./src/app/article-edit/article-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 18px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n      <div class=\"container\">\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n            <h4 class=\"text-center\"><i class=\"ion-log-in\"></i>Edit the post</h4>\n              <form [formGroup]=\"postEditForm\" (ngSubmit)=\"updatePost(postEditForm.value)\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"id\" placeholder=\"Id\" formControlName=\"id\">\n                <span class=\"ion-at form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"title\" placeholder=\"Title\" formControlName=\"title\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"author\" placeholder=\"Author\" formControlName=\"author\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"publishDate\" placeholder=\"PublishDate\" formControlName=\"publishDate\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <textarea rows=\"20\" class=\"form-control input-lg\" name=\"excert\" placeholder=\"Post\" formControlName=\"excert\"></textarea>\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"image\" placeholder=\"Image\" formControlName=\"image\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-block btn-success\"> Update</button>\n            </form>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditComponent", function() { return ArticleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleEditComponent = /** @class */ (function () {
    function ArticleEditComponent(fb, auth, route, router, config, location) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.config = config;
        this.location = location;
    }
    ArticleEditComponent.prototype.ngOnInit = function () {
        this.postEditForm = this.fb.group({
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'publishdate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'excert': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.id = this.route.snapshot.params['id'] || null;
        if (this.id) {
            this.postById(this.id);
        }
    };
    ArticleEditComponent.prototype.postById = function (id) {
        var _this = this;
        this.config.getPostByID(id).subscribe(function (post) {
            _this.postEditForm.setValue({
                id: post.id,
                title: post.title,
                author: post.author,
                image: post.image,
                publishdate: post.publishdate,
                excert: post.excert
            });
        });
    };
    ArticleEditComponent.prototype.updatePost = function (formData) {
        var _this = this;
        this.config.updatePost(formData).subscribe(function () { return _this.getBack(); });
    };
    ArticleEditComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-edit',
            template: __webpack_require__(/*! ./article-edit.component.html */ "./src/app/article-edit/article-edit.component.html"),
            styles: [__webpack_require__(/*! ./article-edit.component.css */ "./src/app/article-edit/article-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ArticleEditComponent);
    return ArticleEditComponent;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Article Block-->\n<section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\" *ngIf = \"post\">\n\n        <div class=\"post-block col-1 wow fadeInUp\" data-wow-delay=\"0.4s\">\n          <app-post [post]=\"post\"></app-post>\n      </div>\n      <a (click)=getBack() class=\"button\">Back</a>\n    </div>\n</section>\n<!--End Article Block-->\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, config, location) {
        this.route = route;
        this.config = config;
        this.location = location;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        //console.log(id);
        this.getConfigById(id);
    };
    ArticleComponent.prototype.getConfigById = function (id) {
        var _this = this;
        return this.config.getPostByID(id).subscribe(function (post) { return _this.post = post; });
    };
    ArticleComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.apiUrl = 'api/users';
    }
    AuthenticationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log("operation " + operation + " failed : " + error.message + " ");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthenticationService.prototype.signup = function (formData) {
        return this.httpClient.post(this.apiUrl + "/signup", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            console.log(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('My error', [])));
    };
    AuthenticationService.prototype.login = function (formData) {
        return this.httpClient.post(this.apiUrl + "/login", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('My error', [])));
    };
    AuthenticationService.prototype.logout = function () {
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/Login']);
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getUser = function () {
        if (this.isLoggedIn) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-button {\n  position: fixed;\n  top: 10%;\n  right : 30px;\n  border-radius: 50%;\n  z-index: 99999;\n  background-color: #000000;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{blog.tagline}}</h3>\n            <h2 class=\"section-title\">{{blog.title | uppercase}}</h2>\n            <a routerLink=\"/article-create\" class=\"button\" id=\"add-button\"><i class=\"ion ion-plus\"></i>Add</a>\n        </div>\n        <div *ngFor=\"let post of pages\" class=\"post-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n          <app-post [post]=\"post\"></app-post>\n      </div>\n    </div>\n    <div class=\"row clearfix\" >\n      <app-pagination [pager]=\"pager\" (setPage)=setPage($event)></app-pagination>\n    </div>\n</section>\n<!--End of Pricing Tables-->\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pager.service */ "./src/app/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(config, pagerService) {
        this.config = config;
        this.pagerService = pagerService;
        this.blog = {};
        this.pageSize = 5;
        this.pager = {};
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.blog = this.getBlog();
        this.getPosts();
    };
    BlogComponent.prototype.getBlog = function () {
        return this.config.getConfig().blog;
    };
    BlogComponent.prototype.getPosts = function () {
        var _this = this;
        this.config.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            _this.allItems = posts;
            _this.setPage(1);
        });
    };
    BlogComponent.prototype.setPage = function (pageNumber) {
        //create a pager using paging services
        this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
        //current page post
        this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pager);
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-try/client-try.component.css":
/*!*************************************************************!*\
  !*** ./src/app/clients/client-try/client-try.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/client-try/client-try.component.html":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-try/client-try.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  client-try works!\n  {{frmParent}}\n<h1>Testing View Encapsulation Child</h1>\n"

/***/ }),

/***/ "./src/app/clients/client-try/client-try.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clients/client-try/client-try.component.ts ***!
  \************************************************************/
/*! exports provided: ClientTryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTryComponent", function() { return ClientTryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientTryComponent = /** @class */ (function () {
    function ClientTryComponent() {
        this.frmChild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClientTryComponent.prototype.ngOnInit = function () {
        this.frmChild.emit("Value from Child");
        //this.parent = frmParent;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientTryComponent.prototype, "frmParent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientTryComponent.prototype, "frmChild", void 0);
    ClientTryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-try',
            template: __webpack_require__(/*! ./client-try.component.html */ "./src/app/clients/client-try/client-try.component.html"),
            styles: [__webpack_require__(/*! ./client-try.component.css */ "./src/app/clients/client-try/client-try.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientTryComponent);
    return ClientTryComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n        background: red;\n        color: white;\n        text-transform: uppercase;\n        text-align: center;\n    }\n"

/***/ }),

/***/ "./src/app/clients/clients.component.html":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Clients-->\n<section id=\"clients\" class=\"scrollto clearfix\">\n    <div class=\"row clearfix\">\n\n        <div class=\"col-3\">\n\n            <div class=\"section-heading\">\n                <h3>TRUST</h3>\n                <h2 class=\"section-title\">Companies who use our services</h2>\n                <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod\n                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n            </div>\n            {{child}}<Br/>\n            <app-client-try [frmParent]=\"parent\" (frmChild)=initializeChild($event)></app-client-try>\n\n            <h1>Testing View Encapsulation Parent</h1>\n\n        </div>\n\n\n        <div class=\"col-2-3\">\n\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo1.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Tree</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo2.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Fingerprint</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo3.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>The Man</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo4.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Mustache</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo5.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Goat</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo6.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Justice</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo7.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Ball</span></div>\n            </a>\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo8.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Cold</span></div>\n            </a>\n\n            <a href=\"#\" class=\"col-3\">\n                <img src=\"../assets/images/company-images/company-logo9.png\" alt=\"Company\"/>\n                <div class=\"client-overlay\"><span>Cold</span></div>\n            </a>\n\n        </div>\n\n    </div>\n</section>\n<!--End of Clients-->\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
        this.parent = "This is passed from master";
        this.child = "Will be initialsed from parent";
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent.prototype.initializeChild = function (newVal) {
        this.child = newVal;
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None // The styling defined in client.component.css will be added to head section of the DOM, so applied both on parent and child.
            //encapsulation: ViewEncapsulation.Native // The styling defined in client.component.css will create a shadow DOM element on parent component hence the css will be applied to both on parent and child.
            //encapsulation: ViewEncapsulation.Emulated // The styling defined in client.component.css will be added to current component only and not to the child component, This will create a style class that would be applied only to parent component. This is default.
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' })
};
var ConfigService = /** @class */ (function () {
    function ConfigService(httpClient) {
        this.httpClient = httpClient;
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_1__["configuration"];
        this.apiUrl = 'api/posts';
    }
    ConfigService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log("operation " + operation + " failed : " + error.message + " ");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.prototype.getPosts = function () {
        return this.httpClient.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) {
            console.log(post);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error getting posts', [])));
    };
    ConfigService.prototype.getPostByID = function (id) {
        return this.httpClient.get(this.apiUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) {
            console.log(post);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error getting posts by id', [])));
    };
    ConfigService.prototype.updatePost = function (formData) {
        return this.httpClient.put("" + this.apiUrl, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) {
            console.log(post);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error updating posts', [])));
    };
    ConfigService.prototype.addPost = function (formData) {
        return this.httpClient.post("" + this.apiUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) {
            console.log(post);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error Adding posts', [])));
    };
    ConfigService.prototype.getSettings = function (database, id) {
        var uid = id || null;
        var url;
        if (uid !== null) {
            url = "api/" + database + "/" + id;
        }
        else {
            url = "api/" + database;
        }
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (setting) {
            console.log(setting);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error getting settings', [])));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'My website',
        headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'do some action!',
        buttonlink: '\Home'
    },
    intro: {
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            { icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks: [
            { name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC' },
            { name: 'Roslyn Doe', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ' },
            { name: 'Thomas Doe', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR' },
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            { name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png' },
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            { title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹',
                downloads: '5 Downloads', extensions: '2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            { title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹',
                downloads: '15 Downloads', extensions: '5 Extensions', tutorials: 'Tutorials with files', support: 'Forum Support', updates: '2 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            { title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹',
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Downloads', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
    },
    socialsites: [
        { title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook' },
        { title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus' },
        { title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter' },
        { title: 'Instagram', target: '_blank', username: 'jagmohan', icon: 'instagram' },
        { title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance' },
    ],
    blog: {
        tagline: 'MY BLOG',
        title: 'Thoughts become things..'
    }
};


/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{ position: fixed; bottom: 10px; right: 10px;}\n.container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n\n     <div class=\"container\">\n\n       <div class=\"center-form panel\">\n         <div class=\"panel-body\">\n             <a (click)= cancel() ><i class=\"ion-close\">Close</i></a>\n         <h4 class=\"text-center\"><i class=\"ion-email\"></i> Contact Us</h4>\n\n         <form [formGroup]=\"contactusForm\" (ngSubmit)=\"sendMessage(contactusForm.value)\">\n           <div class=\"form-group\">\n               <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n               <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last name\">\n                 <span class=\"ion-person form-control-icon\"></span>\n             </div>\n           <div class=\"form-group\">\n             <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n             <span class=\"ion-at form-control-icon\"></span>\n           </div>\n           <div class=\"form-group\">\n               <textarea rows=\"10\" cols=\"20\" class=\"form-control input-lg\" formControlName=\"message\" name=\"message\" placeholder=\"message\"></textarea>\n               <span class=\"ion-edit form-control-icon\"></span>\n           </div>\n\n           <button *ngIf=\"!sending\" type=\"submit\" class=\"btn btn-block btn-success\"> Send Message</button>\n\n         </form>\n\n       </div>\n       </div>\n\n     </div>\n\n   </div>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.contactusForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.sending = false;
    };
    ContactusComponent.prototype.sendMessage = function (formData) {
        var _this = this;
        this.sending = true;
        console.log(formData);
        setTimeout(function () {
            _this.sending = false;
            _this.cancelForm();
        }, 1000);
    };
    ContactusComponent.prototype.cancel = function () {
        this.cancelForm();
    };
    ContactusComponent.prototype.cancelForm = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-footer a{\n  float: right;\n  right: 10px;\n  margin-right: 0;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n    <div class=\"row clearfix\">\n\n        <p id=\"copyright\" class=\"col-2\">Made with love by <a href=\"https://www.shapingrain.com\">ShapingRain</a></p>\n\n        <!--Social Icons in Footer-->\n        <div class=\"social-icon col-2\" id=\"social-footer\">\n          <app-social></app-social>\n        </div>\n        <!--End of Social Icons in Footer-->\n    </div>\n</footer>\n<!--End of Footer-->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Introduction-->\n <section id=\"gallery\" class=\"introduction scrollto text-center\" *ngIf=\"gallery\">\n\n <div class=\"row clearfix\">\n\n\n       <div class=\"section-heading\">\n             <h3>{{gallery.tagline}}</h3>\n             <h2 class=\"section-title\">{{gallery.title}}</h2>\n             <p class=\"section-subtitle\">{{gallery.description}}</p>\n         </div>\n\n       <aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\n         data-featherlight-filter=\"a\">\n         <div *ngFor=\"let image of images\">\n           <app-image-block [image]=\"image\"></app-image-block>\n         </div>\n       </aside>\n\n</div>\n\n</section>\n<!--End of Introduction-->\n"

/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent(config) {
        this.config = config;
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'gallery');
        this.getBlockData('images');
    };
    GalleryPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.gallery = data;
            console.log(_this.gallery);
        });
    };
    GalleryPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.images = data;
            console.log(_this.images);
        });
    };
    GalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! ./gallery-page.component.html */ "./src/app/gallery/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.css */ "./src/app/gallery/gallery-page/gallery-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery/gallery-page/gallery-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_2__["GalleryPageComponent"]
    }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/gallery/gallery-routing.module.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery/gallery-page/gallery-page.component.ts");
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-block/image-block.component */ "./src/app/gallery/image-block/image-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["GalleryRoutingModule"]
            ],
            declarations: [_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"], _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_4__["ImageBlockComponent"]]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"assets/images/gallery-images/{{image.name}}\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\ndata-wow-delay=\"0.1s\">\n<img src=\"assets/images/gallery-images/{{image.name}}\" alt=\"Landing Page\"/>\n</a>\n"

/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlockComponent", function() { return ImageBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageBlockComponent = /** @class */ (function () {
    function ImageBlockComponent() {
    }
    ImageBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageBlockComponent.prototype, "image", void 0);
    ImageBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-block',
            template: __webpack_require__(/*! ./image-block.component.html */ "./src/app/gallery/image-block/image-block.component.html"),
            styles: [__webpack_require__(/*! ./image-block.component.css */ "./src/app/gallery/image-block/image-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageBlockComponent);
    return ImageBlockComponent;
}());



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header\">\n<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\"\n[style.background]=\"'url(../assets/images/banner-images/'+ header.image +' ) no-repeat center top;'\">\n\n\n    <!--Banner Content-->\n    <div id=\"banner-content\" class=\"row clearfix\">\n\n        <div class=\"col-38\">\n\n            <div class=\"section-heading\">\n                <h1>{{header.heading}}</h1>\n                <h2>{{header.headingtext}}</h2>\n            </div>\n\n            <!--Call to Action-->\n            <a href={{header.buttonlink}} class=\"button\">{{header.buttontext}}</a>\n            <!--End Call to Action-->\n\n        </div>\n\n    </div><!--End of Row-->\n</header>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(config) {
        this.config = config;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'header');
    };
    HomePageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.header = data;
            console.log(_this.header);
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 101, firstName: "achin", lastName: "goyal", email: "abc.yahoo.com", password: "welcome", bio: 'this is my bio', role: 'admin', image: 'user-1.jpg' },
            { id: 102, firstName: "sachin", lastName: "sharma", email: "xyz.yahoo.com", password: "welcome", bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg' }
        ];
        var pages = [
            { id: 'intro',
                tagline: 'SUCESS',
                title: 'How We Help You To Sell Your Product',
                description: 'This is introduction!',
            },
            { id: 'clients',
                tagline: 'TRUST',
                title: 'Companies who use our services',
                description: 'Our clients',
            },
            { id: 'services',
                tagline: 'BELIEVING',
                title: 'Focusing On What Matters Most',
                description: 'Service Section'
            },
            { id: 'testimonials',
                tagline: 'FEEDBACK',
                title: 'What our customers are saying',
                description: 'This is what our customer\'s feel about us',
            },
            { id: 'pricing',
                tagline: 'YOUR CHOICE',
                title: 'We have the right package for you',
                description: '',
            },
            { id: 'gallery',
                tagline: 'We ❤ Doing amazing things',
                title: 'AdMISTER STUDIO',
                description: 'We are and amazing company',
            },
            { id: 'footer',
                copyrighttext: 'Made with ❤ by',
                developer: 'AdMISTER STUDIO',
                developerlink: 'http://admister.in',
            },
            { id: 'header',
                heading: 'AdMister Studios',
                headingtext: 'This website was created using Angular 6',
                buttontext: 'do some actionsss!',
                buttonlink: '/Home',
                image: 'banner-image-1.jpg'
            },
        ];
        var features = [
            { id: 1, icon: 'html5', title: 'HTML5 & CSS3',
                description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { id: 2, icon: 'bolt', title: 'Easy to Use',
                description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { id: 3, icon: 'tablet', title: 'Fully Responsive',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { id: 4, icon: 'rocket', title: 'Parallax Effect',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
        ];
        var images = [
            { id: 1, name: 'gallery-image-1.jpg' },
            { id: 2, name: 'gallery-image-2.jpg' },
            { id: 3, name: 'gallery-image-3.jpg' },
            { id: 4, name: 'gallery-image-4.jpg' },
            { id: 5, name: 'gallery-image-5.jpg' },
            { id: 6, name: 'gallery-image-6.jpg' },
        ];
        var posts = [
            { id: 1, title: 'The First Article', author: "AD", image: 'gallery-image-1.jpg', publishdate: '2018-06-19', excert: 'This is summary for first article...' },
            { id: 2, title: 'The second Article', author: "AD", image: 'gallery-image-2.jpg', publishdate: '2018-06-19', excert: 'This is summary for second article...' },
            { id: 3, title: 'The third Article', author: "AD", image: 'gallery-image-3.jpg', publishdate: '2018-06-19', excert: 'This is summary for third article...' },
            { id: 4, title: 'The fourth Article', author: "AD", image: 'gallery-image-4.jpg', publishdate: '2018-06-19', excert: 'This is summary for fourth article...' },
            { id: 5, title: 'The fifth Article', author: "AD", image: 'gallery-image-5.jpg', publishdate: '2018-06-19', excert: 'This is summary for fifth article...' },
            { id: 6, title: 'The sixth Article', author: "AD", image: 'gallery-image-6.jpg', publishdate: '2018-06-19', excert: 'This is summary for sixth article...' },
            { id: 7, title: 'The seventh Article', author: "AD", image: 'gallery-image-1.jpg', publishdate: '2018-06-19', excert: 'This is summary for seventh article...' },
            { id: 8, title: 'The eighth Article', author: "AD", image: 'gallery-image-2.jpg', publishdate: '2018-06-19', excert: 'This is summary for eighth article...' },
            { id: 9, title: 'The nineth Article', author: "AD", image: 'gallery-image-3.jpg', publishdate: '2018-06-19', excert: 'This is summary for nineth article...' },
            { id: 10, title: 'The tenth Article', author: "AD", image: 'gallery-image-4.jpg', publishdate: '2018-06-19', excert: 'This is summary for tenth article...' },
            { id: 11, title: 'The eleventh Article', author: "AD", image: 'gallery-image-5.jpg', publishdate: '2018-06-19', excert: 'This is summary for eleventh article...' }
        ];
        var menu = [
            { id: 1, title: 'Home', routerLink: "/Home", outlet: '' },
            { id: 2, title: 'About', routerLink: "/About", outlet: '' },
            { id: 3, title: 'Gallery', routerLink: "/Gallery", outlet: '' },
            { id: 4, title: 'Services', routerLink: "/Services", outlet: '' },
            { id: 5, title: 'Testimonials', routerLink: "/Testimonials", outlet: '' },
            { id: 6, title: 'Clients', routerLink: "/Clients", outlet: '' },
            { id: 7, title: 'Pricing', routerLink: "/Pricing", outlet: '' },
            { id: 8, title: 'Blog', routerLink: "/Blog", outlet: '' },
            { id: 9, title: 'Contact Us', link: 'Contactus', outlet: 'popup' },
            { id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup' },
        ];
        return { users: users, posts: posts, menu: menu, pages: pages, features: features, images: images };
    };
    InMemoryDataService.prototype.getToken = function (users) {
        return 'This is a token';
    };
    InMemoryDataService.prototype.get = function (reqInfo) {
        if (reqInfo.collectionName === 'posts') {
            return this.getArticles(reqInfo);
        }
        return undefined;
    };
    InMemoryDataService.prototype.getArticles = function (reqInfo) {
        return reqInfo.utils.createResponse$(function () {
            var dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
            var id = reqInfo.id;
            var collection = reqInfo.collection;
            var data = id === undefined ? collection : reqInfo.utils.findById(collection, id);
            var options = data ?
                {
                    body: dataEncapsulation ? { data: data } : data,
                    status: 200
                } : {
                body: { error: "Post not found" },
                status: 404
            };
            options.statusText = options.status === 200 ? 'OK' : 'NOT FOUND';
            options.headers = reqInfo.headers;
            options.url = reqInfo.url;
            return options;
        });
    };
    InMemoryDataService.prototype.post = function (reqInfo) {
        var _this = this;
        console.log(reqInfo);
        if (reqInfo.id === 'login') {
            console.log("From Login");
            return reqInfo.utils.createResponse$(function () {
                var dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
                var users = reqInfo.collection.find(function (usr) {
                    return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password === usr.password;
                });
                var responseBody = {};
                if (users) {
                    responseBody = {
                        id: users.id,
                        firstName: users.firstName,
                        lastName: users.lastName,
                        email: users.email,
                        token: _this.getToken(users)
                    };
                }
                var options = responseBody ?
                    {
                        body: dataEncapsulation ? { responseBody: responseBody } : responseBody,
                        status: 200
                    } : {
                    body: { error: "User with email =" + reqInfo.req['body'].email + " is not found" },
                    status: 404
                };
                options.statusText = options.status === 200 ? 'OK' : 'NOT FOUND';
                options.headers = reqInfo.headers;
                options.url = reqInfo.url;
                return options;
            });
        }
        else if (reqInfo.id === 'signup') {
            //keeping this as null means that it has to generate a new id with the sequence
            reqInfo.id = null;
            console.log("From signup");
        }
    };
    InMemoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 18px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n      <div class=\"container\">\n        <div class=\"center-form panel\">\n          <div class=\"panel-body\">\n            <h4 class=\"text-center\"><i class=\"ion-log-in\"></i>Login</h4>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                <span class=\"ion-at form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control input-lg\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-block btn-success\"> Login</button>\n\n              <p class=\"text-center\">\n                <small> Don't have an account yet? <a routerLink=\"/Signup\">Sign up</a></small>\n              </p>\n            </form>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, route, router) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        return this.auth.login(formData).subscribe(function (user) {
            console.log(user);
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-1\">\n\n                <!--Logo-->\n                <div id=\"logo\">\n\n                    <!--Logo that is shown on the banner-->\n                    <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                    <!--End of Banner Logo-->\n\n                    <!--The Logo that is shown on the sticky Navigation Bar-->\n                    <img src=\"assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                    <!--End of Navigation Logo-->\n\n                </div>\n                <!--End of Logo-->\n\n                <aside>\n                    <app-user-profile-icon [profileImage]=\"profileImage\"></app-user-profile-icon>\n                    <app-social></app-social>\n\n                </aside>\n\n\n                      <!--Main Navigation-->\n                <nav id=\"nav-main\">\n                    <app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\n\n                </nav>\n        <!--End of Main Navigation-->\n\n                <div id=\"nav-trigger\"><span [class.open]=\"menuOpen == true\" (click)=\"toggleMenu(!menuOpen)\"></span></div>\n                <nav id=\"nav-mobile\">\n                    <app-navmenu [menu]=\"menu\" *ngIf=\"menuOpen === true\"\n                    (menuStatus)=\"toggleMenu($event)\"\n                    [menuOpen]=\"menuOpen\"></app-navmenu>\n\n                </nav>\n\n            </div>\n        </div>\n    </div><!--End of Header-->\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(location, auth, config) {
        this.location = location;
        this.auth = auth;
        this.config = config;
        this.database = 'menu';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.menuOpen = false;
        this.getMenu();
        this.isLoggedIn = this.auth.isLoggedIn();
        this.getUser();
    };
    NavigationComponent.prototype.getMenu = function () {
        var _this = this;
        this.config.getSettings(this.database).subscribe(function (settings) {
            _this.menu = settings;
            console.log(settings);
        });
    };
    NavigationComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.auth.isLoggedIn()).subscribe(function () {
            _this.getUser();
        });
    };
    NavigationComponent.prototype.toggleMenu = function (status) {
        this.menuOpen = status;
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavigationComponent.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user) {
            this.profileImage = this.user.image;
        }
        else {
            this.profileImage = 'user-1.jpg';
        }
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.html":
/*!************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [class.expanded]=\"menuOpen === true\">\n    <li *ngFor=\"let menuItem of menu\">\n      <div *ngIf=\"menuItem.outlet === ''; then thenBlock; else elseBlock \" ></div>\n\n      <ng-template #thenBlock>\n        <a routerLink=\"{{menuItem.routerLink}}\" (click) = \"toggleMenu($event)\"\n         routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact: true}\">{{menuItem.title}}</a>\n      </ng-template>\n      <ng-template #elseBlock>\n        <a [routerLink] = \"[{outlets: {popup: [menuItem.link] }}]\" (click)=\"toggleMenu($event)\"\n         routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{menuItem.title}}</a>\n      </ng-template>\n    </li>\n\n    <!-- <li *ngFor=\"let menuItem of menu\">\n\n        <a routerLink=\"{{menuItem.routerLink}}\" (click) = \"toggleMenu($event)\"\n         routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact: true}\">{{menuItem.title}}</a>\n\n    </li> -->\n\n</ul>\n"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/*! exports provided: NavmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavmenuComponent", function() { return NavmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
        this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent.prototype.toggleMenu = function () {
        this.menuStatus.emit(!this.menuOpen);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavmenuComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavmenuComponent.prototype, "menuOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavmenuComponent.prototype, "menuStatus", void 0);
    NavmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navmenu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text{\n  font-size: 15em\n}\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"snsn\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"big-text\">\n            404\n        </div>\n      <h2> Nothing Found here!!! <a routerLink=\"/Home\">Home Page</a></h2>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pager.service.ts":
/*!**********************************!*\
  !*** ./src/app/pager.service.ts ***!
  \**********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination > li{\n  display: inline-block;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n  padding: 10px;\n  cursor: pointer;\n}\n.pagination > li.active{\n  background-color: #005575;\n}\n.pagination > li.disabled{\n  background-color: #ddd;\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"pager\" class=\"pagination\">\n  <li [class.disabled]=\"pager.currentPage == 1\">\n    <a (click)=\"setCurrentPage(1)\">First</a>\n  </li>\n  <li [class.disabled]=\"pager.currentPage == 1\">\n    <a (click)=\"setCurrentPage(pager.currentPage - 1)\">Previous</a>\n  </li>\n  <li *ngFor=\"let page of pager.pages\" [class.active]=\"pager.currentPage == page\">\n    <a (click)=\"setCurrentPage(page)\">{{page}}</a>\n  </li>\n  <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n    <a (click)=\"setCurrentPage(pager.currentPage + 1)\">Next</a>\n  </li>\n  <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n    <a (click)=\"setCurrentPage(pager.totalPages)\">Last</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.setCurrentPage = function (pageNumber) {
        this.setPage.emit(pageNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "setPage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-block-content:hover {\n    border-color:#d2b356;\n}\n.primary-color, .featured .post {\n    background-color:#d2b356;\n}\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .featured .post, .featured .post p {\n    color:#fff;\n}\n.post-block-content {\n  background: #fff;\n  padding: 25px 0 25px 0;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n  transition: all 0.2s ease-in-out 0s;\n  position: relative;\n  border: 10px solid #fff;\n}\n.post-block ul {\n  list-style: none;\n  margin: 25px 0 25px 0;\n}\n.post-block li {\n  padding: 14px 0;\n  border-bottom: 1px dotted #e1e1e1;\n}\n.post-block li:last-of-type {\n  border:none;\n}\n.post-block h3 {\n  font-size:17px;\n  text-transform:uppercase;\n  padding-bottom:0;\n}\n.post-sub {\n  font-style: italic;\n  color:#ccc;\n  margin:0 0 25px 0;\n}\n.post {\n  background: #f5f5f5;\n  padding: 25px;\n  position: relative;\n}\n.post-featured-image {\n  display: inline-block;\n  font-size: 62px;\n  font-weight: 700;\n  position: relative;\n}\n.post-featured-image span {\n  position: absolute;\n  top: 0;\n  left: -20px;\n  font-size: 22px;\n}\n.post  p {\n  font-style:italic;\n  color:#b4b4b4;\n  line-height:auto;\n  margin:0;\n}\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Post Block-->\n  <div class=\"post-block-content\">\n      <h3>{{post.title}}</h3>\n      <p class=\"post-sub\"> BY {{post.author}} | {{post.publishdate | date : 'dd-MM-yyyy'}}</p>\n      <div class=\"post-featured-image\">\n          <img src=\"/assets/images/gallery-images/{{post.image}}\">\n      </div>\n      <ul>\n        <div markdown [data]=\"post.excert\" id=\"preview\"></div>\n      </ul>\n      <a routerLink=\"/article/{{post.id}}\" class=\"button\"><i class=\"ion ion-heart\"></i>Read More</a>\n      <a routerLink=\"/article-edit/{{post.id}}\" class=\"button\"><i class=\"ion ion-edit\"></i>Edit</a>\n  </div>\n<!--End Post Block-->\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>YOUR CHOICE</h3>\n            <h2 class=\"section-title\">We have the right package for you</h2>\n        </div>\n\n        <!--Pricing Block-->\n        <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n            <div class=\"pricing-block-content\">\n                <h3>Personal</h3>\n                <p class=\"pricing-sub\">The standard version</p>\n                <div class=\"pricing\">\n                    <div class=\"price\"><span>$</span>19</div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n                </div>\n                <ul>\n                    <li>5 Downloads</li>\n                    <li>2 Extensions</li>\n                    <li>Tutorials</li>\n                    <li>Forum Support</li>\n                    <li>1 year free updates</li>\n                </ul>\n                <a href=\"#\" class=\"button\">BUY TODAY</a>\n            </div>\n        </div>\n        <!--End Pricing Block-->\n\n        <!--Pricing Block-->\n        <div class=\"pricing-block featured col-3 wow fadeInUp\" data-wow-delay=\"0.6s\">\n            <div class=\"pricing-block-content\">\n                <h3>Student</h3>\n                <p class=\"pricing-sub\">Most popular choice</p>\n                <div class=\"pricing\">\n                    <div class=\"price\"><span>$</span>29</div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n                </div>\n                <ul>\n                    <li>15 Downloads</li>\n                    <li>5 Extensions</li>\n                    <li>Tutorials with Files</li>\n                    <li>Forum Support</li>\n                    <li>2 years free updates</li>\n                </ul>\n                <a href=\"#\" class=\"button\">BUY TODAY</a>\n            </div>\n        </div>\n        <!--End Pricing Block-->\n\n        <!--Pricing Block-->\n        <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.8s\">\n            <div class=\"pricing-block-content\">\n                <h3>Business</h3>\n                <p class=\"pricing-sub\">For the whole team</p>\n                <div class=\"pricing\">\n                    <div class=\"price\"><span>$</span>49</div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n                </div>\n                <ul>s\n                    <li>Unlimited Downloads</li>\n                    <li>Unlimited Extensions</li>\n                    <li>HD Video Tutorials</li>\n                    <li>Chat Support</li>\n                    <li>Lifetime free updates</li>\n                </ul>\n                <a href=\"#\" class=\"button\">BUY TODAY</a>\n            </div>\n        </div>\n        <!--End Pricing Block-->\n\n    </div>\n</section>\n<!--End of Pricing Tables-->\n"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/routegaurd.service.ts":
/*!***************************************!*\
  !*** ./src/app/routegaurd.service.ts ***!
  \***************************************/
/*! exports provided: RoutegaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutegaurdService", function() { return RoutegaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutegaurdService = /** @class */ (function () {
    function RoutegaurdService(router) {
        this.router = router;
    }
    RoutegaurdService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in
            return true;
        }
        this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    RoutegaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutegaurdService);
    return RoutegaurdService;
}());



/***/ }),

/***/ "./src/app/services/service-page/service-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/services/service-page/service-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/service-page/service-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/services/service-page/service-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\" *ngIf=\"services\">\n\n    <div class=\"row no-padding-bottom clearfix\">\n\n\n        <!--Content Left Side-->\n        <div class=\"col-3\">\n            <!--User Testimonial-->\n            <blockquote class=\"testimonial text-right bigtest\">\n                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et dolore magna aliqua</q>\n                <footer>— John Doe, Happy Customer</footer>\n            </blockquote>\n            <!-- End of Testimonial-->\n\n        </div>\n        <!--End Content Left Side-->\n\n        <!--Content of the Right Side-->\n        <div class=\"col-3\">\n            <div class=\"section-heading\">\n                <h3>BELIEVING</h3>\n                <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n                <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n            </div>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n                dicta sunt explicabo.\n            </p>\n            <p>\n                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n            </p>\n            <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n            <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n                WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n        <!--End Content Right Side-->\n\n        <div class=\"col-3\">\n            <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\"/>\n        </div>\n\n    </div>\n\n\n</div>\n<!--End of Content Section-->\n"

/***/ }),

/***/ "./src/app/services/service-page/service-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/service-page/service-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageComponent", function() { return ServicePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicePageComponent = /** @class */ (function () {
    function ServicePageComponent(config) {
        this.config = config;
    }
    ServicePageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'services');
    };
    ServicePageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.services = data;
            console.log(_this.services);
        });
    };
    ServicePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-page',
            template: __webpack_require__(/*! ./service-page.component.html */ "./src/app/services/service-page/service-page.component.html"),
            styles: [__webpack_require__(/*! ./service-page.component.css */ "./src/app/services/service-page/service-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ServicePageComponent);
    return ServicePageComponent;
}());



/***/ }),

/***/ "./src/app/services/services-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-page/service-page.component */ "./src/app/services/service-page/service-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_2__["ServicePageComponent"] }
];
var ServicesRoutingModule = /** @class */ (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/services/services-routing.module.ts");
/* harmony import */ var _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-page/service-page.component */ "./src/app/services/service-page/service-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"]
            ],
            declarations: [_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_3__["ServicePageComponent"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n      <div class=\"container\">\n        <div class=\"center-form panel\">\n          <div class=\"panel-body\">\n            <h4 class=\"text-center\"><i class=\"ion-person-add\"></i>Register</h4>\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last Name\">\n                <span class=\"ion-person form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                <span class=\"ion-at form-control-icon\"></span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control input-lg\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                <span class=\"ion-key form-control-icon\"></span>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-block btn-success\"> Sign Up</button>\n\n              <p class=\"text-center\">\n                <small> Already have an account! <a routerLink=\"/Login\">Login</a></small>\n              </p>\n            </form>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SignupComponent.prototype.signup = function (formData) {
        var _this = this;
        return this.auth.signup(formData).subscribe(function (user) {
            console.log("User added " + JSON.stringify(user));
            _this.router.navigate(['Login']);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Social Icons in Header-->\n                      <ul class=\"social-icons\">\n                         <li *ngFor=\"let website of socialsites\">\n                             <a target=\"{{website.target}}\" title=\"{{website.title}}\" href=\"{{website.link}}{{website.username}}\">\n                                 <i class=\"fa fa-{{website.icon}} fa-1x\"></i><span>{{website.title}}</span>\n                             </a>\n                         </li>\n                     </ul>\n                     <!--End of Social Icons in Header-->\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialComponent = /** @class */ (function () {
    function SocialComponent(config) {
        this.config = config;
        this.socialsites = {};
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.socialsites = this.getSocialsites();
    };
    SocialComponent.prototype.getSocialsites = function () {
        return this.config.getConfig().socialsites;
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html")
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{position: fixed; right: 10px; bottom: 5px;}\n\n.container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\n\nsection{\n    background-color: #ddd;\n}\n\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n\n.panel-body{\n    padding: 15px;\n}\n\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n\n.text-center{\n    text-align: center;\n}\n\nform {\n    display: block;\n    margin-top: 0em;\n}\n\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n\n.btn-block{\n    display: block;\n    width: 100%;\n}\n\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n   <div class=\"container\">\n     <div class=\"center-form panel\">\n       <div class=\"panel-body\">\n         <a (click) = cancel() style=\"cursor:hand;\"> <i class=\"ion-close\"></i>Close</a>\n       <form [formGroup]=\"subscribeForm\" (ngSubmit)=\"subscribe(subscribeForm.value)\">\n         <div class=\"form-group\">\n           <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n           <span class=\"ion-at form-control-icon\"></span>\n         </div>\n         <p *ngIf=\"!sending\">\n         <button type=\"submit\" class=\"btn btn-block btn-success\"> Subscribe</button>\n       </p>\n       </form>\n\n     </div>\n     </div>\n\n   </div>\n\n </div>\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        this.subscribeForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.sending = false;
    };
    SubscribeComponent.prototype.subscribe = function (formData) {
        var _this = this;
        this.sending = true;
        console.log(formData);
        setTimeout(function () {
            _this.sending = false;
            _this.cancelForm();
        }, 1000);
    };
    SubscribeComponent.prototype.cancel = function () {
        this.cancelForm();
    };
    SubscribeComponent.prototype.cancelForm = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.css":
/*!*******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/*!********************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Testimonials-->\n<aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>FEEDBACK</h3>\n            <h2 class=\"section-title\">What our customers are saying</h2>\n        </div>\n\n        <!--User Testimonial-->\n        <blockquote class=\"col-3 testimonial classic\">\n            <img src=\"/assets/images/user-images/user-1.jpg\" alt=\"User\"/>\n            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                labore\n                et dolore magna aliqua</q>\n            <footer>John Doe - Happy Customer</footer>\n        </blockquote>\n        <!-- End of Testimonial-->\n\n        <!--User Testimonial-->\n        <blockquote class=\"col-3 testimonial classic\">\n            <img src=\"/assets/images/user-images/user-2.jpg\" alt=\"User\"/>\n            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                labore\n                et dolore magna aliqua</q>\n            <footer>Roslyn Doe - Happy Customer</footer>\n        </blockquote>\n        <!-- End of Testimonial-->\n\n        <!--User Testimonial-->\n        <blockquote class=\"col-3 testimonial classic\">\n            <img src=\"/assets/images/user-images/user-3.jpg\" alt=\"User\"/>\n            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                labore\n                et dolore magna aliqua</q>\n            <footer>Thomas Doe - Happy Customer</footer>\n        </blockquote>\n        <!-- End of Testimonial-->\n\n    </div>\n\n</aside>\n<!--End of Testimonials-->\n"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.css */ "./src/app/testimonial/testimonial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function() { return UserDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"] }
];
var UserDashboardRoutingModule = /** @class */ (function () {
    function UserDashboardRoutingModule() {
    }
    UserDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserDashboardRoutingModule);
    return UserDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDashBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashBoardModule", function() { return UserDashBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard-routing.module */ "./src/app/user-dashboard/user-dashboard-routing.module.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile-icon/user-profile-icon.component */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserDashBoardModule = /** @class */ (function () {
    function UserDashBoardModule() {
    }
    UserDashBoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDashboardRoutingModule"]
            ],
            declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileIconComponent"]],
            exports: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileIconComponent"]],
        })
    ], UserDashBoardModule);
    return UserDashBoardModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n      <div class=\"col-3\">\n        <div class=\"panel\">\n          <div class=\"panel-body center\">\n              <blockquote class=\"testimonial classic\" >\n                  <img src=\"assets/images/user-images/{{user.image}}\" alt=\"User\"/>\n                  <q>{{user.bio}}</q>\n                  <footer>\n                      <a (click)=\"logout()\" class=\"button\">Sign out</a>\n                  </footer>\n              </blockquote>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-2-3\">\n          <div class=\"panel\">\n              <div class=\"panel-body\">\n                  <div class=\"pricing-block-content\">\n                      <h3>{{user.firstName}} {{user.lastName}}</h3>\n                      <div class=\"pricing\">\n                          <p>{{user.bio}}</p>\n                      </div>\n                      <ul>\n                          <li>{{user.email}}</li>\n                      </ul>\n\n                  </div>\n\n              </div>\n            </div>\n      </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router) {
        this.router = router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDashboardComponent.prototype.getUser = function () {
        if (localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.isLoggedIn = true;
        }
    };
    UserDashboardComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
        this.router.navigate(['/Home']);
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"testimonial classic\" routerLink=\"/Dashboard\">\n  <img src=\"assets/images/user-images/{{profileImage}}\" alt=\"User\"\n  style=\"max-height:40px; vertical-align: middle; margin-bottom:0; \"/>\n</a>\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserProfileIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileIconComponent", function() { return UserProfileIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileIconComponent = /** @class */ (function () {
    function UserProfileIconComponent() {
    }
    UserProfileIconComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserProfileIconComponent.prototype, "profileImage", void 0);
    UserProfileIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile-icon',
            template: __webpack_require__(/*! ./user-profile-icon.component.html */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-icon.component.css */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileIconComponent);
    return UserProfileIconComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/achingoyal/Downloads/angular 6/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map