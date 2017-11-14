"use strict";
var local_storage_service_1 = require("./local-storage.service");
describe('LocalStorageService Tests', function () {
    var service;
    var keyName = 'localStorageServiceTest.value';
    var value = 'some value to be stored';
    var objectValue = {
        property1: 'localStorage wrapper',
        property2: 'another property'
    };
    beforeAll(function () {
        service = new local_storage_service_1.LocalStorageService();
    });
    beforeEach(function () {
        window.localStorage.clear();
    });
    it('should store a give value', function () {
        service.setItem(keyName, value);
        expect(window.localStorage.getItem(keyName)).toEqual(value, 'setItem() should store values');
    });
    it('should retrieve a stored value', function () {
        window.localStorage.setItem(keyName, value);
        expect(service.getItem(keyName)).toEqual(value, 'getItem()');
    });
    it('should store javascript object literals', function () {
        service.setObject(keyName, objectValue);
        var stored = window.localStorage.getItem(keyName);
        expect(JSON.parse(stored)).toEqual(objectValue, 'setObject()');
    });
    it('should retrieve the stored javascript object literal', function () {
        window.localStorage.setItem(keyName, JSON.stringify(objectValue));
        expect(service.getObject(keyName)).toEqual(objectValue, 'getObject()');
    });
    it('should remove an existing item', function () {
        window.localStorage.setItem(keyName, 'some value');
        service.remove(keyName);
        expect(window.localStorage.getItem(keyName)).toBeNull();
    });
    it('should clear localStorage', function () {
        service.clear();
        expect(window.localStorage.length).toEqual(0);
    });
    it('should return the correct length of localStorage', function () {
        window.localStorage.setItem(keyName, 'some value');
        expect(service.storageLength).toEqual(1);
    });
});
//# sourceMappingURL=local-storage.service.spec.js.map