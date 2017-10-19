// Framework imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authenticate/login.component';
import { ReceptionComponent } from './reception/reception.component'
import { PatientSearchComponent }   from './patient-search/patient-search.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { PatientDashboardComponent }   from './patient-search/patient-dashboard.component';
import { PatientLabOrdersComponent } from './orders/patient-lab-orders.component';
import { PatientEncountersComponent } from './patient-encounters/patient-encounters.component';
import { LaboratoryDashboardComponent } from './orders/lab-dashboard.component';
import { DrugOrdersComponent } from './orders/drug-orders.component';
import { DrugsDashboardComponent } from './orders/drugs-dashboard.component';
import { ReportDashboardComponent } from './reports/report-dashboard.component';
import { NoContentComponent } from './no-content/no-content';


// Routing modules
import { AppRoutingModule }     from './settings/app-routing.module';

// Service Providers
import * as ngx_core from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ngx_core.ModalModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    ReceptionComponent,
    PatientSearchComponent,
    PatientNewComponent,
    PatientDashboardComponent,
    PatientLabOrdersComponent,
    PatientEncountersComponent,
    LaboratoryDashboardComponent,
    DrugOrdersComponent,
    DrugsDashboardComponent,
    ReportDashboardComponent,
    NoContentComponent
  ],
  // entryComponents: [ngx_core.ModalBackdropComponent],
  providers: [
    // dialog providers 
    ngx_core.BsModalService,
    ngx_core.PositioningService, 
    ngx_core.ComponentLoaderFactory 
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
