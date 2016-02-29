import {Component} from 'angular2/core';

import {AFForm} from '../af-forms/af-form';

@Component({
    directives: [AFForm],
    selector: 'student-example',
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
        <div class="title">Student</div>
        <div class="info">This is a local example. It submits values to the console.</div>
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
export class Student {

    private structure = [
        {
            label: 'First name',
            options: null,
            tag: 'inputTextTag',
            max: null,
            maxLength: null,
            min: null,
            name: 'firstName',
            pattern: null,
            placeholder: 'Enter your first name.',
            required: 'required',
            size: null
        },
        {
            label: 'Last name',
            options: null,
            tag: 'inputTextTag',
            max: null,
            maxLength: null,
            min: null,
            name: 'lastName',
            pattern: null,
            placeholder: 'Enter your last name.',
            required: 'required',
            size: null
        },
        {
            label: 'E-mail',
            options: null,
            tag: 'inputUsernameTag',
            max: null,
            maxLength: null,
            min: null,
            name: 'email',
            pattern: null,
            placeholder: 'Enter your e-mail.',
            required: 'required',
            size: null
        },
        {
            label: 'Password',
            options: null,
            tag: 'inputPasswordTag',
            max: null,
            maxLength: null,
            min: null,
            name: 'password',
            pattern: null,
            placeholder: 'Enter your password.',
            required: 'required',
            size: null
        },
        {
            label: 'I agree to term of use',
            options: null,
            tag: 'booleanTag',
            max: null,
            maxLength: null,
            min: null,
            name: 'agree',
            pattern: null,
            placeholder: null,
            required: 'required',
            size: null
        }
    ];

    private values = {
        firstName: 'Filip',
        lastName: 'Ryšavý',
        email: 'rysavyfilip@gmail.com',
        password: '',
        agree: true
    };

    private edit: boolean = true;

    private onSubmit() {
        console.log(this.values);
    }

}