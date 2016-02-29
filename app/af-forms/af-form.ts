import {Component, Input} from "angular2/core";

@Component({
    selector : 'af-form',
    template : `
        <div *ngIf="edit"> <!-- TODO: Remove this div -->
            <div *ngFor="#field of structure" [ngSwitch]="field.tag">
                <div *ngIf="field.label">
                    <label>{{field.label}}</label>
                    <span *ngIf="field.required">*</span>
                </div>
                <div *ngSwitchWhen="'inputTextTag'">
                    <input type="text"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.max"
                        [attr.maxlength]="field.maxLength"
                        [attr.min]="field.min"
                        [attr.name]="field.name"
                        [attr.pattern]="field.pattern"
                        [attr.placeholder]="field.placeholder"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                </div>
                <div *ngSwitchWhen="'inputUsernameTag'">
                    <input type="email"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.max"
                        [attr.maxlength]="field.maxLength"
                        [attr.min]="field.min"
                        [attr.name]="field.name"
                        [attr.pattern]="field.pattern"
                        [attr.placeholder]="field.placeholder"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                </div>
                <div *ngSwitchWhen="'inputPasswordTag'">
                    <input type="password"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.max"
                        [attr.maxlength]="field.maxLength"
                        [attr.min]="field.min"
                        [attr.name]="field.name"
                        [attr.pattern]="field.pattern"
                        [attr.placeholder]="field.placeholder"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                </div>
                <div *ngSwitchWhen="'booleanTag'">
                    <input type="checkbox"
                        [(ngModel)]="values[field.name]"
                        [attr.max]="field.max"
                        [attr.maxlength]="field.maxLength"
                        [attr.min]="field.min"
                        [attr.name]="field.name"
                        [attr.pattern]="field.pattern"
                        [attr.placeholder]="field.placeholder"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                </div>
                <div *ngSwitchWhen="'enumTag'">
                    <select [(ngModel)]="values[field.name]"
                        [attr.name]="field.name"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                        <!-- TODO: Fix selected value -->
                        <option *ngFor="#option of field.options" [attr.value]="option.value">{{option.label}}</option>
                    </select>
                </div>
                <div *ngSwitchWhen="'entityTag'">
                    <select [(ngModel)]="values[field.name]"
                        [attr.name]="field.name"
                        [attr.required]="field.required"
                        [attr.size]="field.size">
                        <!-- TODO: Fix selected value -->
                        <option *ngFor="#option of field.options" [attr.value]="option.value">{{option.label}}</option>
                    </select>
                </div>
                <!-- TODO: dateTag, entitySelectTag, enumSelectTag -->
                <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>
            </div>
        </div>
        <div *ngIf="!edit"> <!-- TODO: Remove this div -->
            <div *ngFor="#field of structure">
                <div *ngIf="field.label">
                    <span>{{field.label}}</span>
                    <span *ngIf="field.required">*</span>
                </div>
                <div>{{values[field.name]}}</div>
            </div>
        </div>
    `
})
export class AFForm {

    @Input() structure = [];
    
    @Input() values = {};

    @Input() edit : boolean = true;

}
