webpackJsonp([2],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__center_center__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__indent_indent__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SearchPage = (function () {
    function SearchPage(navCtrl, studentService, modalCtrl, alertCtrl, authService, menu, loadingCtrl, storage, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.app = app;
        this.isAdmin = false;
        this.isCenterAdmin = false;
        this.isCounsellor = false;
        menu.enable(true);
        this.storage.get('user').then(function (user) {
            if (user.role === "counsellor")
                _this.isCounsellor = true;
            else if (user.role === "admin")
                _this.isAdmin = true;
            else if (user.role === "centerAdmin")
                _this.isCenterAdmin = true;
            else
                _this.isCounsellor = true;
        });
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.studentService.getStudents().then(function (data) {
            data = __WEBPACK_IMPORTED_MODULE_11_lodash__["filter"](data, function (o) {
                return (o.status == 'enquiry' && !o.is_Confirmed);
            });
            _this.storage.get('user').then(function (user) {
                data = __WEBPACK_IMPORTED_MODULE_11_lodash__["filter"](data, function (o) {
                    return (o.center == user.center);
                });
                _this.students = (__WEBPACK_IMPORTED_MODULE_11_lodash__["sortBy"](data, 'enquiry_date')).reverse();
            });
        }, function (err) {
            console.log("not allowed");
        });
    };
    SearchPage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SearchPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    SearchPage.prototype.update = function (student) {
        this.storage.set('confirmed_student', student);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm__["a" /* ConfirmPage */]);
    };
    SearchPage.prototype.openSignupPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    SearchPage.prototype.openCenterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__center_center__["a" /* CenterPage */]);
    };
    SearchPage.prototype.openReportsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__reports_reports__["a" /* ReportsPage */]);
    };
    SearchPage.prototype.openIndentPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__indent_indent__["a" /* IndentPage */]);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search-page',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/search/search.html"*/'<ion-header>\n <ion-navbar color="secondary">\n  <!-- <ion-buttons start>\n    <button ion-button icon-only (click)="logout()"><ion-icon name="power"></ion-icon></button>\n  </ion-buttons> -->\n  <ion-title>\n    SEARCH\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="add()"><ion-icon name="add-circle"></ion-icon></button>\n  </ion-buttons>\n </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openCenterPage()" *ngIf="isAdmin">\n        Center\n      </button>\n      <button ion-item (click)="openSignupPage()" *ngIf="!isCounsellor">\n        Users\n      </button>\n      <button ion-item (click)="openReportsPage()">\n        Reports\n      </button>\n      <button ion-item (click)="openIndentPage()">\n        Indent\n      </button>\n      <button ion-item (click)="logOut()">\n        Log Out\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n \n<ion-content>\n\n  <ion-list>\n \n    <img src="../assets/images/emoji-faces.jpg" class="emozi" *ngIf="students && !students.length" />\n    <h1 *ngIf="students && !students.length" class="no_record"> NO RECORDS FOUND </h1>\n\n    <ion-item-sliding *ngFor="let student of students" class="results_list_mobile">\n     \n        <button ion-item>\n          <div class="col_left">\n            <div *ngIf="student.photo"><img src={{student.photo}} class="bg_student"/></div>\n            <div *ngIf="!student.photo"><img src="../assets/images/NoImageAvailable.png" class="bg_student"/></div>\n          </div>\n          <div class="col_right">\n            <h1>{{student.name}}</h1>\n            <h3 *ngIf="student.gender === \'Male\'"> S/O {{student.parent_name}}</h3>\n            <h3 *ngIf="student.gender !== \'Male\'"> D/O {{student.parent_name}}</h3>\n            <h2><ion-icon name="mail"></ion-icon> {{student.email_id}}</h2>\n            <h2><ion-icon name="call"></ion-icon> {{student.phone_number}} </h2>\n            <!-- <h2><ion-icon name="call"></ion-icon> {{student.alternate_contact}}</h2> -->\n            <h2><ion-icon name="locate"></ion-icon> {{student.locality}}</h2>\n            <h2><ion-icon name="clock"></ion-icon> {{student.dob | date: \'dd/MMM/yyyy\'}} </h2>\n            <h2>{{student.class_group}}</h2>\n          </div>\n        </button>\n     \n        <ion-item-options side="right">\n          <button ion-button color="info" (click)="update(student)">\n            <ion-icon name="redo"></ion-icon>\n            Confirm\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_students_students__["a" /* Students */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IndentPage = (function () {
    function IndentPage(navCtrl, studentService, modalCtrl, alertCtrl, authService, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
    }
    IndentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.studentService.getStudents().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](data, function (o) {
                return (o.status == 'confirmed' && !o.is_Indented);
            });
            _this.storage.get('user').then(function (user) {
                __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](data, function (o) {
                    return (o.center == user.center);
                });
                _this.students = __WEBPACK_IMPORTED_MODULE_6_lodash__["sortBy"](data, 'enquiry_date');
            });
        }, function (err) {
            console.log("not allowed");
        });
    };
    IndentPage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    IndentPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    IndentPage.prototype.indent = function (student) {
        // Function to indent students
    };
    return IndentPage;
}());
IndentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'indent-page',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/indent/indent.html"*/'<ion-header>\n <ion-navbar color="secondary">\n  <ion-buttons start>\n    <button ion-button icon-only (click)="logout()"><ion-icon name="power"></ion-icon></button>\n  </ion-buttons>\n  <ion-title>\n    SPARK\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="add()"><ion-icon name="add-circle"></ion-icon></button>\n  </ion-buttons>\n </ion-navbar>\n</ion-header>\n \n<ion-content>\n\n  <ion-list>\n \n    <ion-item-sliding *ngFor="let student of students" class="results_list_mobile">\n     \n        <button ion-item>\n          <div class="col_left">\n            <div *ngIf="student.photo"><img src={{student.photo}} class="bg_student"/></div>\n            <div *ngIf="!student.photo"><img src="../assets/images/NoImageAvailable.png" class="bg_student"/></div>\n          </div>\n          <div class="col_right">\n            <h1>{{student.name}}</h1>\n            <h3 *ngIf="student.gender === \'Male\'"> S/O {{student.parent_name}}</h3>\n            <h3 *ngIf="student.gender !== \'Male\'"> D/O {{student.parent_name}}</h3>\n            <h2><ion-icon name="mail"></ion-icon> {{student.email_id}}</h2>\n            <h2><ion-icon name="call"></ion-icon> {{student.phone_number}} </h2>\n            <!-- <h2><ion-icon name="call"></ion-icon> {{student.alternate_contact}}</h2> -->\n            <h2><ion-icon name="locate"></ion-icon> {{student.locality}}</h2>\n            <h2><ion-icon name="clock"></ion-icon> {{student.dob | date: \'dd/MMM/yyyy\'}} </h2>\n            <h2>{{student.class_group}}</h2>\n          </div>\n        </button>\n     \n        <ion-item-options side="right">\n          <button ion-button color="info" (click)="indent(student)">\n            <ion-icon name="redo"></ion-icon>\n            Indent\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/indent/indent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_students_students__["a" /* Students */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], IndentPage);

