import { Component, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';

@Component({
    moduleId: module.id,
    selector: 'form-selector',
    styles: [`
        input.ng-invalid{border:1px solid red}
        input.ng-valid{border:1px solid green}
        input.ng-invalid + label:after{content:"<--Pick one"}
    `],
    template: `
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">

        <h2>Radio</h2>
        <div *ngFor="let location of locations">
            <input 
                type="radio" 
                name="location" 
                [id]="location" 
                ngModel 
                [value]="location" 
                required
            >
            <label [attr.for]="location">{{location}}</label>
        </div>
        <hr/>
        {{formRef.value | json}}
        <hr/>


        <fieldset ngModelGroup="login">
            <h2>v5 - Form</h2>
            <input 
                name="username_form" 
                type="text" 
                [(ngModel)]="username" 
                #usernameRef="ngModel" 
                required 
                minlength="3"
            >
            <label *ngIf="usernameRef.errors?.required" class="danger">This field is required.</label>
            <label *ngIf="usernameRef.errors?.minlength" class="danger">This field must be equal to or longer than {{usernameRef.errors?.minlength.requiredLength}} characters. You only typed {{usernameRef.errors?.minlength.actualLength}}.</label>
            <br/>
            <br/>{{usernameRef.valid}}
            <br/>{{usernameRef.errors | json}}

            <hr/>
            {{usernameRef.pristine}}
            {{usernameRef.dirty}}
            <hr/>
            {{usernameRef.untouched}}
            {{usernameRef.touched}}
            <hr/>

            <input 
                name="password" 
                type="password" 
                ngModel
            >
        </fieldset>

        <button type="submit">Submit</button>
    </form>

    <br/>{{formRef.value | json}}
    <br/>{{formRef.valid}}
    `
})
export class FormComponent {

    @ViewChild('formRef') userForm:any;

    username = "John";

    locations = ["Home", "Away", "Space", "Oceans", "Stars"];

    onSubmit(formValue:any) {
        console.log(formValue);
    }

    ngAfterViewInit() {
        // this.userForm.valueChanges
        //                 .subscribe(v => console.table(v));

        // this.userForm.statusChanges
        //                 .subscribe(v => console.log(v));

        Observable.combineLatest(
            this.userForm.statusChanges,
            this.userForm.valueChanges,
            (status, value) => ({status, value})
        )
            .filter(({status}) => status === 'VALID')
            .subscribe(({value}) => console.table(value))
    }
}
