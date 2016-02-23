import {Component, Input} from "angular2/core";

import {AFFieldComponent} from "./af-field.component";

@Component({
    directives : [AFFieldComponent],
    selector : 'af-form',
    templateUrl : 'app/af-form.component.html'
})
export class AFFormComponent {

    @Input()
    public formData = {};

    @Input()
    public edit : boolean = true;

}
