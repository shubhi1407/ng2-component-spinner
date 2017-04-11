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
var appCode = "\nimport { Component } from '@angular/core'\n\n@Component({\n    selector : 'my-app',\n    template : '<table-compnent [showLoader]=\"showLoader\">' +\n'</table-component><button (click)=\"fetchData()\">Fetch</button>'\n})\n\nexport class AppComponent {\n    showLoader : boolean;\n\n    fetchData() : void {\n        this.showLoader = true;\n        //Fetch your async data here\n        setTimeout(()=> { this.showLoader = false}, 2000);\n    }\n}\n";
var tableCode = "\nimport { Component, Input } from '@angular/core';\n\n@Component({\n    selector: 'table-component',\n    templateUrl: \"./template/table.html\"\n})\n\nexport class TableComponent {\n    @Input() showLoader : boolean;\n}\n";
var tableHtml = "\n<!-- NOTE: For the componet to work , you need to wrap your\ncomponent tempalate inside relative positioned div -->\n<div style=\"position : relative\">\n    <spinner-component [spinnerShow]=\"show\"></spinner-component>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#user of users\">\n                <td>{{user.id}}\n                <td>{{user.firstname}}</td>\n                <td>{{user.lastname}}</td>\n                <td>{{user.username}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
var tableCode1 = "\nimport { Component, Input } from '@angular/core';\n@Component({\n    selector: 'table-component',\n    templateUrl: \"./template/table.html\",\n    styles: [.spinner - 2 {\n    width: 40px;height: 40px;\n\nposition: relative;\nmargin: auto;\n  }\n\n  .double - bounce1, .double - bounce2 {\n  width: 100 %;\n  height: 100 %;\n  border - radius: 50 %;\n  background - color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit - animation: sk - bounce 2.0s infinite ease-in-out;\n  animation: sk - bounce 2.0s infinite ease-in-out;\n}\n\n  .double - bounce2 {\n  -webkit - animation - delay: -1.0s;\n  animation - delay: -1.0s;\n}\n\n@-webkit - keyframes sk- bounce {\n  0 %, 100 % { -webkit - transform: scale(0.0)\n}\n50 % { -webkit - transform: scale(1.0) }\n  }\n\n@keyframes sk - bounce {\n  0 %, 100 % {\n    transform: scale(0.0);\n      -webkit - transform: scale(0.0);\n} 50 % {\n  transform: scale(1.0);\n      -webkit - transform: scale(1.0);\n    }\n  }\n],\n})\nexport class TableComponent {\n    @Input() showLoader : boolean;\n}\n";
var tableHtml1 = "\n<!-- NOTE: For the componet to work , you need to wrap your\ncomponent tempalate inside relative positioned div -->\n<div style=\"position : relative\">\n    <spinner-component [spinnerShow]=\"show\">\n    <div class=\"spinner-2\">\n      <div class=\"double-bounce1\"></div>\n      <div class=\"double-bounce2\"></div>\n    </div>\n    </spinner-component>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#user of users\">\n                <td>{{user.id}}\n                <td>{{user.firstname}}</td>\n                <td>{{user.lastname}}</td>\n                <td>{{user.username}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.appCode = appCode;
        this.tableCode = tableCode;
        this.tableCode1 = tableCode1;
        this.tableHtml = tableHtml;
        this.tableHtml1 = tableHtml1;
    }
    AppComponent.prototype.fetch = function () {
        this.showLoader = true;
        //  setTimeout(()=>{this.showLoader=false},2000);
    };
    AppComponent.prototype.fetchone = function () {
        this.showLoader1 = true;
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