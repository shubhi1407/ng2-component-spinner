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
var appCode = "\nimport { Component } from '@angular/core'\n\n@Component({\n    selector : 'my-app',\n    template : '<table-compnent [showLoader]=\"showLoader\">' +\n'</table-component><button (click)=\"fetchData()\">Fetch</button>'\n})\n\nexport class AppComponent {\n    showLoader : boolean;\n    \n    fetchData() : void {\n        this.showLoader = true;\n        //Fetch your async data here\n        setTimeout(()=> { this.showLoader = false}, 2000);\n    }\n}\n";
var tableCode = "\nimport { Component, Input } from '@angular/core';\n\n@Component({\n    selector: 'table-component',\n    templateUrl: \"./template/table.html\"\n})\n\nexport class TableComponent {\n    @Input() showLoader : boolean;\n}  \n";
var tableHtml = "\n<!-- NOTE: For the componet to work , you need to wrap your\ncomponent tempalate inside relative positioned div -->\n<div style=\"position : relative\">\n    <spinner-component [spinnerShow]=\"show\"></spinner-component>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n            </tr>\n        </thead>\n        <tbody>           \n            <tr *ngFor=\"#user of users\">\n                <td>{{user.id}}\n                <td>{{user.firstname}}</td>\n                <td>{{user.lastname}}</td>\n                <td>{{user.username}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.appCode = appCode;
        this.tableCode = tableCode;
        this.tableHtml = tableHtml;
    }
    AppComponent.prototype.fetch = function () {
        var _this = this;
        this.showLoader = true;
        setTimeout(function () { _this.showLoader = false; }, 2000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './template/main.html',
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map