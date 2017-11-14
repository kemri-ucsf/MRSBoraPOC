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
var PersonAddress = (function (_super) {
    __extends(PersonAddress, _super);
    function PersonAddress(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PersonAddress.prototype, "preferred", {
        get: function () {
            return this._openmrsModel.preferred;
        },
        set: function (v) {
            this._openmrsModel.preferred = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address1", {
        get: function () {
            return this._openmrsModel.address1;
        },
        set: function (v) {
            this._openmrsModel.address1 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address2", {
        get: function () {
            return this._openmrsModel.address2;
        },
        set: function (v) {
            this._openmrsModel.address2 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address3", {
        get: function () {
            return this._openmrsModel.address3;
        },
        set: function (v) {
            this._openmrsModel.address3 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address4", {
        get: function () {
            return this._openmrsModel.address4;
        },
        set: function (v) {
            this._openmrsModel.address4 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address5", {
        get: function () {
            return this._openmrsModel.address5;
        },
        set: function (v) {
            this._openmrsModel.address5 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address6", {
        get: function () {
            return this._openmrsModel.address6;
        },
        set: function (v) {
            this._openmrsModel.address6 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "cityVillage", {
        get: function () {
            return this._openmrsModel.cityVillage;
        },
        set: function (v) {
            this._openmrsModel.cityVillage = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "stateProvince", {
        get: function () {
            return this._openmrsModel.stateProvince;
        },
        set: function (v) {
            this._openmrsModel.stateProvince = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "country", {
        get: function () {
            return this._openmrsModel.country;
        },
        set: function (v) {
            this._openmrsModel.country = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "countyDistrict", {
        get: function () {
            return this._openmrsModel.countyDistrict;
        },
        set: function (v) {
            this._openmrsModel.countyDistrict = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "postalCode", {
        get: function () {
            return this._openmrsModel.postalCode;
        },
        set: function (v) {
            this._openmrsModel.postalCode = v;
        },
        enumerable: true,
        configurable: true
    });
    return PersonAddress;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "preferred", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address1", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address2", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address3", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address4", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address5", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "address6", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "cityVillage", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "stateProvince", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "country", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "countyDistrict", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PersonAddress.prototype, "postalCode", null);
exports.PersonAddress = PersonAddress;
//# sourceMappingURL=address.model.js.map