"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var base_model_model_1 = require("./base-model.model");
var serializable_decorator_1 = require("./serializable.decorator");
require("./date.extensions");
var person_attribute_model_1 = require("./person-attribute.model");
var address_model_1 = require("./address.model");
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._attributes = _this.openmrsModel.attributes;
        _this._convertedAttributes = [];
        return _this;
    }
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._openmrsModel.gender;
        },
        set: function (v) {
            this._openmrsModel.gender = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._openmrsModel.age;
        },
        set: function (v) {
            this._openmrsModel.age = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthdate", {
        get: function () {
            if (this._birthdate === null || this._birthdate === undefined) {
                this._birthdate = new Date(this._openmrsModel.birthdate);
            }
            return this._birthdate;
        },
        set: function (v) {
            this._openmrsModel.birthdate = v.toServerTimezoneString();
            this._birthdate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "preferredName", {
        get: function () {
            return this._openmrsModel.preferredName;
        },
        set: function (v) {
            this._openmrsModel.preferredName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "attributes", {
        get: function () {
            if (this._attributes === null || this._attributes === undefined) {
                this.initializeNavigationProperty('');
                this._attributes = new person_attribute_model_1.PersonAttribute(this._openmrsModel.attributes);
            }
            return this._attributes;
        },
        set: function (v) {
            this._openmrsModel.attributes = v.openmrsModel;
            this._attributes = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "healthCenter", {
        get: function () {
            var healthCenterPersonAttributeTypeUuid = '8d87236c-c2cc-11de-8d13-0010c6dffd0f';
            if (this._attributes) {
                var location_1 = this.getPersonAttribute(healthCenterPersonAttributeTypeUuid);
                if (location_1) {
                    return location_1.display;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "nextofkinPhoneNumber", {
        get: function () {
            var nextofkinPhoneNumberPersonAttributeTypeUuid = 'a657a4f1-9c0f-444b-a1fd-445bb91dd12d';
            if (this._attributes) {
                var nextofkinPhoneNumber = this.getPersonAttribute(nextofkinPhoneNumberPersonAttributeTypeUuid);
                if (nextofkinPhoneNumber) {
                    return nextofkinPhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "patnerPhoneNumber", {
        get: function () {
            var patnerPhoneNumberPersonAttributeTypeUuid = 'b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46';
            if (this._attributes) {
                var patnerPhoneNumber = this.getPersonAttribute(patnerPhoneNumberPersonAttributeTypeUuid);
                if (patnerPhoneNumber) {
                    return patnerPhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "alternativePhoneNumber", {
        get: function () {
            var alternativePhoneNumberPersonAttributeTypeUuid = 'c725f524-c14a-4468-ac19-4a0e6661c930';
            if (this._attributes) {
                var alternativePhoneNumber = this.getPersonAttribute(alternativePhoneNumberPersonAttributeTypeUuid);
                if (alternativePhoneNumber) {
                    return alternativePhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "patientPhoneNumber", {
        get: function () {
            var phoneNumberPersonAttributeTypeUuid = '72a759a8-1359-11df-a1f1-0026b9348838';
            if (this._attributes) {
                var phoneNumber = this.getPersonAttribute(phoneNumberPersonAttributeTypeUuid);
                if (phoneNumber) {
                    return phoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "contacts", {
        get: function () {
            var phoneNumberPersonAttributeTypeUuid = '72a759a8-1359-11df-a1f1-0026b9348838';
            var patnerPhoneNumberPersonAttributeTypeUuid = 'b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46';
            var alternativePhoneNumberPersonAttributeTypeUuid = 'c725f524-c14a-4468-ac19-4a0e6661c930';
            var nextofkinPhoneNumberPersonAttributeTypeUuid = 'a657a4f1-9c0f-444b-a1fd-445bb91dd12d';
            if (this._attributes) {
                var filteredContacts = void 0;
                var patnerPhoneNumber = this.getPersonAttribute(patnerPhoneNumberPersonAttributeTypeUuid);
                var patientPhoneNumber = this.getPersonAttribute(phoneNumberPersonAttributeTypeUuid);
                var alternativePhoneNumber = this.getPersonAttribute(alternativePhoneNumberPersonAttributeTypeUuid);
                var nextofkinPhoneNumber = this.getPersonAttribute(nextofkinPhoneNumberPersonAttributeTypeUuid);
                if ((patnerPhoneNumber) === undefined && (patientPhoneNumber) === undefined &&
                    (alternativePhoneNumber) === undefined && (nextofkinPhoneNumber) === undefined &&
                    (patientPhoneNumber) === undefined) {
                    if ((this._attributes)) {
                        filteredContacts = { 'default': this._attributes };
                    }
                    else {
                        filteredContacts = { 'default': '' };
                    }
                }
                else {
                    filteredContacts = {
                        patnerPhoneNumber: (patnerPhoneNumber),
                        patientPhoneNumber: (patientPhoneNumber),
                        alternativePhoneNumber: (alternativePhoneNumber),
                        nextofkinPhoneNumber: (nextofkinPhoneNumber)
                    };
                }
                return filteredContacts;
            }
            else {
                return this._attributes = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getPersonAttribute = function (personAttributeTypeUuid) {
        if (this._attributes.length > 0) {
            for (var i in this._attributes) {
                if (this._attributes.hasOwnProperty(i)) {
                    var attr = this._attributes[i];
                    if (attr.attributeType && attr.attributeType.uuid === personAttributeTypeUuid) {
                        return attr.value;
                    }
                }
            }
        }
    };
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            if (this._address === null || this._address === undefined) {
                this.initializeNavigationProperty('');
                this._address = new address_model_1.PersonAddress(this._openmrsModel.addresses);
            }
            return this._address;
        },
        set: function (v) {
            this._openmrsModel.addresses = v.openmrsModel;
            this._address = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "preferredAddress", {
        get: function () {
            return this._openmrsModel.preferredAddress;
        },
        set: function (v) {
            this._openmrsModel.preferredAddress = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dead", {
        get: function () {
            return this._openmrsModel.dead;
        },
        set: function (v) {
            this._openmrsModel.dead = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "deathDate", {
        get: function () {
            return this._openmrsModel.deathDate;
        },
        set: function (v) {
            this._openmrsModel.deathDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "causeOfDeath", {
        get: function () {
            if (this._openmrsModel.causeOfDeath) {
                return this._openmrsModel.causeOfDeath.display;
            }
            return '';
        },
        set: function (v) {
            this._openmrsModel.causeOfDeath = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "causeOfDeathUuId", {
        get: function () {
            if (this._openmrsModel.causeOfDeath) {
                return this._openmrsModel.causeOfDeath.uuid;
            }
            return '';
        },
        set: function (v) {
            this._openmrsModel.causeOfDeathUuId = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "gender", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Person.prototype, "age", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Person.prototype, "birthdate", null);
__decorate([
    serializable_decorator_1.serializable(false, true),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "preferredName", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", person_attribute_model_1.PersonAttribute),
    __metadata("design:paramtypes", [person_attribute_model_1.PersonAttribute])
], Person.prototype, "attributes", null);
__decorate([
    serializable_decorator_1.serializable(false, true),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "preferredAddress", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Person.prototype, "dead", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Person.prototype, "deathDate", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "causeOfDeath", null);
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "causeOfDeathUuId", null);
exports.Person = Person;
//# sourceMappingURL=person.model.js.map