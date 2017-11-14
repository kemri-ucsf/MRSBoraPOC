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
var program_model_1 = require("./program.model");
var common_1 = require("@angular/common");
var title_case_pipe_1 = require("../shared/pipes/title-case.pipe");
var ProgramEnrollment = (function (_super) {
    __extends(ProgramEnrollment, _super);
    function ProgramEnrollment(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._datePipe = new common_1.DatePipe('en-US');
        _this._titleCasePipe = new title_case_pipe_1.TitleCasePipe();
        return _this;
    }
    Object.defineProperty(ProgramEnrollment.prototype, "program", {
        get: function () {
            if (this._program === null || this._program === undefined) {
                this.initializeNavigationProperty('program');
                this._program = new program_model_1.Program(this._openmrsModel.program);
            }
            return this._program;
        },
        set: function (v) {
            this._openmrsModel.program = v.openmrsModel;
            this._program = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramEnrollment.prototype, "display", {
        get: function () {
            return this._titleCasePipe.transform(this._openmrsModel.display);
        },
        set: function (v) {
            this._openmrsModel.display = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramEnrollment.prototype, "programUuid", {
        get: function () {
            return this._openmrsModel.program.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramEnrollment.prototype, "voided", {
        get: function () {
            return this._openmrsModel.voided;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramEnrollment.prototype, "dateEnrolled", {
        get: function () {
            if (this._dateEnrolled === null || this._dateEnrolled === undefined) {
                this._dateEnrolled = this.resolveDate(this._openmrsModel.dateEnrolled);
            }
            return this._dateEnrolled;
        },
        set: function (v) {
            this._openmrsModel.dateEnrolled = v.toServerTimezoneString();
            this._dateEnrolled = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramEnrollment.prototype, "dateCompleted", {
        get: function () {
            if (this._dateCompleted === null || this._dateCompleted === undefined) {
                this._dateCompleted = this.resolveDate(this._openmrsModel.dateCompleted);
            }
            return this._dateCompleted;
        },
        set: function (v) {
            this._openmrsModel.dateCompleted = v.toServerTimezoneString();
            this._dateCompleted = v;
        },
        enumerable: true,
        configurable: true
    });
    ProgramEnrollment.prototype.resolveDate = function (date) {
        var dateFormat = 'MMM dd, yyyy';
        var parsedDate = Date.parse(date);
        return isNaN(parsedDate) ? date : this._datePipe.transform(date, dateFormat);
    };
    return ProgramEnrollment;
}(base_model_model_1.BaseModel));
__decorate([
    serializable_decorator_1.serializable(true, false),
    __metadata("design:type", program_model_1.Program),
    __metadata("design:paramtypes", [program_model_1.Program])
], ProgramEnrollment.prototype, "program", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProgramEnrollment.prototype, "display", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], ProgramEnrollment.prototype, "dateEnrolled", null);
__decorate([
    serializable_decorator_1.serializable(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], ProgramEnrollment.prototype, "dateCompleted", null);
exports.ProgramEnrollment = ProgramEnrollment;
//# sourceMappingURL=program-enrollment.model.js.map