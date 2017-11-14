"use strict";
var user_model_1 = require("./user.model");
describe('Model: Person', function () {
    var userObject = {
        uuid: 'uuid',
        display: 'the user',
        roles: [
            {
                display: 'System Developer',
                uuid: 'role1 uuid'
            },
            {
                display: 'Tester',
                uuid: 'role2 uuid'
            },
            {
                display: 'Role 3',
                uuid: 'role3 uuid'
            }
        ]
    };
    it('should wrap openmrs person for display correctly', function () {
        var wrappedUser = new user_model_1.User(userObject);
        expect(wrappedUser.uuid).toEqual(userObject.uuid);
        expect(wrappedUser.roleDisplay).toEqual('System Developer, Tester');
        expect(wrappedUser.roles).toEqual(userObject.roles);
    });
});
//# sourceMappingURL=user.model.spec.js.map