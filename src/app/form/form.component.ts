import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form',
    template: `
        <h2>v5 - Form</h2>
        <input type="text" [(ngModel)]="username" required #usernameRef="ngModel" minlength="3">
        <label *ngIf="usernameRef.errors?.required" class="danger">This field is required.</label>
        <label *ngIf="usernameRef.errors?.minlength" class="danger">This field must be longer than {{usernameRef.errors?.minlength.requiredLength}} characters. You only typed {{usernameRef.errors?.minlength.actualLength}}.</label>

        <br/>
        <br/>{{usernameRef.valid}}
        <br/>{{usernameRef.errors | json}}
    `
})
export class FormComponent {
    username = "John";
}
