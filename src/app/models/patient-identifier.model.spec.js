/* tslint:disable:no-unused-variable */
"use strict";
// import { TestBed, async, inject, describe, it, expect } from '@angular/core/testing';
var patient_identifier_model_1 = require("./patient-identifier.model");
describe('Model: PatientIdentifiers', function () {
    var existingPatientIdentifier = {
        uuid: 'uuid',
        display: 'the patient',
        identifier: 'the identifier',
        identifierType: {
            uuid: ' patient identifiers  uuid'
        }
    };
    it('should wrap openmrs patient identifiers for display correctly', function () {
        var wrappedPatient = new patient_identifier_model_1.PatientIdentifier(existingPatientIdentifier);
        expect(wrappedPatient.uuid).toEqual(existingPatientIdentifier.uuid);
        expect(wrappedPatient.display).toEqual(existingPatientIdentifier.display);
        expect(wrappedPatient.identifier).toEqual(existingPatientIdentifier.identifier);
        expect(wrappedPatient.identifierType.uuid)
            .toEqual(existingPatientIdentifier.identifierType.uuid);
    });
});
//# sourceMappingURL=patient-identifier.model.spec.js.map