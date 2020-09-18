import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RecetteService } from '../services/recette.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.scss']
})
export class EditRecetteComponent implements OnInit, OnDestroy {

 recettes: any[];
 recetteSubscription: Subscription;

  constructor(private recetteService: RecetteService,private router: Router) { }

  ngOnInit(): void {
  	this.recetteSubscription = this.recetteService.recetteSubject.subscribe(
      (recettes: any[]) => {
        this.recettes = recettes;
      }
    );
    this.recetteService.emitRecetteSubject();
  }

  ngOnDestroy() {
    this.recetteSubscription.unsubscribe();
  }

  onSubmit(form: NgForm){
  	console.log(form.value);

  	const recetteName = form.value['Name'];
  	const recetteDificulty = form.value['Dificulty'];
  	const recetteTime = form.value['Temps'];
  	const recetteAddDate = new Date().toDateString();

  	this.recetteService.addRecette(recetteName,recetteDificulty,recetteTime,recetteAddDate);
  	this.router.navigate(['/recette-view']);


  }


}
