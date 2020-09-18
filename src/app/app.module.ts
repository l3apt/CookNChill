import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteViewComponent } from './recette-view/recette-view.component';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';
import { FormsModule } from '@angular/forms';

//import des routes
import {Routes, RouterModule} from '@angular/router';


// import des services
import {RecetteService} from './services/recette.service';



@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    EditRecetteComponent,
    RecetteViewComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,   
    BrowserModule
  ],
  providers: [
    RecetteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