//# sourceMappingURL=indent.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/center/center.module": [
		845,
		1
	],
	"../pages/reports/reports.module": [
		844,
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 203;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_center_center__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__center_center__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Providers



// Pages




// Files Images




var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, studentService, modalCtrl, alertCtrl, authService, loadingCtrl, formBuilder, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, app, menu, centerService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.app = app;
        this.menu = menu;
        this.centerService = centerService;
        this.storage = storage;
        this.submitAttempt = false;
        this.confirmStudent = function () {
            _this.submitAttempt = true;
            if (_this.confirmForm.valid) {
                _this.student.class_group = _this.confirmForm.value.class_group;
                _this.student.status = "confirmed";
                _this.student.is_Confirmed = true;
                if (_this.student.photo === null)
                    _this.student.photo = _this.confirmForm.value.photo;
                _this.student.class_type = _this.confirmForm.value.class_type;
                _this.student.uniform_size = _this.confirmForm.value.uniform_size;
                _this.student.shoe_size = _this.confirmForm.value.shoe_size;
                _this.studentService.updateStudent(_this.student).then(function (result) {
                    _this.presentToast('student data saved successfully');
                }, function (err) {
                    _this.presentToast('student data saving failed');
                });
            }
        };
        this.takePhoto = function () {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Select Image Source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: function () {
                            _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: function () {
                            _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        };
        menu.enable(true);
        this.confirmForm = formBuilder.group({
            class_group: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            student_id: [''],
            class_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            uniform_size: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            shoe_size: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            photo: ['']
        });
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('confirmed_student').then(function (student) {
            _this.student = student;
            _this.confirmForm.controls['class_group'].setValue(student.class_group);
            _this.confirmForm.controls['student_id'].setValue(student.student_id);
            _this.confirmForm.controls['photo'].setValue(student.photo);
        });
    };
    // Photos
    ConfirmPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ConfirmPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ConfirmPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ConfirmPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ConfirmPage.prototype.uploadImage = function () {
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var path = targetPath + filename;
        this.getFileContentAsBase64(path, function (base64Image) {
            this.confirmForm.photo = base64Image;
        });
    };
    ConfirmPage.prototype.getFileContentAsBase64 = function (path, callback) {
        //    window.resolveLocalFileSystemURL(path, gotFile, fail);
        //            
        //    function fail(e) {
        //          alert('Cannot found requested file');
        //    }
        //    function gotFile(fileEntry) {
        //           fileEntry.file(function(file) {
        //              var reader = new FileReader();
        //              reader.onloadend = function(e) {
        //                   var content = this.result;
        //                   callback(content);
        //              };
        //   // The most important point, use the readAsDatURL Method from the file plugin
        //              reader.readAsDataURL(file);
        //           });
        //    }
    };
    ConfirmPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    ConfirmPage.prototype.openSignupPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]);
    };
    ConfirmPage.prototype.openCenterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__center_center__["a" /* CenterPage */]);
    };
    ConfirmPage.prototype.openReportsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__reports_reports__["a" /* ReportsPage */]);
    };
    ConfirmPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    return ConfirmPage;
}());
ConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'confirm-page',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/confirm/confirm.html"*/'<ion-header>\n <ion-navbar color="secondary">\n  <ion-buttons start>\n    <button ion-button icon-only (click)="goBack()"><ion-icon name="close"></ion-icon></button>\n  </ion-buttons>\n  <ion-title>\n    SPARK\n  </ion-title>\n<!--   <ion-buttons end>\n    <button ion-button icon-only (click)="search()"><ion-icon name="search"></ion-icon></button>\n  </ion-buttons>\n --> </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openCenterPage()">\n        Center\n      </button>\n      <button ion-item (click)="openSignupPage()">\n        Users\n      </button>\n      <button ion-item (click)="openReportsPage()">\n        Reports\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content padding class="home-page">\n \n    <div class="booking_card" *ngIf="student != null">\n        <h3>{{student.name}} \n          <span> \n            <h5 *ngIf="student.gender === \'Male\'"> S/O {{student.parent_name}}</h5>\n            <h5 *ngIf="student.gender !== \'Male\'"> D/O {{student.parent_name}}</h5>\n          </span>\n        </h3>\n        <h4><ion-icon name="mail"></ion-icon> {{student.email_id}}</h4>\n        <h4><ion-icon name="call"></ion-icon> {{student.phone_number}} </h4>\n        <h4><ion-icon name="locate"></ion-icon> {{student.locality}}</h4>\n    </div>\n\n    <ion-list no-lines>\n\n      <form [formGroup]="confirmForm">\n \n        <!-- Class of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="office"></ion-icon> Class*</ion-label>\n            <ion-select formControlName="class_group" interface="popover">\n              <ion-option value="Play Group">Play Group</ion-option>\n              <ion-option value="Nursery">Nursery</ion-option>\n              <ion-option value="LKG">LKG</ion-option>\n              <ion-option value="UKG">UKG</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!confirmForm.controls.class_group.valid  && (confirmForm.controls.class_group.dirty || submitAttempt)">\n          Please select Class Group\n        </p>\n\n        <!-- class_type of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="office"></ion-icon> Type*</ion-label>\n            <ion-select formControlName="class_type" interface="popover">\n              <ion-option value="Annual">Annual</ion-option>\n              <ion-option value="Mid-term">Mid-term</ion-option>\n              <ion-option value="Early start">Early start</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!confirmForm.controls.class_type.valid  && (confirmForm.controls.class_type.dirty || submitAttempt)">\n          Please select Class Group\n        </p>\n\n        <!-- uniform_size of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="clothes"></ion-icon> Uniform Size*</ion-label>\n            <ion-select formControlName="uniform_size" interface="popover">\n              <ion-option value="18">18</ion-option>\n              <ion-option value="20">20</ion-option>\n              <ion-option value="22">22</ion-option>\n              <ion-option value="24">24</ion-option>\n              <ion-option value="26">26</ion-option>\n              <ion-option value="28">28</ion-option>\n              <ion-option value="30">30</ion-option>\n              <ion-option value="32">32</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!confirmForm.controls.uniform_size.valid  && (confirmForm.controls.uniform_size.dirty || submitAttempt)">\n          Please select Uniform Size\n        </p>\n\n        <!-- shoe_size of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="shoe"></ion-icon> Shoe Size*</ion-label>\n            <ion-select formControlName="shoe_size" interface="popover">\n              <ion-option value="6">6</ion-option>\n              <ion-option value="7">7</ion-option>\n              <ion-option value="8">8</ion-option>\n              <ion-option value="9">9</ion-option>\n              <ion-option value="10">10</ion-option>\n              <ion-option value="11">11</ion-option>\n              <ion-option value="12">12</ion-option>\n              <ion-option value="13">13</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!confirmForm.controls.shoe_size.valid  && (confirmForm.controls.shoe_size.dirty || submitAttempt)">\n          Please select Shoe Size\n        </p>\n\n        <ion-toolbar color="primary" class="upload_button">\n          <ion-buttons>\n            <button ion-button icon-left (click)="takePhoto()">\n              <ion-icon name="camera"></ion-icon>Select Image\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n\n      </form>\n \n    </ion-list>\n\n    <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n \n    <div class="gm_drawer_footer_wrapper">\n      <button (click)="goBack()" ion-button class="btn-danger">Cancel</button>\n      <button (click)="confirmStudent()" ion-button class="btn-success">Submit</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/confirm/confirm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_students_students__["a" /* Students */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_center_center__["a" /* Center */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ConfirmPage);

;
//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Auth = (function () {
    function Auth(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    Auth.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get('http://localhost:8080/api/auth/protected', { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Auth.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/auth/register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Auth.prototype.updateAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/auth/update', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Auth.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    Auth.prototype.forgotPassword = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/auth/forgotPassword', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Auth.prototype.searchUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get('http://localhost:8080/api/auth', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Auth.prototype.logout = function () {
        this.storage.set('token', '');
    };
    return Auth;
}());
Auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], Auth);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_center_center__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__center_center__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__indent_indent__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_transfer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Providers



// Pages






// Files Images




var HomePage = (function () {
    function HomePage(navCtrl, studentService, modalCtrl, alertCtrl, authService, loadingCtrl, formBuilder, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, app, menu, centerService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.app = app;
        this.menu = menu;
        this.centerService = centerService;
        this.storage = storage;
        this.submitAttempt = false;
        this.isAdmin = false;
        this.isCenterAdmin = false;
        this.isCounsellor = false;
        this.addStudent = function () {
            _this.showLoader;
            _this.submitAttempt = true;
            if (_this.studentForm.valid) {
                _this.studentService.createStudent(_this.studentForm.value).then(function (result) {
                    _this.hideLoader();
                    _this.presentToast('student data saved successfully');
                }, function (err) {
                    _this.hideLoader;
                    _this.presentToast('student data saving failed');
                });
            }
        };
        this.showLoader = function () {
            _this.loading = _this.loadingCtrl.create({
                content: 'Saving...'
            });
            _this.loading.present();
        };
        this.hideLoader = function () {
            _this.loading.dismiss();
        };
        this.search = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
        };
        this.logOut = function () {
            _this.authService.logout();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
        };
        this.onDobChange = function () {
            var dob = _this.studentForm.value.dob;
            var now = new Date();
            _this.studentForm.value.today_age = _this.getAge(dob, now);
            now.setDate(1);
            now.setMonth(5);
            _this.studentForm.value.month_age = _this.getAge(dob, now);
            _this.studentForm.value.month_date = now;
            _this.studentForm.value.today_age.years += 1900;
            _this.today_age_years = _this.studentForm.value.today_age.years;
            _this.today_age_months = _this.studentForm.value.today_age.months;
            _this.today_age_days = _this.studentForm.value.today_age.days;
            _this.month_date = _this.studentForm.value.month_date.getDate() + "/June/" + (_this.studentForm.value.month_date.getYear() + 1900);
            _this.studentForm.value.month_age.years += 1900;
            _this.month_age_years = _this.studentForm.value.month_age.years;
            _this.month_age_months = _this.studentForm.value.month_age.months;
            _this.month_age_days = _this.studentForm.value.month_age.days;
            _this.class_group = _this.calculateClass(_this.studentForm.value.month_age);
            _this.studentForm.controls['class_group'].setValue(_this.class_group);
        };
        this.getAge = function (birthday, tillday) {
            var today = new Date(tillday.getYear(), tillday.getMonth(), tillday.getDate());
            var yearNow = today.getFullYear();
            var monthNow = today.getMonth();
            var dateNow = today.getDate();
            var dob = new Date(birthday.substring(0, 4), birthday.substring(5, 7) - 1, birthday.substring(8, 10));
            var yearDob = dob.getFullYear();
            var monthDob = dob.getMonth();
            var dateDob = dob.getDate();
            var age = {};
            var ageString = "";
            var yearString = "";
            var monthString = "";
            var dayString = "";
            var yearAge = yearNow - yearDob;
            if (monthNow >= monthDob)
                var monthAge = monthNow - monthDob;
            else {
                yearAge--;
                var monthAge = 12 + monthNow - monthDob;
            }
            if (dateNow >= dateDob)
                var dateAge = dateNow - dateDob;
            else {
                monthAge--;
                var dateAge = 31 + dateNow - dateDob;
                if (monthAge < 0) {
                    monthAge = 11;
                    yearAge--;
                }
            }
            age = {
                years: yearAge,
                months: monthAge,
                days: dateAge
            };
            return age;
        };
        this.takePhoto = function () {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Select Image Source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: function () {
                            _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: function () {
                            _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        };
        menu.enable(true);
        this.studentForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            dob: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            parent_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            alternate_contact: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            locality: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            center: [''],
            counsellor: [''],
            today_age: [''],
            month_date: [''],
            month_age: [''],
            class_group: [''],
            photo: [''],
            student_id: ['']
        });
        this.storage.get('user').then(function (user) {
            if (user.role === "counsellor")
                _this.isCounsellor = true;
            else if (user.role === "admin")
                _this.isAdmin = true;
            else if (user.role === "centerAdmin")
                _this.isCenterAdmin = true;
            else
                _this.isCounsellor = true;
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.searchUser().then(function (users) {
            _this.users = users;
            _this.centerService.searchCenter().then(function (centers) {
                _this.userCenter = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](centers, ['center_code', _this.users[0].center]);
                _this.studentService.getStudents().then(function (data) {
                    var student = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](data, ['center', _this.userCenter.center_code]);
                    var student_ids = _this.userCenter.center_code;
                    student_ids += student ? (student.length > 0 ? student.length : 1) : 0;
                    _this.studentForm.controls['student_id'].setValue(student_ids);
                }, function (err) {
                    console.log("not allowed");
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.resetStudent = function () {
        this.studentForm.controls['name'].setValue('');
        this.studentForm.controls['email_id'].setValue('');
        this.studentForm.controls['phone_number'].setValue('');
        this.studentForm.controls['parent_name'].setValue('');
        this.studentForm.controls['alternate_contact'].setValue('');
        this.studentForm.controls['locality'].setValue('');
        this.studentForm.controls['today_age'].setValue('');
        this.studentForm.controls['month_date'].setValue('');
        this.studentForm.controls['month_age'].setValue('');
        this.studentForm.controls['class_group'].setValue('');
        this.studentForm.controls['photo'].setValue('');
        this.studentForm.controls['dob'].setValue('');
        this.today_age_years = '';
        this.today_age_months = '';
        this.today_age_days = '';
        this.month_date = '';
        this.month_age_years = '';
        this.month_age_months = '';
        this.month_age_days = '';
        this.class_group = '';
    };
    HomePage.prototype.calculateClass = function (birthday) {
        var age = (birthday.years * 100) + birthday.months;
        if (age >= 106 && age < 206)
            return "Play Group";
        else if (age >= 206 && age < 306)
            return "Nursery";
        else if (age >= 306 && age < 406)
            return "LKG";
        else if (age >= 406 && age < 506)
            return "UKG";
        return "Not eligible";
    };
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    HomePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    HomePage.prototype.uploadImage = function () {
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var path = targetPath + filename;
        this.getFileContentAsBase64(path, function (base64Image) {
            this.studentForm.photo = base64Image;
        });
    };
    HomePage.prototype.getFileContentAsBase64 = function (path, callback) {
        //    window.resolveLocalFileSystemURL(path, gotFile, fail);
        //            
        //    function fail(e) {
        //          alert('Cannot found requested file');
        //    }
        //    function gotFile(fileEntry) {
        //           fileEntry.file(function(file) {
        //              var reader = new FileReader();
        //              reader.onloadend = function(e) {
        //                   var content = this.result;
        //                   callback(content);
        //              };
        //   // The most important point, use the readAsDatURL Method from the file plugin
        //              reader.readAsDataURL(file);
        //           });
        //    }
    };
    HomePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    HomePage.prototype.openSignupPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.openCenterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__center_center__["a" /* CenterPage */]);
    };
    HomePage.prototype.openReportsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__reports_reports__["a" /* ReportsPage */]);
    };
    HomePage.prototype.openIndentPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__indent_indent__["a" /* IndentPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'home-page',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/home/home.html"*/'<ion-header>\n <ion-navbar color="secondary">\n  <!-- <ion-buttons start>\n    <button ion-button icon-only (click)="logout()"><ion-icon name="power"></ion-icon></button>\n  </ion-buttons> -->\n  <ion-title>\n    ENQUIRY\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="search()"><ion-icon name="search"></ion-icon></button>\n  </ion-buttons>\n </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openCenterPage()" *ngIf="isAdmin">\n        Center\n      </button>\n      <button ion-item (click)="openSignupPage()" *ngIf="!isCounsellor">\n        Users\n      </button>\n      <button ion-item (click)="openReportsPage()">\n        Reports\n      </button>\n      <button ion-item (click)="openIndentPage()">\n        Indent\n      </button>\n      <button ion-item (click)="logOut()">\n        Log Out\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content padding class="home-page">\n \n    <ion-list no-lines>\n\n      <form [formGroup]="studentForm">\n \n        <!-- Name of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="people"></ion-icon> Name*</ion-label>\n            <ion-input type="text" formControlName="name"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.name.valid  && (studentForm.controls.name.dirty || submitAttempt)">\n          Please enter a valid name\n        </p>\n\n        <!-- Gender of the student -->\n        <ion-item>\n            <ion-label floating><ion-icon name="transgender"></ion-icon> Gender*</ion-label>\n            <ion-select formControlName="gender">\n              <ion-option value="Male" selected="true">Male</ion-option>\n              <ion-option value="Female">Female</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.gender.valid  && (studentForm.controls.gender.dirty || submitAttempt)">\n          Please select Gender\n        </p>\n\n        <!-- DOB of the student -->\n        <ion-item>\n          <ion-label floating><ion-icon name="clock"></ion-icon> DOB*</ion-label>\n          <ion-datetime displayFormat="DD/MMM/YYYY" (ionChange)="onDobChange()" pickerFormat="DD MMM YYYY" formControlName="dob"></ion-datetime>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.dob.valid  && (studentForm.controls.dob.dirty || submitAttempt)">\n          Please select valid date\n        </p>\n\n        <!-- Name of the Parent -->\n        <ion-item>\n            <ion-label floating><ion-icon name="people"></ion-icon> Parent Name*</ion-label>\n            <ion-input type="text" formControlName="parent_name"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.parent_name.valid  && (studentForm.controls.parent_name.dirty || submitAttempt)">\n          Please enter a valid name\n        </p>\n \n        <ion-item>\n            <ion-label floating><ion-icon name="mail"></ion-icon> E-mail*</ion-label>\n            <ion-input type="text" formControlName="email_id"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.email_id.valid  && (studentForm.controls.email_id.dirty || submitAttempt)">\n          Please enter a valid E-mail Id\n        </p>\n \n        <ion-item>\n            <ion-label floating><ion-icon name="call"></ion-icon> Phone No*</ion-label>\n            <ion-input type="text" formControlName="phone_number"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.phone_number.valid  && (studentForm.controls.phone_number.dirty || submitAttempt)">\n          Please enter a valid Phone No.\n        </p>\n\n        <ion-item>\n            <ion-label floating><ion-icon name="call"></ion-icon> Alternate Contact</ion-label>\n            <ion-input type="text" formControlName="alternate_contact"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.alternate_contact.valid  && (studentForm.controls.alternate_contact.dirty || submitAttempt)">\n          Please enter a valid alternate No.\n        </p>\n\n        <ion-item>\n            <ion-label floating><ion-icon name="locate"></ion-icon> Locality*</ion-label>\n            <ion-input type="text" formControlName="locality"></ion-input>\n        </ion-item>\n\n        <p class="errorMessage" *ngIf="!studentForm.controls.locality.valid  && (studentForm.controls.locality.dirty || submitAttempt)">\n          Please enter a valid locality\n        </p>\n\n        <ion-item>\n            <h2>Age as of Today - \n            <span class="numbering">{{ today_age_years }} . {{ today_age_months }}</span></h2>\n        </ion-item>\n\n        <ion-item>\n            <h2>Age as of {{ month_date }} - <span class="numbering">{{ month_age_years }} . {{ month_age_months }}</span> </h2>\n        </ion-item>\n\n        <ion-item>\n            <h2>Class - \n            <span class="numbering">{{ class_group }}</span></h2>\n        </ion-item>\n\n        <ion-toolbar color="primary" class="upload_button">\n          <ion-buttons>\n            <button ion-button icon-left (click)="takePhoto()">\n              <ion-icon name="camera"></ion-icon>Select Image\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n\n      </form>\n \n    </ion-list>\n\n    <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n \n    <div class="gm_drawer_footer_wrapper">\n      <button (click)="resetStudent()" ion-button class="btn-danger">Reset</button>\n      <button (click)="addStudent()" ion-button class="btn-success">Submit</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_students_students__["a" /* Students */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_center_center__["a" /* Center */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], HomePage);

;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ion2_calendar_dist__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReportsPage = (function () {
    function ReportsPage(navParams, navCtrl, studentService, modalCtrl, alertCtrl, authService, loadingCtrl, storage, calendarCtrl, transfer, file, emailComposer) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.calendarCtrl = calendarCtrl;
        this.transfer = transfer;
        this.file = file;
        this.emailComposer = emailComposer;
        this.fileTransfer = this.transfer.create();
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.studentService.getStudents().then(function (data) {
            _this.storage.get('user').then(function (user) {
                if (user.role != "admin") {
                    data = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](data, function (o) {
                        return (o.center == user.center);
                    });
                }
                _this.students = (__WEBPACK_IMPORTED_MODULE_5_lodash__["sortBy"](data, 'enquiry_date')).reverse();
            });
        }, function (err) {
            console.log("not allowed");
        });
    };
    ReportsPage.prototype.search = function (startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        if (this.searchType === 'enquiry') {
            this.reports = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.students, function (o) {
                return (__WEBPACK_IMPORTED_MODULE_7_moment__(o.enquiryDate) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.enquiryDate) <= endDate);
            });
        }
        else if (this.searchType === 'confirmed') {
            this.reports = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.students, function (o) {
                return (o.is_Confirmed && __WEBPACK_IMPORTED_MODULE_7_moment__(o.confirmation_date) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.confirmation_date) <= endDate);
            });
        }
        else if (this.searchType === 'indented') {
            this.reports = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.students, function (o) {
                return (o.is_Indented && __WEBPACK_IMPORTED_MODULE_7_moment__(o.indentation_date) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.indentation_date) <= endDate);
            });
        }
        else {
            this.reports = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.students, function (o) {
                return ((__WEBPACK_IMPORTED_MODULE_7_moment__(o.enquiryDate) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.enquiryDate) <= endDate) || (o.is_Confirmed && __WEBPACK_IMPORTED_MODULE_7_moment__(o.confirmation_date) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.confirmation_date) <= endDate) || (o.is_Indented && __WEBPACK_IMPORTED_MODULE_7_moment__(o.indentation_date) >= startDate && __WEBPACK_IMPORTED_MODULE_7_moment__(o.indentation_date) <= endDate));
            });
        }
        console.log(this.reports);
    };
    ReportsPage.prototype.searchToday = function () {
        this.searchByDates = "today";
        var startDate = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(1, 'day');
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment__();
        this.search(startDate, endDate);
    };
    ReportsPage.prototype.searchWeek = function () {
        this.searchByDates = "week";
        var startDate = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(7, 'day');
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment__();
        this.search(startDate, endDate);
    };
    ReportsPage.prototype.searchMonth = function () {
        this.searchByDates = "month";
        var startDate = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(7, 'day');
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment__();
        this.search(startDate, endDate);
    };
    ReportsPage.prototype.searchDates = function (res) {
        this.searchByDates = "dates";
        var startDate = __WEBPACK_IMPORTED_MODULE_7_moment__(res.from);
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment__(res.to);
        this.search(startDate, endDate);
    };
    ReportsPage.prototype.setEnquiry = function () {
        this.searchType = "enquiry";
        this.searchOnChange();
    };
    ReportsPage.prototype.setConfirmed = function () {
        this.searchType = "confirmed";
        this.searchOnChange();
    };
    ReportsPage.prototype.setIndented = function () {
        this.searchType = "indented";
        this.searchOnChange();
    };
    ReportsPage.prototype.setAll = function () {
        this.searchType = "";
        this.searchOnChange();
    };
    ReportsPage.prototype.searchOnChange = function () {
        if (this.searchByDates === "dates") {
            var res = {
                from: this.startDate,
                to: this.endDate
            };
            this.searchDates(res);
        }
        else if (this.searchByDates === "month")
            this.searchMonth();
        else if (this.searchByDates === "week")
            this.searchWeek();
        else
            this.searchToday();
    };
    //Function to covert object to csv format
    ReportsPage.prototype.convertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ReportsPage.prototype.downloadReport = function () {
        var url = this.convertToCSV(this.reports);
        this.fileTransfer.download(url, this.file.dataDirectory + 'reports.csv').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            console.log(error);
        });
    };
    ReportsPage.prototype.convertJsonToHtml = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : new Array(objArray);
        var keys = Object.keys(array[0]);
        var str = '<table>';
        str += '<tbody>';
        for (var i = 0; i < array.length; i++) {
            str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';
            for (var index in keys) {
                var objValue = array[i][keys[index]];
                // Support for Nested Tables
                if (typeof objValue === 'object' && objValue !== null) {
                    if (Array.isArray(objValue)) {
                        str += '<td>';
                        for (var aindex in objValue) {
                            str += this.convertJsonToHtml(objValue[aindex]);
                        }
                        str += '</td>';
                    }
                    else {
                        str += '<td>' + this.convertJsonToHtml(objValue) + '</td>';
                    }
                }
                else {
                    str += '<td>' + objValue + '</td>';
                }
            }
            str += '</tr>';
        }
        str += '</tbody>';
        str += '</table>';
        return str;
    };
    ReportsPage.prototype.mailReport = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            var email = {
                to: user.email,
                attachments: [],
                subject: 'Reports',
                body: _this.convertJsonToHtml(_this.reports),
                isHtml: true
            };
            _this.emailComposer.open(email);
        });
    };
    ReportsPage.prototype.dateRange = function () {
        var _this = this;
        this.calendarCtrl.openCalendar({
            isRadio: false,
            from: new Date(2017, 1 - 1, 1),
            to: new Date(),
            weekdaysTitle: "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
        })
            .then(function (res) {
            _this.searchDates(res);
        })
            .catch(function () { });
    };
    ReportsPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return ReportsPage;
}());
ReportsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reports',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/reports/reports.html"*/'<ion-header>\n <ion-navbar color="secondary">\n  <ion-title>\n    Reports\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n  </ion-buttons>\n </ion-navbar>\n</ion-header>\n \n<ion-content>\n\n	<div class="button-bar">\n        <a class="button button-option" (click)="searchToday()">Day</a>\n        <a class="button button-option" (click)="searchWeek()">Week</a>\n        <a class="button button-option" (click)="searchMonth()">Month</a>\n        <a class="button button-option" (click)="dateRange()">Dates</a>\n    </div>\n\n    <div class="button-bar">\n        <a class="button button-energized" (click)="setEnquiry()">Enq.</a>\n        <a class="button button-assertive" (click)="setConfirmed()">Conf.</a>\n        <a class="button button-positive" (click)="setIndented()">Ind.</a>\n        <a class="button button-simple" (click)="setAll()">All</a>\n    </div>\n\n  <ion-list>\n \n    <img src="../assets/images/emoji-faces.jpg" class="emozi" *ngIf="reports && !reports.length" />\n    <h1 *ngIf="reports && !reports.length" class="no_record"> NO RECORDS FOUND </h1>\n\n    <p *ngIf="reports && reports.length" class="result-number"> {{reports.length}} {{searchType}} results found for {{startDate | date: \'dd/MMM/yyyy\'}} - {{endDate | date: \'dd/MMM/yyyy\'}}</p>\n\n	<table class="rwd-table">\n	  <tr>\n	    <th>ID</th>\n	    <th>Name</th>\n	    <th>Parent</th>\n	    <th>Phone</th>\n	    <th>DOB</th>\n	    <th>Email</th>\n	    <th>Gender</th>\n	    <th>Class</th>\n	  </tr>\n	  <tr *ngFor="let report of reports" class="{{report.status}}">\n	    <td data-th="ID">{{report.student_id}}</td>\n	    <td data-th="Name">{{report.name}}</td>\n	    <td data-th="Parent">{{report.parent_name}}</td>\n	    <td data-th="Phone">{{report.phone_number}}</td>\n	    <td data-th="DOB">{{report.dob | date: \'dd/MMM/yyyy\'}}</td>\n	    <td data-th="Email">{{report.email_id}}</td>\n	    <td data-th="Gender">{{report.gender}}</td>\n	    <td data-th="Class">{{report.class_group}}</td>\n	  </tr>\n	</table>\n\n    <div class="gm_drawer_footer_wrapper" *ngIf="reports && reports.length">\n      <button (click)="downloadReport()" ion-button class="btn-info">Download</button>\n      <button (click)="mailReport()" ion-button class="btn-info">Send Mail</button>\n    </div>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/reports/reports.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["b" /* TransferObject */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__["a" /* EmailComposer */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_students_students__["a" /* Students */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8_ion2_calendar_dist__["a" /* CalendarController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__["a" /* EmailComposer */]])
], ReportsPage);

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Students; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Students = (function () {
    function Students(http, authService, storage) {
        this.http = http;
        this.authService = authService;
        this.storage = storage;
    }
    Students.prototype.getStudents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.get('http://localhost:8080/api/students', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Students.prototype.createStudent = function (student) {
        var _this = this;
        this.storage.get('user').then(function (user) {
            student.center = user.center;
            student.counsellor = user.email;
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', _this.authService.token);
                _this.http.post('http://localhost:8080/api/students', JSON.stringify(student), { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
        return null;
    };
    Students.prototype.updateStudent = function (student) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.put('http://localhost:8080/api/students/' + student._id, student, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return Students;
}());
Students = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], Students);

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_center_center__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__center_center__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Pages



var SignupPage = SignupPage_1 = (function () {
    function SignupPage(navCtrl, navParams, centerService, authService, loadingCtrl, app, menu, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.centerService = centerService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.menu = menu;
        this.storage = storage;
        this.active = true;
        this.isPasswordMatching = true;
        this.isExisting = false;
        this.btnText = "Save";
        menu.enable(true);
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.getCenters();
        this.getUsers();
    };
    // Function to get list of all the centers
    SignupPage.prototype.getCenters = function () {
        var _this = this;
        this.centers = [];
        this.centerService.searchCenter().then(function (result) {
            _this.centers = result;
            _this.storage.get('user').then(function (user) {
                if (user.role != "admin") {
                    _this.centers = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](_this.centers, ['center_code', user.center]);
                    _this.center = _this.centers;
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    // Function to get list of all the Users
    SignupPage.prototype.getUsers = function () {
        var _this = this;
        this.users = [];
        this.authService.searchUser().then(function (result) {
            _this.users = result;
        }, function (err) {
            console.log(err);
        });
    };
    SignupPage.prototype.save = function () {
        if (!this.isExisting && this.isPasswordMatching) {
            var details = {
                email: this.email,
                password: this.password,
                role: this.role,
                name: this.name,
                center: this.center,
                active: this.active
            };
            this.authService.createAccount(details).then(function (result) {
                console.log(result);
            }, function (err) {
            });
        }
    };
    SignupPage.prototype.update = function () {
        var details = {
            email: this.email,
            password: this.password,
            role: this.role,
            name: this.name,
            center: this.center,
            active: this.active
        };
        this.authService.updateAccount(details).then(function (result) {
        }, function (err) { });
    };
    // Function to search for a User dynamically based on an input
    SignupPage.prototype.search = function () {
        var result = [];
        for (var i = 0; i < this.users.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_4_lodash__["includes"](this.users[i].name, this.myInput)) {
                result.push(this.users[i]);
            }
            else if (__WEBPACK_IMPORTED_MODULE_4_lodash__["includes"](this.users[i].email, this.myInput)) {
                result.push(this.users[i]);
            }
        }
        if (result && result.length === 1) {
            this.role = result[0].role;
            this.email = result[0].email;
            this.password = result[0].password;
            this.confirm_password = result[0].password;
            this.name = result[0].name;
            this.center = result[0].center;
            this.active = result[0].active;
            this._id = result[0]._id;
            this.btnText = "Update";
        }
        else {
            this.role = "";
            this.email = "";
            this.password = "";
            this.confirm_password = "";
            this.name = "";
            this.center = "";
            this.active = true;
        }
    };
    // Function to search for a User dynamically based on select
    SignupPage.prototype.onSelectChange = function () {
        var result = [];
        for (var i = 0; i < this.users.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_4_lodash__["includes"](this.users[i].name, this.myInput)) {
                result.push(this.users[i]);
            }
        }
        if (result && result.length === 1) {
            this.role = result[0].role;
            this.email = result[0].email;
            this.password = result[0].password;
            this.confirm_password = result[0].password;
            this.name = result[0].name;
            this.center = result[0].center;
            this.active = result[0].active;
            this._id = result[0]._id;
            this.btnText = "Update";
        }
        else {
            this.role = "";
            this.email = "";
            this.password = "";
            this.confirm_password = "";
            this.name = "";
            this.center = "";
            this.active = true;
        }
    };
    // Function to check if user exists with same email ID
    SignupPage.prototype.checkEmail = function () {
        this.isExisting = false;
        var result = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.users, ['email', this.email]);
        this.isExisting = (result != null && result != undefined) ? true : false;
    };
    // Function to check if password and confirm password match
    SignupPage.prototype.checkPassword = function () {
        this.isPasswordMatching = false;
        if ((this.password == "" || this.password == undefined || this.password == null)
            && (this.confirm_password == "" || this.confirm_password == undefined || this.confirm_password == null)) {
            this.isPasswordMatching = false;
        }
        else {
            this.isPasswordMatching = (this.password == this.confirm_password) ? true : false;
        }
    };
    // Function to open Pages
    SignupPage.prototype.openSignupPage = function () {
        this.navCtrl.setRoot(SignupPage_1);
    };
    SignupPage.prototype.openCenterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__center_center__["a" /* CenterPage */]);
    };
    SignupPage.prototype.openReportsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__reports_reports__["a" /* ReportsPage */]);
    };
    SignupPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    return SignupPage;
}());
SignupPage = SignupPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'signup',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/signup/signup.html"*/' <ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons start>\n        <button ion-button icon-only (click)="openHomePage()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openCenterPage()">\n        Center\n      </button>\n      <button ion-item (click)="openSignupPage()">\n        Users\n      </button>\n      <button ion-item (click)="openReportsPage()">\n        Reports\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav> \n\n<ion-content>\n\n    <div class="search-row">\n        <ion-searchbar\n            [(ngModel)]="myInput"\n            (animated)="true"\n            (placeholder)="Search"\n            (ionInput)="search()">\n        </ion-searchbar>\n        <ion-select interface="popover" [(ngModel)]="mySelect" (ionChange)="onSelectChange()" class="search-ic">\n          <ion-option *ngFor="let user of users" [value]="user.name">{{user.name}}</ion-option>\n        </ion-select>\n    </div>\n \n    <ion-row class="account-form">\n        <ion-col>\n            <ion-list inset>\n\n                <ion-item>\n                  <ion-label>Center</ion-label>\n                  <ion-select interface="popover" [(ngModel)]="center">\n                    <ion-option *ngFor="let cen of centers" [value]="cen.center_code"> {{cen.center_name}} </ion-option>\n                  </ion-select>\n                </ion-item>\n \n                <ion-item>\n                    <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="email" (ionChange)="checkEmail()" required placeholder="Email" type="email"></ion-input>\n                </ion-item>\n\n                <p class="error-message" *ngIf="isExisting">Email already exists</p>\n\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="password" (ionChange)="checkPassword()" placeholder="Password" type="password"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="confirm_password" placeholder="Confirm Password" (ionChange)="checkPassword()" type="password"></ion-input>\n                </ion-item>\n\n                <p class="error-message" *ngIf="!isPasswordMatching">Password do not match</p>\n\n                <ion-item>\n                    <ion-label><ion-icon name="person-add"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="name" placeholder="Name"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Active</ion-label>\n                    <ion-toggle [(ngModel)]="active" checked="true" class="toggle-large"></ion-toggle>\n                </ion-item>\n \n                <ion-list radio-group [(ngModel)]="role">\n                  <ion-item>\n                    <ion-label>Counsellor</ion-label>\n                    <ion-radio value="counsellor" checked></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Center Admin</ion-label>\n                    <ion-radio value="centerAdmin"></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Admin</ion-label>\n                    <ion-radio value="admin"></ion-radio>\n                  </ion-item>\n                </ion-list>\n \n            </ion-list>\n \n            <button ion-button (click)="save()" *ngIf="btnText == \'Save\'" class="continue-button">{{ btnText }}</button>\n            <button ion-button (click)="update()" *ngIf="btnText != \'Save\'" class="continue-button">{{ btnText }}</button>\n        \n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_center_center__["a" /* Center */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], SignupPage);

var SignupPage_1;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(523);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_center_center__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Pages



var CenterPage = CenterPage_1 = (function () {
    function CenterPage(navCtrl, navParams, centerService, loadingCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.centerService = centerService;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.menu = menu;
        this.active = true;
        this.btnText = "Save";
        menu.enable(true);
    }
    CenterPage.prototype.ionViewDidLoad = function () {
        this.getCenters();
    };
    // Function to save new center
    CenterPage.prototype.save = function () {
        var center = {
            center_name: this.center_name,
            center_code: this.center_code,
            center_phoneno: this.center_phoneno,
            center_email: this.center_email,
            center_address: this.center_address,
            active: this.active
        };
        this.centerService.createCenter(center).then(function (result) {
            console.log(result);
        }, function (err) {
        });
    };
    // Function to update existing center
    CenterPage.prototype.update = function () {
        var center = {
            center_name: this.center_name,
            center_code: this.center_code,
            center_phoneno: this.center_phoneno,
            center_email: this.center_email,
            center_address: this.center_address,
            active: this.active,
            _id: this.center_id
        };
        this.centerService.updateCenter(center).then(function (result) {
            console.log(result);
        }, function (err) {
        });
    };
    // Function to get list of all the centers
    CenterPage.prototype.getCenters = function () {
        var _this = this;
        this.centers = [];
        this.centerService.searchCenter().then(function (result) {
            _this.centers = result;
        }, function (err) {
            console.log(err);
        });
    };
    // Function to search for a center dynamically based on an input
    CenterPage.prototype.search = function () {
        var result = [];
        for (var i = 0; i < this.centers.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](this.centers[i].center_name, this.myInput)) {
                result.push(this.centers[i]);
            }
            else if (__WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](this.centers[i].center_code, this.myInput)) {
                result.push(this.centers[i]);
            }
            else if (__WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](this.centers[i].center_phoneno, this.myInput)) {
                result.push(this.centers[i]);
            }
            else if (__WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](this.centers[i].center_email, this.myInput)) {
                result.push(this.centers[i]);
            }
        }
        if (result && result.length === 1) {
            this.center_name = result[0].center_name;
            this.center_code = result[0].center_code;
            this.center_phoneno = result[0].center_phoneno;
            this.center_email = result[0].center_email;
            this.center_address = result[0].center_address;
            this.active = result[0].active;
            this.center_id = result[0]._id;
            this.btnText = "Update";
        }
        else {
            this.center_name = "";
            this.center_code = "";
            this.center_phoneno = "";
            this.center_email = "";
            this.center_address = "";
            this.active = true;
            this.center_id = "";
        }
    };
    CenterPage.prototype.onSelectChange = function () {
        var result = [];
        for (var i = 0; i < this.centers.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](this.centers[i].center_name, this.mySelect)) {
                result.push(this.centers[i]);
            }
        }
        if (result && result.length === 1) {
            this.center_name = result[0].center_name;
            this.center_code = result[0].center_code;
            this.center_phoneno = result[0].center_phoneno;
            this.center_email = result[0].center_email;
            this.center_address = result[0].center_address;
            this.active = result[0].active;
            this.center_id = result[0]._id;
            this.btnText = "Update";
        }
        else {
            this.center_name = "";
            this.center_code = "";
            this.center_phoneno = "";
            this.center_email = "";
            this.center_address = "";
            this.active = true;
            this.center_id = "";
        }
    };
    // Function to generate unique center code
    CenterPage.prototype.generateCode = function () {
        var fields = this.center_name.split(' ');
        var str = "";
        if (fields.length > 1) {
            var temp1 = fields[0];
            var temp2 = fields[1];
            if (temp1.length > 0)
                str += temp1[0];
            if (temp1.length > 1) {
                str += temp1[1];
                if (temp2.length > 0) {
                    str += temp2[0];
                }
                else if (temp.length > 2)
                    str += temp[2];
            }
            else if (temp2.length > 2) {
                str += temp2[0];
                str += temp2[1];
            }
        }
        else {
            var temp = fields[0];
            if (temp.length > 0)
                str += temp[0];
            if (temp.length > 1)
                str += temp[1];
            if (temp.length > 2)
                str += temp[2];
        }
        this.center_code = str.toUpperCase();
    };
    // Function to open Pages
    CenterPage.prototype.openSignupPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    CenterPage.prototype.openCenterPage = function () {
        this.navCtrl.setRoot(CenterPage_1);
    };
    CenterPage.prototype.openReportsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__reports_reports__["a" /* ReportsPage */]);
    };
    CenterPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return CenterPage;
}());
CenterPage = CenterPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-center',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/center/center.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n  	<ion-buttons start>\n		<button ion-button icon-only (click)="openHomePage()"><ion-icon name="close"></ion-icon></button>\n  	</ion-buttons>\n    <ion-title>Centers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openCenterPage()">\n        Center\n      </button>\n      <button ion-item (click)="openSignupPage()">\n        Users\n      </button>\n      <button ion-item (click)="openReportsPage()">\n        Reports\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav> \n\n<ion-content>\n    <div class="search-row">\n      	<ion-searchbar\n      		  [(ngModel)]="myInput"\n      		  (animated)="true"\n      		  (placeholder)="Search"\n      		  (ionInput)="search()">\n      	</ion-searchbar>\n        <ion-select interface="popover" [(ngModel)]="mySelect" (ionChange)="onSelectChange()" class="search-ic">\n          <ion-option *ngFor="let center of centers" [value]="center.center_name">{{center.center_name}}</ion-option>\n        </ion-select>\n    </div>\n\n    <ion-row class="account-form">\n        <ion-col>\n            <ion-list inset>\n \n                <ion-item>\n                    <ion-label><ion-icon name="paper-plane"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="center_name" (ionChange)="generateCode()" placeholder="Center Name" required type="string"></ion-input>\n                </ion-item>\n \n                <ion-item>\n                    <h3> Center Code: {{ center_code }} </h3>\n                </ion-item>\n \n               <ion-item>\n                    <ion-label><ion-icon name="call"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="center_phoneno" placeholder="Center Phone No" required type="string"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="center_email" placeholder="Center E-Mail" required type="string"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label><ion-icon name="locate"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="center_address" placeholder="Center Address" required type="string"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Active</ion-label>\n                 	<ion-toggle [(ngModel)]="active" checked="true" class="toggle-large"></ion-toggle>\n 				        </ion-item>\n            </ion-list>\n \n            <button ion-button (click)="save()" *ngIf="btnText == \'Save\'" class="continue-button">{{ btnText }}</button>\n            <button ion-button (click)="update()" *ngIf="btnText != \'Save\'" class="continue-button">{{ btnText }}</button>\n \n        </ion-col>\n    </ion-row>\n \n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/center/center.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_center_center__["a" /* Center */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], CenterPage);

