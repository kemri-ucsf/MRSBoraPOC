"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var encounter_model_1 = require("./encounter.model");
var patient_model_1 = require("./patient.model");
var address_model_1 = require("./address.model");
var concept_class_model_1 = require("./concept-class.model");
var concept_model_1 = require("./concept-model");
var concept_name_model_1 = require("./concept-name.model");
var encounter_type_model_1 = require("./encounter-type.model");
var form_model_1 = require("./form.model");
var location_model_1 = require("./location.model");
var patient_identifier_model_1 = require("./patient-identifier.model");
var patient_identifier_type_model_1 = require("./patient-identifier-type.model");
var person_model_1 = require("./person.model");
var person_attribute_model_1 = require("./person-attribute.model");
var person_attribute_type_model_1 = require("./person-attribute-type.model");
var program_model_1 = require("./program.model");
var program_enrollment_model_1 = require("./program-enrollment.model");
var provider_model_1 = require("./provider.model");
var relationship_model_1 = require("./relationship.model");
var relationship_type_model_1 = require("./relationship-type.model");
var user_model_1 = require("./user.model");
var visit_model_1 = require("./visit.model");
var vital_model_1 = require("./vital.model");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var ModelsModule = (function () {
    function ModelsModule() {
    }
    return ModelsModule;
}());
ModelsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [concept_class_model_1.ConceptClass, concept_model_1.Concept, concept_name_model_1.ConceptName, encounter_model_1.Encounter, encounter_type_model_1.EncounterType,
            address_model_1.PersonAddress, form_model_1.Form, location_model_1.Location, patient_model_1.Patient, patient_identifier_model_1.PatientIdentifier, patient_identifier_type_model_1.PatientIdentifierType,
            person_model_1.Person, person_attribute_model_1.PersonAttribute, person_attribute_type_model_1.PersonAttributeType, program_model_1.Program, program_enrollment_model_1.ProgramEnrollment, provider_model_1.Provider,
            relationship_model_1.Relationship, relationship_type_model_1.RelationshipType, user_model_1.User, visit_model_1.Visit, vital_model_1.Vital],
        providers: [],
        exports: [concept_class_model_1.ConceptClass, concept_model_1.Concept, concept_name_model_1.ConceptName, encounter_model_1.Encounter, encounter_type_model_1.EncounterType,
            address_model_1.PersonAddress, form_model_1.Form, location_model_1.Location, patient_model_1.Patient, patient_identifier_model_1.PatientIdentifier, patient_identifier_type_model_1.PatientIdentifierType,
            person_model_1.Person, person_attribute_model_1.PersonAttribute, person_attribute_type_model_1.PersonAttributeType, program_model_1.Program, program_enrollment_model_1.ProgramEnrollment, provider_model_1.Provider,
            relationship_model_1.Relationship, relationship_type_model_1.RelationshipType, user_model_1.User, visit_model_1.Visit, vital_model_1.Vital]
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=models.module.js.map