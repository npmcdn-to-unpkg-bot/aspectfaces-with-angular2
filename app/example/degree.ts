import {Component} from 'angular2/core';
import {Http} from "angular2/http";

import {convertStructureToAngular2, convertValuesToAngular2} from '../af-forms/converter';
import {AFForm} from '../af-forms/af-form';

@Component({
    directives: [AFForm],
    selector: 'degree-example',
    styles: [`
        .title {
            font-size: larger;
            font-weight: bold;
        }
        .info {
            font-size: smaller;
        }
        .section {
            margin-top: 10px;
        }
        pre {
            margin: 0;
        }
    `],
    template: `
        <div class="title">Degree of person with ID 1</div>
        <form (submit)="onSubmit()">
            <div class="section">
                <button type="submit" *ngIf="edit">Submit</button>
                <button type="button" (click)="edit = !edit">{{edit ? 'Read' : 'Edit'}}</button>
            </div>
            <div class="section">
                <af-form [structure]="structure" [values]="values" [edit]="edit">Loading...</af-form>
            </div>
            <div class="section">
                <pre>{{values | json}}</pre>
            </div>
        </form>
    `
})
export class Degree {

    private structure = [];

    private values = {};

    private edit: boolean = true;
    
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
        this.http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@degree').subscribe(res => this.structure = convertStructureToAngular2(res.json()));
        this.http.get('https://cmplay.ecs.baylor.edu/aui/ws/af/edu.baylor.icpc.persistence.port.Person@personInfo@degree/1').subscribe(res => this.values = convertValuesToAngular2(res.json()));
    }

    private onSubmit() {
        // TODO: Send values to server
        console.log(this.values);
    }

}