"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var session_storage_service_1 = require("../utils/session-storage.service");
var constants_1 = require("../utils/constants");
var user_model_1 = require("../models/user.model");
var http_2 = require("@angular/http");
var app_settings_service_1 = require("../settings/app-settings.service");
var UserService = (function () {
    function UserService(sessionStorageService, _http, appSettingsService) {
        this.sessionStorageService = sessionStorageService;
        this._http = _http;
        this.appSettingsService = appSettingsService;
        this.baseOpenMrsUrl = this.getOpenMrsBaseUrl();
        this.v = 'default';
    }
    UserService.prototype.getLoggedInUser = function () {
        var userObject = this.sessionStorageService.getObject(constants_1.Constants.USER_KEY);
        return new user_model_1.User(userObject);
    };
    // get all users
    UserService.prototype.getAllUsers = function () {
        var baseUrl = this.getOpenMrsBaseUrl();
        var url = baseUrl + 'user?v=custom:(uuid,display,person)';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(url, options)
            .map(function (response) {
            return response.json().results;
        });
    };
    UserService.prototype.getOpenMrsBaseUrl = function () {
        return this.appSettingsService.getOpenmrsRestbaseurl().trim();
    };
    UserService.prototype.searchUsers = function (searchText) {
        var params = new http_2.URLSearchParams();
        params.set('q', searchText);
        params.set('v', 'default');
        var allCohortMembersUrl = this.baseOpenMrsUrl + 'user';
        return this._http.get(allCohortMembersUrl, {
            search: params
        })
            .map(function (response) {
            return response.json().results;
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [session_storage_service_1.SessionStorageService,
        http_1.Http,
        app_settings_service_1.AppSettingsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map