/* tslint:disable:no-unused-variable */
"use strict";
var relationship_model_1 = require("./relationship.model");
describe('Model: Relationship', function () {
    var existingRelationship = {
        'relationshipTypeName': 'Parent/Child',
        'relationshipTypeUuId': 'uuid',
        'relationshipType': 'child',
        'relative': 'name',
        'relatedPersonUuid': 'uuid'
    };
    it('should wrap patient relationship for display correctly', function () {
        var wrappedRelationship = new relationship_model_1.Relationship(existingRelationship);
        expect(wrappedRelationship.relationshipTypeName).
            toEqual(existingRelationship.relationshipTypeName);
        expect(wrappedRelationship.relationshipTypeUuId).
            toEqual(existingRelationship.relationshipTypeUuId);
        expect(wrappedRelationship.relationshipType).toEqual(existingRelationship.relationshipType);
        expect(wrappedRelationship.relative).toEqual(existingRelationship.relative);
        expect(wrappedRelationship.relatedPersonUuid).toEqual(existingRelationship.relatedPersonUuid);
    });
});
//# sourceMappingURL=relationship.model.spec.js.map