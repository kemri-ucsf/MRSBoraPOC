/* tslint:disable:no-unused-variable */
"use strict";
var vital_model_1 = require("./vital.model");
describe('Model: Vital', function () {
    var existingVital = {
        'uuid': 'uuid',
        'display': 'display',
        'diastolic': 101,
        'systolic': 19, 'pulse': 29,
        'temperature': 43, 'oxygenSaturation': 32,
        'height': 154, 'weight': 123, 'bmi': 51.9
    };
    it('should wrap openmrs Vital for display correctly', function () {
        var wrappedVital = new vital_model_1.Vital(existingVital);
        expect(wrappedVital.uuid).toEqual(existingVital.uuid);
        expect(wrappedVital.display).toEqual(existingVital.display);
        expect(wrappedVital.diastolic).toEqual(existingVital.diastolic);
        expect(wrappedVital.systolic).toEqual(existingVital.systolic);
        expect(wrappedVital.pulse).toEqual(existingVital.pulse);
        expect(wrappedVital.temperature).toEqual(existingVital.temperature);
        expect(wrappedVital.oxygenSaturation).toEqual(existingVital.oxygenSaturation);
        expect(wrappedVital.height).toEqual(existingVital.height);
        expect(wrappedVital.weight).toEqual(existingVital.weight);
        expect(wrappedVital.bmi).toEqual(existingVital.bmi);
    });
});
//# sourceMappingURL=vital.model.spec.js.map