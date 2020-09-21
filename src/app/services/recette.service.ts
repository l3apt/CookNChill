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
	    recetteDificulty : '2',
	    recetteTime : '00:15',
	    recetteAddDate : '08/09/2020',
	    listeIngredients: [{
	    	'quantity': '2',
	    	'unitIngredient': '',
	    	'nameIngredient': 'pomme de terre'
	    	},
	    	{
	    	'quantity': '3',
	    	'unitIngredient': '',
	    	'nameIngredient': 'poireaux'
	    	}
	    
	    ]
	  }, 
	  {
	    id : 2,
	    recetteName : 'Millefeuille',
	    recetteDificulty : '3',
	    recetteTime : '00:20',
	    recetteAddDate : '08/09/2020',
	    listeIngredients: [{
	    	'quantity': '200',
	    	'unitIngredient': 'g',
	    	'nameIngredient': 'farine'
	    }]
	  }, 
	  {
	    id : 3,
	    recetteName : 'Macaron',
	    recetteDificulty : '1',
	    recetteTime : '00:10',
	    recetteAddDate : '01/04/2020',
	    listeIngredients: [{
	    	'quantity': '2',
	    	'unitIngredient': '',
	    	'nameIngredient': 'pomme de terre'
	    }]
	  }, 
	  {
	    id : 4,
	    recetteName : 'Crèpes',
	    recetteDificulty : '5',
	    recetteTime : '00:45',
	    recetteAddDate : '06/07/2020',
	    listeIngredients: [{
	    	'quantity': '2',
	    	'unitIngredient': '',
	    	'nameIngredient' : 'pomme de terre'
	    }]
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
  	addRecette(	recetteName: string, 
  			    recetteDificulty: string, 
  			    recetteTime: string, 
  			    recetteAddDate: string,
  			    listeIngredients: any[]){
	   

	    const recetteObject = {
	     	id : 0,
		    recetteName : 'Nom de la recette',
		    recetteDificulty : '0',
		    recetteTime : '00:00',
		    recetteAddDate : '08/09/2020',
		    listeIngredients: [{
		    		quantity: '2',
	    			unitIngredient: '',
	    			nameIngredient: 'pomme de terre'
		    	}]
	    };


	    recetteObject.recetteName = recetteName;
	    recetteObject.recetteDificulty = recetteDificulty;
	    recetteObject.recetteTime = recetteTime;
	    recetteObject.recetteAddDate = recetteAddDate;
	    recetteObject.id = this.recettes[(this.recettes.length - 1)].id + 1;
	    recetteObject.listeIngredients = listeIngredients;

    
    this.recettes.push(recetteObject);
    this.emitRecetteSubject();
  }

}