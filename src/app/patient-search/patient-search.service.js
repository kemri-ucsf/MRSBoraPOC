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
var Rx_1 = require("rxjs/Rx");
var patient_resource_service_1 = require("./../openmrs-api/patient-resource.service");
var patient_model_1 = require("./../models/patient.model");
var PatientSearchService = (function () {
    function PatientSearchService(resouceService) {
        this.resouceService = resouceService;
        this.patientsSearchResults = new Rx_1.BehaviorSubject([]);
        this.patientsToBindRelationshipSearchResults = new Rx_1.BehaviorSubject([]);
        this.searchString = '';
        this.relationshipSearchString = '';
    }
    PatientSearchService.prototype.searchPatient = function (searchText, cached) {
        var _this = this;
        var patientsSearchResults = new Rx_1.Subject();
        this.resouceService.searchPatient(searchText.trim(), false)
            .subscribe(function (patients) {
            var mappedPatients = new Array();
            for (var _i = 0, patients_1 = patients; _i < patients_1.length; _i++) {
                var patient = patients_1[_i];
                mappedPatients.push(new patient_model_1.Patient(patient));
            }
            ;
            _this.searchString = searchText.trim();
            patientsSearchResults.next(mappedPatients);
            _this.patientsSearchResults.next(mappedPatients);
        }, function (error) {
            // console.log('error : ' + error);
            _this.patientsSearchResults.error(error); // test case that returns error
            patientsSearchResults.error(error);
        });
        return patientsSearchResults.asObservable();
    };
    PatientSearchService.prototype.searchPatientToBindRelationship = function (searchText, cached) {
        var _this = this;
        var patientsSearchResults = new Rx_1.Subject();
        this.resouceService.searchPatient(searchText.trim(), false)
            .subscribe(function (patients) {
            var mappedPatients = new Array();
            for (var _i = 0, patients_2 = patients; _i < patients_2.length; _i++) {
                var patient = patients_2[_i];
                mappedPatients.push(new patient_model_1.Patient(patient));
            }
            _this.relationshipSearchString = searchText.trim();
            patientsSearchResults.next(mappedPatients);
            _this.patientsToBindRelationshipSearchResults.next(mappedPatients);
        }, function (error) {
            _this.patientsToBindRelationshipSearchResults.error(error); // test case that returns error
            patientsSearchResults.error(error);
        });
        return patientsSearchResults.asObservable();
    };
    PatientSearchService.prototype.resetPatients = function () {
        this.patientsSearchResults.next(new Array());
    };
    PatientSearchService.prototype.resetRelationshipSearch = function () {
        this.patientsToBindRelationshipSearchResults.next(new Array());
    };
    return PatientSearchService;
}());
PatientSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [patient_resource_service_1.PatientResourceService])
], PatientSearchService);
exports.PatientSearchService = PatientSearchService;
//# sourceMappingURL=patient-search.service.js.map