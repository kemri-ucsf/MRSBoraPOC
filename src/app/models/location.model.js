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
var Location = (function (_super) {
    __extends(Location, _super);
    function Location(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(Location.prototype, "name", {
        get: function () {
            return this._openmrsModel.name;
        },
        set: function (v) {
            this._openmrsModel.name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "description", {
        get: function () {
            return this._openmrsModel.description;
        },
        set: function (v) {
            this._openmrsModel.description = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address1", {
        get: function () {
            return this._openmrsModel.address1;
        },
        set: function (v) {
            this._openmrsModel.address1 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address2", {
        get: function () {
            return this._openmrsModel.address2;
        },
        set: function (v) {
            this._openmrsModel.address2 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address3", {
        get: function () {
            return this._openmrsModel.address3;
        },
        set: function (v) {
            this._openmrsModel.address3 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address4", {
        get: function () {
            return this._openmrsModel.address4;
        },
        set: function (v) {
            this._openmrsModel.address4 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address5", {
        get: function () {
            return this._openmrsModel.address5;
        },
        set: function (v) {
            this._openmrsModel.address5 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address6", {
        get: function () {
            return this._openmrsModel.address6;
        },
        set: function (v) {
            this._openmrsModel.address6 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "cityVillage", {
        get: function () {
            return this._openmrsModel.cityVillage;
        },
        set: function (v) {
            this._openmrsModel.cityVillage = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "stateProvince", {
        get: function () {
            return this._openmrsModel.stateProvince;
        },
        set: function (v) {
            this._openmrsModel.stateProvince = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "country", {
        get: function () {
            return this._openmrsModel.country;
        },
        set: function (v) {
            this._openmrsModel.country = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "postalCode", {
        get: function () {
            return this._openmrsModel.postalCode;
        },
        set: function (v) {
            this._openmrsModel.postalCode = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "latitude", {
        get: function () {
            return this._openmrsModel.latitude;
        },
        set: function (v) {
            this._openmrsModel.latitude = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "longitude", {
        get: function () {
            return this._openmrsModel.longitude;
        },
        set: function (v) {
            this._openmrsModel.longitude = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "tags", {
        get: function () {
            return this._openmrsModel.tags;
        },
        set: function (v) {
            this._openmrsModel.tags = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "parentLocation", {
        get: function () {
            return this._openmrsModel.parentLocation;
        },
        set: function (v) {
            this._openmrsModel.parentLocation = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "childLocations", {
        get: function () {
            return this._openmrsModel.childLocations;
        },
        set: function (v) {
            this._openmrsModel.childLocations = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "attributes", {
        get: function () {
            return this._openmrsModel.attributes;
        },
        set: function (v) {
            this._openmrsModel.attributes = v;
        },
        enumerable: true,
        configurable: true
    });
    return Location;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "name", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "description", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address1", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address2", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address3", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address4", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address5", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "address6", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "cityVillage", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "stateProvince", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "country", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "postalCode", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "latitude", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "longitude", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "tags", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Location.prototype, "parentLocation", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Location.prototype, "childLocations", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Location.prototype, "attributes", null);
exports.Location = Location;
//# sourceMappingURL=location.model.js.map