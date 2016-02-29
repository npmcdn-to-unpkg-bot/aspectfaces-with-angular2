import {Component, enableProdMode} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {bootstrap} from 'angular2/platform/browser';

import {Address} from './example/Address';
import {Degree} from './example/Degree';
import {Person} from './example/Person';
import {PersonInfo} from './example/PersonInfo';
import {Student} from './example/Student';

@Component({
    directives: [Address, Degree, Person, PersonInfo, Student],
    selector: 'app',
    styles: [`
        .application {
            background-color: #fafafa;
            border: 2px solid #000;
            border-radius: 10px;
            margin-top: 10px;
            padding: 10px;
        }
    `],
    template: `
        <h1>AspectFaces with Angular 2 Example</h1>
        <div class="application">
            <student-example>Loading...</student-example>
        </div>
        <div class="application">
            <person-example>Loading...</person-example>
        </div>
        <div class="application">
            <personInfo-example>Loading...</personInfo-example>
        </div>
        <div class="application">
            <address-example>Loading...</address-example>
        </div>
        <div class="application">
            <degree-example>Loading...</degree-example>
        </div>
    `
})
class App {
}

enableProdMode();
bootstrap(App, [HTTP_PROVIDERS]);
