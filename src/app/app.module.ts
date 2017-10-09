import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }   from './authenticate/login.component';
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
    LoginComponent
  ],
  // providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
