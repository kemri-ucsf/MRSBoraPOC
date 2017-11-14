// Framework imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicalDashboardComponent } from './dashboard/clinical/clinical-dashboard.component';
import { ClinicalQueueComponent } from './dashboard/clinical/queue.component';
import { ClinicalReferralsComponent } from './dashboard/clinical/referrals.component';
import { ClinicalLabResultsComponent } from './dashboard/clinical/lab-results.component';
import { ClinicalEmergencyComponent } from './dashboard/clinical/emergency.component';
import { ClinicalReportsComponent } from './dashboard/clinical/reports.component';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authenticate/login.component';

import { ClinicalEncountersComponent } from './patient-encounters/clinical-encounters.component';
import { SsdEncountersComponent } from './patient-encounters/ssd-encounters.component';

import { ReceptionComponent } from './reception/reception.component'
import { ReceptionNewComponent } from './reception/new.component'
import { ReceptionNewPatientsComponent } from './reception/new-patients.component'
import { ReceptionTbComponent } from './reception/tb.component'
import { ReceptionScheduledComponent } from './reception/scheduled.component'
import { ReceptionUnScheduledComponent } from './reception/unscheduled.component'
import { ReceptionEmergencyComponent } from './reception/emergency.component'
import { ReceptionReportsComponent } from './reception/reports.component'
import { ReceptionQueueComponent } from './reception/queue.component'

import { PatientSearchComponent }   from './patient-search/patient-search.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { PatientDashboardComponent }   from './patient-search/patient-dashboard.component';
import { PatientLabOrdersComponent } from './orders/patient-lab-orders.component';
import { PatientDrugOrdersComponent } from './orders/patient-drug-orders.component';
import { PatientEncountersComponent } from './patient-encounters/patient-encounters.component';
import { PatientTriageComponent } from './patient-encounters/patient-triage.component';
import { PatientHistoryComponent } from './patient-encounters/patient-history.component';
import { PatientClinicalComponent } from './patient-encounters/patient-clinical.component';
import { LaboratoryDashboardComponent } from './orders/lab-dashboard.component';
import { DrugOrdersComponent } from './orders/drug-orders.component';
import { DrugsDashboardComponent } from './orders/drugs-dashboard.component';

import { ReportDashboardComponent } from './reports/report-dashboard.component';
import { ReportPatientComponent } from './reports/patient-report.component';

import { NotificationComponent } from './notification/notification.component';

import { NoContentComponent } from './no-content/no-content';


// Modules
import { AppRoutingModule }     from './settings/app-routing.module';
import { CookieModule } from 'ngx-cookie';

// External Lib Service Providers
import * as ngx_bootstrap from 'ngx-bootstrap';
// import * as ngx_cookie from 'ngx-cookie';

// OpenMRS REST API service providers
import { AuthenticationService } from './openmrs-api/authentication.service';
import { SessionService } from './openmrs-api/session.service';
import { PatientSearchService } from './patient-search/patient-search.service';
import { PatientResourceService } from './openmrs-api/patient-resource.service';

// Custom Service Providers
import { AppSettingsService } from './settings/app-settings.service'
import { LocalStorageService } from './utils/local-storage.service'
import { SessionStorageService } from './utils/session-storage.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CookieModule.forRoot(),
    ngx_bootstrap.ModalModule,
  ],
  declarations: [
    DashboardComponent,
    ClinicalDashboardComponent,
    ClinicalQueueComponent,
    ClinicalReferralsComponent,
    ClinicalLabResultsComponent,
    ClinicalEmergencyComponent,
    ClinicalReportsComponent,

    AppComponent,
    HomeComponent,
    LoginComponent,

    ClinicalEncountersComponent,
    SsdEncountersComponent,

    ReceptionComponent,
    ReceptionNewComponent,
    ReceptionNewPatientsComponent,
    ReceptionTbComponent,
    ReceptionScheduledComponent,
    ReceptionUnScheduledComponent,
    ReceptionEmergencyComponent,
    ReceptionReportsComponent,
    ReceptionQueueComponent,

    PatientSearchComponent,
    PatientNewComponent,
    PatientDashboardComponent,
    PatientLabOrdersComponent,
    PatientDrugOrdersComponent,
    PatientEncountersComponent,
    PatientTriageComponent,
    PatientClinicalComponent,
    PatientHistoryComponent,

    LaboratoryDashboardComponent,
    DrugOrdersComponent,
    DrugsDashboardComponent,

    ReportDashboardComponent,
    ReportPatientComponent,

    NoContentComponent,
    NotificationComponent
  ],
  // entryComponents: [ngx_core.ModalBackdropComponent],
  providers: [
    // external providers 
    ngx_bootstrap.BsModalRef,
    ngx_bootstrap.BsModalService,
    ngx_bootstrap.PositioningService, 
    ngx_bootstrap.ComponentLoaderFactory,

    //openmrs-rest-api providers    
    AuthenticationService,
    PatientSearchService,
    PatientResourceService,
    SessionService,

    // custom providers
    AppSettingsService,
    LocalStorageService,
    SessionStorageService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
