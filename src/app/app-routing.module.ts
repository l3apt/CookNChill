import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteViewComponent } from './recette-view/recette-view.component';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';
import { SingleRecetteComponent } from './single-recette/single-recette.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'recette-view', 								              component: RecetteViewComponent },
  { path: 'edit', canActivate: [AuthGuard],       		  component: EditRecetteComponent },
  { path: 'auth',                                       component: AuthComponent },
  { path: ':id', canActivate: [AuthGuard],              component: SingleRecetteComponent },
  { path: 'recette-view/:id', canActivate: [AuthGuard], component: SingleRecetteComponent },
  { path: '',             								              component: RecetteViewComponent }

  /* mettre la redirection à la fin, car ** signifie tous les chemins*/
  //{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
