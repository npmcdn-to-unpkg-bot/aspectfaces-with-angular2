import {Component} from 'angular2/core';

import {PersonComponent} from "./example/person.component";

@Component({
    directives: [PersonComponent],
    selector: 'app',
    template: `
        <div class="title">AspectFaces with Angular 2 Example</div>
        <div class="example">
            <person-component>Loading PersonComponent...</person-component>
        </div>
    `
})
export class AppComponent {
}
