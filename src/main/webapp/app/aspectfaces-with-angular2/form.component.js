System.register(["angular2/core", "./tags/input-boolean.component", "./tags/input-email.component", "./tags/input-number.component", "./tags/input-password.component", "./tags/input-text.component", "./tags/select-enum.component"], function(exports_1, context_1) {
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
    var core_1, input_boolean_component_1, input_email_component_1, input_number_component_1, input_password_component_1, input_text_component_1, select_enum_component_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_boolean_component_1_1) {
                input_boolean_component_1 = input_boolean_component_1_1;
            },
            function (input_email_component_1_1) {
                input_email_component_1 = input_email_component_1_1;
            },
            function (input_number_component_1_1) {
                input_number_component_1 = input_number_component_1_1;
            },
            function (input_password_component_1_1) {
                input_password_component_1 = input_password_component_1_1;
            },
            function (input_text_component_1_1) {
                input_text_component_1 = input_text_component_1_1;
            },
            function (select_enum_component_1_1) {
                select_enum_component_1 = select_enum_component_1_1;
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
                        directives: [input_boolean_component_1.InputBooleanComponent, input_email_component_1.InputEmailComponent, input_number_component_1.InputNumberComponent, input_password_component_1.InputPasswordComponent,
                            input_text_component_1.InputTextComponent, select_enum_component_1.SelectEnumComponent],
                        selector: 'af-form',
                        template: "\n        <div *ngFor=\"#field of structure\" [ngSwitch]=\"field.tag\" class=\"field\">\n            <af-input-boolean *ngSwitchWhen=\"'inputBoolean'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading InputBooleanComponent...\n            </af-input-boolean>\n            \n            <af-input-email *ngSwitchWhen=\"'inputEmail'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading InputEmailComponent...\n            </af-input-email>\n            \n            <af-input-number *ngSwitchWhen=\"'inputNumber'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading InputNumberComponent...\n            </af-input-number>\n            \n            <af-input-password *ngSwitchWhen=\"'inputPassword'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading InputPasswordComponent...\n            </af-input-password>\n            \n            <af-input-text *ngSwitchWhen=\"'inputText'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading InputTextComponent...\n            </af-input-text>\n            \n            <af-select-enum *ngSwitchWhen=\"'selectEnum'\" [fieldData]=\"field\" [values]=\"values\" [edit]=\"edit\">\n                Loading SelectEnumComponent...\n            </af-select-enum>\n            \n            <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
