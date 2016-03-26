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
    var AFFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AFFormComponent = (function () {
                function AFFormComponent() {
                    this.structure = [];
                    this.values = {};
                    this.edit = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AFFormComponent.prototype, "structure", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AFFormComponent.prototype, "values", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AFFormComponent.prototype, "edit", void 0);
                AFFormComponent = __decorate([
                    core_1.Component({
                        selector: 'af-form',
                        template: "\n        <div *ngIf=\"edit\">\n            <div *ngFor=\"#field of structure\" [ngSwitch]=\"field.tag\" class=\"field\">\n                <div *ngSwitchWhen=\"'inputTextTag'\">\n                    <label *ngIf=\"field.constrains.label\" class=\"label\">{{field.constrains.label}}</label>\n                    <span *ngIf=\"field.constrains.required == 'true'\" class=\"required\">*</span>\n                    <input type=\"text\" class=\"value\"\n                        [(ngModel)]=\"values[field.name]\"\n                        [attr.max]=\"field.constrains.max\"\n                        [attr.maxlength]=\"field.constrains.maxLength\"\n                        [attr.min]=\"field.constrains.min\"\n                        [attr.minlength]=\"field.constrains.minLength\"\n                        [attr.name]=\"field.name\"\n                        [attr.pattern]=\"field.constrains.pattern\"\n                        [attr.placeholder]=\"field.constrains.placeholder\"\n                        [attr.required]=\"field.constrains.required == 'true' ? 'required' : null\"\n                        [attr.size]=\"field.constrains.size\">\n                </div>\n                \n                <div *ngSwitchWhen=\"'inputEmailTag'\">\n                    <label *ngIf=\"field.constrains.label\" class=\"label\">{{field.constrains.label}}</label>\n                    <span *ngIf=\"field.constrains.required == 'true'\" class=\"required\">*</span>\n                    <input type=\"email\" class=\"value\"\n                        [(ngModel)]=\"values[field.name]\"\n                        [attr.max]=\"field.constrains.max\"\n                        [attr.maxlength]=\"field.constrains.maxLength\"\n                        [attr.min]=\"field.constrains.min\"\n                        [attr.minlength]=\"field.constrains.minLength\"\n                        [attr.name]=\"field.name\"\n                        [attr.pattern]=\"field.constrains.pattern\"\n                        [attr.placeholder]=\"field.constrains.placeholder\"\n                        [attr.required]=\"field.constrains.required == 'true' ? 'required' : null\"\n                        [attr.size]=\"field.constrains.size\">\n                </div>\n                \n                <div *ngSwitchWhen=\"'inputPasswordTag'\">\n                    <label *ngIf=\"field.constrains.label\" class=\"label\">{{field.constrains.label}}</label>\n                    <span *ngIf=\"field.constrains.required == 'true'\" class=\"required\">*</span>\n                    <input type=\"password\" class=\"value\"\n                        [(ngModel)]=\"values[field.name]\"\n                        [attr.max]=\"field.constrains.max\"\n                        [attr.maxlength]=\"field.constrains.maxLength\"\n                        [attr.min]=\"field.constrains.min\"\n                        [attr.minlength]=\"field.constrains.minLength\"\n                        [attr.name]=\"field.name\"\n                        [attr.pattern]=\"field.constrains.pattern\"\n                        [attr.placeholder]=\"field.constrains.placeholder\"\n                        [attr.required]=\"field.constrains.required == 'true' ? 'required' : null\"\n                        [attr.size]=\"field.constrains.size\">\n                </div>\n                \n                <div *ngSwitchWhen=\"'inputBooleanTag'\">\n                    <label *ngIf=\"field.constrains.label\" class=\"label\">{{field.constrains.label}}</label>\n                    <span *ngIf=\"field.constrains.required == 'true'\" class=\"required\">*</span>\n                    <input type=\"checkbox\" class=\"value\"\n                        [(ngModel)]=\"values[field.name]\"\n                        [attr.max]=\"field.constrains.max\"\n                        [attr.maxlength]=\"field.constrains.maxLength\"\n                        [attr.min]=\"field.constrains.min\"\n                        [attr.minlength]=\"field.constrains.minLength\"\n                        [attr.name]=\"field.name\"\n                        [attr.pattern]=\"field.constrains.pattern\"\n                        [attr.placeholder]=\"field.constrains.placeholder\"\n                        [attr.required]=\"field.constrains.required == 'true' ? 'required' : null\"\n                        [attr.size]=\"field.constrains.size\">\n                </div>\n                \n                <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>\n            </div>\n        </div>\n        \n        <div *ngIf=\"!edit\">\n            <div *ngFor=\"#field of structure\" class=\"field\">\n                <span *ngIf=\"field.constrains.label\" class=\"label\">{{field.constrains.label}}</span>\n                <span *ngIf=\"field.constrains.required == 'true'\" class=\"required\">*</span>\n                <span>{{values[field.name]}}</span>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AFFormComponent);
                return AFFormComponent;
            }());
            exports_1("AFFormComponent", AFFormComponent);
        }
    }
});
