"use strict";
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
 * BaseModel
 */
var serializable_decorator_1 = require("./serializable.decorator");
var BaseModel = (function () {
    function BaseModel(_openmrsModel) {
        this._openmrsModel = _openmrsModel;
        if (_openmrsModel === undefined || _openmrsModel === null) {
            _openmrsModel = {};
        }
    }
    Object.defineProperty(BaseModel.prototype, "uuid", {
        get: function () {
            return this._openmrsModel.uuid;
        },
        set: function (v) {
            this._openmrsModel.uuid = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "display", {
        get: function () {
            return this._openmrsModel.display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "openmrsModel", {
        get: function () {
            return this._openmrsModel;
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.prototype.toNewPayload = function () {
        return serializable_decorator_1.serialize(this, true);
    };
    BaseModel.prototype.toUpdatePayload = function () {
        return serializable_decorator_1.serialize(this, false);
    };
    BaseModel.prototype.initializeNavigationProperty = function (member) {
        if (this._openmrsModel[member] === undefined || this._openmrsModel[member] === null) {
            this._openmrsModel[member] = {};
        }
    };
    return BaseModel;
}());
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BaseModel.prototype, "uuid", null);
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-model.model.js.map