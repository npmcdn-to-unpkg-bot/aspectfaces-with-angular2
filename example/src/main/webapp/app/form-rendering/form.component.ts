import {Component, Input} from 'angular2/core';

import {DefaultInputComponent} from './tags/default-input.component';
import {DefaultSelectComponent} from './tags/default-select.component';

@Component({
    directives: [DefaultInputComponent, DefaultSelectComponent],
    selector: 'af-form',
    template: `
        <div *ngFor="#field of structure" [ngSwitch]="field.tag" class="field">
            <af-default-input *ngSwitchWhen="'inputBoolean'" [fieldData]="field" [values]="values" [edit]="edit" [type]="checkbox">
                Loading DefaultInputComponent...
            </af-default-input>
            
            <af-default-input *ngSwitchWhen="'inputEmail'" [fieldData]="field" [values]="values" [edit]="edit" [type]="email">
                Loading DefaultInputComponent...
            </af-default-input>
            
            <af-default-input *ngSwitchWhen="'inputNumber'" [fieldData]="field" [values]="values" [edit]="edit" [type]="number">
                Loading DefaultInputComponent...
            </af-default-input>
            
            <af-default-input *ngSwitchWhen="'inputPassword'" [fieldData]="field" [values]="values" [edit]="edit" [type]="password">
                Loading DefaultInputComponent...
            </af-default-input>
            
            <af-default-input *ngSwitchWhen="'inputText'" [fieldData]="field" [values]="values" [edit]="edit" [type]="text">
                Loading DefaultInputComponent...
            </af-default-input>
            
            <af-default-select *ngSwitchWhen="'selectEnum'" [fieldData]="field" [values]="values" [edit]="edit">
                Loading DefaultSelectComponent...
            </af-default-select>

            <!-- Place your custom tags here. -->
            
            <div *ngSwitchDefault>Tag {{field.tag}} isn't supported.</div>
        </div>
    `
})
export class FormComponent {

    @Input()
    private structure = [];

    @Input()
    private values = {};

    @Input()
    private edit:boolean = true;

}
