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
var PatientIdentifierType = (function (_super) {
    __extends(PatientIdentifierType, _super);
    function PatientIdentifierType(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PatientIdentifierType.prototype, "name", {
        get: function () {
            return this._openmrsModel.name;
        },
        set: function (v) {
            this._openmrsModel.name = v;
        },
        enumerable: true,
        configurable: true
    });
    return PatientIdentifierType;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PatientIdentifierType.prototype, "name", null);
exports.PatientIdentifierType = PatientIdentifierType;
//# sourceMappingURL=patient-identifier-type.model.js.map