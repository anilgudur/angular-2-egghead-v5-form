import { Component, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-selector',
    template: `
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">

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
    username = "John";

    onSubmit(formValue:any) {
        console.log(formValue);
    }
}
