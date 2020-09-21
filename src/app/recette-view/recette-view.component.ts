import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RecetteService } from '../services/recette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-view',
  templateUrl: './recette-view.component.html',
  styleUrls: ['./recette-view.component.scss']
})
export class RecetteViewComponent {
   
   recettes: any[];
   recetteSubscription: Subscription;

   constructor(private recetteService: RecetteService,
               private router: Router) { }

  ngOnInit(): void {
    this.recetteSubscription = this.recetteService.recetteSubject.subscribe(
      (recettes: any[]) => {
        this.recettes = recettes;
      }
    );
    this.recetteService.emitRecetteSubject();
  }


  title = 'CookNChill';
 

  
}
