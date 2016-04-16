System.register(['angular2/core', 'angular2/http', './afwa2-form-rendering'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, afwa2_form_rendering_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (afwa2_form_rendering_1_1) {
                afwa2_form_rendering_1 = afwa2_form_rendering_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.structure = [];
                    this.values = {};
                    this.edit = true;
                    this.http = http;
                    this.http.get('http://localhost:8080/example-1.0.0/rest/angular2/structure').subscribe(function (res) { return _this.structure = res.json(); });
                    this.http.get('http://localhost:8080/example-1.0.0/rest/angular2/values').subscribe(function (res) { return _this.values = res.json(); });
                }
                AppComponent.prototype.onSubmit = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post('http://localhost:8080/example-1.0.0/rest/angular2/post', JSON.stringify(this.values), { headers: headers }).subscribe();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [afwa2_form_rendering_1.FormComponent],
                        selector: 'my-app',
                        template: "\n        <h1>AspectFaces with Angular 2</h1>\n        <hr>\n        <a href=\"http://localhost:8080/example-1.0.0/rest/angular2/structure\">Structure</a>\n        <a href=\"http://localhost:8080/example-1.0.0/rest/angular2/values\">Values</a>\n        <hr>\n        <form (submit)=\"onSubmit()\">\n            <af-form [structure]=\"structure\" [values]=\"values\" [edit]=\"edit\">Loading...</af-form>\n            <button type=\"submit\" *ngIf=\"edit\">Submit</button>\n            <button type=\"button\" (click)=\"edit = !edit\">{{edit ? 'Read' : 'Edit'}}</button>\n        </form>\n        <hr>\n        <pre>{{values | json}}</pre>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
