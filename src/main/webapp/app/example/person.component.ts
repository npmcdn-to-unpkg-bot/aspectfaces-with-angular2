import {Component} from 'angular2/core';
import {Headers, Http} from "angular2/http";

import {AFFormComponent} from "../af-forms/af-form.component";

@Component({
    directives: [AFFormComponent],
    selector: 'person-component',
    template: `
        <div class="example-title">cz.cvut.fel.rysavfi1.example.model.Person</div>
        <hr>
        <a href="http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/structure">Structure</a>
        <a href="http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/values">Values</a>
        <hr>
        <form (submit)="onSubmit()">
            <af-form [structure]="structure" [values]="values" [edit]="edit">Loading...</af-form>
            <button type="submit" *ngIf="edit">Submit</button>
            <button type="button" (click)="edit = !edit">{{edit ? 'Read' : 'Edit'}}</button>
        </form>
        <hr>
        <pre>{{values | json}}</pre>
    `
})
export class PersonComponent {

    private structure = [];

    private values = {};

    private edit:boolean = true;

    private http:Http;

    constructor(http:Http) {
        this.http = http;
        this.http.get('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/structure').subscribe(res => this.structure = res.json());
        this.http.get('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/values').subscribe(res => this.values = res.json());
    }

    private onSubmit() {
        console.log(this.values);
        var headers:Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/aspectfaces-with-angular2-1.0-SNAPSHOT/rest/angular2/post', JSON.stringify(this.values), {headers:headers}).subscribe();
    }

}
