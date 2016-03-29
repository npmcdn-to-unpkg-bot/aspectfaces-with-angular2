import {Component, Input} from "angular2/core";

@Component({
    selector: 'af-input-text',
    template: `
        <div *ngIf="edit">
            <label *ngIf="fieldData.constrains.label" class="label">{{fieldData.constrains.label}}</label>
            <span *ngIf="fieldData.constrains.required == 'true'" class="required">*</span>
            <input type="text" class="value"
                [(ngModel)]="values[fieldData.name]"
                [attr.max]="fieldData.constrains.max"
                [attr.maxlength]="fieldData.constrains.maxLength"
                [attr.min]="fieldData.constrains.min"
                [attr.minlength]="fieldData.constrains.minLength"
                [attr.name]="fieldData.name"
                [attr.pattern]="fieldData.constrains.pattern"
                [attr.placeholder]="fieldData.constrains.placeholder"
                [attr.required]="fieldData.constrains.required == 'true' ? 'required' : null"
                [attr.size]="fieldData.constrains.size">
        </div>
        
        <div *ngIf="!edit">
            <span *ngIf="fieldData.constrains.label" class="label">{{fieldData.constrains.label}}</span>
            <span *ngIf="fieldData.constrains.required == 'true'" class="required">*</span>
            <span>{{values[fieldData.name]}}</span>
        </div>
    `
})
export class InputTextComponent {

    @Input()
    private fieldData = {};

    @Input()
    private values = {};

    @Input()
    private edit:boolean = true;

}
