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
	    id : 1,
	    recetteName : 'Lasagnes',
	    recetteDificulty : 2,
	    recetteTime : '00:15',
	    recetteAddDate : '08/09/2020',
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
	    listeInstructions: [
	    	{
	    		step: 1,
	    		instruction: 'mettre le four en préchauffe à 200°C'
	    	},
	    	{
	    		step: 2,
	    		instruction: 'hacher la viande'
	    	}
	    ]
	  }, 
	  {
	    id : 2,
	    recetteName : 'Millefeuille',
	    recetteDificulty : 3,
	    recetteTime : '00:20',
	    recetteAddDate : '08/09/2020',
	    Ingredients: [
	    	{
		    	quantity: 200,
		    	unitIngredient: 'g',
		    	nameIngredient: 'farine'
	    	}
	    ],
	    listeInstructions: [
	    	{
	    		step: 1,
	    		instruction: 'préparer la crème'
	    	},
	    	{
	    		step: 2,
	    		instruction: 'réserver la crème au frigo'
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

  	// ajout d'une recette 
  	/*
  	addRecette(	recetteName: string, 
  			    recetteDificulty: number, 
  			    recetteTime: string, 
  			    recetteAddDate: string,
  			    listeIngredients: any[],
  			    listeInstructions: any[]){
	   

	    const recetteObject = {
	     	id : 0,
		    recetteName : 'Nom de la recette',
		    recetteDificulty : 0,
		    recetteTime : '00:00',
		    recetteAddDate : '08/09/2020',
		    listeIngredients,
		    listeInstructions
	    };


	    recetteObject.recetteName = recetteName;
	    recetteObject.recetteDificulty = recetteDificulty;
	    recetteObject.recetteTime = recetteTime;
	    recetteObject.recetteAddDate = recetteAddDate;
	    recetteObject.id = this.recettes[(this.recettes.length - 1)].id + 1;
	    recetteObject.listeIngredients = listeIngredients;
	    recetteObject.listeInstructions = listeInstructions;

    
    this.recettes.push(recetteObject);
    this.emitRecetteSubject();
  }
  */

  addRecette(recette: Recette) {
    recette.recetteAddDate = new Date().toDateString();
    recette.id = this.recettes[(this.recettes.length - 1)].id + 1;


    this.recettes.push(recette);
    this.emitRecetteSubject();
  }



}