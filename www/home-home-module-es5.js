(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      {{ viewTitle }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"today()\">Today</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  \n  <calendar \n    [eventSource]=\"eventSource\" \n    [calendarMode]=\"calendar.mode\" \n    [currentDate]=\"calendar.currentDate\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\" \n    startHour=\"6\"\n    endHour=\"20\"\n    step=\"30\"\n    startingDayWeek=\"1\">\n  </calendar>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home .logo-letters-header {\n  height: 80px;\n}\npage-home .title-home {\n  margin: 0px;\n  padding: 0px;\n  color: #cccccc;\n  margin-left: 15px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  font-size: 45px;\n  font-weight: bold;\n}\npage-home ion-header::after {\n  display: none;\n}\npage-home .table-bordered[_ngcontent-c1] > thead[_ngcontent-c1] > tr[_ngcontent-c1] > th[_ngcontent-c1], page-home .table-bordered[_ngcontent-c1] > tbody[_ngcontent-c1] > tr[_ngcontent-c1] > th[_ngcontent-c1], page-home .table-bordered[_ngcontent-c1] > tfoot[_ngcontent-c1] > tr[_ngcontent-c1] > th[_ngcontent-c1], page-home .table-bordered[_ngcontent-c1] > thead[_ngcontent-c1] > tr[_ngcontent-c1] > td[_ngcontent-c1], page-home .table-bordered[_ngcontent-c1] > tbody[_ngcontent-c1] > tr[_ngcontent-c1] > td[_ngcontent-c1], page-home .table-bordered[_ngcontent-c1] > tfoot[_ngcontent-c1] > tr[_ngcontent-c1] > td[_ngcontent-c1] {\n  border: none;\n  padding: 10px;\n}\npage-home .table-bordered[_ngcontent-c1] {\n  border: none;\n}\npage-home .monthview-datetable th {\n  color: #676969;\n  font-size: 15px;\n}\npage-home .monthview-datetable tr, page-home .monthview-datetable td {\n  color: #feffff;\n  font-weight: 500;\n  font-size: 25px;\n}\npage-home .monthview-datetable tr, page-home .monthview-datetable td, page-home .monthview-datetable th {\n  padding: 5px !important;\n  padding-top: 19px !important;\n  padding-bottom: 18px !important;\n}\npage-home .monthview-current {\n  background-color: transparent !important;\n}\npage-home .monthview-selected[_ngcontent-c1] {\n  border-radius: 250px 250px 250px 250px;\n  -moz-border-radius: 250px 250px 250px 250px;\n  -webkit-border-radius: 250px 250px 250px 250px;\n}\npage-home .monthview-primary-with-event {\n  background-color: transparent !important;\n}\npage-home .monthview-secondary-with-event {\n  background-color: transparent !important;\n}\npage-home .list-md {\n  margin-bottom: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGdhYnJpZWxhc2NhbmlvZHVyYW4vRG9jdW1lbnRzL0Rldk1vYmlsZS9tdXNpY2lhbi1zY2hlZHVsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxZQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7QUNIUjtBRE1JO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNKUjtBRE9JO0VBQ0ksWUFBQTtBQ0xSO0FEUUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ05SO0FEU0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUFI7QURVSTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ1JSO0FEV0k7RUFFSSx3Q0FBQTtBQ1ZSO0FEYUk7RUFHSSxzQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7QUNiUjtBRGdCSTtFQUVJLHdDQUFBO0FDZlI7QURrQkk7RUFFSSx3Q0FBQTtBQ2pCUjtBRG9CSTtFQUNJLG1CQUFBO0FDbEJSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XG5cbiAgICAubG9nby1sZXR0ZXJzLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG5cbiAgICAudGl0bGUtaG9tZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC50YWJsZS1ib3JkZXJlZFtfbmdjb250ZW50LWMxXSA+IHRoZWFkW19uZ2NvbnRlbnQtYzFdID4gdHJbX25nY29udGVudC1jMV0gPiB0aFtfbmdjb250ZW50LWMxXSwgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGJvZHlbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRoW19uZ2NvbnRlbnQtYzFdLCAudGFibGUtYm9yZGVyZWRbX25nY29udGVudC1jMV0gPiB0Zm9vdFtfbmdjb250ZW50LWMxXSA+IHRyW19uZ2NvbnRlbnQtYzFdID4gdGhbX25nY29udGVudC1jMV0sIC50YWJsZS1ib3JkZXJlZFtfbmdjb250ZW50LWMxXSA+IHRoZWFkW19uZ2NvbnRlbnQtYzFdID4gdHJbX25nY29udGVudC1jMV0gPiB0ZFtfbmdjb250ZW50LWMxXSwgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGJvZHlbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRkW19uZ2NvbnRlbnQtYzFdLCAudGFibGUtYm9yZGVyZWRbX25nY29udGVudC1jMV0gPiB0Zm9vdFtfbmdjb250ZW50LWMxXSA+IHRyW19uZ2NvbnRlbnQtYzFdID4gdGRbX25nY29udGVudC1jMV0ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5tb250aHZpZXctZGF0ZXRhYmxlIHRoIHtcbiAgICAgICAgY29sb3I6ICM2NzY5Njk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAubW9udGh2aWV3LWRhdGV0YWJsZSB0ciwgLm1vbnRodmlldy1kYXRldGFibGUgdGQge1xuICAgICAgICBjb2xvcjogI2ZlZmZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cblxuICAgIC5tb250aHZpZXctZGF0ZXRhYmxlIHRyLCAubW9udGh2aWV3LWRhdGV0YWJsZSB0ZCwgLm1vbnRodmlldy1kYXRldGFibGUgdGgge1xuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE5cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubW9udGh2aWV3LWN1cnJlbnQge1xuICAgICAgICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgZGFuZ2VyLCBiYXNlKSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAubW9udGh2aWV3LXNlbGVjdGVkW19uZ2NvbnRlbnQtYzFdIHtcbiAgICAgICAgLy8gY29sb3I6IGNvbG9yKCRjb2xvcnMsIGxpZ2h0LCBiYXNlKSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcigkY29sb3JzLCB0d2l0dGVyLCBiYXNlKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNTBweCAyNTBweCAyNTBweCAyNTBweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNTBweCAyNTBweCAyNTBweCAyNTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNTBweCAyNTBweCAyNTBweCAyNTBweDtcbiAgICB9XG5cbiAgICAubW9udGh2aWV3LXByaW1hcnktd2l0aC1ldmVudCB7XG4gICAgICAgIC8vIGNvbG9yOiBjb2xvcigkY29sb3JzLCBwcmltYXJ5LCBiYXNlKSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQge1xuICAgICAgICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgcHJpbWFyeSwgYmFzZSkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XG4gICAgfVxufVxuIiwicGFnZS1ob21lIC5sb2dvLWxldHRlcnMtaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxucGFnZS1ob21lIC50aXRsZS1ob21lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnBhZ2UtaG9tZSBpb24taGVhZGVyOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5wYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGhlYWRbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRoW19uZ2NvbnRlbnQtYzFdLCBwYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGJvZHlbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRoW19uZ2NvbnRlbnQtYzFdLCBwYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGZvb3RbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRoW19uZ2NvbnRlbnQtYzFdLCBwYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGhlYWRbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRkW19uZ2NvbnRlbnQtYzFdLCBwYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGJvZHlbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRkW19uZ2NvbnRlbnQtYzFdLCBwYWdlLWhvbWUgLnRhYmxlLWJvcmRlcmVkW19uZ2NvbnRlbnQtYzFdID4gdGZvb3RbX25nY29udGVudC1jMV0gPiB0cltfbmdjb250ZW50LWMxXSA+IHRkW19uZ2NvbnRlbnQtYzFdIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xufVxucGFnZS1ob21lIC50YWJsZS1ib3JkZXJlZFtfbmdjb250ZW50LWMxXSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnBhZ2UtaG9tZSAubW9udGh2aWV3LWRhdGV0YWJsZSB0aCB7XG4gIGNvbG9yOiAjNjc2OTY5O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5wYWdlLWhvbWUgLm1vbnRodmlldy1kYXRldGFibGUgdHIsIHBhZ2UtaG9tZSAubW9udGh2aWV3LWRhdGV0YWJsZSB0ZCB7XG4gIGNvbG9yOiAjZmVmZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5wYWdlLWhvbWUgLm1vbnRodmlldy1kYXRldGFibGUgdHIsIHBhZ2UtaG9tZSAubW9udGh2aWV3LWRhdGV0YWJsZSB0ZCwgcGFnZS1ob21lIC5tb250aHZpZXctZGF0ZXRhYmxlIHRoIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5wYWdlLWhvbWUgLm1vbnRodmlldy1jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbnBhZ2UtaG9tZSAubW9udGh2aWV3LXNlbGVjdGVkW19uZ2NvbnRlbnQtYzFdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHggMjUwcHggMjUwcHggMjUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjUwcHggMjUwcHggMjUwcHggMjUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjUwcHggMjUwcHggMjUwcHggMjUwcHg7XG59XG5wYWdlLWhvbWUgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxucGFnZS1ob21lIC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxucGFnZS1ob21lIC5saXN0LW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");

// Angular Core Components

// Ionic Components

// Angular Components

// Calendar component

var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, locale) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    HomePage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    HomePage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    // Create the right event format and reload source
    HomePage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    // Change current month/week/day
    HomePage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    HomePage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    // Change between month/week/day
    HomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    HomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date reange and hence title changed
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    HomePage.prototype.onEventSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var start, end, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(event.startTime, 'medium', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(event.endTime, 'medium', this.locale);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    HomePage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"])
    ], HomePage.prototype, "myCal", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], String])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map