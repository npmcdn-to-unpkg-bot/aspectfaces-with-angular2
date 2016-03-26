import {Component, Input} from "angular2/core";

@Component({
    selector: 'af-form',
    template: `
        <div *ngIf="edit">
            <div *ngFor="#field of structure" [ngSwitch]="field.tag" class="field">
                <div *ngSwitchWhen="'inputTextTag'">
                    <label *ngIf="field.constrains.label" class="label">{{field.constrains.label}}</label>
                    <span *ngIf="field.constrains.required == 'true'" class="required">*</span>
                    <input type="text" class="value"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.constrains.max"
                        [attr.maxlength]="field.constrains.maxLength"
                        [attr.min]="field.constrains.min"
                        [attr.minlength]="field.constrains.minLength"
                        [attr.name]="field.name"
                        [attr.pattern]="field.constrains.pattern"
                        [attr.placeholder]="field.constrains.placeholder"
                        [attr.required]="field.constrains.required == 'true' ? 'required' : null"
                        [attr.size]="field.constrains.size">
                </div>
                
                <div *ngSwitchWhen="'inputEmailTag'">
                    <label *ngIf="field.constrains.label" class="label">{{field.constrains.label}}</label>
                    <span *ngIf="field.constrains.required == 'true'" class="required">*</span>
                    <input type="email" class="value"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.constrains.max"
                        [attr.maxlength]="field.constrains.maxLength"
                        [attr.min]="field.constrains.min"
                        [attr.minlength]="field.constrains.minLength"
                        [attr.name]="field.name"
                        [attr.pattern]="field.constrains.pattern"
                        [attr.placeholder]="field.constrains.placeholder"
                        [attr.required]="field.constrains.required == 'true' ? 'required' : null"
                        [attr.size]="field.constrains.size">
                </div>
                
                <div *ngSwitchWhen="'inputPasswordTag'">
                    <label *ngIf="field.constrains.label" class="label">{{field.constrains.label}}</label>
                    <span *ngIf="field.constrains.required == 'true'" class="required">*</span>
                    <input type="password" class="value"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.constrains.max"
                        [attr.maxlength]="field.constrains.maxLength"
                        [attr.min]="field.constrains.min"
                        [attr.minlength]="field.constrains.minLength"
                        [attr.name]="field.name"
                        [attr.pattern]="field.constrains.pattern"
                        [attr.placeholder]="field.constrains.placeholder"
                        [attr.required]="field.constrains.required == 'true' ? 'required' : null"
                        [attr.size]="field.constrains.size">
                </div>
                
                <div *ngSwitchWhen="'inputBooleanTag'">
                    <label *ngIf="field.constrains.label" class="label">{{field.constrains.label}}</label>
                    <span *ngIf="field.constrains.required == 'true'" class="required">*</span>
                    <input type="checkbox" class="value"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.constrains.max"
                        [attr.maxlength]="field.constrains.maxLength"
                        [attr.min]="field.constrains.min"
                        [attr.minlength]="field.constrains.minLength"
                        [attr.name]="field.name"
                        [attr.pattern]="field.constrains.pattern"
                        [attr.placeholder]="field.constrains.placeholder"
                        [attr.required]="field.constrains.required == 'true' ? 'required' : null"
                        [attr.size]="field.constrains.size">
                </div>
                
                <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>
            </div>
        </div>
        
        <div *ngIf="!edit">
            <div *ngFor="#field of structure" class="field">
                <span *ngIf="field.constrains.label" class="label">{{field.constrains.label}}</span>
                <span *ngIf="field.constrains.required == 'true'" class="required">*</span>
                <span>{{values[field.name]}}</span>
            </div>
        </div>
    `
})
export class AFFormComponent {

    @Input()
    structure = [];

    @Input()
    values = {};

    @Input()
    edit:boolean = true;

}
