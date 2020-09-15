import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recette-view',
  templateUrl: './recette-view.component.html',
  styleUrls: ['./recette-view.component.scss']
})
export class RecetteViewComponent implements OnInit {
  
	@Input() recetteName : string;
  @Input() recetteDificulty: number;
  @Input() recetteTime: string ;
  @Input() recetteAddDate: string;
 
  /*recetteName: string ;
	recetteDificulty: number ;
	recetteTime: string ;
	recetteAddDate: string ;
*/


  constructor() { }

  ngOnInit(): void {
  }

}
