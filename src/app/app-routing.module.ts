import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'main-menu', loadChildren: './main-menu/main-menu.module#MainMenuPageModule' },
  { path: 'new-form', loadChildren: './new-form/new-form.module#NewFormPageModule' },
  { path: 'submitted-forms', loadChildren: './submitted-forms/submitted-forms.module#SubmittedFormsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
