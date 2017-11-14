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
var patient_model_1 = require("./patient.model");
var encounter_type_model_1 = require("./encounter-type.model");
var form_model_1 = require("./form.model");
var location_model_1 = require("./location.model");
var provider_model_1 = require("./provider.model");
var visit_model_1 = require("./visit.model");
var serializable_decorator_1 = require("./serializable.decorator");
require("./date.extensions");
var Encounter = (function (_super) {
    __extends(Encounter, _super);
    function Encounter(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(Encounter.prototype, "encounterDatetime", {
        get: function () {
            if (this._encounterDatetime === null || this._encounterDatetime === undefined) {
                this._encounterDatetime = new Date(this._openmrsModel.encounterDatetime);
            }
            return this._encounterDatetime;
        },
        set: function (v) {
            this._openmrsModel.encounterDatetime = v.toServerTimezoneString();
            this._encounterDatetime = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "patient", {
        get: function () {
            if (this._patient === null || this._patient === undefined) {
                this.initializeNavigationProperty('patient');
                this._patient = new patient_model_1.Patient(this._openmrsModel.patient);
            }
            return this._patient;
        },
        set: function (v) {
            this._openmrsModel.patient = v.openmrsModel;
            this._patient = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "encounterType", {
        get: function () {
            if (this._encounterType === null || this._encounterType === undefined) {
                this.initializeNavigationProperty('encounterType');
                this._encounterType = new encounter_type_model_1.EncounterType(this._openmrsModel.encounterType);
            }
            return this._encounterType;
        },
        set: function (v) {
            this._openmrsModel.encounterType = v.openmrsModel;
            this._encounterType = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "location", {
        get: function () {
            if (this._location === null || this._location === undefined) {
                this.initializeNavigationProperty('location');
                this._location = new location_model_1.Location(this._openmrsModel.location);
            }
            return this._location;
        },
        set: function (v) {
            this._openmrsModel.location = v.openmrsModel;
            this._location = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "form", {
        get: function () {
            if (this._form === null || this._form === undefined) {
                this.initializeNavigationProperty('form');
                this._form = new form_model_1.Form(this._openmrsModel.form);
            }
            return this._form;
        },
        set: function (v) {
            this._openmrsModel.form = v.openmrsModel;
            this._form = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "provider", {
        get: function () {
            if (this._provider === null || this._provider === undefined) {
                this.initializeNavigationProperty('provider');
                this._provider = new provider_model_1.Provider(this._openmrsModel.provider);
            }
            return this._provider;
        },
        set: function (v) {
            this._openmrsModel.provider = v.openmrsModel;
            this._provider = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "visit", {
        get: function () {
            if (this._visit === null || this._visit === undefined) {
                this.initializeNavigationProperty('visit');
                this._visit = new visit_model_1.Visit(this._openmrsModel.visit);
            }
            return this._visit;
        },
        set: function (v) {
            this._openmrsModel.visit = v.openmrsModel;
            this._visit = v;
        },
        enumerable: true,
        configurable: true
    });
    return Encounter;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Encounter.prototype, "encounterDatetime", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", patient_model_1.Patient),
    __metadata("design:paramtypes", [patient_model_1.Patient])
], Encounter.prototype, "patient", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", encounter_type_model_1.EncounterType),
    __metadata("design:paramtypes", [encounter_type_model_1.EncounterType])
], Encounter.prototype, "encounterType", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", location_model_1.Location),
    __metadata("design:paramtypes", [location_model_1.Location])
], Encounter.prototype, "location", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", form_model_1.Form),
    __metadata("design:paramtypes", [form_model_1.Form])
], Encounter.prototype, "form", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", provider_model_1.Provider),
    __metadata("design:paramtypes", [provider_model_1.Provider])
], Encounter.prototype, "provider", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", visit_model_1.Visit),
    __metadata("design:paramtypes", [visit_model_1.Visit])
], Encounter.prototype, "visit", null);
exports.Encounter = Encounter;
//# sourceMappingURL=encounter.model.js.map