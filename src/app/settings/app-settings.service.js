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
var local_storage_service_1 = require("../utils/local-storage.service");
var AppSettingsService = AppSettingsService_1 = (function () {
    function AppSettingsService(localStorageService) {
        this.localStorageService = localStorageService;
        this._openmrsServerUrls = [
            'http://localhost:8080/openmrs'
        ];
        this._etlServerUrls = [
            'http://localhost:8002/etl'
        ];
        this.templates = [];
        var cachedUrls = localStorageService.getObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY);
        if (cachedUrls) {
            this._openmrsServerUrls = cachedUrls;
        }
        else {
            localStorageService.setObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY, this.openmrsServerUrls);
        }
        var cachedUrl = localStorageService.getItem(AppSettingsService_1.OPENMRS_SERVER_KEY);
        if (cachedUrl) {
            this._openmrsServer = cachedUrl;
        }
        else {
            this.setOpenmrsServer(AppSettingsService_1.DEFAULT_OPENMRS_SERVER_URL);
        }
        cachedUrls = localStorageService.getItem(AppSettingsService_1.ETL_LIST_STORAGE_KEY);
        if (cachedUrls) {
            this._etlServerUrls = JSON.parse(cachedUrls);
        }
        else {
            localStorageService.setItem(AppSettingsService_1.ETL_LIST_STORAGE_KEY, JSON.stringify(this.etlServerUrls));
        }
        cachedUrl = localStorageService.getItem(AppSettingsService_1.ETL_SERVER_KEY);
        if (cachedUrl) {
            this._etlServer = cachedUrl;
        }
        else {
            this.setEtlServer(AppSettingsService_1.DEFAULT_ETL_SERVER_URL);
        }
    }
    Object.defineProperty(AppSettingsService.prototype, "openmrsServerUrls", {
        get: function () {
            return this._openmrsServerUrls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettingsService.prototype, "etlServerUrls", {
        get: function () {
            return this._etlServerUrls;
        },
        enumerable: true,
        configurable: true
    });
    AppSettingsService.prototype.getServerTemplates = function () {
        return this.templates;
    };
    AppSettingsService.prototype.getOpenmrsServer = function () {
        return this.localStorageService
            .getItem(AppSettingsService_1.OPENMRS_SERVER_KEY) || this._openmrsServer;
    };
    AppSettingsService.prototype.setOpenmrsServer = function (value) {
        if (this._openmrsServerUrls.indexOf(value) === -1) {
            this.addOpenmrsUrl(value);
        }
        this.localStorageService.setItem(AppSettingsService_1.OPENMRS_SERVER_KEY, value);
        this._openmrsServer = value;
    };
    AppSettingsService.prototype.getEtlServer = function () {
        return this.localStorageService.getItem(AppSettingsService_1.ETL_SERVER_KEY) || this._etlServer;
    };
    AppSettingsService.prototype.setEtlServer = function (value) {
        if (this._etlServerUrls.indexOf(value) === -1) {
            this.addEtlUrl(value);
        }
        this.localStorageService.setItem(AppSettingsService_1.ETL_SERVER_KEY, value);
        this._etlServer = value;
    };
    AppSettingsService.prototype.addAndSetUrl = function (url, urlType) {
        if (urlType === void 0) { urlType = 'openmrs'; }
        if (urlType === 'etl') {
            this.addEtlUrl(url);
            this.setEtlServer(url);
        }
        else {
            this.addOpenmrsUrl(url);
            this.setOpenmrsServer(url);
        }
    };
    AppSettingsService.prototype.addEtlUrl = function (url) {
        this.etlServerUrls.push(url);
        this.localStorageService.setObject(AppSettingsService_1.ETL_LIST_STORAGE_KEY, this.etlServerUrls);
    };
    AppSettingsService.prototype.addOpenmrsUrl = function (url) {
        this.openmrsServerUrls.push(url);
        this.localStorageService.setObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY, this.openmrsServerUrls);
    };
    AppSettingsService.prototype.getOpenmrsRestbaseurl = function () {
        if (this.getOpenmrsServer().endsWith('/')) {
            return this.getOpenmrsServer() + AppSettingsService_1.OPENMRS_REST_SUFFIX;
        }
        else {
            return this.getOpenmrsServer() + '/' + AppSettingsService_1.OPENMRS_REST_SUFFIX;
        }
    };
    AppSettingsService.prototype.getEtlRestbaseurl = function () {
        if (this.getEtlServer().endsWith('/')) {
            return this.getEtlServer();
        }
        else {
            return this.getEtlServer() + '/';
        }
    };
    return AppSettingsService;
}());
AppSettingsService.DEFAULT_OPENMRS_SERVER_URL = 'http://localhost:8080/openmrs';
AppSettingsService.DEFAULT_ETL_SERVER_URL = 'http://localhost:8080/openmrs/etl';
AppSettingsService.OPENMRS_LIST_STORAGE_KEY = 'appSettings.openmrsServersList';
AppSettingsService.ETL_LIST_STORAGE_KEY = 'appSettings.etlServersList';
AppSettingsService.OPENMRS_SERVER_KEY = 'appSettings.openmrsServer';
AppSettingsService.ETL_SERVER_KEY = 'appSettings.etlServer';
AppSettingsService.OPENMRS_REST_SUFFIX = 'ws/rest/v1/';
AppSettingsService = AppSettingsService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService])
], AppSettingsService);
exports.AppSettingsService = AppSettingsService;
var AppSettingsService_1;
//# sourceMappingURL=app-settings.service.js.map