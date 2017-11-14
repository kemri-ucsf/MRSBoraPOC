"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    core_1.Component({
        //selector: 'no-content',
        template: "\n    <div id=\"page-content-wrapper\">\n\t\t\t<div id=\"page-content\">            \n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div id=\"page-title\">\n\t\t\t\t\t\t<h2>MRS BORA 404 ERROR</h2>\n\t\t\t\t\t\t<p>Error Report</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<h1>404: Page Not Found</h1>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n  "
    })
], NoContentComponent);
exports.NoContentComponent = NoContentComponent;
//# sourceMappingURL=no-content.js.map