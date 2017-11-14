"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var app_settings_service_1 = require("../settings/app-settings.service");
var http_1 = require("@angular/http");
var session_service_1 = require("./session.service");
var local_storage_service_1 = require("../utils/local-storage.service");
// Load the implementations that should be tested
describe('SessionService Unit Tests', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
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
                local_storage_service_1.LocalStorageService
            ],
        });
    }));
    afterEach(function () {
        testing_1.TestBed.resetTestingModule();
    });
    it('it should return a server url', testing_1.inject([session_service_1.SessionService], function (sessionService) {
        expect(sessionService.getUrl()).toBeTruthy();
    }));
    it('It should return a session', testing_1.inject([testing_2.MockBackend, session_service_1.SessionService], function (backend, sessionService) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({
                    authenticated: true,
                    user: {}
                })
            });
            connection.mockRespond(new http_1.Response(options));
        });
        var credentials = {
            username: 'test',
            password: 'test'
        };
        sessionService.getSession(credentials)
            .subscribe(function (response) {
            expect(response.json().authenticated).toEqual(true);
            expect(response.json().user).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=session.spec.js.map