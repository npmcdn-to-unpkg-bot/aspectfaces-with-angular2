import {Component, Input} from "angular2/core";

@Component({
    selector : 'af-field',
    templateUrl : 'app/af-field.component.html'
})
export class AFFieldComponent {

    @Input()
    public structure;

    @Input()
    public value : string;

    @Input()
    public edit : boolean;

}
