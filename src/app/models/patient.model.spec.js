/* tslint:disable:no-unused-variable */
"use strict";
// import { TestBed, async, inject, describe, it, expect } from '@angular/core/testing';
var patient_model_1 = require("./patient.model");
describe('Model: Patient', function () {
    var existingPatient = {
        uuid: 'uuid',
        display: 'the patient',
        person: {
            uuid: 'person uuid'
        },
        identifiers: {
            uuid: ' patient identifiers  uuid'
        }
    };
    it('should wrap openmrs patient for display correctly', function () {
        var wrappedPatient = new patient_model_1.Patient(existingPatient);
        expect(wrappedPatient.uuid).toEqual(existingPatient.uuid);
        expect(wrappedPatient.display).toEqual(existingPatient.display);
        expect(wrappedPatient.person.uuid).toEqual(existingPatient.person.uuid);
        expect(wrappedPatient.identifiers.uuid).toEqual(existingPatient.identifiers.uuid);
    });
    it('should generate update existing payload correctly', function () {
        var wrappedPatient = new patient_model_1.Patient(existingPatient);
        var newPayload = wrappedPatient.toUpdatePayload();
        expect(newPayload).toEqual(null);
    });
    /*it('should generate a new patient new payload correctly', ()=>{
  
  
    });*/
    /*it('should generate an existing patient payload correctly', ()=>{
  
  
    });*/
});
//# sourceMappingURL=patient.model.spec.js.map