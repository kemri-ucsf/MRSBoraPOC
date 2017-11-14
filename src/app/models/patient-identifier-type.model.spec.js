/* tslint:disable:no-unused-variable */
"use strict";
// import { TestBed, async, inject, describe, it, expect } from '@angular/core/testing';
var patient_identifier_type_model_1 = require("./patient-identifier-type.model");
describe('Model: PatientIdentifierType', function () {
    var existingPatientIdentifierType = {
        uuid: 'uuid',
        display: 'the identifier',
        name: 'name'
    };
    it('should wrap openmrs person for display correctly', function () {
        var wrappedPatientIdentifierType = new patient_identifier_type_model_1.PatientIdentifierType(existingPatientIdentifierType);
        expect(wrappedPatientIdentifierType.uuid).toEqual(existingPatientIdentifierType.uuid);
        expect(wrappedPatientIdentifierType.display).toEqual(existingPatientIdentifierType.display);
        expect(wrappedPatientIdentifierType.name).toEqual(existingPatientIdentifierType.name);
    });
});
//# sourceMappingURL=patient-identifier-type.model.spec.js.map