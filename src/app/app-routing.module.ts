import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteViewComponent } from './recette-view/recette-view.component';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';

const routes: Routes = [
  { path: 'recette-view',  component: RecetteViewComponent },
  { path: 'edit',          component: EditRecetteComponent },
  { path: '',              component: RecetteViewComponent },

  /* mettre la redirection à la fin, car ** signifie tous les chemins*/
  //{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
