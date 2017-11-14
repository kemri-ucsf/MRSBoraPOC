"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
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
var OpenmrsApi = (function () {
    function OpenmrsApi() {
    }
    return OpenmrsApi;
}());
OpenmrsApi = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [],
        providers: [],
        exports: []
    })
], OpenmrsApi);
exports.OpenmrsApi = OpenmrsApi;
//# sourceMappingURL=openmrs-api.module.js.map