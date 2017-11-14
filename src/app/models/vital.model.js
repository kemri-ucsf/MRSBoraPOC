"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_model_1 = require("./base-model.model");
var Vital = (function (_super) {
    __extends(Vital, _super);
    function Vital(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(Vital.prototype, "systolic", {
        get: function () {
            return this._openmrsModel.systolic;
        },
        set: function (v) {
            this._openmrsModel.systolic = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "diastolic", {
        get: function () {
            return this._openmrsModel.diastolic;
        },
        set: function (v) {
            this._openmrsModel.diastolic = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "pulse", {
        get: function () {
            return this._openmrsModel.pulse;
        },
        set: function (v) {
            this._openmrsModel.pulse = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "temperature", {
        get: function () {
            return this._openmrsModel.temperature;
        },
        set: function (v) {
            this._openmrsModel.temperature = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "oxygenSaturation", {
        get: function () {
            return this._openmrsModel.oxygenSaturation;
        },
        set: function (v) {
            this._openmrsModel.oxygenSaturation = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "height", {
        get: function () {
            return this._openmrsModel.height;
        },
        set: function (v) {
            this._openmrsModel.height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "weight", {
        get: function () {
            return this._openmrsModel.weight;
        },
        set: function (v) {
            this._openmrsModel.weight = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vital.prototype, "bmi", {
        get: function () {
            return this._openmrsModel.bmi;
        },
        set: function (v) {
            this._openmrsModel.bmi = v;
        },
        enumerable: true,
        configurable: true
    });
    return Vital;
}(base_model_model_1.BaseModel));
exports.Vital = Vital;
//# sourceMappingURL=vital.model.js.map