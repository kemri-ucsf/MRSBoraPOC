"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_model_1 = require("./base-model.model");
var _ = require("lodash");
var User = (function (_super) {
    __extends(User, _super);
    function User(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(User.prototype, "roleDisplay", {
        get: function () {
            var roleDisplay = '';
            var roles = this._openmrsModel.roles;
            if (roles && roles.length > 0) {
                var counter_1 = 0;
                _.forEach(roles, function (role) {
                    if (counter_1 <= 1) {
                        roleDisplay = roleDisplay.length === 0 ?
                            role.display : roleDisplay + ', ' + role.display;
                    }
                    counter_1++;
                });
            }
            return roleDisplay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roles", {
        get: function () {
            var roles = this._openmrsModel.roles;
            if (roles && roles.length > 0) {
                return roles;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "personUuid", {
        get: function () {
            var personUuid = this._openmrsModel.person.uuid;
            if (personUuid) {
                return personUuid;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "person", {
        get: function () {
            return this._openmrsModel.person;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(base_model_model_1.BaseModel));
exports.User = User;
//# sourceMappingURL=user.model.js.map