var CenterPage_1;
//# sourceMappingURL=center.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_center_center__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reports_reports__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_confirm_confirm__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_indent_indent__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_students_students__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_center_center__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_transfer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_path__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages








// Providers



// Camera




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_center_center__["a" /* CenterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_reports_reports__["a" /* ReportsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_confirm_confirm__["a" /* ConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_indent_indent__["a" /* IndentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["b" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/center/center.module#CenterPageModule', name: 'CenterPage', segment: 'center', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_center_center__["a" /* CenterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_reports_reports__["a" /* ReportsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_confirm_confirm__["a" /* ConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_indent_indent__["a" /* IndentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_16__providers_students_students__["a" /* Students */],
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_18__providers_center_center__["a" /* Center */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_path__["a" /* FilePath */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 209,
	"./ar-dz": 210,
	"./ar-dz.js": 210,
	"./ar-kw": 211,
	"./ar-kw.js": 211,
	"./ar-ly": 212,
	"./ar-ly.js": 212,
	"./ar-ma": 213,
	"./ar-ma.js": 213,
	"./ar-sa": 214,
	"./ar-sa.js": 214,
	"./ar-tn": 215,
	"./ar-tn.js": 215,
	"./ar.js": 209,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bn": 219,
	"./bn.js": 219,
	"./bo": 220,
	"./bo.js": 220,
	"./br": 221,
	"./br.js": 221,
	"./bs": 222,
	"./bs.js": 222,
	"./ca": 223,
	"./ca.js": 223,
	"./cs": 224,
	"./cs.js": 224,
	"./cv": 225,
	"./cv.js": 225,
	"./cy": 226,
	"./cy.js": 226,
	"./da": 227,
	"./da.js": 227,
	"./de": 228,
	"./de-at": 229,
	"./de-at.js": 229,
	"./de-ch": 230,
	"./de-ch.js": 230,
	"./de.js": 228,
	"./dv": 231,
	"./dv.js": 231,
	"./el": 232,
	"./el.js": 232,
	"./en-au": 233,
	"./en-au.js": 233,
	"./en-ca": 234,
	"./en-ca.js": 234,
	"./en-gb": 235,
	"./en-gb.js": 235,
	"./en-ie": 236,
	"./en-ie.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 239,
	"./es-do": 240,
	"./es-do.js": 240,
	"./es.js": 239,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-latn": 252,
	"./gom-latn.js": 252,
	"./he": 253,
	"./he.js": 253,
	"./hi": 254,
	"./hi.js": 254,
	"./hr": 255,
	"./hr.js": 255,
	"./hu": 256,
	"./hu.js": 256,
	"./hy-am": 257,
	"./hy-am.js": 257,
	"./id": 258,
	"./id.js": 258,
	"./is": 259,
	"./is.js": 259,
	"./it": 260,
	"./it.js": 260,
	"./ja": 261,
	"./ja.js": 261,
	"./jv": 262,
	"./jv.js": 262,
	"./ka": 263,
	"./ka.js": 263,
	"./kk": 264,
	"./kk.js": 264,
	"./km": 265,
	"./km.js": 265,
	"./kn": 266,
	"./kn.js": 266,
	"./ko": 267,
	"./ko.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 278,
	"./ms-my": 279,
	"./ms-my.js": 279,
	"./ms.js": 278,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 283,
	"./nl-be": 284,
	"./nl-be.js": 284,
	"./nl.js": 283,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./th": 306,
	"./th.js": 306,
	"./tl-ph": 307,
	"./tl-ph.js": 307,
	"./tlh": 308,
	"./tlh.js": 308,
	"./tr": 309,
	"./tr.js": 309,
	"./tzl": 310,
	"./tzl.js": 310,
	"./tzm": 311,
	"./tzm-latn": 312,
	"./tzm-latn.js": 312,
	"./tzm.js": 311,
	"./uk": 313,
	"./uk.js": 313,
	"./ur": 314,
	"./ur.js": 314,
	"./uz": 315,
	"./uz-latn": 316,
	"./uz-latn.js": 316,
	"./uz.js": 315,
	"./vi": 317,
	"./vi.js": 317,
	"./x-pseudo": 318,
	"./x-pseudo.js": 318,
	"./yo": 319,
	"./yo.js": 319,
	"./zh-cn": 320,
	"./zh-cn.js": 320,
	"./zh-hk": 321,
	"./zh-hk.js": 321,
	"./zh-tw": 322,
	"./zh-tw.js": 322
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 552;

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* StatusBar */].styleDefault();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Center; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Center = (function () {
    function Center(http, authService, storage) {
        this.http = http;
        this.authService = authService;
        this.storage = storage;
    }
    // Function to get list of al the centers
    Center.prototype.searchCenter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.get('http://localhost:8080/api/centers', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Center.prototype.createCenter = function (center) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post('http://localhost:8080/api/centers', JSON.stringify(center), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    Center.prototype.updateCenter = function (center) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.put('http://localhost:8080/api/centers', JSON.stringify(center), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return Center;
}());
Center = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], Center);

//# sourceMappingURL=center.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.logoState = "in";
        this.cloudState = "in";
        this.loginState = "in";
        this.formState = "in";
        this.errorMessage = "";
        this.submitAttempt = false;
        this.isForgotPassword = false;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.forgotPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        //Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            console.log("Already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        this.submitAttempt = true;
        var credentials = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        if (this.loginForm.valid) {
            this.authService.login(credentials).then(function (result) {
                _this.loading.dismiss();
                console.log(result);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (err) {
                _this.errorMessage = "Authentication Failed!";
                _this.loading.dismiss();
                console.log(err);
            });
        }
        else {
            this.errorMessage = "Please fill all details correctly";
            this.loading.dismiss();
        }
    };
    LoginPage.prototype.submitForgotPassword = function () {
        var _this = this;
        this.showLoader();
        this.submitAttempt = true;
        var credentials = {
            email: this.forgotPasswordForm.value.email,
        };
        if (this.forgotPasswordForm.valid) {
            this.authService.forgotPassword(credentials).then(function (result) {
                _this.loading.dismiss();
                console.log(result);
                _this.isForgotPassword = !_this.isForgotPassword;
                _this.errorMessage = "Please check your mail for further information!";
            }, function (err) {
                _this.errorMessage = "Authentication Failed!";
                _this.loading.dismiss();
                console.log(err);
            });
        }
        else {
            this.errorMessage = "Please fill all details correctly";
            this.loading.dismiss();
        }
    };
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
        this.errorMessage = "";
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.forgotPassword = function () {
        this.isForgotPassword = !this.isForgotPassword;
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"/home/nabeel/Code/spark/client/todo-roles/src/pages/login/login.html"*/'<ion-content class="login-page">\n    <div padding id="cloud-layer">\n\n      <ion-row>\n        <ion-col>\n          <img [@flyInBottomSlow]="logoState" src="assets/images/logo_littleW_0.png" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!isForgotPassword">\n          <ion-col>\n              <ion-list inset [@bounceInBottom]="formState">\n\n                <form [formGroup]="loginForm">\n   \n                    <ion-item>\n                      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                      <ion-input formControlName="email" placeholder="email" type="text"></ion-input>\n                    </ion-item>\n\n                    <p *ngIf="!loginForm.controls.email.valid  && (loginForm.controls.email.dirty || submitAttempt)" class="errorMessage">\n                      Enter valid email id\n                    </p>\n       \n                    <ion-item>\n                      <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                      <ion-input required formControlName="password" placeholder="password" type="password"></ion-input>\n                    </ion-item>\n\n                    <p *ngIf="!loginForm.controls.password.valid  && (loginForm.controls.password.dirty || submitAttempt)" class="errorMessage">\n                      Enter valid password\n                    </p>\n\n                  </form>\n              </ion-list>\n          </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!isForgotPassword">\n          <ion-col>\n              <button ion-button full (click)="login()" [@fadeIn]="loginState" class="login-button">Login</button>\n          </ion-col>\n      </ion-row>\n\n      <ion-col *ngIf="!isForgotPassword">\n          <a class="forgot-password" (click)="forgotPassword()" [@fadeIn]="loginState"> FORGOT PASSWORD? </a>\n      </ion-col>\n\n      <ion-row *ngIf="isForgotPassword">\n          <ion-col>\n              <ion-list inset [@bounceInBottom]="formState">\n\n                <form [formGroup]="forgotPasswordForm">\n   \n                    <ion-item>\n                      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                      <ion-input formControlName="email" placeholder="email" type="text"></ion-input>\n                    </ion-item>\n\n                    <p *ngIf="!forgotPasswordForm.controls.email.valid  && (forgotPasswordForm.controls.email.dirty || submitAttempt)" class="errorMessage">\n                      Enter valid email id\n                    </p>\n\n                </form>\n              </ion-list>\n          </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isForgotPassword">\n          <ion-col>\n              <button ion-button full (click)="submitForgotPassword()" [@fadeIn]="loginState" class="login-button">Submit</button>\n          </ion-col>\n      </ion-row>\n\n      <ion-col *ngIf="isForgotPassword">\n          <a class="forgot-password" (click)="forgotPassword()" [@fadeIn]="loginState"> Login? </a>\n      </ion-col>\n\n      <ion-row>\n        <ion-col>\n            <p class="errorMessage">{{errorMessage}}</p>\n        </ion-col>\n      </ion-row>\n\n    </div>\n \n</ion-content>'/*ion-inline-end:"/home/nabeel/Code/spark/client/todo-roles/src/pages/login/login.html"*/,
        animations: [
            //For the logo
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInBottomSlow', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('2000ms ease-in-out')
                ])
            ]),
            //For the background detail
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInBottomFast', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('1000ms ease-in-out')
                ])
            ]),
            //For the login form
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('bounceInBottom', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('2000ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            //For login button
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('fadeIn', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('1000ms 2000ms ease-in')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.js.map