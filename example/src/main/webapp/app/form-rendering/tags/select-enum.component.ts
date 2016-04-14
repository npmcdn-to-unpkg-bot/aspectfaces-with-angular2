import {Component, Input} from "angular2/core";

@Component({
    selector: 'af-select-enum',
    template: `
        <div *ngIf="edit">
            <label *ngIf="fieldData.constraints.label" class="label">{{fieldData.constraints.label}}</label>
            <span *ngIf="fieldData.constraints.required == 'true'" class="required">*</span>
            <select class="value"
                [(ngModel)]="values[fieldData.name]"
                [attr.name]="fieldData.name"
                [attr.required]="fieldData.constraints.required == 'true' ? 'required' : null"
                [attr.size]="fieldData.constraints.size">
                <option *ngFor="#option of fieldData.options"
                    [attr.value]="option"
                    [attr.selected]="option == values[fieldData.name] ? 'selected' : null">{{option}}</option>
            </select>
        </div>
        
        <div *ngIf="!edit">
            <span *ngIf="fieldData.constraints.label" class="label">{{fieldData.constraints.label}}</span>
            <span *ngIf="fieldData.constraints.required == 'true'" class="required">*</span>
            <span>{{values[fieldData.name]}}</span>
        </div>
    `
})
export class SelectEnumComponent {

    @Input()
    private fieldData = {};

    @Input()
    private values = {};

    @Input()
    private edit:boolean = true;

}
