"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var ng2_pagination_1 = require("ng2-pagination");
var openmrs_api_module_1 = require("../openmrs-api/openmrs-api.module");
var patient_search_component_1 = require("./patient-search.component");
var patient_search_service_1 = require("./patient-search.service");
var PatientSearchModule = (function () {
    function PatientSearchModule() {
    }
    return PatientSearchModule;
}());
PatientSearchModule = __decorate([
    core_1.NgModule({
        imports: [
            openmrs_api_module_1.OpenmrsApi,
            forms_1.FormsModule,
            common_1.CommonModule,
            ng2_pagination_1.Ng2PaginationModule
        ],
        exports: [patient_search_component_1.PatientSearchComponent],
        declarations: [patient_search_component_1.PatientSearchComponent],
        providers: [patient_search_service_1.PatientSearchService]
    })
], PatientSearchModule);
exports.PatientSearchModule = PatientSearchModule;
//# sourceMappingURL=patient-search.module.js.map