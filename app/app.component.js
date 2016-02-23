System.register(['angular2/core', "angular2/http", 'angular2/platform/browser', "./af-form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, browser_1, af_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (af_form_component_1_1) {
                af_form_component_1 = af_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.personFormStructure = {};
                    this.personFormEntity = {};
                    this.personFormEdit = true;
                    this.personInfoFormStructure = {};
                    this.personInfoFormEntity = {};
                    this.personInfoFormEdit = true;
                    this.addressFormStructure = {};
                    this.addressFormEntity = {};
                    this.addressFormEdit = true;
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person').subscribe(function (res) { return _this.personFormStructure = res.json(); });
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person/1').subscribe(function (res) { return _this.personFormEntity = res.json(); });
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.PersonInfo').subscribe(function (res) { return _this.personInfoFormStructure = res.json(); });
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.PersonInfo/1').subscribe(function (res) { return _this.personInfoFormEntity = res.json(); });
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@extendedContactInfo@shippingAddress').subscribe(function (res) { return _this.addressFormStructure = res.json(); });
                    http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@extendedContactInfo@shippingAddress/1').subscribe(function (res) { return _this.addressFormEntity = res.json(); });
                }
                Object.defineProperty(AppComponent.prototype, "personFormData", {
                    // TODO: Move to server side...
                    get: function () {
                        var formData = {
                            name: null,
                            fields: null,
                            values: null
                        };
                        formData.name = this.personFormStructure.name;
                        formData.fields = [];
                        for (var i in this.personFormStructure.fields) {
                            var field = {
                                label: null,
                                max: null,
                                maxLength: null,
                                min: null,
                                name: null,
                                options: null,
                                pattern: null,
                                placeholder: null,
                                required: null,
                                size: null,
                                tag: null,
                                type: null
                            };
                            field.name = this.personFormStructure.fields[i].name;
                            if (this.personFormStructure.fields[i].tag == 'enumTag') {
                                field.tag = 'select';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'inputTextTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'inputUsernameTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'inputPasswordTag') {
                                field.tag = 'input';
                                field.type = 'password';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'dateTag') {
                                field.tag = 'input';
                                field.type = 'date';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'emailTag') {
                                field.tag = 'input';
                                field.type = 'email';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'enumSelectTag') {
                                field.tag = 'select'; // TODO: Change to input/radio...
                            }
                            else if (this.personFormStructure.fields[i].tag == 'entityTag') {
                                field.tag = 'select';
                            }
                            else if (this.personFormStructure.fields[i].tag == 'booleanTag') {
                                field.tag = 'input';
                                field.type = 'checkbox';
                            }
                            else {
                            }
                            for (var j in this.personFormStructure.fields[i].contraints) {
                                if (this.personFormStructure.fields[i].contraints[j].a == 'email') {
                                    field.type = 'email';
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'label') {
                                    field.label = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'max') {
                                    field.max = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'maxLength') {
                                    field.maxLength = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'min') {
                                    field.min = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'password') {
                                    field.type = 'password';
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'placeholder') {
                                    field.placeholder = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'required') {
                                    if (this.personFormStructure.fields[i].contraints[j].b == "true") {
                                        field.required = "true";
                                    }
                                    else {
                                        field.required = null;
                                    }
                                }
                                else if (this.personFormStructure.fields[i].contraints[j].a == 'size') {
                                    field.size = this.personFormStructure.fields[i].contraints[j].b;
                                }
                                else {
                                }
                            }
                            if (this.personFormStructure.fields[i].options != null) {
                                field.options = [];
                                for (var j in this.personFormStructure.fields[i].options) {
                                    field.options.push({
                                        value: this.personFormStructure.fields[i].options[j].a,
                                        label: this.personFormStructure.fields[i].options[j].b
                                    });
                                }
                            }
                            formData.fields.push(field);
                        }
                        formData.values = {};
                        for (var i in this.personFormEntity.fields) {
                            formData.values[this.personFormEntity.fields[i].a] = this.personFormEntity.fields[i].c;
                        }
                        return formData;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "personFormValues", {
                    get: function () {
                        return JSON.stringify(this.personFormEntity.fields, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "personInfoFormData", {
                    // TODO: Move to server side...
                    get: function () {
                        var formData = {
                            name: null,
                            fields: null,
                            values: null
                        };
                        formData.name = this.personInfoFormStructure.name;
                        formData.fields = [];
                        for (var i in this.personInfoFormStructure.fields) {
                            var field = {
                                label: null,
                                max: null,
                                maxLength: null,
                                min: null,
                                name: null,
                                options: null,
                                pattern: null,
                                placeholder: null,
                                required: null,
                                size: null,
                                tag: null,
                                type: null
                            };
                            field.name = this.personInfoFormStructure.fields[i].name;
                            if (this.personInfoFormStructure.fields[i].tag == 'enumTag') {
                                field.tag = 'select';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'inputTextTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'inputUsernameTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'inputPasswordTag') {
                                field.tag = 'input';
                                field.type = 'password';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'dateTag') {
                                field.tag = 'input';
                                field.type = 'date';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'emailTag') {
                                field.tag = 'input';
                                field.type = 'email';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'enumSelectTag') {
                                field.tag = 'select'; // TODO: Change to input/radio...
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'entityTag') {
                                field.tag = 'select';
                            }
                            else if (this.personInfoFormStructure.fields[i].tag == 'booleanTag') {
                                field.tag = 'input';
                                field.type = 'checkbox';
                            }
                            else {
                            }
                            for (var j in this.personInfoFormStructure.fields[i].contraints) {
                                if (this.personInfoFormStructure.fields[i].contraints[j].a == 'email') {
                                    field.type = 'email';
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'label') {
                                    field.label = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'max') {
                                    field.max = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'maxLength') {
                                    field.maxLength = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'min') {
                                    field.min = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'password') {
                                    field.type = 'password';
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'placeholder') {
                                    field.placeholder = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'required') {
                                    if (this.personInfoFormStructure.fields[i].contraints[j].b == "true") {
                                        field.required = "true";
                                    }
                                    else {
                                        field.required = null;
                                    }
                                }
                                else if (this.personInfoFormStructure.fields[i].contraints[j].a == 'size') {
                                    field.size = this.personInfoFormStructure.fields[i].contraints[j].b;
                                }
                                else {
                                }
                            }
                            if (this.personInfoFormStructure.fields[i].options != null) {
                                field.options = [];
                                for (var j in this.personInfoFormStructure.fields[i].options) {
                                    field.options.push({
                                        value: this.personInfoFormStructure.fields[i].options[j].a,
                                        label: this.personInfoFormStructure.fields[i].options[j].b
                                    });
                                }
                            }
                            formData.fields.push(field);
                        }
                        formData.values = {};
                        for (var i in this.personInfoFormEntity.fields) {
                            formData.values[this.personInfoFormEntity.fields[i].a] = this.personInfoFormEntity.fields[i].c;
                        }
                        return formData;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "personInfoFormValues", {
                    get: function () {
                        return JSON.stringify(this.personInfoFormEntity.fields, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "addressFormData", {
                    // TODO: Move to server side...
                    get: function () {
                        var formData = {
                            name: null,
                            fields: null,
                            values: null
                        };
                        formData.name = this.addressFormStructure.name;
                        formData.fields = [];
                        for (var i in this.addressFormStructure.fields) {
                            var field = {
                                label: null,
                                max: null,
                                maxLength: null,
                                min: null,
                                name: null,
                                options: null,
                                pattern: null,
                                placeholder: null,
                                required: null,
                                size: null,
                                tag: null,
                                type: null
                            };
                            field.name = this.addressFormStructure.fields[i].name;
                            if (this.addressFormStructure.fields[i].tag == 'enumTag') {
                                field.tag = 'select';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'inputTextTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'inputUsernameTag') {
                                field.tag = 'input';
                                field.type = 'text';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'inputPasswordTag') {
                                field.tag = 'input';
                                field.type = 'password';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'dateTag') {
                                field.tag = 'input';
                                field.type = 'date';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'emailTag') {
                                field.tag = 'input';
                                field.type = 'email';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'enumSelectTag') {
                                field.tag = 'select'; // TODO: Change to input/radio...
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'entityTag') {
                                field.tag = 'select';
                            }
                            else if (this.addressFormStructure.fields[i].tag == 'booleanTag') {
                                field.tag = 'input';
                                field.type = 'checkbox';
                            }
                            else {
                            }
                            for (var j in this.addressFormStructure.fields[i].contraints) {
                                if (this.addressFormStructure.fields[i].contraints[j].a == 'email') {
                                    field.type = 'email';
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'label') {
                                    field.label = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'max') {
                                    field.max = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'maxLength') {
                                    field.maxLength = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'min') {
                                    field.min = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'password') {
                                    field.type = 'password';
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'placeholder') {
                                    field.placeholder = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'required') {
                                    if (this.addressFormStructure.fields[i].contraints[j].b == "true") {
                                        field.required = "true";
                                    }
                                    else {
                                        field.required = null;
                                    }
                                }
                                else if (this.addressFormStructure.fields[i].contraints[j].a == 'size') {
                                    field.size = this.addressFormStructure.fields[i].contraints[j].b;
                                }
                                else {
                                }
                            }
                            if (this.addressFormStructure.fields[i].options != null) {
                                field.options = [];
                                for (var j in this.addressFormStructure.fields[i].options) {
                                    field.options.push({
                                        value: this.addressFormStructure.fields[i].options[j].a,
                                        label: this.addressFormStructure.fields[i].options[j].b
                                    });
                                }
                            }
                            formData.fields.push(field);
                        }
                        formData.values = {};
                        for (var i in this.addressFormEntity.fields) {
                            formData.values[this.addressFormEntity.fields[i].a] = this.addressFormEntity.fields[i].c;
                        }
                        return formData;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "addressFormValues", {
                    get: function () {
                        return JSON.stringify(this.addressFormEntity.fields, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [af_form_component_1.AFFormComponent],
                        selector: 'app',
                        styleUrls: ['app/app.component.css'],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
