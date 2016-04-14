import {Component, Input} from "angular2/core";

@Component({
    selector: 'af-input-boolean',
    template: `
        <div *ngIf="edit">
            <label *ngIf="fieldData.constraints.label" class="label">{{fieldData.constraints.label}}</label>
            <span *ngIf="fieldData.constraints.required == 'true'" class="required">*</span>
            <input type="checkbox" class="value"
                [(ngModel)]="values[fieldData.name]"
                [attr.max]="fieldData.constraints.max"
                [attr.maxlength]="fieldData.constraints.maxLength"
                [attr.min]="fieldData.constraints.min"
                [attr.minlength]="fieldData.constraints.minLength"
                [attr.name]="fieldData.name"
                [attr.pattern]="fieldData.constraints.pattern"
                [attr.placeholder]="fieldData.constraints.placeholder"
                [attr.required]="fieldData.constraints.required == 'true' ? 'required' : null"
                [attr.size]="fieldData.constraints.size">
        </div>
        
        <div *ngIf="!edit">
            <span *ngIf="fieldData.constraints.label" class="label">{{fieldData.constraints.label}}</span>
            <span *ngIf="fieldData.constraints.required == 'true'" class="required">*</span>
            <span>{{values[fieldData.name]}}</span>
        </div>
    `
})
export class InputBooleanComponent {

    @Input()
    private fieldData = {};

    @Input()
    private values = {};

    @Input()
    private edit:boolean = true;

}
