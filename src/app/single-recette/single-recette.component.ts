import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../models/Recette.model';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-single-recette',
  templateUrl: './single-recette.component.html',
  styleUrls: ['./single-recette.component.scss']
})
export class SingleRecetteComponent implements OnInit {

 recettes: any[];
 recetteSubscription: Subscription;
 public recupRecette: Recette;
 public recetteModif: Recette;
 recetteForm: FormGroup;
 public id = this.route.snapshot.params['id'];




 constructor(private recetteService: RecetteService,
 			 private formBuilder: FormBuilder,
  			 private route: ActivatedRoute,
  			 private router: Router) 
 { }

 ngOnInit() {
    //subscribe au service recette 
    
    //récupération de la recette à modifier
    const id = this.route.snapshot.params['id'];
    console.log(id);
    
    this.recupRecette = this.recetteService.getRecetteById(+id);
    this.recetteModif = this.recupRecette;

    this.recetteSubscription = this.recetteService.recetteSubject.subscribe(
      (recettes: any[]) => {
        this.recettes = recettes;
      }
    );
    this.recetteService.emitRecetteSubject(); 
   
    
    //init du formulaire 
    this.initForm();
	}

//init champs du formulaire 
  initForm() {
    this.recetteForm = this.formBuilder.group({
      nameIngredients: this.formBuilder.array([]),
      QuantityIngredients: this.formBuilder.array([]),
      UnitIngredients: this.formBuilder.array([]),
      instructions: this.formBuilder.array([])
    });
  }

getIngredientsName(): FormArray {
    return this.recetteForm.get('nameIngredients') as FormArray;
  }

  getIngredientsQuantity(): FormArray {
   return this.recetteForm.get('QuantityIngredients') as FormArray;
  }

  getIngredientsUnit(): FormArray {
    return this.recetteForm.get('UnitIngredients') as FormArray;
  }

  onAddIngredients() {
    const newIngredientQuantityControl = this.formBuilder.control(null, Validators.required);
    this.getIngredientsQuantity().push(newIngredientQuantityControl);
    const newIngredientNameControl = this.formBuilder.control(null, Validators.required);
    this.getIngredientsName().push(newIngredientNameControl);
    const newIngredientUnitControl = this.formBuilder.control(null,null);
    this.getIngredientsUnit().push(newIngredientUnitControl);
  }

  OnModify(){
  	const formValue = this.recetteForm.value;

  	/* A FAIRE: AJOUTER UN FORMCONTROL POUR L'AJOUT DE NOUVEAUX INGREDIENTS ET INSTRUCTION


	// traitement liste instruction
    const Ingredients = [];
  	if (formValue['nameIngredients']) {
        for (let i = 0; i < formValue['nameIngredients'].length; i++){
          const newIngredient = {
          quantity : formValue['QuantityIngredients'][i],
          unitIngredient : formValue['UnitIngredients'][i],
          nameIngredient : formValue['nameIngredients'][i]};

           Ingredients.push(newIngredient);
        }
           
        } 
    else{}

      // traitement liste instruction
    const Instructions = [];

    if (formValue['instructions']) {
        for (let i = 0; i < formValue['instructions'].length; i++){
          const newInstruction = {
          detailInstruction : formValue['instructions'][i],
          step : i + 1
          };

           Instructions.push(newInstruction);
          }
           
        } 
    else{}

    this.recupRecette.Ingredients = Ingredients;
    this.recupRecette.Instructions = Instructions;
	*/


  	this.recetteService.modifyRecette(this.id,this.recupRecette);
  	
    this.router.navigate(['/recette-view']);

  }

  onDeleteRecette(idRecetteToDelete: number){

    this.recetteService.removeRecette(idRecetteToDelete);
    this.router.navigate(['/recette-view']);
  }

}
