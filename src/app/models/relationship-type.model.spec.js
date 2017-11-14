/* tslint:disable:no-unused-variable */
"use strict";
var relationship_type_model_1 = require("./relationship-type.model");
describe('Model: RelationshipType', function () {
    var existingRelationshipType = {
        'display': 'Robai is the Aunt/Uncle of Test',
    };
    it('should wrap patient relationship for display correctly', function () {
        var wrappedRelationshipType = new relationship_type_model_1.RelationshipType(existingRelationshipType);
        expect(wrappedRelationshipType.display).
            toEqual(existingRelationshipType.display);
    });
});
//# sourceMappingURL=relationship-type.model.spec.js.map