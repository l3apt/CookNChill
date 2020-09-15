import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteViewComponent } from './recette-view/recette-view.component';
import { FormsModule } from '@angular/forms';

//import des routes
import {Routes, RouterModule} from '@angular/router';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';



// définition des routes
const appRoutes: Routes = [
  { path: 'recette-view',       component: RecetteViewComponent },

  /* mettre la redirection à la fin, car ** signifie tous les chemins*/
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    RecetteViewComponent,
    EditRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
