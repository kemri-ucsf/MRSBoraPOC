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
 * Concept
 */
var base_model_model_1 = require("./base-model.model");
var serializable_decorator_1 = require("./serializable.decorator");
var concept_name_model_1 = require("./concept-name.model");
var concept_class_model_1 = require("./concept-class.model");
var Concept = (function (_super) {
    __extends(Concept, _super);
    function Concept(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._conceptName = _this.openmrsModel.conceptName;
        _this._conceptClass = _this.openmrsModel.conceptClass;
        return _this;
    }
    Object.defineProperty(Concept.prototype, "conceptName", {
        get: function () {
            if (this._conceptName === null || this._conceptName === undefined) {
                this.initializeNavigationProperty('');
                this._conceptName = new concept_name_model_1.ConceptName(this._openmrsModel.conceptName);
            }
            return this._conceptName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Concept.prototype, "conceptClass", {
        get: function () {
            if (this._conceptClass === null || this._conceptClass === undefined) {
                this.initializeNavigationProperty('');
                this._conceptClass = new concept_class_model_1.ConceptClass(this._openmrsModel.conceptClass);
            }
            return this._conceptClass;
        },
        enumerable: true,
        configurable: true
    });
    return Concept;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", concept_name_model_1.ConceptName),
    __metadata("design:paramtypes", [])
], Concept.prototype, "conceptName", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", concept_class_model_1.ConceptClass),
    __metadata("design:paramtypes", [])
], Concept.prototype, "conceptClass", null);
exports.Concept = Concept;
//# sourceMappingURL=concept-model.js.map