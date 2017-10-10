// Framework imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Components
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HomeComponent }   from './home/home.component';
import { LoginComponent }   from './authenticate/login.component';
import { PatientSearchComponent }   from './patient-search/patient-search.component';
import { NoContentComponent } from './no-content/no-content';

// Routing modules
import { AppRoutingModule }     from './settings/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PatientSearchComponent,
    HomeComponent,
    NoContentComponent
  ],
  // providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
