"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var login_component_1 = require("../authenticate/login.component");
var reception_component_1 = require("../reception/reception.component");
var patient_search_component_1 = require("../patient-search/patient-search.component");
var patient_new_component_1 = require("../patient-new/patient-new.component");
var patient_dashboard_component_1 = require("../patient-search/patient-dashboard.component");
var patient_lab_orders_component_1 = require("../orders/patient-lab-orders.component");
var patient_encounters_component_1 = require("../patient-encounters/patient-encounters.component");
var patient_triage_component_1 = require("../patient-encounters/patient-triage.component");
var patient_history_component_1 = require("../patient-encounters/patient-history.component");
var patient_clinical_component_1 = require("../patient-encounters/patient-clinical.component");
var lab_dashboard_component_1 = require("../orders/lab-dashboard.component");
var drug_orders_component_1 = require("../orders/drug-orders.component");
var drugs_dashboard_component_1 = require("../orders/drugs-dashboard.component");
var report_dashboard_component_1 = require("../reports/report-dashboard.component");
var no_content_1 = require("../no-content/no-content");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'mrsbora', component: home_component_1.HomeComponent,
        children: [
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'patient-search', component: patient_search_component_1.PatientSearchComponent },
            { path: 'patient-new', component: patient_new_component_1.PatientNewComponent },
            {
                path: 'patient-dashboard', component: patient_dashboard_component_1.PatientDashboardComponent,
                children: [
                    { path: 'reception', component: reception_component_1.ReceptionComponent },
                    { path: 'patient-lab-orders', component: patient_lab_orders_component_1.PatientLabOrdersComponent },
                    { path: 'patient-encounters', component: patient_encounters_component_1.PatientEncountersComponent },
                    { path: 'patient-triage', component: patient_triage_component_1.PatientTriageComponent },
                    { path: 'patient-history', component: patient_history_component_1.PatientHistoryComponent },
                    { path: 'patient-clinical', component: patient_clinical_component_1.PatientClinicalComponent },
                    { path: 'drug-orders', component: drug_orders_component_1.DrugOrdersComponent }
                ]
            },
            { path: 'lab-dashboard', component: lab_dashboard_component_1.LaboratoryDashboardComponent },
            { path: 'drugs-dashboard', component: drugs_dashboard_component_1.DrugsDashboardComponent },
            { path: 'report-dashboard', component: report_dashboard_component_1.ReportDashboardComponent },
            { path: 'no-content', component: no_content_1.NoContentComponent }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: no_content_1.NoContentComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map