import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubmittedFormsPage } from './submitted-forms.page';

const routes: Routes = [
    {
        path: '',
        component: SubmittedFormsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SubmittedFormsPage]
})
export class SubmittedFormsPageModule { }
