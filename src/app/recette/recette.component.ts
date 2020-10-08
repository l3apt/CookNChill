import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../models/Recette.model';
import { Ingredient } from '../models/Ingredient.model';
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
  @Input() Ingredients: Ingredient[];
  @Input() Instructions: any[];
  @Input() imgURL: string;
  @Input() cooker: string;

  changeNbPersonne: boolean =false;

  
  public nbPersonneVar: number;  //entier variant par formulaire pour changer la quantité d'ingredients 
                                 // en fct su nb de personnes souhaité
  public varIngredients: Ingredient[] = [
    {
      quantity: 0,
      unitIngredient: '',
      nameIngredient: ''
      
    }
  ]; //quantité des ingrédients variable
 


  constructor(public recetteService: RecetteService) {

   }

  ngOnInit(): void {

      this.nbPersonneVar = this.nbPersonne;
      this.cloneIngredients();
  }

  // copie des Ingredients dans la variable varIngredients
  cloneIngredients(){
       
        for (var index = 0; index < this.Ingredients.length; index++){
            const IngredientObject = {
              quantity: 0,
              unitIngredient: '',
              nameIngredient: ''
            };
            IngredientObject.quantity = this.Ingredients[index].quantity;
            IngredientObject.unitIngredient = this.Ingredients[index].unitIngredient;
            IngredientObject.nameIngredient = this.Ingredients[index].nameIngredient;

            
            if (index == 0){
              this.varIngredients.splice(index,1,IngredientObject);
            }
            else{
              this.varIngredients.push(IngredientObject);
            }
            
        } 
  }


// UPDATE de la quantité des ingredients lors d'un changement de valeur de nbPersonneVar
  onUpdateIngredients(){
 
    for (var index = 0; index < this.Ingredients.length; index++ ){
      this.varIngredients[index].quantity = (this.nbPersonneVar/ this.nbPersonne) * this.Ingredients[index].quantity;   
    }

  }

// Demande de modif du nombre de personne (modif des ingredients affichés)
  onChangeNbPersonne(){
    if (this.changeNbPersonne)
      this.changeNbPersonne = false;
    else 
      this.changeNbPersonne = true;
  }

  

}

