"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var app_settings_service_1 = require("../settings/app-settings.service");
var http_1 = require("@angular/http");
var local_storage_service_1 = require("../utils/local-storage.service");
var person_resource_service_1 = require("./person-resource.service");
// Load the implementations that should be tested
describe('Service: PersonResourceService Unit Tests', function () {
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
                local_storage_service_1.LocalStorageService,
                person_resource_service_1.PersonResourceService
            ],
        });
    }));
    afterEach(function () {
        testing_1.TestBed.resetTestingModule();
    });
    var personuid = 'uuid';
    var personPayload = {
        age: 21,
        names: [
            {
                // adding new person name
                middleName: 'Tests',
                familyName2: 'Tester'
            },
            {
                uuid: '0cfcb36e-a92f-4b71-b37e-2eedd24abe31',
                middleName: 'Test',
                familyName2: 'Ampath Tester'
            }
        ],
        attributes: [
            // when creating new or updating, Api handles updates automatically
            {
                attributeType: 'attribute-type-uuid',
                value: 'Test Race'
            }
        ],
        addresses: [
            {
                address3: 'Third Address',
                address4: 'Fourth Address'
            },
            {
                address5: 'Fifth Address',
                address6: 'Sixth Address',
                uuid: 'person-address-uuid' // provide uuid if updating
            }
        ]
    };
    it('should be injected with all dependencies', testing_1.inject([person_resource_service_1.PersonResourceService], function (personResourceService) {
        expect(personResourceService).toBeTruthy();
    }));
    it('should return a person when the correct uuid is provided', function (done) {
        var personResourceService = testing_1.TestBed.get(person_resource_service_1.PersonResourceService);
        var backend = testing_1.TestBed.get(testing_2.MockBackend);
        backend.connections.subscribe(function (connection) {
            expect(connection.request.url).toContain('person/' + personuid);
            expect(connection.request.url).toContain('v=');
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({})
            });
            connection.mockRespond(new http_1.Response(options));
        });
        personResourceService.getPersonByUuid(personuid)
            .subscribe(function (response) {
            done();
        });
    });
    it('should return null when params are not specified', testing_1.async(testing_1.inject([person_resource_service_1.PersonResourceService, testing_2.MockBackend], function (service, mockBackend) {
        mockBackend.connections.subscribe(function (conn) {
            throw new Error('No requests should be made.');
        });
        var result = service.saveUpdatePerson(null);
        expect(result).toBeNull();
    })));
    it('should call the right endpoint when updating a person', function (done) {
        var s = testing_1.TestBed.get(person_resource_service_1.PersonResourceService);
        var backend = testing_1.TestBed.get(testing_2.MockBackend);
        backend.connections.subscribe(function (connection) {
            expect(connection.request.url)
                .toEqual('http://example.url.com/ws/rest/v1/person/' + personuid);
            expect(connection.request.method).toBe(http_1.RequestMethod.Post);
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({})
            });
            connection.mockRespond(new http_1.Response(options));
        });
        s.saveUpdatePerson(personuid, personPayload)
            .subscribe(function (response) {
            done();
        });
    });
});
//# sourceMappingURL=person-resource.service.spec.js.map