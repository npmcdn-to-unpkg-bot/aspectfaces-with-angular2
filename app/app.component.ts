import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {bootstrap} from 'angular2/platform/browser';

import {AFFormComponent} from "./af-form.component";

@Component({
    directives : [AFFormComponent],
    selector : 'app',
    styleUrls : ['app/app.component.css'],
    templateUrl : 'app/app.component.html'
})
class AppComponent {

    public personFormStructure = {};
    public personFormEntity = {};
    public personFormEdit : boolean = true;
    public personInfoFormStructure = {};
    public personInfoFormEntity = {};
    public personInfoFormEdit : boolean = true;
    public addressFormStructure = {};
    public addressFormEntity = {};
    public addressFormEdit : boolean = true;

    constructor(http : Http) {
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person').subscribe(res => this.personFormStructure = res.json());
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person/1').subscribe(res => this.personFormEntity = res.json());
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.PersonInfo').subscribe(res => this.personInfoFormStructure = res.json());
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.PersonInfo/1').subscribe(res => this.personInfoFormEntity = res.json());
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@extendedContactInfo@shippingAddress').subscribe(res => this.addressFormStructure = res.json());
        http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@extendedContactInfo@shippingAddress/1').subscribe(res => this.addressFormEntity = res.json());
    }

    // TODO: Move to server side...
    get personFormData() {
        var formData = {
            name : null,
            fields : null,
            values : null
        };

        formData.name = this.personFormStructure.name;

        formData.fields = [];
        for (var i in this.personFormStructure.fields) {
            var field = {
                label : null,
                max : null,
                maxLength : null,
                min : null,
                name : null,
                options : null,
                pattern : null,
                placeholder : null,
                required : null,
                size : null,
                tag : null,
                type : null
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
                field.tag = 'select';  // TODO: Change to input/radio...
            }
            else if (this.personFormStructure.fields[i].tag == 'entityTag') {
                field.tag = 'select';
            }
            else if (this.personFormStructure.fields[i].tag == 'booleanTag') {
                field.tag = 'input';
                field.type = 'checkbox'
            }
            else {
                // TODO: Handle properly...
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
                    // TODO: Handle properly (notNull, unique)...
                }
            }

            if (this.personFormStructure.fields[i].options != null) {
                field.options = [];
                for (var j in this.personFormStructure.fields[i].options) {
                    field.options.push({
                        value : this.personFormStructure.fields[i].options[j].a,
                        label : this.personFormStructure.fields[i].options[j].b
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
    }

    get personFormValues() : string {
        return JSON.stringify(this.personFormEntity.fields, null, 2);
    }

    // TODO: Move to server side...
    get personInfoFormData() {
        var formData = {
            name : null,
            fields : null,
            values : null
        };

        formData.name = this.personInfoFormStructure.name;

        formData.fields = [];
        for (var i in this.personInfoFormStructure.fields) {
            var field = {
                label : null,
                max : null,
                maxLength : null,
                min : null,
                name : null,
                options : null,
                pattern : null,
                placeholder : null,
                required : null,
                size : null,
                tag : null,
                type : null
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
                field.tag = 'select';  // TODO: Change to input/radio...
            }
            else if (this.personInfoFormStructure.fields[i].tag == 'entityTag') {
                field.tag = 'select';
            }
            else if (this.personInfoFormStructure.fields[i].tag == 'booleanTag') {
                field.tag = 'input';
                field.type = 'checkbox'
            }
            else {
                // TODO: Handle properly...
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
                    // TODO: Handle properly (notNull, unique)...
                }
            }

            if (this.personInfoFormStructure.fields[i].options != null) {
                field.options = [];
                for (var j in this.personInfoFormStructure.fields[i].options) {
                    field.options.push({
                        value : this.personInfoFormStructure.fields[i].options[j].a,
                        label : this.personInfoFormStructure.fields[i].options[j].b
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
    }

    get personInfoFormValues() : string {
        return JSON.stringify(this.personInfoFormEntity.fields, null, 2);
    }

    // TODO: Move to server side...
    get addressFormData() {
        var formData = {
            name : null,
            fields : null,
            values : null
        };

        formData.name = this.addressFormStructure.name;

        formData.fields = [];
        for (var i in this.addressFormStructure.fields) {
            var field = {
                label : null,
                max : null,
                maxLength : null,
                min : null,
                name : null,
                options : null,
                pattern : null,
                placeholder : null,
                required : null,
                size : null,
                tag : null,
                type : null
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
                field.tag = 'select';  // TODO: Change to input/radio...
            }
            else if (this.addressFormStructure.fields[i].tag == 'entityTag') {
                field.tag = 'select';
            }
            else if (this.addressFormStructure.fields[i].tag == 'booleanTag') {
                field.tag = 'input';
                field.type = 'checkbox'
            }
            else {
                // TODO: Handle properly...
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
                    // TODO: Handle properly (notNull, unique)...
                }
            }

            if (this.addressFormStructure.fields[i].options != null) {
                field.options = [];
                for (var j in this.addressFormStructure.fields[i].options) {
                    field.options.push({
                        value : this.addressFormStructure.fields[i].options[j].a,
                        label : this.addressFormStructure.fields[i].options[j].b
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
    }

    get addressFormValues() : string {
        return JSON.stringify(this.addressFormEntity.fields, null, 2);
    }

}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
