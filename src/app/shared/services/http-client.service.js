"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var constants_1 = require("../../utils/constants");
var HttpClient = (function (_super) {
    __extends(HttpClient, _super);
    function HttpClient(backend, defaultOptions, _router, sessionStorageService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._router = _router;
        _this.sessionStorageService = sessionStorageService;
        return _this;
    }
    HttpClient.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    HttpClient.prototype.get = function (url, options) {
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(options)));
    };
    HttpClient.prototype.post = function (url, body, options) {
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    HttpClient.prototype.put = function (url, body, options) {
        return this.intercept(_super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.intercept(_super.prototype.delete.call(this, url, this.getRequestOptionArgs(options)));
    };
    HttpClient.prototype.getRequestOptionArgs = function (options) {
        if (options === void 0) { options = null; }
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        var credentials = this.sessionStorageService.getItem(constants_1.Constants.CREDENTIALS_KEY);
        if (credentials) {
            options.headers.append('Authorization', 'Basic ' + credentials);
        }
        return options;
    };
    HttpClient.prototype.intercept = function (observable) {
        return observable.catch(function (err, source) {
            // if (err.status  == 401 && !_.endsWith(err.url, '/session')) {
            //   this._router.navigate(['/login']);
            //   return Observable.empty();
            // } else {
            //   return Observable.throw(err);
            // }
            return Observable_1.Observable.throw(err);
        });
    };
    return HttpClient;
}(http_1.Http));
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.service.js.map