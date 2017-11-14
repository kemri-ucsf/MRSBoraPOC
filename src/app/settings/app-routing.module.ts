import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../authenticate/login.component';


// Queue Module


// Dashboard Module
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ClinicalDashboardComponent } from '../dashboard/clinical/clinical-dashboard.component';
import { ClinicalQueueComponent } from '../dashboard/clinical/queue.component';
import { ClinicalReferralsComponent } from '../dashboard/clinical/referrals.component';
import { ClinicalLabResultsComponent } from '../dashboard/clinical/lab-results.component';
import { ClinicalEmergencyComponent } from '../dashboard/clinical/emergency.component';
import { ClinicalReportsComponent } from '../dashboard/clinical/reports.component';


// Reception Module
import { ReceptionComponent } from '../reception/reception.component'
import { ReceptionNewComponent } from '../reception/new.component'
import { ReceptionNewPatientsComponent } from '../reception/new-patients.component'
import { ReceptionTbComponent } from '../reception/tb.component'
import { ReceptionScheduledComponent } from '../reception/scheduled.component'
import { ReceptionUnScheduledComponent } from '../reception/unscheduled.component'
import { ReceptionEmergencyComponent } from '../reception/emergency.component'
import { ReceptionReportsComponent } from '../reception/reports.component'
import { ReceptionQueueComponent } from '../reception/queue.component'


// Patient Module
import { PatientSearchComponent } from '../patient-search/patient-search.component';
import { PatientNewComponent } from '../patient-new/patient-new.component';
import { PatientDashboardComponent } from '../patient-search/patient-dashboard.component';
import { PatientLabOrdersComponent } from '../orders/patient-lab-orders.component';
import { PatientDrugOrdersComponent } from '../orders/patient-drug-orders.component';
import { PatientEncountersComponent } from '../patient-encounters/patient-encounters.component';
import { PatientTriageComponent } from '../patient-encounters/patient-triage.component';
import { PatientHistoryComponent } from '../patient-encounters/patient-history.component';
import { PatientClinicalComponent } from '../patient-encounters/patient-clinical.component';

//Encounters Module
import { ClinicalEncountersComponent } from '../patient-encounters/clinical-encounters.component';
import { SsdEncountersComponent } from '../patient-encounters/ssd-encounters.component';

import { LaboratoryDashboardComponent } from '../orders/lab-dashboard.component';
import { DrugOrdersComponent } from '../orders/drug-orders.component';
import { DrugsDashboardComponent } from '../orders/drugs-dashboard.component';
import { NoContentComponent } from '../no-content/no-content';

// Reports Module
import { ReportDashboardComponent } from '../reports/report-dashboard.component';
import { ReportPatientComponent } from '../reports/patient-report.component';

// Notification Module
import { NotificationComponent } from '../notification/notification.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'mrsbora', component: HomeComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'clinical', component: ClinicalDashboardComponent,
        children: [
          { path: 'queue', component: ClinicalQueueComponent },
          { path: 'referrals', component: ClinicalReferralsComponent },
          { path: 'lab-results', component: ClinicalLabResultsComponent },
          { path: 'emergency', component: ClinicalEmergencyComponent },
          { path: 'reports', component: ClinicalReportsComponent }
        ]
      },
      { path: 'reception', component: ReceptionComponent,
        children: [          
          { path: 'new', component: ReceptionNewComponent },
          { path: 'new-patients', component: ReceptionNewPatientsComponent },
          { path: 'tb', component: ReceptionTbComponent },
          { path: 'scheduled', component: ReceptionScheduledComponent },
          { path: 'unscheduled', component: ReceptionUnScheduledComponent },
          { path: 'emergency', component: ReceptionEmergencyComponent },
          { path: 'reports', component: ReceptionReportsComponent }
        ]
      },
      { path: 'patient-search', component: PatientSearchComponent },      
      { path: 'patient-new', component: PatientNewComponent },
      { path: 'patient-queue', component: ReceptionQueueComponent },
      { 
        path: 'patient-dashboard', component: PatientDashboardComponent,
        children: [          
          { path: 'patient-lab-orders', component: PatientLabOrdersComponent },
          { path: 'patient-drug-orders', component: PatientDrugOrdersComponent },
          { path: 'patient-encounters', component: PatientEncountersComponent },
          { path: 'patient-triage', component: PatientTriageComponent },
          { path: 'patient-history', component: PatientHistoryComponent },
          { path: 'patient-clinical', component: PatientClinicalComponent },
          { path: 'drug-orders', component: DrugOrdersComponent },
          { path: 'ssd-encounters', component: SsdEncountersComponent },
          { path: 'clinical-encounters', component: ClinicalEncountersComponent },
          { path: 'reports', component: ReportPatientComponent },
          { path: 'notification', component: NotificationComponent }
        ]
      },
      { path: 'lab-dashboard', component: LaboratoryDashboardComponent },
      { path: 'drugs-dashboard', component: DrugsDashboardComponent },
      { path: 'report-dashboard', component: ReportDashboardComponent },
      { path: 'no-content', component: NoContentComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoContentComponent } 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}