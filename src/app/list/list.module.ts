import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent }   from './list.component';
import { WikipediaModule } from '../wikipedia/wikipedia.module';
import { FormModule } from '../form/form.module';

@NgModule({
    imports: [
        CommonModule,
        WikipediaModule,
        FormModule
    ],
    exports: [ListComponent, CommonModule],
    declarations: [ListComponent],
    providers: []
})
export class ListModule { }
