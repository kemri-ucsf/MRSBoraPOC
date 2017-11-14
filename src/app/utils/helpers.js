"use strict";
var _ = require("lodash");
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.isNullOrUndefined = function (subject) {
        return _.isUndefined(subject)
            || _.isNull(subject)
            || (typeof subject === 'string'
                && (subject.length === 0
                    || !subject.trim()));
    };
    Helpers.formatBlankOrNull = function (obj, text) {
        _.each(Object.keys(obj), function (key) {
            if (obj[key] === '' || obj[key] === null) {
                obj[key] = text;
            }
        });
    };
    Helpers.isNullOrEmpty = function (str) {
        return (!str || 0 === str.length);
    };
    Helpers.hasAllMembersUndefinedOrNull = function (obj, members) {
        var hasANonNullMember = false;
        for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
            var member = members_1[_i];
            if (!this.isNullOrUndefined(obj[member])) {
                hasANonNullMember = true;
                break;
            }
        }
        return !hasANonNullMember;
    };
    return Helpers;
}());
exports.Helpers = Helpers;
//# sourceMappingURL=helpers.js.map