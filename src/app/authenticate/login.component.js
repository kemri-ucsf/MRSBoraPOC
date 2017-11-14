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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../openmrs-api/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginSuccess = new core_1.EventEmitter();
        this.loginFailure = new core_1.EventEmitter();
        this.shouldRedirect = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        //event.stopPropagation();
        //event.preventDefault();
        var currentRoute = window.location.toString();
        console.log('currentRoute: ' + currentRoute);
        console.log('username: ' + username + '  password: ' + password);
        username = this.username;
        password = this.password;
        this.subscription = this.authenticationService.authenticate(username, password)
            .subscribe(function (response) {
            var data = response.json();
            if (data.authenticated) {
                _this.router.navigate(['/mrsbora']);
            }
            else {
                console.log('User Not authenticated! ');
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logOut();
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "loginSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "loginFailure", void 0);
LoginComponent = __decorate([
    core_1.Component({
        // selector: 'my-app',
        templateUrl: 'app/authenticate/login.component.html',
        styleUrls: ['app/authenticate/login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map