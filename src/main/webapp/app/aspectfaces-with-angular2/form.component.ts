import {Component, Input} from "angular2/core";

import {InputBooleanComponent} from "./tags/input-boolean.component";
import {InputEmailComponent} from "./tags/input-email.component";
import {InputPasswordComponent} from "./tags/input-password.component";
import {InputTextComponent} from "./tags/input-text.component";

@Component({
    directives: [InputBooleanComponent, InputEmailComponent, InputPasswordComponent, InputTextComponent],
    selector: 'af-form',
    template: `
        <div *ngFor="#field of structure" [ngSwitch]="field.tag" class="field">
            <af-input-text *ngSwitchWhen="'inputText'" [fieldData]="field" [values]="values" [edit]="edit">
                Loading InputTextComponent...
            </af-input-text>
            
            <af-input-email *ngSwitchWhen="'inputEmail'" [fieldData]="field" [values]="values" [edit]="edit">
                Loading InputEmailComponent...
            </af-input-email>
            
            <af-input-password *ngSwitchWhen="'inputPassword'" [fieldData]="field" [values]="values" [edit]="edit">
                Loading InputPasswordComponent...
            </af-input-password>
            
            <af-input-boolean *ngSwitchWhen="'inputBoolean'" [fieldData]="field" [values]="values" [edit]="edit">
                Loading InputBooleanComponent...
            </af-input-boolean>
            
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