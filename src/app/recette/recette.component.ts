import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../models/Recette.model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  @Input() id : number;
  @Input() recetteName : string;
  @Input() recetteCategory: string;
  @Input() recetteDificulty: number;
  @Input() recetteTime: string ;
  @Input() recetteAddDate: string;
  @Input() nbPersonne: number;
  @Input() Ingredients: any[];
  @Input() Instructions: any[];
  @Input() imgURL: string;
  @Input() cooker: string;

  changeNbPersonne: boolean =false;

  
  public nbPersonneVar: number;  //entier variant par formulaire pour changer la quantité d'ingredients 
                                 // en fct su nb de personnes souhaité
  public varIngredients: any[]; //quantité des ingrédients variable


  constructor(public recetteService: RecetteService) {

   }

  ngOnInit(): void {

      this.nbPersonneVar = this.nbPersonne;
      console.log('nbPersonneVar init: ' + this.nbPersonneVar);
      this.varIngredients = this.Ingredients;    
  }

  updateIngredients(){
    for (var index = 0; index < this.varIngredients.length; index++ ){

      console.log('nbPersonneVar fct:'+ this.nbPersonneVar);
      console.log('var avant:'+ this.varIngredients[index].quantity);
      console.log('fixe avant:'+ this.Ingredients[index].quantity);
      
      this.varIngredients[index].quantity = ( this.nbPersonneVar * this.Ingredients[index].quantity)
       / this.nbPersonne;
      
      console.log('var après:'+ this.varIngredients[index].quantity);
      console.log('fixe après:'+ this.Ingredients[index].quantity);

    }
  }

  onChangeNbPersonne(){
    if (this.changeNbPersonne)
      this.changeNbPersonne = false;
    else 
      this.changeNbPersonne = true;
  }

  

}

