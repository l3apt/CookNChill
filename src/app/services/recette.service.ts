import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RecetteViewComponent} from '../recette-view/recette-view.component';


@Injectable()

export class RecetteService{
	
	recetteSubject = new Subject<any[]>();
	
	 
	private recettes = [ {
	    id : 1,
	    recetteName : 'Lasagnes',
	    recetteDificulty : '2',
	    recetteTime : '00:15',
	    recetteAddDate : '08/09/2020'
	  }, 
	  {
	    id : 2,
	    recetteName : 'Millefeuille',
	    recetteDificulty : '3',
	    recetteTime : '00:20',
	    recetteAddDate : '08/09/2020'
	  }, 
	  {
	    id : 3,
	    recetteName : 'Macaron',
	    recetteDificulty : '1',
	    recetteTime : '00:10',
	    recetteAddDate : '01/04/2020'
	  }, 
	  {
	    id : 4,
	    recetteName : 'Crèpes',
	    recetteDificulty : '5',
	    recetteTime : '00:45',
	    recetteAddDate : '06/07/2020'
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
  			    recetteAddDate: string){
	   

	    const recetteObject = {
	     	id : 0,
		    recetteName : 'Nom de la recette',
		    recetteDificulty : '0',
		    recetteTime : '00:00',
		    recetteAddDate : '08/09/2020'
	    };


	    recetteObject.recetteName = recetteName;
	    recetteObject.recetteDificulty = recetteDificulty;
	    recetteObject.recetteTime = recetteTime;
	    recetteObject.recetteAddDate = recetteAddDate;
	    recetteObject.id = this.recettes[(this.recettes.length - 1)].id + 1;
    
    this.recettes.push(recetteObject);
    this.emitRecetteSubject();
  }

}