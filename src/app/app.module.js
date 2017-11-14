"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Framework imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Components
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./authenticate/login.component");
var reception_component_1 = require("./reception/reception.component");
var patient_search_component_1 = require("./patient-search/patient-search.component");
var patient_new_component_1 = require("./patient-new/patient-new.component");
var patient_dashboard_component_1 = require("./patient-search/patient-dashboard.component");
var patient_lab_orders_component_1 = require("./orders/patient-lab-orders.component");
var patient_encounters_component_1 = require("./patient-encounters/patient-encounters.component");
var patient_triage_component_1 = require("./patient-encounters/patient-triage.component");
var patient_history_component_1 = require("./patient-encounters/patient-history.component");
var patient_clinical_component_1 = require("./patient-encounters/patient-clinical.component");
var lab_dashboard_component_1 = require("./orders/lab-dashboard.component");
var drug_orders_component_1 = require("./orders/drug-orders.component");
var drugs_dashboard_component_1 = require("./orders/drugs-dashboard.component");
var report_dashboard_component_1 = require("./reports/report-dashboard.component");
var no_content_1 = require("./no-content/no-content");
// Modules
var app_routing_module_1 = require("./settings/app-routing.module");
var ngx_cookie_1 = require("ngx-cookie");
// External Lib Service Providers
var ngx_bootstrap = require("ngx-bootstrap");
// import * as ngx_cookie from 'ngx-cookie';
// OpenMRS REST API service providers
var authentication_service_1 = require("./openmrs-api/authentication.service");
var session_service_1 = require("./openmrs-api/session.service");
var patient_search_service_1 = require("./patient-search/patient-search.service");
var patient_resource_service_1 = require("./openmrs-api/patient-resource.service");
// Custom Service Providers
var app_settings_service_1 = require("./settings/app-settings.service");
var local_storage_service_1 = require("./utils/local-storage.service");
var session_storage_service_1 = require("./utils/session-storage.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            ngx_cookie_1.CookieModule.forRoot(),
            ngx_bootstrap.ModalModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            login_component_1.LoginComponent,
            reception_component_1.ReceptionComponent,
            patient_search_component_1.PatientSearchComponent,
            patient_new_component_1.PatientNewComponent,
            patient_dashboard_component_1.PatientDashboardComponent,
            patient_lab_orders_component_1.PatientLabOrdersComponent,
            patient_encounters_component_1.PatientEncountersComponent,
            patient_triage_component_1.PatientTriageComponent,
            patient_clinical_component_1.PatientClinicalComponent,
            lab_dashboard_component_1.LaboratoryDashboardComponent,
            patient_history_component_1.PatientHistoryComponent,
            drug_orders_component_1.DrugOrdersComponent,
            drugs_dashboard_component_1.DrugsDashboardComponent,
            report_dashboard_component_1.ReportDashboardComponent,
            no_content_1.NoContentComponent
        ],
        // entryComponents: [ngx_core.ModalBackdropComponent],
        providers: [
            // external providers 
            ngx_bootstrap.BsModalRef,
            ngx_bootstrap.BsModalService,
            ngx_bootstrap.PositioningService,
            ngx_bootstrap.ComponentLoaderFactory,
            //openmrs-rest-api providers    
            authentication_service_1.AuthenticationService,
            patient_search_service_1.PatientSearchService,
            patient_resource_service_1.PatientResourceService,
            session_service_1.SessionService,
            // custom providers
            app_settings_service_1.AppSettingsService,
            local_storage_service_1.LocalStorageService,
            session_storage_service_1.SessionStorageService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map