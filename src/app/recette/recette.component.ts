import { Component, OnInit, Input } from '@angular/core';
import {NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../services/recette.service';

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
  @Input() nbPersonne: string;
  @Input() Ingredients: any[];
  @Input() Instructions: any[];

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
  }

}

