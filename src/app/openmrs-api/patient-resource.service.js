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
var app_settings_service_1 = require("../settings/app-settings.service");
var http_1 = require("@angular/http");
// TODO inject service
var PatientResourceService = (function () {
    function PatientResourceService(http, appSettingsService) {
        this.http = http;
        this.appSettingsService = appSettingsService;
        this.v = 'custom:(uuid,display,' +
            'identifiers:(identifier,uuid,preferred,location:(uuid,name),' +
            'identifierType:(uuid,name,format,formatDescription,checkDigit,validator)),' +
            'person:(uuid,display,gender,birthdate,dead,age,deathDate,' +
            'causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),'
            + 'attributes,preferredAddress:(uuid,preferred,address1,address2,cityVillage,' +
            'stateProvince,country,postalCode,countyDistrict,address3,address4,address5,address6)))';
    }
    PatientResourceService.prototype.getUrl = function () {
        return this.appSettingsService.getOpenmrsRestbaseurl().trim() + 'patient';
    };
    PatientResourceService.prototype.searchPatient = function (searchText, cached, v) {
        if (cached === void 0) { cached = false; }
        if (v === void 0) { v = null; }
        var url = this.getUrl();
        var params = new http_1.URLSearchParams();
        params.set('q', searchText);
        params.set('v', (v && v.length > 0) ? v : this.v);
        return this.http.get(url, {
            search: params
        })
            .map(function (response) {
            return response.json().results;
        });
    };
    PatientResourceService.prototype.getPatientByUuid = function (uuid, cached, v) {
        if (cached === void 0) { cached = false; }
        if (v === void 0) { v = null; }
        var url = this.getUrl();
        url += '/' + uuid;
        var params = new http_1.URLSearchParams();
        params.set('v', (v && v.length > 0) ? v : this.v);
        return this.http.get(url, {
            search: params
        }).map(function (response) {
            return response.json();
        });
    };
    PatientResourceService.prototype.saveUpdatePatientIdentifier = function (uuid, identifierUuid, payload) {
        if (!payload || !uuid) {
            return null;
        }
        var url = this.getUrl() + '/' + uuid + '/' + 'identifier' + '/' + identifierUuid;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, JSON.stringify(payload), options)
            .map(function (response) {
            return response.json().patient;
        });
    };
    return PatientResourceService;
}());
PatientResourceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_settings_service_1.AppSettingsService])
], PatientResourceService);
exports.PatientResourceService = PatientResourceService;
//# sourceMappingURL=patient-resource.service.js.map