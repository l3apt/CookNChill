import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RecetteViewComponent} from '../recette-view/recette-view.component';
import { Recette } from '../models/Recette.model';

import * as firebase from 'firebase';

//import Datasnapshot = firebase.database.DataSnapshot;

import {DataSnapshot} from 'firebase/firebase-database';

@Injectable()

export class RecetteService{
	
	recetteSubject = new Subject<any[]>();

	constructor(){
		this.getRecette();
	}
	
	 
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
	    ],
	    imgURL: ''
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
	    ],
	    imgURL: ''

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
    if (this.recettes.length == 0) {
    	recette.id = 0;
    }
    else {
    	recette.id = this.recettes[(this.recettes.length - 1)].id + 1;
	}

    this.recettes.push(recette);
    this.saveRecettes();
    this.emitRecetteSubject();
  }

  modifyRecette(id: number, modifiedRecette: Recette){

  	this.recettes.splice(id,1,modifiedRecette);
  	this.saveRecettes();
  	this.emitRecetteSubject();
  }

saveRecettes() {
	firebase.database().ref('/recettes').set(this.recettes);
}

getRecette() {
    firebase.database().ref('/recettes')
      .on('value', (data: DataSnapshot) => {
          this.recettes = data.val() ? data.val() : [];
          this.emitRecetteSubject();
        }
      );
  }

  getSingleRecette(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/recettes/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewRecette(newRecette: Recette) {
    this.recettes.push(newRecette);
    this.saveRecettes();
    this.emitRecetteSubject();
  }

  removeRecette(recetteIndexToRemove: number) {
    /*const recetteIndexToRemove = this.recettes.findIndex(
      (recetteEl) => {
        if(recetteEl === recette) {
          return true;
        }
      }
    );*/
    this.recettes.splice(recetteIndexToRemove, 1);
    this.saveRecettes();
    this.emitRecetteSubject();
  }

//upload de l'image
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + 'recetteImg_' + almostUniqueFileName).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
}


}