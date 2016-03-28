System.register(['angular2/core', "angular2/http", "../af-forms/af-form.component"], function(exports_1, context_1) {
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
    var core_1, http_1, af_form_component_1;
    var PersonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (af_form_component_1_1) {
                af_form_component_1 = af_form_component_1_1;
            }],
        execute: function() {
            PersonComponent = (function () {
                function PersonComponent(http) {
                    var _this = this;
                    this.structure = [];
                    this.values = {};
                    this.edit = true;
                    this.http = http;
                    this.http.get('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/structure').subscribe(function (res) { return _this.structure = res.json(); });
                    this.http.get('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/values').subscribe(function (res) { return _this.values = res.json(); });
                }
                PersonComponent.prototype.onSubmit = function () {
                    console.log(this.values);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/post', JSON.stringify(this.values), { headers: headers }).subscribe();
                };
                PersonComponent = __decorate([
                    core_1.Component({
                        directives: [af_form_component_1.AFFormComponent],
                        selector: 'person-component',
                        template: "\n        <div class=\"example-title\">cz.cvut.fel.rysavfi1.example.model.Person</div>\n        <hr>\n        <a href=\"http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/structure\">Structure</a>\n        <a href=\"http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/values\">Values</a>\n        <hr>\n        <form (submit)=\"onSubmit()\">\n            <af-form [structure]=\"structure\" [values]=\"values\" [edit]=\"edit\">Loading...</af-form>\n            <button type=\"submit\" *ngIf=\"edit\">Submit</button>\n            <button type=\"button\" (click)=\"edit = !edit\">{{edit ? 'Read' : 'Edit'}}</button>\n        </form>\n        <hr>\n        <pre>{{values | json}}</pre>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PersonComponent);
                return PersonComponent;
            }());
            exports_1("PersonComponent", PersonComponent);
        }
    }
});