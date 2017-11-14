"use strict";
var location_model_1 = require("./location.model");
describe('Model: Location', function () {
    var existingLocation = {
        uuid: 'uuid',
        display: 'the location',
    };
    it('should wrap openmrs Location for display correctly', function () {
        var wrappedLocation = new location_model_1.Location(existingLocation);
        expect(wrappedLocation.uuid).toEqual(existingLocation.uuid);
        expect(wrappedLocation.display).toEqual(existingLocation.display);
    });
});
//# sourceMappingURL=location.model.spec.js.map