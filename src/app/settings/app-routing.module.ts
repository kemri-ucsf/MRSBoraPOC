import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../authenticate/login.component';
import { ReceptionComponent } from '../reception/reception.component'
import { PatientSearchComponent } from '../patient-search/patient-search.component';
import { PatientNewComponent } from '../patient-new/patient-new.component';
import { PatientDashboardComponent } from '../patient-search/patient-dashboard.component';
import { PatientLabOrdersComponent } from '../orders/patient-lab-orders.component';
import { PatientEncountersComponent } from '../patient-encounters/patient-encounters.component';
import { PatientTriageComponent } from '../patient-encounters/patient-triage.component';
import { PatientHistoryComponent } from '../patient-encounters/patient-history.component';
import { PatientClinicalComponent } from '../patient-encounters/patient-clinical.component';
import { LaboratoryDashboardComponent } from '../orders/lab-dashboard.component';
import { DrugOrdersComponent } from '../orders/drug-orders.component';
import { DrugsDashboardComponent } from '../orders/drugs-dashboard.component';
import { ReportDashboardComponent } from '../reports/report-dashboard.component';
import { NoContentComponent } from '../no-content/no-content';
 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'mrsbora', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient-search', component: PatientSearchComponent },      
      { path: 'patient-new', component: PatientNewComponent },
      { 
        path: 'patient-dashboard', component: PatientDashboardComponent,
        children: [
          { path: 'reception', component: ReceptionComponent },
          { path: 'patient-lab-orders', component: PatientLabOrdersComponent },
          { path: 'patient-encounters', component: PatientEncountersComponent },
          { path: 'patient-triage', component: PatientTriageComponent },
          { path: 'patient-history', component: PatientHistoryComponent },
          { path: 'patient-clinical', component: PatientClinicalComponent },
          { path: 'drug-orders', component: DrugOrdersComponent }
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