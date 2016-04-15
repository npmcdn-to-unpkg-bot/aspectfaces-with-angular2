System.register(['angular2/core', './tags/default-input.component', './tags/default-select.component'], function(exports_1, context_1) {
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
    var core_1, default_input_component_1, default_select_component_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (default_input_component_1_1) {
                default_input_component_1 = default_input_component_1_1;
            },
            function (default_select_component_1_1) {
                default_select_component_1 = default_select_component_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                    this.structure = [];
                    this.values = {};
                    this.edit = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FormComponent.prototype, "structure", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FormComponent.prototype, "values", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], FormComponent.prototype, "edit", void 0);
                FormComponent = __decorate([
                    core_1.Component({
                        directives: [default_input_component_1.DefaultInputComponent, default_select_component_1.DefaultSelectComponent],
                        selector: 'af-form',
                        template: "\n        <div *ngFor=\"#field of structure\" [ngSwitch]=\"field.tag\" class=\"field\">\n            <af-default-input *ngSwitchWhen=\"'inputBoolean'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\" [type]=\"checkbox\">\n                Loading DefaultInputComponent...\n            </af-default-input>\n            \n            <af-default-input *ngSwitchWhen=\"'inputEmail'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\" [type]=\"email\">\n                Loading DefaultInputComponent...\n            </af-default-input>\n            \n            <af-default-input *ngSwitchWhen=\"'inputNumber'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\" [type]=\"number\">\n                Loading DefaultInputComponent...\n            </af-default-input>\n            \n            <af-default-input *ngSwitchWhen=\"'inputPassword'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\" [type]=\"password\">\n                Loading DefaultInputComponent...\n            </af-default-input>\n            \n            <af-default-input *ngSwitchWhen=\"'inputText'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\" [type]=\"text\">\n                Loading DefaultInputComponent...\n            </af-default-input>\n            \n            <af-default-select *ngSwitchWhen=\"'selectEnum'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading DefaultSelectComponent...\n            </af-default-select>\n\n            <!-- Place your custom tags here. -->\n            \n            <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
