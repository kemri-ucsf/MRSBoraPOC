/* tslint:disable:no-unused-variable */
"use strict";
// import { TestBed, async, inject, describe, it, expect } from '@angular/core/testing';
var provider_model_1 = require("./provider.model");
describe('Model: Provider', function () {
    var existingProvider = {
        uuid: 'uuid',
        display: 'the provider',
        identifier: 'identifier',
        person: {
            uuid: 'uuid'
        }
    };
    it('should wrap openmrs provider for display correctly', function () {
        var wrappedProvider = new provider_model_1.Provider(existingProvider);
        expect(wrappedProvider.uuid).toEqual(existingProvider.uuid);
        expect(wrappedProvider.display).toEqual(existingProvider.display);
        expect(wrappedProvider.identifier).toEqual(existingProvider.identifier);
        expect(wrappedProvider.person.uuid).toEqual(existingProvider.person.uuid);
    });
});
//# sourceMappingURL=provider.model.spec.js.map