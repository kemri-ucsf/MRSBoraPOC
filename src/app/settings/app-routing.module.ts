import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../authenticate/login.component';
import { PatientSearchComponent } from '../patient-search/patient-search.component';
import { NoContentComponent } from '../no-content/no-content';
 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'mrsbora', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient-search', component: PatientSearchComponent },
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