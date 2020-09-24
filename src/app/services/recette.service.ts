import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RecetteViewComponent} from '../recette-view/recette-view.component';
import { Recette } from '../models/Recette.model';

@Injectable()

export class RecetteService{
	
	recetteSubject = new Subject<any[]>();
	
	 
	private recettes: Recette[] =[ 
	  {
	    id : 0,
	    recetteName : 'Lasagnes',
	    recetteCategory : 'Plat',
	    recetteDificulty : 2,
	    recetteTime : '00:15',
	    recetteAddDate : '08/09/2020',
	    nbPersonne : 6,
	    Ingredients: [{
		    	quantity: 2,
		    	unitIngredient: '',
		    	nameIngredient: 'pomme de terre'
	    	},
	    	{
		    	quantity: 3,
		    	unitIngredient: '',
		    	nameIngredient: 'poireaux'
	    	}
	    
	    ],
	    Instructions: [
	    	{
	    		step: 1,
	    		detailInstruction: 'mettre le four en préchauffe à 200°C'
	    	},
	    	{
	    		step: 2,
	    		detailInstruction: 'hacher la viande'
	    	}
	    ]
	  }, 
	  {
	    id : 1,
	    recetteName : 'Millefeuille',
	    recetteCategory : 'Patisserie',
	    recetteDificulty : 3,
	    recetteTime : '00:20',
	    recetteAddDate : '08/09/2020',
	    nbPersonne : 4,
	    Ingredients: [
	    	{
		    	quantity: 200,
		    	unitIngredient: 'g',
		    	nameIngredient: 'farine'
	    	}
	    ],
	    Instructions: [
	    	{
	    		step: 1,
	    		detailInstruction: 'préparer la crème'
	    	},
	    	{
	    		step: 2,
	    		detailInstruction: 'réserver la crème au frigo'
	    	}
	    ]

	  } ];

	emitRecetteSubject(){
    	this.recetteSubject.next(this.recettes.slice());
  	}

	// récupération de la recette par son num id
	getRecetteById(id: number){
    	const recette = this.recettes.find(
	        (s) =>{
	          return s.id === id;
	        }
     	 );
   		return recette;
  	}

  addRecette(recette: Recette) {
    recette.recetteAddDate = new Date().toDateString();
    recette.id = this.recettes[(this.recettes.length - 1)].id + 1;


    this.recettes.push(recette);
    this.emitRecetteSubject();
  }

  modifyRecette(id: number, modifiedRecette: Recette){

  	this.recettes.splice(id,1,modifiedRecette);
  }



}