System.register(["angular2/core", "./af-field.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, af_field_component_1;
    var AFFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (af_field_component_1_1) {
                af_field_component_1 = af_field_component_1_1;
            }],
        execute: function() {
            AFFormComponent = (function () {
                function AFFormComponent() {
                    this.formData = {};
                    this.edit = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AFFormComponent.prototype, "formData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AFFormComponent.prototype, "edit", void 0);
                AFFormComponent = __decorate([
                    core_1.Component({
                        directives: [af_field_component_1.AFFieldComponent],
                        selector: 'af-form',
                        templateUrl: 'app/af-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AFFormComponent);
                return AFFormComponent;
            })();
            exports_1("AFFormComponent", AFFormComponent);
        }
    }
});
