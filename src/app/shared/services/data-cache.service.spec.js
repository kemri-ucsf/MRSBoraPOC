"use strict";
var testing_1 = require("@angular/core/testing");
var ionic_cache_1 = require("ionic-cache");
var data_cache_service_1 = require("./data-cache.service");
// Load the implementations that should be tested
describe('Service : DataCacheService Unit Tests', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                ionic_cache_1.CacheService,
                data_cache_service_1.DataCacheService
            ],
            imports: [
                ionic_cache_1.CacheModule
            ]
        });
    }));
    afterEach(function () {
        testing_1.TestBed.resetTestingModule();
    });
    it('should be injected with all dependencies', testing_1.inject([data_cache_service_1.DataCacheService], function (dataCache) {
        expect(dataCache).toBeTruthy();
    }));
    it('should have all methods defined', testing_1.inject([data_cache_service_1.DataCacheService], function (dataCache) {
        expect(dataCache.setDefaulTime).toBeDefined();
        expect(dataCache.cacheRequest).toBeDefined();
        expect(dataCache.clearExpired).toBeDefined();
        expect(dataCache.clearAll).toBeDefined();
        expect(dataCache.disableCache).toBeDefined();
        expect(dataCache.cacheSingleRequest).toBeDefined();
    }));
});
//# sourceMappingURL=data-cache.service.spec.js.map