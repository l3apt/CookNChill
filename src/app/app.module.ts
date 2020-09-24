import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteViewComponent } from './recette-view/recette-view.component';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';

//import formulaire
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

//import des routes
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


// import des services
import {RecetteService} from './services/recette.service';
import { SingleRecetteComponent } from './single-recette/single-recette.component';



@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    EditRecetteComponent,
    RecetteViewComponent,
    SingleRecetteComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,   
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    RecetteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
