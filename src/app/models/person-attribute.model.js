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
var person_attribute_type_model_1 = require("./person-attribute-type.model");
var PersonAttribute = (function (_super) {
    __extends(PersonAttribute, _super);
    function PersonAttribute(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PersonAttribute.prototype, "attributeType", {
        get: function () {
            if (this._attributeType === null || this._attributeType === undefined) {
                this.initializeNavigationProperty('');
                this._attributeType = new person_attribute_type_model_1.PersonAttributeType(this._openmrsModel.attributeType);
            }
            return this._attributeType;
        },
        set: function (v) {
            this._openmrsModel.attributeType = v.openmrsModel;
            this._attributeType = v;
        },
        enumerable: true,
        configurable: true
    });
    return PersonAttribute;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", person_attribute_type_model_1.PersonAttributeType),
    __metadata("design:paramtypes", [person_attribute_type_model_1.PersonAttributeType])
], PersonAttribute.prototype, "attributeType", null);
exports.PersonAttribute = PersonAttribute;
//# sourceMappingURL=person-attribute.model.js.map