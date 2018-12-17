webpackJsonp([6],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/betadine/betadine.module": [
		268,
		5
	],
	"../pages/episan/episan.module": [
		269,
		4
	],
	"../pages/propolis/propolis.module": [
		270,
		3
	],
	"../pages/spirulina-capsule/spirulina-capsule.module": [
		271,
		2
	],
	"../pages/tianshi-muncord-capsules/tianshi-muncord-capsules.module": [
		272,
		1
	],
	"../pages/tiens-cordyceps-capsules/tiens-cordyceps-capsules.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.BetadinePage = function (ket) {
        this.navCtrl.push("BetadinePage", { kategori: ket });
    };
    HomePage.prototype.SpirulinaCapsulePage = function (ket) {
        this.navCtrl.push("SpirulinaCapsulePage", { kategori: ket });
    };
    HomePage.prototype.PropolisPage = function (ket) {
        this.navCtrl.push("PropolisPage", { kategori: ket });
    };
    HomePage.prototype.EpisanPage = function (ket) {
        this.navCtrl.push("EpisanPage", { kategori: ket });
    };
    HomePage.prototype.TiensCordycepsCapsulesPage = function (ket) {
        this.navCtrl.push("TiensCordycepsCapsulesPage", { kategori: ket });
    };
    HomePage.prototype.TianshiMuncordCapsulesPage = function (ket) {
        this.navCtrl.push("TianshiMuncordCapsulesPage", { kategori: ket });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\acer\Documents\tugas responsi\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Menu Utama\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col (click)="BetadinePage()">\n	<img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//1030/betadine_betadine-antiseptic-solution-obat-luka-15ml_full02.jpg" width="55%">\n	</ion-col>\n	<ion-col (click)="SpirulinaCapsulePage()">\n	<img src="https://images-na.ssl-images-amazon.com/images/I/81-NF1zcv2L._SL1500_.jpg" width="50%">\n	</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col (click)="PropolisPage()">\n	<img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-1993855/british-propolis_britis-propolis-suplemen--60-ml-_full05.jpg" width="50%">\n	</ion-col>\n    <ion-col (click)="EpisanPage()">\n	<img src="https://www.klik-apotek.com/media/catalog/product/cache/1/thumbnail/780x/9df78eab33525d08d6e5fb8d27136e95/e/p/episan_sanbe_500_mg_200ml_3.jpg" width="50%">\n	</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col (click)="TiensCordycepsCapsulesPage()">\n	<img src="http://sg.static.tiens.com/group1/M00/00/23/rBCD6llm-g6AISC-AAIRlXAOZE0219.png" width="50%">\n	</ion-col>\n    <ion-col (click)="TianshiMuncordCapsulesPage()">\n	<img src="http://s.blanja.com/picspace/700/105148/350.350_67a2f6775131477ea365209f0fa26a08.jpg_348x348.jpg" width="50%">\n	</ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Documents\tugas responsi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/betadine/betadine.module#BetadinePageModule', name: 'BetadinePage', segment: 'betadine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/episan/episan.module#EpisanPageModule', name: 'EpisanPage', segment: 'episan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/propolis/propolis.module#PropolisPageModule', name: 'PropolisPage', segment: 'propolis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spirulina-capsule/spirulina-capsule.module#SpirulinaCapsulePageModule', name: 'SpirulinaCapsulePage', segment: 'spirulina-capsule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tianshi-muncord-capsules/tianshi-muncord-capsules.module#TianshiMuncordCapsulesPageModule', name: 'TianshiMuncordCapsulesPage', segment: 'tianshi-muncord-capsules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tiens-cordyceps-capsules/tiens-cordyceps-capsules.module#TiensCordycepsCapsulesPageModule', name: 'TiensCordycepsCapsulesPage', segment: 'tiens-cordyceps-capsules', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\acer\Documents\tugas responsi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\acer\Documents\tugas responsi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map