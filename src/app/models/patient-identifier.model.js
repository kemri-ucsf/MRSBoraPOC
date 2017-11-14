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
var patient_identifier_type_model_1 = require("./patient-identifier-type.model");
var PatientIdentifier = (function (_super) {
    __extends(PatientIdentifier, _super);
    function PatientIdentifier(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PatientIdentifier.prototype, "identifierType", {
        get: function () {
            if (this._identifier === null || this._identifier === undefined) {
                this.initializeNavigationProperty('identifierType');
                this._identifier = new patient_identifier_type_model_1.PatientIdentifierType(this._openmrsModel.identifierType);
            }
            return this._identifier;
        },
        set: function (v) {
            this._openmrsModel.identifierType = v.openmrsModel;
            this._identifier = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientIdentifier.prototype, "identifier", {
        get: function () {
            return this._openmrsModel.identifier;
        },
        set: function (v) {
            this._openmrsModel.identifier = v;
        },
        enumerable: true,
        configurable: true
    });
    return PatientIdentifier;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", patient_identifier_type_model_1.PatientIdentifierType),
    __metadata("design:paramtypes", [patient_identifier_type_model_1.PatientIdentifierType])
], PatientIdentifier.prototype, "identifierType", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PatientIdentifier.prototype, "identifier", null);
exports.PatientIdentifier = PatientIdentifier;
//# sourceMappingURL=patient-identifier.model.js.map