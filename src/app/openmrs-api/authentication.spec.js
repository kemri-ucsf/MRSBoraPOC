"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var app_settings_service_1 = require("../settings/app-settings.service");
var http_1 = require("@angular/http");
var session_service_1 = require("./session.service");
var authentication_service_1 = require("./authentication.service");
var local_storage_service_1 = require("../utils/local-storage.service");
var session_storage_service_1 = require("../utils/session-storage.service");
var ngx_cookie_1 = require("ngx-cookie");
var constants_1 = require("../utils/constants");
// Load the implementations that should be tested
describe('AuthenticationService Unit Tests', function () {
    var appSettingsService;
    var sessionStorageService;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [ngx_cookie_1.CookieModule.forRoot()],
            declarations: [],
            providers: [
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: function (backendInstance, defaultOptions) {
                        return new http_1.Http(backendInstance, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                app_settings_service_1.AppSettingsService,
                session_service_1.SessionService,
                local_storage_service_1.LocalStorageService,
                session_storage_service_1.SessionStorageService,
                authentication_service_1.AuthenticationService,
                ngx_cookie_1.CookieService
            ],
        });
    }));
    it('it should authenticate user requests', testing_1.inject([testing_2.MockBackend,
        session_storage_service_1.SessionStorageService, authentication_service_1.AuthenticationService], function (backend, service, authenticationService) {
        var username = 'test';
        var password = 'test';
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({
                    authenticated: true,
                    user: {}
                })
            });
            connection.mockRespond(new http_1.Response(options));
        });
        authenticationService.authenticate(username, password)
            .subscribe(function (response) {
            expect(response.json().authenticated).toEqual(true);
            expect(response.json().user).toBeTruthy();
            var expectedCredentials = btoa(username + ':' + password);
            expect(service.getItem(constants_1.Constants.CREDENTIALS_KEY))
                .toEqual(expectedCredentials);
            expect(service.getItem(constants_1.Constants.USER_KEY))
                .toEqual(JSON.stringify({}));
        });
    }));
    it('it should clear user details on logout', testing_1.inject([testing_2.MockBackend,
        session_storage_service_1.SessionStorageService, authentication_service_1.AuthenticationService], function (backend, service, authenticationService) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({})
            });
            connection.mockRespond(new http_1.Response(options));
        });
        authenticationService.logOut()
            .subscribe(function (response) {
            expect(response.json()).toEqual({});
            expect(service.getItem(constants_1.Constants.CREDENTIALS_KEY)).toEqual(null);
            expect(service.getItem(constants_1.Constants.USER_KEY)).toEqual(null);
        });
    }));
});
//# sourceMappingURL=authentication.spec.js.map