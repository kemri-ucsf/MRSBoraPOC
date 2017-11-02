import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
import { LocationResourceService } from './location-resource.service';
import { AppSettingsModule } from '../app-settings/app-settings.module';
import { FormsResourceService } from './forms-resource.service';
import { EncounterResourceService } from './encounter-resource.service';
import { PatientResourceService } from './patient-resource.service';
import { ProgramEnrollmentResourceService } from './program-enrollment-resource.service';
import { ProgramResourceService } from './program-resource.service';
import { UserService } from './user.service';
import { ProviderResourceService } from './provider-resource.service';
import { PersonResourceService } from './person-resource.service';
import { ConceptResourceService } from './concept-resource.service';
import { VisitResourceService } from './visit-resource.service';
import { OrderResourceService } from './order-resource.service';
import { PatientRelationshipResourceService } from './patient-relationship-resource.service';
import {
  PatientRelationshipTypeResourceService
 } from './patient-relationship-type-resource.service';
import { PatientIdentifierTypeResService } from './patient-identifierTypes-resource.service';


// Services
//import { AuthenticationService } from './authentication.service'
import { PersonResourceService } from './person-resource.service';
import { PatientResourceService } from './patient-resource.service';
import { SessionService } from './session.service'

// Modules
import { AppSettingsModule } from '../settings/app-settings.module';
*/


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule
    ],
  declarations: [],
  providers: [],
  exports: []
})

export class OpenmrsApi {
}
