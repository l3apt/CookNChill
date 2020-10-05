import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RecetteService } from '../services/recette.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Recette } from '../models/Recette.model';
import { Ingredient } from '../models/Ingredient.model';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.scss']
})
export class EditRecetteComponent implements OnInit, OnDestroy {

 recettes: any[];
 recetteSubscription: Subscription;
 userSubscription: Subscription;
 recetteForm: FormGroup;
 
 

  // upload de l'image
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;


  constructor(private recetteService: RecetteService,
              private authservice: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
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
      recetteName: ['', Validators.required],
      recetteDificulty: ['', Validators.required],
      recetteTime: ['', Validators.required],
      nbPersonne: ['', Validators.required],
      category: ['', Validators.required],
      nameIngredients: this.formBuilder.array([]),
      QuantityIngredients: this.formBuilder.array([]),
      UnitIngredients: this.formBuilder.array([]),
      instructions: this.formBuilder.array([])
    });
  }


  ngOnDestroy() {
    this.recetteSubscription.unsubscribe();
  }

    //----- METHODE REACTIVE ------

  //  ---   GESTION FORMULAIRE INGREDIENTS   ---
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



  //  ---  GESTION FORMULAIRE INSTRUCTIONS   ---
  getInstructions(): FormArray {
    return this.recetteForm.get('instructions') as FormArray;
  }

  onAddInstructions() {
    const newInstructionControl = this.formBuilder.control(null, Validators.required);
    this.getInstructions().push(newInstructionControl);
  }





  onSubmit(){
    const formValue = this.recetteForm.value;


     // traitement liste des ingrédients
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
      



 
    const newRecette = new Recette(
        0,
        formValue['recetteName'],
        formValue['category'],
        formValue['recetteDificulty'],
        formValue['recetteTime'],
        new Date().toDateString(),
        formValue['nbPersonne'],
        this.authservice.userConnected,
        Ingredients,
        Instructions,
        ''
      );

    if(this.fileUrl && this.fileUrl !== '') {
      newRecette.imgURL = this.fileUrl;
    }


    this.recetteService.addRecette(newRecette);
    this.router.navigate(['/recette-view']);
  }

// méthodes d'upload de l'image de présentation
  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.recetteService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
}


detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
}




}
