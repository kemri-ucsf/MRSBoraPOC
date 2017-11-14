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
/**
 * patient
 */
var base_model_model_1 = require("./base-model.model");
var serializable_decorator_1 = require("./serializable.decorator");
var person_model_1 = require("./person.model");
var patient_identifier_model_1 = require("./patient-identifier.model");
var Patient = (function (_super) {
    __extends(Patient, _super);
    function Patient(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._identifier = _this.openmrsModel.identifiers;
        _this._enrolledPrograms = _this.openmrsModel.enrolledPrograms;
        _this._encounters = _this.openmrsModel.encounters;
        return _this;
    }
    Object.defineProperty(Patient.prototype, "person", {
        get: function () {
            if (this._person === null || this._person === undefined) {
                this.initializeNavigationProperty('person');
                this._person = new person_model_1.Person(this._openmrsModel.person);
            }
            return this._person;
        },
        set: function (v) {
            this._openmrsModel.person = v.openmrsModel;
            this._person = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "identifiers", {
        get: function () {
            if (this._patientIdentifier === null || this._patientIdentifier === undefined) {
                this.initializeNavigationProperty('patientIdentifier');
                this._patientIdentifier = new patient_identifier_model_1.PatientIdentifier(this._openmrsModel.identifiers);
            }
            return this._patientIdentifier;
        },
        set: function (v) {
            this._openmrsModel.identifiers = v.openmrsModel;
            this._patientIdentifier = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "enrolledPrograms", {
        get: function () {
            if (this._enrolledPrograms === null || this._enrolledPrograms === undefined) {
                this.initializeNavigationProperty('enrolledPrograms');
                this._enrolledPrograms = this._openmrsModel.enrolledPrograms;
            }
            return this._enrolledPrograms;
        },
        set: function (v) {
            this._openmrsModel.enrolledPrograms = v;
            this._enrolledPrograms = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "encounters", {
        get: function () {
            var mappedEncounters = new Array();
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this._encounters.length; i++) {
                mappedEncounters.push(this._encounters[i]);
            }
            return mappedEncounters.reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "searchIdentifiers", {
        get: function () {
            if (this._identifier.length > 0) {
                // return _identifier[0].display.split('=')[1];
                var filteredIdentifiers = void 0;
                var identifier = this._identifier;
                var kenyaNationalId = this.getIdentifierByType(identifier, 'KENYAN NATIONAL ID NUMBER');
                var amrsMrn = this.getIdentifierByType(identifier, 'AMRS Medical Record Number');
                var ampathMrsUId = this.getIdentifierByType(identifier, 'AMRS Universal ID');
                var cCC = this.getIdentifierByType(identifier, 'CCC Number');
                if ((kenyaNationalId) === undefined && (amrsMrn) === undefined &&
                    (ampathMrsUId) === undefined && (cCC) === undefined) {
                    if ((this._identifier[0].identifier)) {
                        filteredIdentifiers = { 'default': this._identifier[0].identifier };
                    }
                    else {
                        filteredIdentifiers = { 'default': '' };
                    }
                }
                else {
                    filteredIdentifiers = {
                        'kenyaNationalId': kenyaNationalId,
                        'amrsMrn': amrsMrn,
                        'ampathMrsUId': ampathMrsUId,
                        'cCC': cCC
                    };
                }
                return filteredIdentifiers;
            }
            else {
                return this._identifier = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Patient.prototype.getIdentifierByType = function (identifierObject, type) {
        for (var e in identifierObject) {
            if ((identifierObject[e].identifierType) !== undefined) {
                var idType = identifierObject[e].identifierType.name;
                var id = identifierObject[e].identifier;
                if (idType === type) {
                    return id;
                }
            }
        }
    };
    Patient.prototype.toUpdatePayload = function () {
        return null;
    };
    Object.defineProperty(Patient.prototype, "commonIdentifiers", {
        get: function () {
            if (this._identifier.length > 0) {
                // return _identifier[0].display.split('=')[1];
                var filteredIdentifiers = void 0;
                var identifiers = this._identifier;
                var kenyaNationalId = this.getAllIdentifiersByType(identifiers, 'KENYAN NATIONAL ID NUMBER');
                var amrsMrn = this.getAllIdentifiersByType(identifiers, 'AMRS Medical Record Number');
                var ampathMrsUId = this.getAllIdentifiersByType(identifiers, 'AMRS Universal ID');
                var cCC = this.getAllIdentifiersByType(identifiers, 'CCC Number');
                if ((kenyaNationalId) === undefined && (amrsMrn) === undefined &&
                    (ampathMrsUId) === undefined && (cCC) === undefined) {
                    if ((this._identifier[0].identifier)) {
                        filteredIdentifiers = { 'default': this._identifier[0].identifier };
                    }
                    else {
                        filteredIdentifiers = { 'default': '' };
                    }
                }
                else {
                    filteredIdentifiers = {
                        'kenyaNationalId': this._fromArrayToCommaSeparatedString(kenyaNationalId),
                        'amrsMrn': this._fromArrayToCommaSeparatedString(amrsMrn),
                        'ampathMrsUId': this._fromArrayToCommaSeparatedString(ampathMrsUId),
                        'cCC': this._fromArrayToCommaSeparatedString(cCC)
                    };
                }
                return filteredIdentifiers;
            }
            else {
                return this._identifier = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Patient.prototype.getAllIdentifiersByType = function (identifiers, type) {
        var types = [];
        for (var e in identifiers) {
            if ((identifiers[e].identifierType) !== undefined) {
                var idType = identifiers[e].identifierType.name;
                var id = identifiers[e].identifier;
                if (idType === type) {
                    types.push(id);
                }
            }
        }
        return types;
    };
    Patient.prototype._fromArrayToCommaSeparatedString = function (inputArray) {
        var returnString = '';
        for (var i = 0; i < inputArray.length; i++) {
            if (i === 0) {
                returnString = inputArray[i] + returnString;
            }
            else {
                returnString = returnString + ', ' + inputArray[i];
            }
        }
        return returnString;
    };
    return Patient;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", person_model_1.Person),
    __metadata("design:paramtypes", [person_model_1.Person])
], Patient.prototype, "person", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", patient_identifier_model_1.PatientIdentifier),
    __metadata("design:paramtypes", [patient_identifier_model_1.PatientIdentifier])
], Patient.prototype, "identifiers", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Patient.prototype, "enrolledPrograms", null);
exports.Patient = Patient;
//# sourceMappingURL=patient.model.js.map