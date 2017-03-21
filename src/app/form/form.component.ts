import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form',
    template: `
        <h2>v5 - Form</h2>
        <input type="text" [(ngModel)]="username">
        <br/>{{username}}
    `
})
export class FormComponent {
    username = "John";
}
