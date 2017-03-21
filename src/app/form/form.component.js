"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FormComponent = (function () {
    function FormComponent() {
        this.username = "John";
    }
    FormComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
    };
    FormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-selector',
            styles: ["\n        input.ng-invalid{border:1px solid red}\n        input.ng-valid{border:1px solid green}\n    "],
            template: "\n    <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n\n        <fieldset ngModelGroup=\"login\">\n            <h2>v5 - Form</h2>\n            <input \n                name=\"username_form\" \n                type=\"text\" \n                [(ngModel)]=\"username\" \n                #usernameRef=\"ngModel\" \n                required \n                minlength=\"3\"\n            >\n            <label *ngIf=\"usernameRef.errors?.required\" class=\"danger\">This field is required.</label>\n            <label *ngIf=\"usernameRef.errors?.minlength\" class=\"danger\">This field must be equal to or longer than {{usernameRef.errors?.minlength.requiredLength}} characters. You only typed {{usernameRef.errors?.minlength.actualLength}}.</label>\n            <br/>\n            <br/>{{usernameRef.valid}}\n            <br/>{{usernameRef.errors | json}}\n\n            <input \n                name=\"password\" \n                type=\"password\" \n                ngModel\n            >\n        </fieldset>\n\n        <button type=\"submit\">Submit</button>\n    </form>\n\n    <br/>{{formRef.value | json}}\n    <br/>{{formRef.valid}}\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map