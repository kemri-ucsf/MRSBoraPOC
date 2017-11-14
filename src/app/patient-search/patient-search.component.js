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
var patient_search_service_1 = require("./patient-search.service");
var PatientSearchComponent = (function () {
    function PatientSearchComponent(patientSearchService) {
        this.patientSearchService = patientSearchService;
        this.isResetButton = true;
        this.isLoading = false;
        this.hasConductedSearch = false;
        this.page = 1;
        this.adjustInputMargin = '240px';
        this.title = 'Patient Search';
        this.errorMessage = '';
        /*
        patientSelected emits the patient object
        to other components so they can use
        the selected patient
    
        The hide Result property is passed down
        from parent to child to hide results of
        patient search
    
        */
        this.patientSelected = new core_1.EventEmitter();
        this.hideResults = false;
    }
    Object.defineProperty(PatientSearchComponent.prototype, "searchString", {
        get: function () {
            return this._searchString;
        },
        set: function (v) {
            this._searchString = v;
            this.hasConductedSearch = false;
        },
        enumerable: true,
        configurable: true
    });
    PatientSearchComponent.prototype.ngOnInit = function () { };
    PatientSearchComponent.prototype.ngOnDestroy = function () { };
    PatientSearchComponent.prototype.onResultsFound = function (results) {
        if (results.length > 0) {
            this.patients = results;
            this.totalPatients = this.patients.length;
            this.hideResults = false;
        }
        else {
            this.patients = [];
            this.totalPatients = 0;
            this.hideResults = true;
        }
        // clear the search text
        this.searchString = '';
        this.hasConductedSearch = true;
    };
    PatientSearchComponent.prototype.onError = function (error) {
        console.log('Error in operation - ' + error);
    };
    PatientSearchComponent.prototype.loadPatient = function () {
        var _this = this;
        this.totalPatients = 0;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.searchString && this.searchString.length > 2) {
            this.isLoading = true;
            this.patients = [];
            this.errorMessage = '';
            this.subscription = this.patientSearchService.searchPatient(this.searchString, false)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.onResultsFound(data);
                _this.resetInputMargin();
                // app feature analytics
                // this.appFeatureAnalytics.trackEvent('Patient Search', 'Patients Searched', 'loadPatient');
            }, function (error) {
                _this.onError(error);
            });
        }
    };
    PatientSearchComponent.prototype.resetInputMargin = function () { };
    return PatientSearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PatientSearchComponent.prototype, "patientSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PatientSearchComponent.prototype, "hideResults", void 0);
PatientSearchComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/patient-search/patient-search.component.html',
        styleUrls: ['app/patient-search/patient-search.component.css']
    }),
    __metadata("design:paramtypes", [patient_search_service_1.PatientSearchService])
], PatientSearchComponent);
exports.PatientSearchComponent = PatientSearchComponent;
//# sourceMappingURL=patient-search.component.js.map