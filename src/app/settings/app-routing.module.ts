import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../authenticate/login.component';
import { PatientSearchComponent } from '../patient-search/patient-search.component';
import { PatientDashboardComponent } from '../patient-search/patient-dashboard.component';
import { PatientLabOrdersComponent } from '../orders/patient-lab-orders.component';
import { PatientEncountersComponent } from '../patient-encounters/patient-encounters.component';
import { LaboratoryDashboardComponent } from '../orders/lab-dashboard.component';
import { ReportDashboardComponent } from '../reports/report-dashboard.component';
import { NoContentComponent } from '../no-content/no-content';

 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'mrsbora', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      
      { path: 'patient-search', component: PatientSearchComponent },
      { 
        path: 'patient-dashboard', component: PatientDashboardComponent,
        children: [
          { path: 'patient-lab-orders', component: PatientLabOrdersComponent },
          { path: 'patient-encounters', component: PatientEncountersComponent }
        ]
      },
      { path: 'lab-dashboard', component: LaboratoryDashboardComponent },
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