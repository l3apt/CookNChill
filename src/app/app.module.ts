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
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import { SingleRecetteComponent } from './single-recette/single-recette.component';
import { AuthComponent } from './auth/auth.component';

//import du FileUploader
import { FileUploadModule } from 'ng2-file-upload';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    EditRecetteComponent,
    RecetteViewComponent,
    SingleRecetteComponent,
    AuthComponent,
    ImageUploaderComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,   
    BrowserModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule

  ],
  providers: [
    RecetteService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
