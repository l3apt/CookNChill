import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette-view',
  templateUrl: './recette-view.component.html',
  styleUrls: ['./recette-view.component.scss']
})
export class RecetteViewComponent implements OnInit {

	recetteName: string = 'Lasagnes';
	recetteDificulty: number = 2;
	recetteTime: string = '00:30';
	recetteAddDate: string = '09/04/20';

  constructor() { }

  ngOnInit(): void {
  }

}
