System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var SelectEnumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SelectEnumComponent = (function () {
                function SelectEnumComponent() {
                    this.fieldData = {};
                    this.values = {};
                    this.edit = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SelectEnumComponent.prototype, "fieldData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SelectEnumComponent.prototype, "values", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SelectEnumComponent.prototype, "edit", void 0);
                SelectEnumComponent = __decorate([
                    core_1.Component({
                        selector: 'af-select-enum',
                        template: "\n        <div *ngIf=\"edit\">\n            <label *ngIf=\"fieldData.constraints.label\" class=\"label\">{{fieldData.constraints.label}}</label>\n            <span *ngIf=\"fieldData.constraints.required == 'true'\" class=\"required\">*</span>\n            <select class=\"value\"\n                [(ngModel)]=\"values[fieldData.name]\"\n                [attr.name]=\"fieldData.name\"\n                [attr.required]=\"fieldData.constraints.required == 'true' ? 'required' : null\"\n                [attr.size]=\"fieldData.constraints.size\">\n                <option *ngFor=\"#option of fieldData.options\"\n                    [attr.value]=\"option\"\n                    [attr.selected]=\"option == values[fieldData.name] ? 'selected' : null\">{{option}}</option>\n            </select>\n        </div>\n        \n        <div *ngIf=\"!edit\">\n            <span *ngIf=\"fieldData.constraints.label\" class=\"label\">{{fieldData.constraints.label}}</span>\n            <span *ngIf=\"fieldData.constraints.required == 'true'\" class=\"required\">*</span>\n            <span>{{values[fieldData.name]}}</span>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectEnumComponent);
                return SelectEnumComponent;
            }());
            exports_1("SelectEnumComponent", SelectEnumComponent);
        }
    }
});
