"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// import { AppSettingsComponent } from './app-settings.component';
var router_1 = require("@angular/router");
// import { APP_SETTINGS_ROUTES } from './app-settings.routes';
var utils_module_1 = require("../utils/utils.module");
var modal_1 = require("ngx-bootstrap/modal");
var app_settings_service_1 = require("./app-settings.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var AppSettingsModule = (function () {
    function AppSettingsModule() {
    }
    return AppSettingsModule;
}());
AppSettingsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule,
            utils_module_1.UtilsModule
        ],
        declarations: [],
        providers: [
            app_settings_service_1.AppSettingsService,
            cookies_service_1.CookieService
        ],
        exports: [
            router_1.RouterModule
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppSettingsModule);
exports.AppSettingsModule = AppSettingsModule;
//# sourceMappingURL=app-settings.module.js.map