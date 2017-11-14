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
var person_model_1 = require("./person.model");
var Provider = (function (_super) {
    __extends(Provider, _super);
    function Provider(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._person = _this.openmrsModel.person;
        return _this;
    }
    Object.defineProperty(Provider.prototype, "person", {
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
    Object.defineProperty(Provider.prototype, "identifier", {
        get: function () {
            return this._openmrsModel.identifier;
        },
        set: function (v) {
            this._openmrsModel.identifier = v;
        },
        enumerable: true,
        configurable: true
    });
    return Provider;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", person_model_1.Person),
    __metadata("design:paramtypes", [person_model_1.Person])
], Provider.prototype, "person", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Provider.prototype, "identifier", null);
exports.Provider = Provider;
//# sourceMappingURL=provider.model.js.map