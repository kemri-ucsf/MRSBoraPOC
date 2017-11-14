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
var Relationship = (function (_super) {
    __extends(Relationship, _super);
    function Relationship(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        var o = _this._openmrsModel;
        return _this;
    }
    Object.defineProperty(Relationship.prototype, "relationshipTypeName", {
        get: function () {
            return this._openmrsModel.relationshipTypeName;
        },
        set: function (v) {
            this._openmrsModel.relationshipTypeName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relationship.prototype, "relationshipTypeUuId", {
        get: function () {
            return this._openmrsModel.relationshipTypeUuId;
        },
        set: function (v) {
            this._openmrsModel.relationshipTypeUuId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relationship.prototype, "relationshipType", {
        get: function () {
            return this._openmrsModel.relationshipType;
        },
        set: function (v) {
            this._openmrsModel.relationshipType = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relationship.prototype, "relative", {
        get: function () {
            return this._openmrsModel.relative;
        },
        set: function (v) {
            this._openmrsModel.relative = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relationship.prototype, "relatedPersonUuid", {
        get: function () {
            return this._openmrsModel.relatedPersonUuid;
        },
        set: function (v) {
            this._openmrsModel.relatedPersonUuid = v;
        },
        enumerable: true,
        configurable: true
    });
    return Relationship;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Relationship.prototype, "relationshipTypeName", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Relationship.prototype, "relationshipTypeUuId", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Relationship.prototype, "relationshipType", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Relationship.prototype, "relative", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Relationship.prototype, "relatedPersonUuid", null);
exports.Relationship = Relationship;
//# sourceMappingURL=relationship.model.js.map